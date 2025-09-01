import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: string;
    isPositive: boolean;
  };
  icon: ReactNode;
  className?: string;
}

export default function StatsCard({ title, value, change, icon, className }: StatsCardProps) {
  return (
    <Card className={cn("bg-gradient-card shadow-soft hover:shadow-medium transition-all duration-200", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            {change && (
              <p className={cn(
                "text-xs font-medium",
                change.isPositive ? "text-success" : "text-destructive"
              )}>
                {change.isPositive ? "+" : ""}{change.value}
              </p>
            )}
          </div>
          <div className="p-3 bg-primary/10 rounded-lg">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}