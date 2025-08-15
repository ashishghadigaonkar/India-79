import { Badge } from "./ui/badge";
import { Clock, Database } from "lucide-react";

interface DataSourceBadgeProps {
  source: string;
  lastUpdated: string;
  className?: string;
}

export function DataSourceBadge({ source, lastUpdated, className }: DataSourceBadgeProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Badge variant="outline" className="flex items-center gap-1 text-xs">
        <Database className="w-3 h-3" />
        {source}
      </Badge>
      <div className="flex items-center gap-1 text-xs text-muted-foreground">
        <Clock className="w-3 h-3" />
        Updated {lastUpdated}
      </div>
    </div>
  );
}