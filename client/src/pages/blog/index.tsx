import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

const BLOG_POSTS = [
  {
    slug: "repurpose-long-videos-viral-tiktoks",
    title: "How to Repurpose Long Videos into Viral TikToks",
    excerpt:
      "Learn the strategies to transform your long-form YouTube videos into engaging TikToks that capture attention in seconds.",
    date: "November 20, 2024",
    readTime: "8 min read",
    category: "Content Strategy",
  },
  {
    slug: "best-video-editing-tools-beginners-2025",
    title: "Top 5 Video Editing Tools for Beginners in 2025",
    excerpt:
      "Explore the most beginner-friendly video editing tools available today, including how they compare on price, features, and ease of use.",
    date: "November 18, 2024",
    readTime: "10 min read",
    category: "Tools & Software",
  },
  {
    slug: "grow-faceless-youtube-channel",
    title: "How to Grow Your Faceless YouTube Channel",
    excerpt:
      "Discover proven strategies for building a successful YouTube channel without showing your face, complete with case studies.",
    date: "November 16, 2024",
    readTime: "12 min read",
    category: "YouTube Strategy",
  },
  {
    slug: "understanding-fair-use-social-media",
    title: "Understanding Fair Use on Social Media",
    excerpt:
      "A comprehensive guide to fair use doctrine and how it applies to content creators on TikTok, Instagram, YouTube, and other platforms.",
    date: "November 14, 2024",
    readTime: "9 min read",
    category: "Legal & Compliance",
  },
  {
    slug: "vertical-video-editing-best-practices",
    title: "Vertical Video Editing Best Practices in 2025",
    excerpt:
      "Master the art of vertical video editing with techniques used by top creators on TikTok and Instagram Reels.",
    date: "November 12, 2024",
    readTime: "7 min read",
    category: "Editing Techniques",
  },
  {
    slug: "youtube-algorithm-guide-creators",
    title: "The YouTube Algorithm Explained: A Creator's Guide",
    excerpt:
      "Understand how YouTube's algorithm works and how to optimize your videos for maximum visibility and growth.",
    date: "November 10, 2024",
    readTime: "11 min read",
    category: "YouTube Strategy",
  },
  {
    slug: "tiktok-trends-content-strategy",
    title: "Riding TikTok Trends: A Smart Content Strategy",
    excerpt:
      "Learn how to identify trending sounds, hashtags, and formats to maximize your viral potential on TikTok.",
    date: "November 8, 2024",
    readTime: "8 min read",
    category: "Content Strategy",
  },
  {
    slug: "instagram-reels-algorithm-optimization",
    title: "Instagram Reels Algorithm: How to Get More Views",
    excerpt:
      "Complete guide to optimizing your Instagram Reels for the algorithm to increase reach and engagement.",
    date: "November 6, 2024",
    readTime: "9 min read",
    category: "Instagram Strategy",
  },
  {
    slug: "audio-editing-video-creation",
    title: "Audio Editing 101: Elevating Your Video Production",
    excerpt:
      "Why audio matters in video content and how to use audio editing techniques to make your videos stand out.",
    date: "November 4, 2024",
    readTime: "10 min read",
    category: "Editing Techniques",
  },
  {
    slug: "content-calendar-creator-productivity",
    title: "Building a Content Calendar: Creator Productivity Guide",
    excerpt:
      "Plan, organize, and execute your content strategy with an effective content calendar system.",
    date: "November 2, 2024",
    readTime: "7 min read",
    category: "Productivity",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-bold mb-4">ClipFlow Blog</h1>
          <p className="text-lg text-foreground/80">
            Expert tips, strategies, and insights for content creators looking
            to grow their audience and master video editing across all social
            media platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover-elevate cursor-pointer p-6 flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>

                <h2 className="text-xl font-bold mb-3 line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-foreground/80 text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t flex items-center justify-between text-sm text-foreground/60">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t pt-12 max-w-2xl">
          <h2 className="text-2xl font-bold mb-6">Subscribe for Updates</h2>
          <p className="text-foreground/80 mb-4">
            Get new articles delivered to your inbox. We cover video editing,
            content strategy, and creator growth.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 rounded-md border bg-background"
              data-testid="input-blog-subscribe"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-medium hover-elevate active-elevate-2">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
