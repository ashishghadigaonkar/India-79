import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Calendar, Eye } from "lucide-react";

interface MilestoneCardProps {
  title: string;
  date: string;
  description: string;
  category: "independence" | "space" | "economy" | "technology" | "sports" | "social";
  imageUrl?: string;
  sourceUrl?: string;
  onClick?: () => void;
}

export function MilestoneCard({ 
  title, 
  date, 
  description, 
  category, 
  imageUrl, 
  sourceUrl,
  onClick 
}: MilestoneCardProps) {
  const categoryStyles = {
    independence: "border-saffron/30 bg-gradient-to-br from-saffron/10 to-transparent",
    space: "border-ashoka-blue/30 bg-gradient-to-br from-ashoka-blue/10 to-transparent",
    economy: "border-indian-green/30 bg-gradient-to-br from-indian-green/10 to-transparent",
    technology: "border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent",
    sports: "border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent",
    social: "border-pink-500/30 bg-gradient-to-br from-pink-500/10 to-transparent",
  };

  const categoryColors = {
    independence: "text-saffron",
    space: "text-ashoka-blue",
    economy: "text-indian-green",
    technology: "text-purple-600",
    sports: "text-orange-600",
    social: "text-pink-600",
  };

  const categoryLabels = {
    independence: "Independence",
    space: "Space",
    economy: "Economy",
    technology: "Technology",
    sports: "Sports",
    social: "Social",
  };

  return (
    <Card className={`overflow-hidden hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 cursor-pointer ${categoryStyles[category]}`} onClick={onClick}>
      {imageUrl && (
        <div className="aspect-video bg-muted relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">{date}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[category]} bg-current/10`}>
                {categoryLabels[category]}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-foreground leading-tight">
              {title}
            </h3>
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={(e) => {
              e.stopPropagation();
              onClick?.();
            }}
            className="p-0 h-auto text-ashoka-blue hover:text-ashoka-blue-dark"
          >
            <Eye className="w-4 h-4 mr-1" />
            <span className="text-sm">View Details</span>
          </Button>
          
          {sourceUrl && (
            <Button 
              variant="ghost" 
              size="sm" 
              asChild
              onClick={(e) => e.stopPropagation()}
              className="p-0 h-auto text-ashoka-blue hover:text-ashoka-blue-dark"
            >
              <a 
                href={sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <span className="text-xs">Source</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}