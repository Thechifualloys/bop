"use client";

import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  PieChart,
  Calculator,
  Wallet,
  Receipt,
  BarChart3,
  Coins,
} from "lucide-react";

const icons = [
  { Icon: DollarSign, top: "12%", left: "8%", size: 28, duration: 7, delay: 0 },
  { Icon: TrendingUp, top: "22%", left: "88%", size: 32, duration: 8, delay: 1 },
  { Icon: PieChart, top: "68%", left: "6%", size: 26, duration: 6.5, delay: 0.5 },
  { Icon: Calculator, top: "78%", left: "82%", size: 30, duration: 7.5, delay: 1.5 },
  { Icon: Wallet, top: "45%", left: "94%", size: 24, duration: 6, delay: 2 },
  { Icon: Receipt, top: "8%", left: "48%", size: 22, duration: 8.5, delay: 0.8 },
  { Icon: BarChart3, top: "88%", left: "40%", size: 26, duration: 7, delay: 1.2 },
  { Icon: Coins, top: "35%", left: "3%", size: 24, duration: 9, delay: 0.3 },
];

// Decorative floating finance-themed icons for the hero background.
export default function FloatingIcons() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
      {icons.map(({ Icon, top, left, size, duration, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-primary/20 dark:text-white/10"
          style={{ top, left }}
          animate={{ y: [0, -18, 0], rotate: [0, 6, 0] }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </motion.div>
      ))}
    </div>
  );
}
