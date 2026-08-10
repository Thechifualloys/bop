"use client";

import { ReactNode, useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
  tilt?: boolean;
};

// Premium glass card with hover elevation + optional 3D tilt and cursor glow.
export default function GlassCard({
  children,
  className,
  glow = true,
  tilt = false,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = ((e.clientX - rect.left) / rect.width) * 100;
    const py = ((e.clientY - rect.top) / rect.height) * 100;
    setMouse({ x: px, y: py });
    if (tilt) {
      setRotate({
        x: (py - 50) / -10,
        y: (px - 50) / 10,
      });
    }
  };

  const handleLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={tilt ? { rotateX: rotate.x, rotateY: rotate.y } : undefined}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      whileHover={{ y: -6 }}
      style={{ transformStyle: "preserve-3d" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-white/80 p-6 shadow-premium transition-shadow duration-300 hover:shadow-premium-lg dark:border-white/10 dark:bg-white/[0.04]",
        className
      )}
    >
      {glow && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(300px circle at ${mouse.x}% ${mouse.y}%, rgba(79,70,229,0.12), transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
