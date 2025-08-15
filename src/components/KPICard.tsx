import { Card } from "./ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  unit?: string;
  color: "saffron" | "green" | "blue" | "neutral";
}

export function KPICard({ title, value, change, trend, unit, color }: KPICardProps) {
  const colorClasses = {
    saffron: "border-saffron/20 bg-gradient-to-br from-saffron/5 to-transparent",
    green: "border-indian-green/20 bg-gradient-to-br from-indian-green/5 to-transparent",
    blue: "border-ashoka-blue/20 bg-gradient-to-br from-ashoka-blue/5 to-transparent",
    neutral: "border-border bg-gradient-card"
  };

  const iconColorClasses = {
    saffron: "text-saffron",
    green: "text-indian-green",
    blue: "text-ashoka-blue",
    neutral: "text-muted-foreground"
  };

  return (
    <Card className={`p-6 hover:shadow-elevation transition-all duration-300 hover:-translate-y-1 ${colorClasses[color]}`}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            {title}
          </h3>
          {trend !== "neutral" && (
            <div className={`flex items-center gap-1 ${iconColorClasses[color]}`}>
              {trend === "up" ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
            </div>
          )}
        </div>
        
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-foreground">{value}</span>
            {unit && (
              <span className="text-sm text-muted-foreground">{unit}</span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${
              trend === "up" 
                ? "text-indian-green" 
                : trend === "down" 
                ? "text-destructive" 
                : "text-muted-foreground"
            }`}>
              {change}
            </span>
            <span className="text-xs text-muted-foreground">since 1947</span>
          </div>
        </div>

        {/* Mini sparkline placeholder */}
        <div className="h-8 flex items-end gap-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`w-2 bg-gradient-to-t rounded-sm opacity-60 ${
                color === "saffron" 
                  ? "from-saffron/30 to-saffron" 
                  : color === "green"
                  ? "from-indian-green/30 to-indian-green"
                  : color === "blue"
                  ? "from-ashoka-blue/30 to-ashoka-blue"
                  : "from-muted to-muted-foreground"
              }`}
              style={{ 
                height: `${Math.random() * 20 + 10}px` 
              }}
            />
          ))}
        </div>
      </div>
    </Card>
  );
}