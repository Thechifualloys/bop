"use client";

import { motion } from "framer-motion";
import { PhoneCall, SearchCheck, Settings2, HeartHandshake } from "lucide-react";
import { process } from "@/data/site";
import SectionReveal from "@/components/ui/section-reveal";

const icons = [PhoneCall, SearchCheck, Settings2, HeartHandshake];

export default function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32">
      <div className="container-premium">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Our Process
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            How We <span className="gradient-text">Get You Started</span>
          </h2>
          <p className="mt-4 text-base text-muted dark:text-white/70">
            A simple, transparent process from first call to ongoing
            partnership.
          </p>
        </SectionReveal>

        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary/30 via-accent/30 to-secondary/30 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {process.map((item, i) => {
              const Icon = icons[i];
              const isEven = i % 2 === 0;
              return (
                <div
                  key={item.step}
                  className="relative md:grid md:grid-cols-2 md:gap-x-12 md:py-8"
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`pl-16 md:pl-0 ${
                      isEven
                        ? "md:col-start-1 md:text-right md:pr-4"
                        : "md:col-start-2 md:pl-4"
                    }`}
                  >
                    <div className="rounded-2xl border border-border bg-white p-6 shadow-premium transition-shadow duration-300 hover:shadow-premium-lg dark:border-white/10 dark:bg-white/[0.04]">
                      <span className="font-heading text-4xl font-extrabold text-primary/10 dark:text-white/10">
                        {item.step}
                      </span>
                      <h3 className="mt-1 font-heading text-xl font-semibold text-ink dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted dark:text-white/60">
                        {item.body}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-glow md:left-1/2 md:-translate-x-1/2"
                  >
                    <Icon size={20} />
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
