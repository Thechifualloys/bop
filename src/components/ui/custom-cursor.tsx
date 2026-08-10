"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Mouse-follow glow + custom cursor ring. Desktop (fine pointer) only.
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 25, stiffness: 300, mass: 0.5 });
  const springY = useSpring(y, { damping: 25, stiffness: 300, mass: 0.5 });
  const glowX = useSpring(x, { damping: 40, stiffness: 90 });
  const glowY = useSpring(y, { damping: 40, stiffness: 90 });

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!isFine || reduceMotion) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Large soft spotlight glow that trails the cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-plus-lighter opacity-0 dark:opacity-100"
        style={{
          x: glowX,
          y: glowY,
          background:
            "radial-gradient(circle, rgba(79,70,229,0.12) 0%, rgba(23,59,142,0.06) 45%, transparent 70%)",
        }}
      />
      {/* Small precise ring cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden rounded-full border border-accent/60 md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: hovering ? 52 : 28,
          height: hovering ? 52 : 28,
          backgroundColor: hovering
            ? "rgba(79,70,229,0.08)"
            : "rgba(79,70,229,0)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />
    </>
  );
}
