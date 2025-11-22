import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import AboutUs from "@/pages/about-us";
import ContactUs from "@/pages/contact-us";
import Blog from "@/pages/blog/index";
import BlogRepurpose from "@/pages/blog/repurpose-long-videos-viral-tiktoks";
import BlogBestTools from "@/pages/blog/best-video-editing-tools-beginners-2025";
import BlogFaceless from "@/pages/blog/grow-faceless-youtube-channel";
import BlogFairUse from "@/pages/blog/understanding-fair-use-social-media";
import BlogVertical from "@/pages/blog/vertical-video-editing-best-practices";
import BlogYouTube from "@/pages/blog/youtube-algorithm-guide-creators";
import BlogTikTok from "@/pages/blog/tiktok-trends-content-strategy";
import BlogInstagram from "@/pages/blog/instagram-reels-algorithm-optimization";
import BlogAudio from "@/pages/blog/audio-editing-video-creation";
import BlogContentCalendar from "@/pages/blog/content-calendar-creator-productivity";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/blog" component={Blog} />
      <Route
        path="/blog/repurpose-long-videos-viral-tiktoks"
        component={BlogRepurpose}
      />
      <Route
        path="/blog/best-video-editing-tools-beginners-2025"
        component={BlogBestTools}
      />
      <Route
        path="/blog/grow-faceless-youtube-channel"
        component={BlogFaceless}
      />
      <Route
        path="/blog/understanding-fair-use-social-media"
        component={BlogFairUse}
      />
      <Route
        path="/blog/vertical-video-editing-best-practices"
        component={BlogVertical}
      />
      <Route
        path="/blog/youtube-algorithm-guide-creators"
        component={BlogYouTube}
      />
      <Route
        path="/blog/tiktok-trends-content-strategy"
        component={BlogTikTok}
      />
      <Route
        path="/blog/instagram-reels-algorithm-optimization"
        component={BlogInstagram}
      />
      <Route path="/blog/audio-editing-video-creation" component={BlogAudio} />
      <Route
        path="/blog/content-calendar-creator-productivity"
        component={BlogContentCalendar}
      />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
