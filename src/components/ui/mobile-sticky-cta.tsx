"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="glass-nav fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t px-4 py-3 shadow-premium-lg md:hidden"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-full border border-primary/20 py-3 text-sm font-semibold text-primary dark:text-white dark:border-white/20"
          >
            <Phone size={16} /> Call Now
          </a>
          <a
            href="#contact"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-white shadow-premium"
          >
            <CalendarCheck size={16} /> Book Free
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
