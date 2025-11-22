import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About ClipFlow</h1>

        <div className="space-y-8 text-foreground/90">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              ClipFlow was built with a simple mission: to empower content
              creators worldwide to repurpose and optimize their video content
              for every social media platform without the complexity of
              expensive professional editing software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Why We Built ClipFlow
            </h2>
            <p className="mb-4">
              In today's digital landscape, content creators face a fundamental
              challenge: one piece of video content often needs to be formatted
              differently for different platforms. A YouTube video needs to be
              cut into vertical 9:16 TikToks, square 1:1 Instagram Reels, and
              landscape 16:9 YouTube Shorts—all from the same source material.
            </p>

            <p>
              Professional video editors like Adobe Premiere Pro cost hundreds
              of dollars per month. Free alternatives are cluttered, slow, and
              often require complex steps. We realized there was a gap for
              creators who needed a fast, free, and intuitive tool to handle
              this exact workflow.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How ClipFlow Works</h2>
            <p className="mb-4">
              ClipFlow combines three powerful capabilities:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>
                <strong>Download:</strong> Grab videos from YouTube in seconds
                with instant access to metadata like title, duration, and
                thumbnail
              </li>
              <li>
                <strong>Trim:</strong> Manually select exact start and end
                points using precise HH:MM:SS time input for frame-perfect
                editing
              </li>
              <li>
                <strong>Crop:</strong> Optimize aspect ratios for TikTok (9:16),
                Instagram (1:1), and YouTube (16:9) with a visual preview
                interface
              </li>
            </ul>
            <p>
              All processing happens instantly in the browser with
              industry-standard ffmpeg encoding. No uploads, no waiting, no
              hidden limits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
            <p className="mb-4">We believe great tools should be:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Free:</strong> No subscriptions, no paywall, no hidden
                costs
              </li>
              <li>
                <strong>Fast:</strong> Optimized processing means your videos
                are ready in seconds
              </li>
              <li>
                <strong>Reliable:</strong> Built on battle-tested ffmpeg
                technology trusted by professionals
              </li>
              <li>
                <strong>Respectful:</strong> We don't collect data, require
                signups, or track your videos
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">The Team</h2>
            <p>
              ClipFlow is developed by a team of passionate software engineers
              and content creators who understand the pain points of modern
              video production. We're constantly improving the tool based on
              creator feedback and the latest trends in short-form video
              content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">What's Next?</h2>
            <p className="mb-4">
              We're working on exciting features to make ClipFlow even more
              powerful:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Batch processing for multiple videos at once</li>
              <li>Advanced editing with filters, effects, and transitions</li>
              <li>Subtitle auto-generation and placement</li>
              <li>
                AI-powered clip detection to automatically find the best moments
              </li>
              <li>Direct upload to social platforms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <p>
              Have feedback? Found a bug? Want to suggest a feature? We'd love
              to hear from you.
              <a
                href="/contact-us"
                className="text-primary hover:underline ml-1"
              >
                Contact us here
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Support</h2>
            <p>
              If you have questions or need help using ClipFlow, please reach
              out to
              <a
                href="mailto:support@myclipflow.com"
                className="text-primary hover:underline"
              >
                {" "}
                support@myclipflow.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
