"use client";

import { cn } from "@/lib/utils";

type GradientBlobsProps = {
  className?: string;
  variant?: "hero" | "section";
};

// Morphing gradient blob backgrounds — decorative, aria-hidden.
export default function GradientBlobs({
  className,
  variant = "section",
}: GradientBlobsProps) {
  if (variant === "hero") {
    return (
      <div
        aria-hidden
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      >
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] animate-blob rounded-full bg-primary/25 mix-blend-multiply blur-3xl dark:mix-blend-screen dark:bg-primary/30" />
        <div className="absolute -top-20 right-0 h-[28rem] w-[28rem] animate-blob rounded-full bg-accent/25 mix-blend-multiply blur-3xl [animation-delay:3s] dark:mix-blend-screen dark:bg-accent/30" />
        <div className="absolute bottom-0 left-1/3 h-[26rem] w-[26rem] animate-blob rounded-full bg-secondary/20 mix-blend-multiply blur-3xl [animation-delay:6s] dark:mix-blend-screen dark:bg-secondary/25" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute -top-20 -right-20 h-80 w-80 animate-blob rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-80 w-80 animate-blob rounded-full bg-primary/10 blur-3xl [animation-delay:4s]" />
    </div>
  );
}
