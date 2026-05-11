"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { type ReactNode, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "inverted" | "ghost";
  className?: string;
  target?: string;
}

const base =
  "inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-display text-[13px] font-bold tracking-wide no-underline cursor-pointer transition-colors duration-300";

const variants = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primary-light border-transparent",
  secondary:
    "bg-transparent text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-white dark:text-white dark:border-white/20 dark:hover:bg-white/10",
  inverted:
    "bg-white text-brand-tertiary hover:bg-brand-tertiary hover:text-white border-transparent dark:bg-white/10 dark:text-white dark:hover:bg-white/15",
  ghost:
    "bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-primary/10 dark:text-white/90 dark:border-white/20 dark:hover:bg-white/10",
};

const MotionLink = motion(Link);

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className,
  target,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sharedProps = {
    ref,
    onMouseMove: handleMouse,
    onMouseLeave: handleLeave,
    style: { x: springX, y: springY },
    className: cn(base, variants[variant], className),
  };

  if (href.startsWith("/")) {
    return (
      <MotionLink {...sharedProps} href={href}>
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.a
      {...sharedProps}
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </motion.a>
  );
}
