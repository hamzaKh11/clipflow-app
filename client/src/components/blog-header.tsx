import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            data-testid="link-back-to-blog"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Blog</span>
          </Link>
          
          <div className="flex-1" />
          
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-back-home"
            >
              Home
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
