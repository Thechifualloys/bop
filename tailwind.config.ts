import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#173B8E",
          50: "#EAF0FB",
          100: "#CBDAF3",
          200: "#9CB8E7",
          300: "#6D96DB",
          400: "#4574CE",
          500: "#2653B0",
          600: "#1D4499",
          700: "#173B8E",
          800: "#122E6E",
          900: "#0D2150",
        },
        secondary: {
          DEFAULT: "#F39C12",
          50: "#FEF5E7",
          100: "#FDE8C4",
          200: "#FBD28E",
          300: "#F9BC58",
          400: "#F6AC33",
          500: "#F39C12",
          600: "#D6840A",
          700: "#A3650A",
          800: "#714608",
          900: "#402705",
        },
        accent: {
          DEFAULT: "#4F46E5",
          50: "#EEEDFC",
          100: "#D6D3F7",
          200: "#AEA8EF",
          300: "#867CE7",
          400: "#6C61E9",
          500: "#4F46E5",
          600: "#3B32C4",
          700: "#2D269B",
          800: "#1F1A6E",
          900: "#120F41",
        },
        surface: "#F8FAFC",
        ink: "#111827",
        muted: "#6B7280",
        border: "rgba(0,0,0,0.05)",
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(23,59,142,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(23,59,142,0.04) 1px, transparent 1px)",
        "mesh-light":
          "radial-gradient(at 20% 20%, rgba(23,59,142,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(79,70,229,0.15) 0px, transparent 50%), radial-gradient(at 40% 80%, rgba(243,156,18,0.12) 0px, transparent 50%)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.6" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        blob: "blob 12s infinite ease-in-out",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        ripple: "ripple 0.9s ease-out forwards",
        "spin-slow": "spin-slow 20s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
      boxShadow: {
        premium:
          "0 1px 2px rgba(17,24,39,0.04), 0 8px 24px -8px rgba(17,24,39,0.12)",
        "premium-lg":
          "0 4px 12px rgba(17,24,39,0.06), 0 24px 48px -12px rgba(17,24,39,0.18)",
        glow: "0 0 40px rgba(79,70,229,0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
