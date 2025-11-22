import { Link } from "wouter";
import { Heart } from "lucide-react";

export function BlogFooter() {
  return (
    <footer className="border-t bg-muted/30 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/blog" className="inline-block mb-4">
              <h3 className="text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                ClipFlow Blog
              </h3>
            </Link>
            <p className="text-sm text-muted-foreground">
              Expert insights on video editing, content strategy, and creator growth for TikTok, Instagram Reels, and YouTube Shorts.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-blog-footer"
                >
                  All Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-home-footer"
                >
                  Try ClipFlow
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-contact-footer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-privacy-footer"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-terms-footer"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="link-about-footer"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> for content creators
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} ClipFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
