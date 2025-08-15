import { Button } from "./ui/button";
import { Share2 } from "lucide-react";

export function Header() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "India@79 – Data in Motion",
        text: "Celebrating 79 years of India's incredible journey! 🇮🇳 #IndiaAt79 #IndependenceDay #DataInMotion",
        url: window.location.href,
      });
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(
        `Celebrating 79 years of India's incredible journey! 🇮🇳 #IndiaAt79 #IndependenceDay\n${window.location.href}`
      );
    }
  };

  return (
    <header className="relative overflow-hidden bg-gradient-hero border-b border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-6 bg-gradient-tricolor rounded-sm shadow-tricolor"></div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-saffron via-ashoka-blue to-indian-green bg-clip-text text-transparent">
              India@79
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Data in Motion • Seven Decades of Progress
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" onClick={handleShare} className="font-semibold">
              <Share2 className="w-5 h-5" />
              Share India's Story
            </Button>
            <p className="text-sm text-muted-foreground">
              #IndiaAt79 • Independence Day 2025
            </p>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-20 h-20 bg-saffron/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 bg-indian-green/10 rounded-full blur-xl"></div>
    </header>
  );
}
