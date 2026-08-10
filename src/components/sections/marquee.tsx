"use client";

import { softwareLogos } from "@/data/site";

export default function Marquee() {
  const items = [...softwareLogos, ...softwareLogos];

  return (
    <section className="relative overflow-hidden border-y border-border py-10 dark:border-white/10">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-muted dark:text-white/40">
        We work with the tools you already trust
      </p>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max shrink-0 animate-marquee items-center gap-16 pr-16">
          {items.map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="whitespace-nowrap font-heading text-xl font-bold text-ink/30 transition-colors hover:text-primary dark:text-white/25 dark:hover:text-white"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
