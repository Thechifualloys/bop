"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { heroStats, siteConfig } from "@/data/site";
import MagneticButton from "@/components/ui/magnetic-button";
import GradientBlobs from "@/components/ui/gradient-blobs";
import FloatingIcons from "@/components/ui/floating-icons";
import Particles from "@/components/ui/particles";
import AnimatedCounter from "@/components/ui/animated-counter";

export default function Hero() {
  const whatsappHref = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-mesh-light pt-28 dark:bg-none"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
      />
      <GradientBlobs variant="hero" />
      <FloatingIcons />
      <Particles count={26} />

      {/* Fade to surface at the bottom of the hero */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-surface dark:to-[#0a0e1a]" />

      <div className="container-premium relative z-10 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mx-auto mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-primary dark:text-white"
          >
            <Sparkles size={14} className="text-secondary" />
            Trusted Virtual Accounting Partner &middot; Mombasa, Kenya
          </motion.div>

          <h1 className="text-balance font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-ink dark:text-white sm:text-5xl lg:text-6xl">
            Virtual Accounting &amp; Tax Services That{" "}
            <span className="gradient-text">Grow Your Business.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted dark:text-white/70"
          >
            Empowering businesses with accurate financial records, tax
            compliance, payroll management, and strategic financial
            reporting — fully remote, fully reliable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MagneticButton as="a" href="#contact" variant="primary">
              Book Free Consultation <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton
              as="a"
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              <MessageCircle size={16} /> WhatsApp Us
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 flex items-center justify-center gap-2 text-xs text-muted dark:text-white/60"
          >
            <ShieldCheck size={14} className="text-primary dark:text-secondary" />
            KRA-compliant &middot; Confidential &middot; No long-term lock-in
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="glass mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 rounded-3xl px-6 py-8 shadow-premium-lg sm:grid-cols-4 sm:gap-4"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl font-bold text-primary dark:text-white sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-xs font-medium text-muted dark:text-white/60 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
