import type { Express } from "express";
import { createServer, type Server } from "http";
import { spawn } from "child_process";
import * as path from "path";
import * as fs from "fs/promises";
import { existsSync } from "fs";
import express from "express";
import crypto from "crypto"; 

const isWindows = process.platform === "win32";
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

// ----------------------------------------------------------------------
// ASYNC JOB MANAGEMENT STORE
// ----------------------------------------------------------------------

type JobStatus = {
  status: 'Processing' | 'Completed' | 'Failed';
  message: string;
  result?: { videoUrl: string, filename: string }; 
  error?: string;
};

const jobs: Record<string, JobStatus> = {}; 

// ----------------------------------------------------------------------
// EXISTING HELPER FUNCTIONS
// ----------------------------------------------------------------------

async function runCommand(command: string, args: string[]): Promise<string> {
  return new Promise((resolve, reject) => {
    const env = { ...process.env };
    const currentDir = process.cwd();
    const pathKey = isWindows ? "Path" : "PATH";
    env[pathKey] = `${currentDir}${path.delimiter}${env[pathKey] || ""}`;
    env["PYTHONIOENCODING"] = "utf-8";

    const proc = spawn(command, args, { shell: false, env });

    let stdout = "";
    let stderr = "";

    proc.stdout.on("data", (data) => (stdout += data.toString()));
    proc.stderr.on("data", (data) => (stderr += data.toString()));

    proc.on("close", (code) => {
      if (code === 0) resolve(stdout);
      else {
        if (!stdout && stderr.toLowerCase().includes("error")) {
          console.error(`[Command Failed] ${stderr}`);
          reject(new Error(stderr));
        } else {
          resolve(stdout);
        }
      }
    });

    proc.on("error", (err) => reject(err));
  });
}

function parseTimestamp(timeStr: string): number {
  const parts = timeStr.split(":").map(Number);
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return parts[0] || 0;
}

function validateYouTubeUrl(urlString: string): boolean {
  try {
    const url = new URL(urlString);
    return [
      "www.youtube.com",
      "youtube.com",
      "youtu.be",
      "m.youtube.com",
    ].includes(url.hostname.toLowerCase());
  } catch {
    return false;
  }
}

const DOWNLOADS_DIR = path.join(process.cwd(), "downloads");

interface VideoCache {
  title: string;
  thumbnail: string;
  duration: number;
  channel: string;
  videoUrl: string;
  audioUrl: string;
  timestamp: number;
}
const videoCache = new Map<string, VideoCache>();

// ----------------------------------------------------------------------
// ASYNC WORKER FUNCTION (Optimized for Speed and Quality)
// ----------------------------------------------------------------------

