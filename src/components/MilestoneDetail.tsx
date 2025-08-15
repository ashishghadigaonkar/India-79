import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, ExternalLink, MapPin, Users } from "lucide-react";

interface MilestoneDetailProps {
  isOpen: boolean;
  onClose: () => void;
  milestone: {
    title: string;
    date: string;
    description: string;
    category: "independence" | "space" | "economy" | "technology" | "sports" | "social";
    imageUrl?: string;
    sourceUrl?: string;
    detailedDescription?: string;
    impact?: string;
    keyFigures?: string[];
    location?: string;
    relatedEvents?: Array<{ title: string; date: string }>;
  };
}

export function MilestoneDetail({ isOpen, onClose, milestone }: MilestoneDetailProps) {
  const categoryStyles = {
    independence: "text-saffron bg-saffron/10",
    space: "text-ashoka-blue bg-ashoka-blue/10",
    economy: "text-indian-green bg-indian-green/10",
    technology: "text-purple-600 bg-purple-100",
    sports: "text-orange-600 bg-orange-100",
    social: "text-pink-600 bg-pink-100",
  };

  const categoryLabels = {
    independence: "Independence",
    space: "Space Program",
    economy: "Economic Development",
    technology: "Technology",
    sports: "Sports Achievement",
    social: "Social Progress",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4 mb-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl font-bold text-foreground mb-2">
                {milestone.title}
              </DialogTitle>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="font-medium">{milestone.date}</span>
                </div>
                <Badge className={categoryStyles[milestone.category]}>
                  {categoryLabels[milestone.category]}
                </Badge>
                {milestone.location && (
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{milestone.location}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {milestone.imageUrl && (
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src={milestone.imageUrl} 
                alt={milestone.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="space-y-4">
            <DialogDescription className="text-base leading-relaxed">
              {milestone.description}
            </DialogDescription>

            {milestone.detailedDescription && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Detailed Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {milestone.detailedDescription}
                </p>
              </div>
            )}

            {milestone.impact && (
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-foreground">Impact & Significance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {milestone.impact}
                </p>
              </div>
            )}

            {milestone.keyFigures && milestone.keyFigures.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Key Figures
                </h3>
                <div className="flex flex-wrap gap-2">
                  {milestone.keyFigures.map((figure, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {figure}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {milestone.relatedEvents && milestone.relatedEvents.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Related Events</h3>
                <div className="space-y-2">
                  {milestone.relatedEvents.map((event, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <div>
                        <span className="text-sm font-medium text-foreground">{event.title}</span>
                        <span className="text-xs text-muted-foreground ml-2">({event.date})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
            {milestone.sourceUrl && (
              <Button variant="outline" asChild className="flex-1">
                <a href={milestone.sourceUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Learn More
                </a>
              </Button>
            )}
            <Button onClick={onClose} className="flex-1">
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}