import { Button } from "./ui/button";
import { useState } from "react";

const decades = [
  { label: "1940s", period: "1947-1950", key: "1940s" },
  { label: "1950s", period: "1951-1960", key: "1950s" },
  { label: "1960s", period: "1961-1970", key: "1960s" },
  { label: "1970s", period: "1971-1980", key: "1970s" },
  { label: "1980s", period: "1981-1990", key: "1980s" },
  { label: "1990s", period: "1991-2000", key: "1990s" },
  { label: "2000s", period: "2001-2010", key: "2000s" },
  { label: "2010s", period: "2011-2020", key: "2010s" },
  { label: "2020s", period: "2021-2024", key: "2020s" },
];

interface DecadeSelectorProps {
  selectedDecade: string;
  onDecadeChange: (decade: string) => void;
}

export function DecadeSelector({ selectedDecade, onDecadeChange }: DecadeSelectorProps) {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Journey Through Time
          </h2>
          <p className="text-muted-foreground">
            Explore India's progress decade by decade
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-tricolor rounded-full transform -translate-y-1/2 z-0"></div>
          
          {/* Decade buttons */}
          <div className="flex items-center justify-between overflow-x-auto gap-2 pb-4 relative z-10">
            {decades.map((decade) => (
              <div key={decade.key} className="flex flex-col items-center gap-2 min-w-fit">
                <Button
                  variant={selectedDecade === decade.key ? "patriotic" : "outline"}
                  size="lg"
                  onClick={() => onDecadeChange(decade.key)}
                  className={`
                    px-6 py-3 font-semibold transition-all duration-300
                    ${selectedDecade === decade.key 
                      ? "shadow-tricolor scale-110 z-20" 
                      : "hover:scale-105"
                    }
                  `}
                >
                  {decade.label}
                </Button>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {decade.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}