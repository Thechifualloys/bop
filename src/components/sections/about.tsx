"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Target, Eye, Heart } from "lucide-react";
import { timeline, missionVisionValues } from "@/data/site";
import SectionReveal, {
  staggerContainer,
  staggerItem,
} from "@/components/ui/section-reveal";
import GlassCard from "@/components/ui/glass-card";
import GradientBlobs from "@/components/ui/gradient-blobs";

const mvvIcons = [Target, Eye, Heart];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <GradientBlobs />
      <div className="container-premium relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <SectionReveal direction="left">
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-premium-lg dark:border-white/10">
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-accent">
                  <div className="text-center text-white/90">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                      <BadgeCheck size={40} />
                    </div>
                    <p className="font-heading text-lg font-semibold">
                      BOP Freelance Services
                    </p>
                    <p className="mt-1 text-sm text-white/70">
                      Professional Portrait Placeholder
                    </p>
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass absolute -bottom-6 -right-4 rounded-2xl px-5 py-4 shadow-premium-lg sm:-right-8"
              >
                <p className="font-heading text-2xl font-bold text-primary dark:text-white">
                  5+ Yrs
                </p>
                <p className="text-xs text-muted dark:text-white/60">
                  Combined Experience
                </p>
              </motion.div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right" delay={0.1}>
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
              About Us
            </span>
            <h2 className="mt-3 text-balance font-heading text-3xl font-bold leading-tight text-ink dark:text-white sm:text-4xl">
              Your Dedicated Virtual{" "}
              <span className="gradient-text">Accounting Partner</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted dark:text-white/70">
              BOP Freelance Services is a Mombasa-based virtual accounting
              and tax specialist helping businesses across Kenya stay
              compliant, organized, and financially informed. We combine
              professional expertise with modern cloud tools to deliver
              accurate bookkeeping, tax filing, payroll, and reporting —
              without the overhead of an in-house finance team.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted dark:text-white/70">
              Whether you&apos;re a startup needing your first set of books
              or an established company looking to streamline operations,
              we tailor our services to fit your goals and budget.
            </p>

            <div className="mt-8 space-y-3 border-l-2 border-primary/15 pl-6 dark:border-white/10">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pb-5 last:pb-0"
                >
                  <span className="absolute -left-[1.72rem] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent ring-4 ring-surface dark:ring-[#0a0e1a]" />
                  <p className="text-xs font-bold uppercase tracking-wide text-secondary">
                    {item.year}
                  </p>
                  <p className="font-heading text-base font-semibold text-ink dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-sm text-muted dark:text-white/60">
                    {item.body}
                  </p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-24 grid gap-6 sm:grid-cols-3"
        >
          {missionVisionValues.map((item, i) => {
            const Icon = mvvIcons[i];
            return (
              <motion.div key={item.title} variants={staggerItem}>
                <GlassCard className="h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary dark:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-ink dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted dark:text-white/60">
                    {item.body}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
