"use client";

import { motion } from "framer-motion";
import {
  BookOpenCheck,
  ReceiptText,
  LineChart,
  Users,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { services } from "@/data/site";
import SectionReveal, {
  staggerContainer,
  staggerItem,
} from "@/components/ui/section-reveal";
import GlassCard from "@/components/ui/glass-card";

const iconMap = {
  BookOpenCheck,
  ReceiptText,
  LineChart,
  Users,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="container-premium">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            What We Offer
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Full-Service <span className="gradient-text">Accounting &amp; Tax</span> Solutions
          </h2>
          <p className="mt-4 text-base text-muted dark:text-white/70">
            From day-to-day bookkeeping to strategic financial reporting —
            everything your business needs, delivered virtually.
          </p>
        </SectionReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div key={service.title} variants={staggerItem}>
                <GlassCard tilt className="h-full">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-premium transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon size={26} />
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-muted opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 dark:text-white/50"
                    />
                  </div>

                  <h3 className="mt-5 font-heading text-xl font-semibold text-ink dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-white/60">
                    {service.description}
                  </p>

                  <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 text-sm text-ink/80 dark:text-white/70"
                      >
                        <Check size={14} className="shrink-0 text-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
