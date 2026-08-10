"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  Target,
  CalendarClock,
  MessageCircle,
  Wallet,
  ShieldCheck,
} from "lucide-react";
import { whyChooseUs } from "@/data/site";
import SectionReveal, {
  staggerContainer,
  staggerItem,
} from "@/components/ui/section-reveal";

const iconMap = {
  Wifi,
  Target,
  CalendarClock,
  MessageCircle,
  Wallet,
  ShieldCheck,
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(243,156,18,0.15),transparent_45%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-premium relative">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-white sm:text-4xl">
            The BOP Advantage
          </h2>
          <p className="mt-4 text-base text-white/70">
            Six reasons growing businesses trust us with their books.
          </p>
        </SectionReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.1]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-secondary to-secondary/70 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
