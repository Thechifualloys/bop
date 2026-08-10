"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";
import MagneticButton from "@/components/ui/magnetic-button";

export default function CTA() {
  const whatsappHref = `https://wa.me/${siteConfig.phoneRaw}?text=${encodeURIComponent(
    siteConfig.whatsappMessage
  )}`;

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary to-accent px-8 py-16 text-center shadow-premium-lg sm:px-16 sm:py-20"
        >
          <div
            aria-hidden
            className="absolute -top-24 -left-24 h-72 w-72 animate-blob rounded-full bg-secondary/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-24 -right-24 h-72 w-72 animate-blob rounded-full bg-white/10 blur-3xl [animation-delay:4s]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.15),transparent_60%)]"
          />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Ready to Streamline Your Business Finances?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-balance text-white/80">
              Book your free consultation today and discover how effortless
              accounting can be.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton
                as="a"
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                variant="secondary"
              >
                <Phone size={16} /> Call Now
              </MagneticButton>
              <MagneticButton
                as="a"
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
              >
                <MessageCircle size={16} /> WhatsApp
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
