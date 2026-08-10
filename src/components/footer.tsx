"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
  Send,
  ArrowRight,
} from "lucide-react";
import {
  siteConfig,
  footerServices,
  footerQuickLinks,
  socialLinks,
} from "@/data/site";

const socialIconMap = { Facebook, Instagram, Linkedin, Twitter };

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative overflow-hidden border-t border-border bg-white dark:border-white/10 dark:bg-[#070a13]">
      <div className="container-premium py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2 font-heading text-xl font-bold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-sm text-white">
                BOP
              </span>
              <span className="text-ink dark:text-white">Freelance Services</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted dark:text-white/60">
              Virtual accounting &amp; tax specialists helping Kenyan
              businesses stay compliant, organized, and financially
              confident.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink/70 transition-colors hover:border-primary hover:text-primary dark:border-white/10 dark:text-white/60 dark:hover:text-white"
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-ink dark:text-white">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerServices.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-muted transition-colors hover:text-primary dark:text-white/60 dark:hover:text-white"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-ink dark:text-white">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerQuickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted transition-colors hover:text-primary dark:text-white/60 dark:hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wide text-ink dark:text-white">
              Stay Updated
            </h4>
            <p className="mt-4 text-sm text-muted dark:text-white/60">
              Subscribe for tax deadlines, compliance updates, and financial
              tips.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4 flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="w-full rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-ink outline-none focus:border-accent dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-transform hover:scale-105"
              >
                <Send size={15} />
              </button>
            </form>
            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-xs font-medium text-green-600 dark:text-green-400"
              >
                Thanks for subscribing!
              </motion.p>
            )}

            <div className="mt-6 space-y-2 text-sm text-muted dark:text-white/60">
              <p className="flex items-center gap-2">
                <MapPin size={14} /> {siteConfig.location}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} /> {siteConfig.phone}
              </p>
              <p className="flex items-center gap-2">
                <Mail size={14} /> {siteConfig.email}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted dark:border-white/10 dark:text-white/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <a
            href="#contact"
            className="group flex items-center gap-1.5 font-medium text-primary dark:text-white"
          >
            Start your consultation
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </footer>
  );
}
