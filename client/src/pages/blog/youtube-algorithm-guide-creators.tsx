import { BlogHeader } from "@/components/blog-header";
import { BlogFooter } from "@/components/blog-footer";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="mb-8">
          <img
            src="https://images.pexels.com/photos/21325134/pexels-photo-21325134.jpeg"
            alt="YouTube algorithm metrics dashboard"
            className="w-full rounded-lg mb-8 object-cover h-96"
          />
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-4">
            YouTube Strategy
          </span>
          <h1 className="text-4xl font-bold mb-4">
            The YouTube Algorithm Explained: A Creator's Guide
          </h1>
          <p className="text-muted-foreground">
            November 10, 2024 • 11 min read
          </p>
        </div>

        <article className="prose prose-invert max-w-none space-y-6 text-foreground/90">
          <p>
            The YouTube algorithm is one of the most powerful—and
            misunderstood—systems on the internet. Creators spend countless
            hours trying to "crack" it, but the truth is simpler than you think.
            YouTube's algorithm is designed to maximize watch time and user
            satisfaction. Understand this, and you understand the algorithm.
          </p>

          <h2 className="text-2xl font-bold">
            How the Algorithm Actually Works
          </h2>
          <p>
            YouTube's recommendation engine isn't random. It's a machine
            learning system trained on billions of user interactions. Here's the
            simplified version:
          </p>

          <ol className="list-decimal list-inside space-y-3 ml-4">
            <li>
              <strong>Candidate generation:</strong> The system identifies
              thousands of videos relevant to the user
            </li>
            <li>
              <strong>Ranking:</strong> These candidates are ranked by predicted
              performance metrics
            </li>
            <li>
              <strong>Final selection:</strong> The top videos appear in
              recommendations, search results, and the home feed
            </li>
          </ol>

          <h2 className="text-2xl font-bold">
            The Key Metrics YouTube Measures
          </h2>

          <h3 className="text-xl font-bold">Watch Time (Most Important)</h3>
          <p>
            This is THE metric. YouTube wants users watching longer. Videos that
            keep people engaged longer get boosted. This is why longer videos
            often rank better—not because length matters, but because they
            accumulate more total watch time if they're engaging.
          </p>

          <h3 className="text-xl font-bold">Click-Through Rate (CTR)</h3>
          <p>
            If your video appears in search or recommendations, does the user
            click it? A high CTR signals that your thumbnail and title are
            compelling. YouTube uses this to decide if your video deserves more
            visibility.
          </p>

          <h3 className="text-xl font-bold">Average View Duration (AVD)</h3>
          <p>
            How long, on average, do viewers watch before leaving? If your
            average view duration is 50% of the video length, that's excellent.
            If it's 10%, that's a problem.
          </p>

          <h3 className="text-xl font-bold">Viewer Satisfaction</h3>
          <p>
            Likes, comments, shares—these signal satisfaction. Users who engage
            typically enjoyed the video. YouTube's algorithm notes this and
            pushes the video to more people.
          </p>

          <h3 className="text-xl font-bold">Subscription Growth</h3>
          <p>
            Did the video gain subscribers? This signals long-term audience
            value, not just a one-time view. Videos that convert viewers into
            subscribers get algorithmic boosts.
          </p>

          <h2 className="text-2xl font-bold">The Three Discovery Channels</h2>

          <h3 className="text-xl font-bold">1. Homepage Feed</h3>
          <p>
            YouTube shows personalized recommendations based on watch history.
            Videos with strong engagement metrics get featured here to new users
            with similar interests.
          </p>

          <h3 className="text-xl font-bold">2. Search Results</h3>
          <p>
            When users search, YouTube ranks videos by relevance and
            performance. Good SEO (title, description, tags) helps here, but
            watch time and CTR matter too.
          </p>

          <h3 className="text-xl font-bold">3. Suggested Videos</h3>
          <p>
            While watching a video, YouTube suggests related videos. Getting
            featured here depends on viewer satisfaction with your related
            content and watch time potential.
          </p>

          <h2 className="text-2xl font-bold">
            The Subscriber Vs. Algorithm Debate
          </h2>
          <p>
            A common misconception: "I need more subscribers." While subscribers
            matter, they're not a requirement for the algorithm to push your
            content. A subscriber is more likely to watch your videos (because
            they're subscribed), but a non-subscriber who watches longer and
            engages more will be promoted more aggressively.
          </p>

          <p>
            <strong>The truth:</strong> Excellent content reaches
            non-subscribers faster than mediocre content reaches subscribers.
          </p>

          <h2 className="text-2xl font-bold">
            How to Optimize for the Algorithm
          </h2>

          <h3 className="text-xl font-bold">
            1. Create Hook-Worthy Thumbnails
          </h3>
          <p>
            Your thumbnail is your first impression. High CTR thumbnails have:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Bright colors (stands out in feed)</li>
            <li>Faces with strong emotions</li>
            <li>Clear text (readable at small sizes)</li>
            <li>Minimal clutter</li>
          </ul>

          <h3 className="text-xl font-bold">2. Write Clickable Titles</h3>
          <p>
            Your title should be compelling without being misleading (false
            promises hurt viewer satisfaction). Include keywords but prioritize
            intrigue.
          </p>

          <p>
            <strong>Good:</strong> "How I Made $10K With This One Trick (No
            Clickbait)"
          </p>

          <p>
            <strong>Bad:</strong> "Video Number 47"
          </p>

          <h3 className="text-xl font-bold">
            3. Hook Viewers in the First 30 Seconds
          </h3>
          <p>
            If people leave in the first 30 seconds, your average view duration
            tanks. Hook them immediately:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>State the benefit upfront</li>
            <li>Create curiosity or pattern interrupt</li>
            <li>Show the payoff early</li>
          </ul>

          <h3 className="text-xl font-bold">4. Maintain Consistent Pacing</h3>
          <p>
            Use cuts, transitions, and visual changes to prevent the viewer's
            mind from wandering. Monotone delivery with static visuals causes
            drop-off.
          </p>

          <h3 className="text-xl font-bold">5. End Screens and Suggestions</h3>
          <p>
            Use end screens to suggest your next video or promote subscriptions.
            Viewers watching until the end are most likely to click.
          </p>

          <h3 className="text-xl font-bold">6. Optimize Your Description</h3>
          <p>
            Put important links and keywords in the first 2-3 lines (before
            "show more"). YouTube reads descriptions for context, and users scan
            the first few lines.
          </p>

          <h3 className="text-xl font-bold">7. Use Tags and Categories</h3>
          <p>
            Tags help YouTube categorize your content. Be specific and accurate.
            Misleading tags hurt your ranking.
          </p>

          <h2 className="text-2xl font-bold">The Upload Schedule Question</h2>
          <p>
            Does upload time matter? Marginally. The algorithm doesn't care when
            you upload—it cares about performance metrics. However, uploading
            when your audience is active maximizes early engagement, which
            signals to the algorithm that this is good content.
          </p>

          <p>
            Consistency matters more than timing. Upload regularly (doesn't
            matter if it's Monday or Friday, but be predictable).
          </p>

          <h2 className="text-2xl font-bold">
            Common Algorithm Myths Debunked
          </h2>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>
              <strong>Myth:</strong> "The algorithm favors long videos."
              Reality: It favors engaging videos, regardless of length.
            </li>
            <li>
              <strong>Myth:</strong> "I need to post daily to win the
              algorithm." Reality: Quality beats frequency. Post consistently,
              not frantically.
            </li>
            <li>
              <strong>Myth:</strong> "I need 10K subscribers to go viral."
              Reality: Viral videos are discovered by users with no prior
              relationship to the channel.
            </li>
            <li>
              <strong>Myth:</strong> "Tags are everything." Reality: They help,
              but watch time and CTR matter far more.
            </li>
          </ul>

          <h2 className="text-2xl font-bold">The Bottom Line</h2>
          <p>
            The YouTube algorithm isn't mysterious. It's a system designed to
            maximize user satisfaction by showing people videos they're likely
            to watch, enjoy, and engage with. Create content that:
          </p>

          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Hooks viewers immediately</li>
            <li>Keeps them watching</li>
            <li>Leaves them satisfied</li>
            <li>Makes them want to subscribe</li>
          </ul>

          <p>Do those four things, and the algorithm will do the rest.</p>
        </article>
      </div>
      <BlogFooter />
    </div>
  );
}
