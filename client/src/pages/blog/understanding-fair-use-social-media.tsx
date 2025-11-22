import { BlogHeader } from "@/components/blog-header";
import { BlogFooter } from "@/components/blog-footer";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="mb-8">
          <img
            src="https://images.pexels.com/photos/28786770/pexels-photo-28786770.jpeg"
            alt="Fair use copyright concept art"
            className="w-full rounded-lg mb-8 object-cover h-96"
          />
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-4">
            Legal & Compliance
          </span>
          <h1 className="text-4xl font-bold mb-4">
            Understanding Fair Use on Social Media
          </h1>
          <p className="text-muted-foreground">
            November 14, 2024 • 9 min read
          </p>
        </div>

        <article className="prose prose-invert max-w-none space-y-6 text-foreground/90">
          <p>
            One question haunts content creators: "Am I allowed to use this
            content?" Understanding fair use is essential if you're repurposing,
            remixing, or reacting to existing content. Let's break down this
            complex legal concept in plain English.
          </p>

          <h2 className="text-2xl font-bold">What Is Fair Use?</h2>
          <p>
            Fair use is a legal doctrine that allows limited use of copyrighted
            material without permission from the copyright holder. It's not a
            free pass—it's a defense against copyright claims, and it has
            specific criteria.
          </p>

          <p>
            <strong>The Four-Part Fair Use Test:</strong>
          </p>

          <ol className="list-decimal list-inside space-y-4 ml-4">
            <li>
              <strong>Purpose and character of the use:</strong> Is it
              transformative? Educational? Commentary? Or is it just copying the
              original?
            </li>
            <li>
              <strong>Nature of the copyrighted work:</strong> Is it factual
              (more fair-use friendly) or creative (less fair-use friendly)?
            </li>
            <li>
              <strong>Amount and substantiality of the portion used:</strong>{" "}
              How much did you use? Is it the "heart" of the original work?
            </li>
            <li>
              <strong>Effect on the market:</strong> Does your use harm the
              original's market value?
            </li>
          </ol>

          <h2 className="text-2xl font-bold">
            Fair Use Examples for Content Creators
          </h2>

          <h3 className="text-xl font-bold">Likely Fair Use:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Commentary and criticism:</strong> "Reacting to this viral
              video and explaining why I think it's problematic"
            </li>
            <li>
              <strong>Educational videos:</strong> Using clips to teach film
              analysis or cultural commentary
            </li>
            <li>
              <strong>Parody:</strong> Creating a humorous imitation that
              comments on the original
            </li>
            <li>
              <strong>News reporting:</strong> Using clips in context of current
              events
            </li>
            <li>
              <strong>Transformation:</strong> Significantly altering, remixing,
              or adding new meaning to content
            </li>
          </ul>

          <h3 className="text-xl font-bold">Probably Not Fair Use:</h3>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Reposting entire content:</strong> Uploading someone's
              full video with minimal changes
            </li>
            <li>
              <strong>Compilation videos:</strong> Just stringing together clips
              without commentary or transformation
            </li>
            <li>
              <strong>Using the "heart" of a work:</strong> Taking the best
              parts that define the original
            </li>
            <li>
              <strong>Content that replaces the original:</strong> If people use
              your version instead of buying/watching the original
            </li>
          </ul>

          <h2 className="text-2xl font-bold">
            Platform-Specific Policies (Important!)
          </h2>
          <p>
            Even if something is legal fair use, platforms have their own
            policies that may be stricter. You need to comply with both.
          </p>

          <h3 className="text-xl font-bold">YouTube:</h3>
          <p>
            YouTube has a DMCA system. Copyright holders can claim your video,
            and depending on the claim, you might lose revenue share or the
            video gets blocked entirely. YouTube claims are not legal
            judgments—they're copyright owner assertions.
          </p>

          <h3 className="text-xl font-bold">TikTok:</h3>
          <p>
            TikTok has licensed music heavily but is less tolerant of video
            reposts. Uploading someone's TikTok to your channel violates their
            Community Guidelines.
          </p>

          <h3 className="text-xl font-bold">Instagram:</h3>
          <p>
            Instagram also has strict policies against copyright infringement.
            Reposting without permission can get your post removed.
          </p>

          <h2 className="text-2xl font-bold">
            The YouTube Copyright System Explained
          </h2>
          <p>
            YouTube's Content ID system automatically detects copyrighted
            material. When a match is found:
          </p>

          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              Copyright holder can monetize it (they get the ad revenue, not
              you)
            </li>
            <li>Copyright holder can block it in certain countries</li>
            <li>Copyright holder can request removal (DMCA takedown)</li>
          </ul>

          <p>
            Three claims result in channel termination. But a claim isn't proof
            of infringement—it's just a copyright holder's assertion.
          </p>

          <h2 className="text-2xl font-bold">5 Ways to Stay Safe</h2>

          <h3 className="text-xl font-bold">1. Add Clear Commentary</h3>
          <p>
            The more transformative you are, the safer you are. Pause the video,
            react, explain, critique. Make it clear you're adding value.
          </p>

          <h3 className="text-xl font-bold">2. Use Only What You Need</h3>
          <p>
            Don't include 90% of the original video. Use clips to illustrate
            your point, not as the content itself.
          </p>

          <h3 className="text-xl font-bold">3. Change the Format</h3>
          <p>
            If the original is a 10-minute video, make a 30-second TikTok with
            clips. This clear transformation strengthens fair use.
          </p>

          <h3 className="text-xl font-bold">4. Credit the Source</h3>
          <p>
            Always mention where content came from. While not legally required
            for fair use, it's ethical and shows good intent.
          </p>

          <h3 className="text-xl font-bold">5. Understand the Risk</h3>
          <p>
            Fair use is a legal defense, not a prevention. You might still get
            strikes or claims. Be ready to appeal or dispute them.
          </p>

          <h2 className="text-2xl font-bold">The Gray Area: Reaction Videos</h2>
          <p>
            Reaction videos exist in a gray area. Is reacting for 10 minutes
            while a 5-minute clip plays fair use? Courts say maybe. The more you
            talk and less time the original plays, the stronger your fair use
            case.
          </p>

          <h2 className="text-2xl font-bold">What You Should Never Do</h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Never claim someone else's content as your own</li>
            <li>Never upload videos you have no rights to</li>
            <li>
              Never ignore platform policies thinking fair use protects you
            </li>
            <li>Never use someone's content if they explicitly forbid it</li>
          </ul>

          <h2 className="text-2xl font-bold">Consult a Lawyer for Big Risks</h2>
          <p>
            If you're creating content that heavily relies on copyrighted
            material, consider consulting an entertainment lawyer. Fair use is
            nuanced, and what seems safe to you might not be legally defensible.
          </p>

          <h2 className="text-2xl font-bold">The Bottom Line</h2>
          <p>
            Fair use exists to protect creators, but it's not absolute
            protection. The safest approach: create original content with heavy
            transformation when using existing material. Add commentary, change
            the format, be transparent about sources, and understand your
            platform's specific policies.
          </p>

          <p>When in doubt, ask permission. It's always the safest path.</p>
        </article>
      </div>
      <BlogFooter />
    </div>
  );
}