async function startProcessingJob(jobId: string, cached: VideoCache, startTime: string, endTime: string) {
    jobs[jobId] = { status: 'Processing', message: 'Starting video download and processing...' };
    
    try {
        const startSec = parseTimestamp(startTime);
        const endSec = parseTimestamp(endTime);
        const durationSec = endSec - startSec;

        // CRITICAL CHECK: Ensure duration is positive inside the worker
        if (durationSec <= 0) {
             throw new Error(`Invalid duration calculated: ${durationSec} seconds.`);
        }

        const filename = `hq_${jobId}.mp4`; 
        const outputTemplate = path.join(DOWNLOADS_DIR, filename);

        jobs[jobId].message = `Downloading ${durationSec}s clip... (Optimizing for speed)`;

        const command = "ffmpeg";

        const commonArgs = [
            "-user_agent",
            USER_AGENT,
            "-headers",
            `User-Agent: ${USER_AGENT}`,
        ];

        // Complete FFmpeg Arguments (Optimized and Conflict-Free)
        const args = [
            ...commonArgs,
            "-i",
            cached.videoUrl,
            ...(cached.videoUrl !== cached.audioUrl
                ? [...commonArgs, "-i", cached.audioUrl]
                : []),
            "-ss",
            `${startSec}`,
            "-t",
            `${durationSec}`,
            ...(cached.videoUrl !== cached.audioUrl
                ? ["-map", "0:v:0", "-map", "1:a:0"]
                : ["-map", "0"]),
                
            // ✅ VIDEO SPEED & QUALITY OPTIMIZATION
            "-c:v",
            "libx264",
            "-preset",
            "ultrafast", 
            "-crf",
            "23", 
            "-g", "30",
            "-x264-params", "scenecut=0",
            "-threads", "0",
            "-pix_fmt", "yuv420p",
            
            // ✅ AUDIO OPTIMIZATION (FIXED)
            "-c:a",
            "copy", // Instant and 100% quality audio copy
            // ❌ Removed the conflicting filter: "-af", "aresample=async=1", 
            
            // BROWSER OPTIMIZATION
            "-movflags",
            "+faststart",
            "-y",
            outputTemplate,
        ];

        console.log(`[FETCH] Processing ${durationSec}s clip for job ${jobId}...`);
        const startProcessing = Date.now();
        await runCommand(command, args);
        console.log(`[FETCH] Job ${jobId} Completed in ${Date.now() - startProcessing}ms`);

        if (!existsSync(outputTemplate))
            throw new Error("Download failed (File not found)");
            
        // Finalize the job status
        jobs[jobId] = { 
            status: 'Completed', 
            message: 'Processing complete.', 
            result: { videoUrl: `/downloads/${filename}`, filename }
        };

    } catch (error: any) {
        console.error(`Fetch Error for job ${jobId}:`, error);
        jobs[jobId] = { 
            status: 'Failed', 
            message: `Video processing failed: ${error.message.split('\n')[0]}.`, 
            error: error.message 
        };
    }
}

// ----------------------------------------------------------------------
// ROUTE REGISTRATION
// ----------------------------------------------------------------------

