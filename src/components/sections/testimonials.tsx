"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/site";
import SectionReveal from "@/components/ui/section-reveal";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoplay, setAutoplay] = useState(true);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [autoplay, next]);

  const current = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden py-24 sm:py-32"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl"
      />
      <div className="container-premium relative">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Testimonials
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </SectionReveal>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="relative min-h-[320px] sm:min-h-[280px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass absolute inset-0 flex flex-col items-center rounded-3xl p-8 text-center shadow-premium-lg sm:p-12"
              >
                <Quote className="mb-4 text-secondary/60" size={36} />
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-balance font-heading text-lg font-medium leading-relaxed text-ink dark:text-white sm:text-xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-heading font-semibold text-ink dark:text-white">
                    {current.name}
                  </p>
                  <p className="text-sm text-muted dark:text-white/60">
                    {current.role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Previous testimonial"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-ink transition-colors hover:bg-primary hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-primary dark:bg-white" : "w-2 bg-primary/20 dark:bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-ink transition-colors hover:bg-primary hover:text-white dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
