import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
}

export function Eyebrow({ children, center, light }: EyebrowProps) {
  const lineColor = light ? "bg-white/30" : "bg-brand-primary";
  const textColor = light
    ? "text-white/50 dark:text-white/50"
    : "text-brand-primary dark:text-white/50";

  return (
    <div
      className={cn(
        "flex items-center gap-2.5 mb-3.5",
        center && "justify-center"
      )}
    >
      <div className={cn("w-7 h-0.5 rounded-sm", lineColor)} />
      <span
        className={cn(
          "font-display text-[11px] font-bold tracking-[0.18em] uppercase",
          textColor
        )}
      >
        {children}
      </span>
      {center && (
        <div className={cn("w-7 h-0.5 rounded-sm", lineColor)} />
      )}
    </div>
  );
}
