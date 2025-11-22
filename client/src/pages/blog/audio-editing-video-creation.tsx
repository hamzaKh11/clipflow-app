import { BlogHeader } from "@/components/blog-header";
import { BlogFooter } from "@/components/blog-footer";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="mb-8">
          <img
            src="https://images.pexels.com/photos/1054713/pexels-photo-1054713.jpeg"
            alt="Audio editing waveform interface"
            className="w-full rounded-lg mb-8 object-cover h-96"
          />
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-4">
            Editing Techniques
          </span>
          <h1 className="text-4xl font-bold mb-4">
            Audio Editing 101: Elevating Your Video Production
          </h1>
          <p className="text-muted-foreground">
            November 4, 2024 • 10 min read
          </p>
        </div>

        <article className="prose prose-invert max-w-none space-y-6 text-foreground/90">
          <p>
            Here's a truth most creators ignore: bad audio kills good video. A
            viewer will tolerate mediocre video quality but immediately abandon
            a video with poor audio. Audio is 50% of your production quality,
            but most creators spend 90% of their effort on visuals. Let's fix
            that.
          </p>

          <h2 className="text-2xl font-bold">Why Audio Quality Matters</h2>
          <p>
            Bad audio makes your content seem unprofessional, regardless of
            video quality. Good audio elevates even mediocre video. Platforms
            like YouTube and TikTok prioritize watch time—viewers with bad audio
            experience leave faster.
          </p>

          <h2 className="text-2xl font-bold">The Three Audio Elements</h2>

          <h3 className="text-xl font-bold">1. Voiceover/Dialogue</h3>
          <p>
            This is the primary audio track in most video content. Quality
            depends on:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Microphone quality (the biggest factor)</li>
            <li>Recording environment (minimize background noise)</li>
            <li>Delivery (clear, confident voice)</li>
            <li>Editing (removing ums, ahs, long pauses)</li>
          </ul>

          <h3 className="text-xl font-bold">2. Background Music</h3>
          <p>
            Background music sets the mood and fills silence. It should
            complement, not overpower, your voiceover.
          </p>

          <h3 className="text-xl font-bold">3. Sound Effects</h3>
          <p>
            Sound effects punctuate moments, adding emphasis and interest. A
            whoosh sound with a text transition is more engaging than silence.
          </p>

          <h2 className="text-2xl font-bold">Audio Editing Best Practices</h2>

          <h3 className="text-xl font-bold">1. Remove Background Noise</h3>
          <p>
            Most editing software (even free options like Audacity) has noise
            reduction tools. Select 1-2 seconds of background noise, then apply
            noise reduction to the entire track. This removes hum, hiss, and
            ambient noise while preserving your voice.
          </p>

          <h3 className="text-xl font-bold">2. Normalize Audio Levels</h3>
          <p>
            Audio that's too quiet forces viewers to raise volume. Audio that's
            too loud causes distortion. Normalization automatically sets audio
            to a consistent level. Target: -3dB to -6dB (just below clipping).
          </p>

          <h3 className="text-xl font-bold">3. Compress for Consistency</h3>
          <p>
            Compression evens out loud and quiet parts, making dialogue more
            consistent. This is crucial for voiceovers where some words are
            naturally louder than others.
          </p>

          <h3 className="text-xl font-bold">
            4. EQ (Equalization) for Clarity
          </h3>
          <p>EQ removes unwanted frequencies. For voiceovers:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Reduce lows (below 100Hz) to remove rumble</li>
            <li>Boost mids (1-4kHz) for clarity and presence</li>
            <li>
              Reduce high frequencies if sibilance (S sounds) is too harsh
            </li>
          </ul>

          <h3 className="text-xl font-bold">5. Balance All Audio Tracks</h3>
          <p>
            When you have voiceover, music, and effects, they need to be
            balanced. Voiceover should be loudest, music underneath, effects for
            punctuation.
          </p>

          <p>
            <strong>Good ratio:</strong> Voiceover at -6dB, music at -18dB,
            effects at -12dB
          </p>

          <h3 className="text-xl font-bold">6. Fade In and Fade Out</h3>
          <p>
            Abrupt audio cuts are jarring. Add fade-in at the start and fade-out
            at the end of tracks. This creates smooth transitions.
          </p>

          <h3 className="text-xl font-bold">7. Use DeEsser for Sibilance</h3>
          <p>
            Some microphones or voices have excessive "S" and "T" sounds. A
            DeEsser tool reduces this without affecting overall quality.
          </p>

          <h2 className="text-2xl font-bold">The Audio Editing Workflow</h2>

          <p>
            <strong>Step 1: Record</strong> - Use a decent microphone. Even a
            $50 USB mic beats phone audio.
          </p>

          <p>
            <strong>Step 2: Clean</strong> - Remove noise, clicks, and pops.
            Edit out long pauses and verbal ticks (ums, ahs).
          </p>

          <p>
            <strong>Step 3: Process</strong> - Apply compression, EQ, and
            normalization.
          </p>

          <p>
            <strong>Step 4: Mix</strong> - Layer in music and effects. Balance
            all tracks.
          </p>

          <p>
            <strong>Step 5: Master</strong> - Final pass to ensure audio is
            clean and consistent across your entire video.
          </p>

          <h2 className="text-2xl font-bold">Free Tools for Audio Editing</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Audacity:</strong> Powerful, free, open-source. Great for
              detailed audio work.
            </li>
            <li>
              <strong>DaVinci Resolve:</strong> Includes professional audio
              editing tools. Free version is excellent.
            </li>
            <li>
              <strong>Adobe Audition:</strong> Professional option if you want
              premium features.
            </li>
            <li>
              <strong>CapCut:</strong> Simple audio editing built-in. Good for
              quick fixes.
            </li>
          </ul>

          <h2 className="text-2xl font-bold">Microphone Recommendations</h2>
          <p>
            <strong>Budget ($30-100):</strong> Blue Yeti, Audio-Technica
            AT2020USB+
          </p>

          <p>
            <strong>Mid-range ($100-300):</strong> Rode NT1, Shure SM7B
          </p>

          <p>
            <strong>Professional ($300+):</strong> Neumann U87, Shure SM81
          </p>

          <p>
            Even a mid-range microphone will dramatically improve your audio
            quality compared to built-in laptop mics.
          </p>

          <h2 className="text-2xl font-bold">Common Audio Mistakes to Avoid</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Peaking/Clipping:</strong> Audio that's too loud distorts.
              Monitor levels while recording.
            </li>
            <li>
              <strong>Inconsistent levels:</strong> Voiceover louder in some
              parts, quieter in others. Use compression.
            </li>
            <li>
              <strong>Over-processing:</strong> Don't apply 10 effects. 2-3
              well-applied effects beat 10 mediocre ones.
            </li>
            <li>
              <strong>Ignoring background noise:</strong> That air conditioner
              hum matters. Remove it.
            </li>
            <li>
              <strong>Music overpowering dialogue:</strong> Viewers can't hear
              your voice = they leave.
            </li>
          </ul>

          <h2 className="text-2xl font-bold">Pro Tip: Reference Tracks</h2>
          <p>
            Listen to professional videos in your niche. Notice the audio
            quality, pacing, and mix. Use these as references. Your audio should
            be comparable.
          </p>

          <h2 className="text-2xl font-bold">The Bottom Line</h2>
          <p>
            Audio is half your production. Invest time in learning audio editing
            basics. Clean, clear, well-mixed audio elevates your entire
            production, boosts watch time, and increases audience retention.
          </p>

          <p>
            Start with a decent microphone and learn basic noise reduction and
            compression. You'll immediately see improvement in how your audience
            responds to your videos.
          </p>
        </article>
      </div>
      <BlogFooter />
    </div>
  );
}
