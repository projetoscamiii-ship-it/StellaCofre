import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  className,
  delay = 0,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-card p-8 shadow-card transition-all duration-500 hover:shadow-elevated hover:-translate-y-1",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Hover gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Icon container */}
      <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 transition-transform duration-500 group-hover:scale-110">
        <Icon className="h-7 w-7 text-primary" />
      </div>

      {/* Content */}
      <h3 className="relative mb-3 text-xl font-bold text-foreground">{title}</h3>
      <p className="relative text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
