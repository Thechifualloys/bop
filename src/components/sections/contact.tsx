"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/site";
import SectionReveal from "@/components/ui/section-reveal";
import MagneticButton from "@/components/ui/magnetic-button";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (values: FormState): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.phone.trim()) next.phone = "Please enter your phone number.";
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Message should be at least 10 characters.";
    }
    return next;
  };

  const handleChange = (
    field: keyof FormState,
    value: string
  ) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validate(form);
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setSubmitting(true);
    // Simulated submission — wire up to an API route or form service in production.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm(initialState);
      setTimeout(() => setSubmitted(false), 5000);
    }, 900);
  };

  const inputClass = (field: keyof FormState) =>
    cn(
      "w-full rounded-xl border bg-white/70 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-muted/60 focus:border-accent dark:bg-white/[0.04] dark:text-white",
      errors[field] ? "border-red-400" : "border-border dark:border-white/10"
    );

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container-premium">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
            Get In Touch
          </span>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Let&apos;s Talk About Your <span className="gradient-text">Business Finances</span>
          </h2>
          <p className="mt-4 text-base text-muted dark:text-white/70">
            Fill out the form below and we&apos;ll get back to you within a
            few hours.
          </p>
        </SectionReveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          <SectionReveal direction="left" className="lg:col-span-2">
            <div className="flex h-full flex-col gap-5">
              {[
                { icon: MapPin, label: "Location", value: siteConfig.location },
                { icon: Phone, label: "Phone", value: siteConfig.phone },
                { icon: Mail, label: "Email", value: siteConfig.email },
              ].map((item) => (
                <div
                  key={item.label}
                  className="glass flex items-start gap-4 rounded-2xl p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-white">
                    <item.icon size={19} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted dark:text-white/50">
                      {item.label}
                    </p>
                    <p className="mt-0.5 font-medium text-ink dark:text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
              <div className="glass flex-1 rounded-2xl p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted dark:text-white/50">
                  Business Hours
                </p>
                <div className="mt-2 space-y-1 text-sm text-ink/80 dark:text-white/70">
                  <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
                  <p>Saturday: 9:00 AM – 1:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right" delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass relative overflow-hidden rounded-3xl p-6 shadow-premium-lg sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink dark:text-white">
                    Full Name
                  </label>
                  <input
                    id="name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={inputClass("name")}
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink dark:text-white">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={inputClass("email")}
                    placeholder="jane@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink dark:text-white">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className={inputClass("phone")}
                    placeholder="+254 7XX XXX XXX"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink dark:text-white">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    className={inputClass("service")}
                  >
                    <option value="">Select a service</option>
                    <option>Bookkeeping & Reconciliations</option>
                    <option>Tax Consulting & Compliance</option>
                    <option>Financial Reporting</option>
                    <option>Payroll & Software Setup</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink dark:text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={inputClass("message")}
                  placeholder="Tell us a bit about your business and what you need help with..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <div className="mt-6">
                <MagneticButton
                  as="button"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  {submitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                </MagneticButton>
              </div>

              <motion.div
                initial={false}
                animate={{
                  opacity: submitted ? 1 : 0,
                  y: submitted ? 0 : 10,
                  pointerEvents: submitted ? "auto" : "none",
                }}
                className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm text-green-700 dark:bg-green-500/10 dark:text-green-400"
              >
                <CheckCircle2 size={16} />
                Thank you! Your message has been received — we&apos;ll be in
                touch shortly.
              </motion.div>
            </form>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