export async function registerRoutes(app: Express): Promise<Server> {
  if (!existsSync(DOWNLOADS_DIR)) {
    await fs.mkdir(DOWNLOADS_DIR, { recursive: true }).catch(console.error);
  }

  app.use("/downloads", express.static(DOWNLOADS_DIR));

  // 1. VIDEO INFO (GET /api/video-info)
  app.get("/api/video-info", async (req, res) => {
    try {
      const url = req.query.url as string;
      if (!url || !validateYouTubeUrl(url))
        return res.status(400).json({ message: "Invalid URL" });

      const cached = videoCache.get(url);
      if (cached && Date.now() - cached.timestamp < 1000 * 60 * 30) {
        return res.json({
          title: cached.title,
          thumbnail: cached.thumbnail,
          duration: cached.duration,
          channel: cached.channel,
        });
      }

      // Use system yt-dlp 
      const command = "yt-dlp";

      const args = [
        "--cookies",
        "cookies.txt",
        "--encoding",
        "utf-8",
        "--print",
        "%(title)s|||%(thumbnail)s|||%(duration)s|||%(uploader)s",
        "--get-url",
        "-f",
        "bestvideo+bestaudio/best",
        "--no-playlist",
        "--no-warnings",
        url,
      ];

      const stdout = await runCommand(command, args);
      const lines = stdout.trim().split("\n");
      const meta = lines[0].split("|||");

      const title = meta[0] ? meta[0].trim() : "Unknown Video";
      const thumbnail = meta[1] || "";
      const duration = parseFloat(meta[2]) || 0;
      const channel = meta[3] || "Unknown Channel";
      const videoUrl = lines[1] || "";
      const audioUrl = lines[2] || videoUrl;

      videoCache.set(url, {
        title,
        thumbnail,
        duration,
        channel,
        videoUrl,
        audioUrl,
        timestamp: Date.now(),
      });
      res.json({ title, thumbnail, duration, channel });
    } catch (error: any) {
      console.error("Info Error:", error.message);
      res.status(500).json({ message: "Failed to fetch info" });
    }
  });

  // 2. FETCH SEGMENT (POST /api/fetch-segment - ASYNC JOB STARTER)
  app.post("/api/fetch-segment", (req, res) => { // Removed 'async'
    try {
      const { url, startTime, endTime } = req.body;
      const cached = videoCache.get(url);
      if (!cached)
        return res
          .status(400)
          .json({ message: "Session expired. Reload video." });

      if (!url || !startTime || !endTime) {
          return res.status(400).json({ message: "Missing required parameters." });
      }

      // CRITICAL: Server-side validation of time
      const startSec = parseTimestamp(startTime);
      const endSec = parseTimestamp(endTime);
      
      if (endSec <= startSec) {
          return res.status(400).json({ 
              message: "End time must be greater than start time. Duration is 0 or negative." 
          });
      }

      const jobId = crypto.randomBytes(16).toString('hex');
      
      // 1. Start the long-running job in the background (DO NOT use await)
      startProcessingJob(jobId, cached, startTime, endTime); 

      // 2. Respond IMMEDIATELY (202 Accepted) to bypass Cloudflare 100s timeout
      return res.status(202).json({ 
          jobId, 
          message: "Video processing started in background. Check job-status." 
      });

    } catch (error: any) {
      console.error("Fetch Route Error:", error);
      res.status(500).json({ message: "Failed to start processing job" }); 
    }
  });

  // 3. PROCESS CROP (POST /api/process-crop - Optimized FFmpeg settings)
  app.post("/api/process-crop", async (req, res) => {
    try {
      const { filename, aspectRatio, position } = req.body;
      // FIX: Robust check for filename
      if (!filename || typeof filename !== 'string') {
        return res.status(400).json({ message: "Missing or invalid filename in request body." });
      }
      
      const inputPath = path.join(DOWNLOADS_DIR, filename);

      if (!existsSync(inputPath))
        return res.status(404).json({
          message: "Source file not found. Try fetching the clip again.",
        });

      const outputFilename = `final_${Date.now()}.mp4`;
      const processedPath = path.join(DOWNLOADS_DIR, outputFilename);

      // Use system ffmpeg (already installed in Replit)
      const command = "ffmpeg";

      let args: string[] = [];

      // Add common input arguments
      args.push("-i", inputPath);

      console.log(`[CROP] Processing ${aspectRatio} crop...`);
      const startProcessing = Date.now();

      if (aspectRatio !== "16:9") {
        // Cropped Output - Optimized for quality and speed
        let targetW_expr = "";
        if (aspectRatio === "9:16") targetW_expr = "ih*9/16";
        else if (aspectRatio === "1:1") targetW_expr = "ih";

        const posFactor = (parseInt(position as any) || 50) / 100;
        const cropFilter = `crop=w=${targetW_expr}:h=ih:x=(iw-ow)*${posFactor}:y=0`;

        args.push(
          "-vf",
          cropFilter,
          // Industry-standard encoding for social media
          "-c:v",
          "libx264",
          "-preset",
          "ultrafast", // 🚀 Max speed preset
          "-crf",
          "23", // 👍 Excellent quality/speed trade-off 
          "-profile:v",
          "high",
          "-level",
          "4.2",
          "-pix_fmt",
          "yuv420p", // Maximum compatibility
          "-threads",
          "0", // Use all available CPU cores
          "-movflags",
          "+faststart",
          // Keep audio pristine (FIXED)
          "-c:a",
          "copy", 
          "-y",
          processedPath
        );
      } else {
        // 16:9 Output - Just copy streams (instant)
        args.push("-c", "copy", "-movflags", "+faststart", "-y", processedPath);
      }

      await runCommand(command, args);
      console.log(`[CROP] Completed in ${Date.now() - startProcessing}ms`);

      if (!existsSync(processedPath))
        throw new Error("Processing failed: Output file missing.");

      res.download(processedPath, outputFilename, () => {
        try {
          fs.unlink(processedPath).catch(() => {});
        } catch {}
      });
    } catch (error: any) {
      console.error("Process Crop Error:", error);
      res.status(500).json({ message: "Processing failed" });
    }
  });


  // 4. JOB STATUS CHECK (GET /api/job-status - Polling Endpoint)
  app.get("/api/job-status", (req, res) => {
    const jobId = req.query.id as string;

    if (!jobId) {
        return res.status(400).json({ message: "Missing job ID." });
    }
    
    const job = jobs[jobId];

    if (!job) {
        return res.status(404).json({ message: "Job not found or expired." });
    }

    return res.json(job);
  });


  const httpServer = createServer(app);
  return httpServer;
}