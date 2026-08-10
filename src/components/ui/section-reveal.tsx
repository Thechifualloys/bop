"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  blur?: boolean;
  once?: boolean;
};

// Scroll-triggered fade + blur reveal, used across sections for staggered entrances.
export default function SectionReveal({
  children,
  className,
  delay = 0,
  y = 32,
  direction = "up",
  blur = true,
  once = true,
}: SectionRevealProps) {
  const offsets: Record<string, { x?: number; y?: number }> = {
    up: { y },
    down: { y: -y },
    left: { x: y },
    right: { x: -y },
    none: {},
  };

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...offsets[direction],
      filter: blur ? "blur(8px)" : "blur(0px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
