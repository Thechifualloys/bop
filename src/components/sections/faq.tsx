"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/data/site";
import SectionReveal from "@/components/ui/section-reveal";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="container-premium">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            FAQ
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="mt-4 text-base text-muted dark:text-white/70">
            Everything you need to know before getting started.
          </p>
        </SectionReveal>

        <div className="mx-auto mt-14 max-w-2xl space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <SectionReveal key={faq.question} delay={i * 0.05} y={16}>
                <div
                  className={cn(
                    "overflow-hidden rounded-2xl border transition-colors duration-300",
                    isOpen
                      ? "border-primary/20 bg-primary/[0.03] dark:border-white/15 dark:bg-white/[0.04]"
                      : "border-border bg-white dark:border-white/10 dark:bg-white/[0.02]"
                  )}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base font-semibold text-ink dark:text-white">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                        isOpen
                          ? "bg-primary text-white"
                          : "bg-primary/10 text-primary dark:bg-white/10 dark:text-white"
                      )}
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-muted dark:text-white/60">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
