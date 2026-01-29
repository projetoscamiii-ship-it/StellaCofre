import { cn } from "@/lib/utils";
import { Lock, Plane, Shield, GraduationCap, Sparkles } from "lucide-react";

interface SavingsBoxProps {
  title: string;
  amount: string;
  goal: string;
  progress: number;
  variant: "travel" | "emergency" | "education" | "dream";
  locked?: boolean;
  className?: string;
}

const variants = {
  travel: {
    gradient: "from-sky-400 to-blue-500",
    icon: Plane,
    iconBg: "bg-sky-400/20",
  },
  emergency: {
    gradient: "from-primary to-orange-400",
    icon: Shield,
    iconBg: "bg-primary/20",
  },
  education: {
    gradient: "from-secondary to-teal-400",
    icon: GraduationCap,
    iconBg: "bg-secondary/20",
  },
  dream: {
    gradient: "from-purple-500 to-pink-500",
    icon: Sparkles,
    iconBg: "bg-purple-400/20",
  },
};

export function SavingsBox({
  title,
  amount,
  goal,
  progress,
  variant,
  locked = false,
  className,
}: SavingsBoxProps) {
  const config = variants[variant];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-card p-6 shadow-card transition-all duration-500 hover:shadow-elevated hover:-translate-y-2",
        className
      )}
    >
      {/* Background gradient decoration */}
      <div
        className={cn(
          "absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-40 group-hover:scale-150",
          config.gradient
        )}
      />

      {/* Lock indicator */}
      {locked && (
        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground">
          <Lock className="h-3 w-3" />
          <span>Travado</span>
        </div>
      )}

      {/* Icon */}
      <div
        className={cn(
          "mb-4 flex h-14 w-14 items-center justify-center rounded-2xl",
          config.iconBg
        )}
      >
        <Icon className={cn("h-7 w-7 bg-gradient-to-br bg-clip-text", config.gradient)} style={{
          color: `var(--${variant === 'travel' ? 'box-travel' : variant === 'emergency' ? 'primary' : variant === 'education' ? 'secondary' : 'box-dream'})`
        }} />
      </div>

      {/* Title */}
      <h3 className="mb-1 text-lg font-semibold text-foreground">{title}</h3>

      {/* Amount */}
      <p className="mb-4 text-3xl font-bold text-foreground">{amount}</p>

      {/* Progress bar */}
      <div className="mb-2 h-2 overflow-hidden rounded-full bg-muted">
        <div
          className={cn(
            "h-full rounded-full bg-gradient-to-r transition-all duration-700",
            config.gradient
          )}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Goal */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Meta: {goal}</span>
        <span className="font-semibold text-foreground">{progress}%</span>
      </div>
    </div>
  );
}
