"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { pricingPlans } from "@/data/site";
import SectionReveal, {
  staggerContainer,
  staggerItem,
} from "@/components/ui/section-reveal";
import MagneticButton from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="container-premium">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Pricing
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Simple, <span className="gradient-text">Transparent</span> Packages
          </h2>
          <p className="mt-4 text-base text-muted dark:text-white/70">
            Choose a plan that fits your business today — flexible enough to
            grow with you. Final pricing is tailored after a free
            consultation.
          </p>
        </SectionReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className={cn(
                "relative flex flex-col rounded-3xl border p-8 shadow-premium transition-shadow duration-300 hover:shadow-premium-lg",
                plan.highlighted
                  ? "border-transparent bg-gradient-to-b from-primary to-accent text-white lg:-translate-y-4"
                  : "border-border bg-white dark:border-white/10 dark:bg-white/[0.04]"
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                  <Sparkles size={12} /> Most Popular
                </span>
              )}
              <h3
                className={cn(
                  "font-heading text-xl font-semibold",
                  plan.highlighted ? "text-white" : "text-ink dark:text-white"
                )}
              >
                {plan.name}
              </h3>
              <p
                className={cn(
                  "mt-2 text-sm",
                  plan.highlighted ? "text-white/70" : "text-muted dark:text-white/60"
                )}
              >
                {plan.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-extrabold">
                  {plan.price}
                </span>
                <span
                  className={cn(
                    "text-sm",
                    plan.highlighted ? "text-white/70" : "text-muted dark:text-white/50"
                  )}
                >
                  {plan.period}
                </span>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className={cn(
                        "mt-0.5 shrink-0",
                        plan.highlighted ? "text-secondary" : "text-primary dark:text-secondary"
                      )}
                    />
                    <span className={plan.highlighted ? "text-white/90" : "text-ink/80 dark:text-white/70"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <MagneticButton
                  as="a"
                  href="#contact"
                  variant={plan.highlighted ? "secondary" : "outline"}
                  className={cn(
                    "w-full",
                    !plan.highlighted && "dark:text-white dark:border-white/20"
                  )}
                >
                  Get Started
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
