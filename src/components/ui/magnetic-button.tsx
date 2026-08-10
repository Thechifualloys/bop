"use client";

import { useRef, useState, MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  as?: "button" | "a";
};

const variants = {
  primary:
    "bg-primary text-white shadow-premium hover:shadow-glow border border-primary/0",
  secondary:
    "bg-secondary text-white shadow-premium hover:shadow-[0_0_40px_rgba(243,156,18,0.35)]",
  outline:
    "bg-transparent border border-primary/20 text-primary dark:text-white dark:border-white/20 hover:bg-primary/5",
  ghost: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
};

// Magnetic hover effect + ripple-on-click, used for all primary CTAs.
export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  target,
  rel,
  variant = "primary",
  as = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>(
    []
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const handleClick = (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const id = Date.now();
      setRipples((prev) => [
        ...prev,
        { x: e.clientX - rect.left, y: e.clientY - rect.top, id },
      ]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 900);
    }
    onClick?.();
  };

  const Comp = as === "a" ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="inline-block"
    >
      <Comp
        {...(as === "a" ? { href, target, rel } : {})}
        onClick={handleClick}
        whileTap={{ scale: 0.96 }}
        className={cn(
          "relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold font-heading transition-shadow duration-300",
          variants[variant],
          className
        )}
      >
        {children}
        {ripples.map((r) => (
          <span
            key={r.id}
            className="pointer-events-none absolute rounded-full bg-white/50 animate-ripple"
            style={{
              left: r.x - 5,
              top: r.y - 5,
              width: 10,
              height: 10,
            }}
          />
        ))}
      </Comp>
    </motion.div>
  );
}
