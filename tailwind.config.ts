import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#07090F",
        accent: "#C5A880",
        gold: "#D4AF77",
        background: "#FAF9F6",
        "text-dark": "#07090F",
        "text-light": "#FAF9F6",
        muted: "#8A94A6"
      },
      boxShadow: {
        glow: "0 0 30px rgba(197, 168, 128, 0.25)",
        "glow-gold": "0 0 30px rgba(212, 175, 119, 0.3)",
        lift: "0 30px 60px -12px rgba(7, 9, 15, 0.15)",
        glass: "0 8px 32px 0 rgba(7, 9, 15, 0.04)",
        elite: "0 50px 100px -20px rgba(7, 9, 15, 0.18), 0 30px 60px -30px rgba(0, 0, 0, 0.25)"
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    }
  },
  plugins: []
};

export default config;
