import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#001F3F",
        accent: "#00D4A5",
        gold: "#D4AF77",
        background: "#F8F7F4",
        "text-dark": "#0F172A",
        "text-light": "#F8F7F4",
        muted: "#64748B"
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 212, 165, 0.3)",
        "glow-gold": "0 0 30px rgba(212, 175, 119, 0.3)",
        lift: "0 30px 60px -12px rgba(0, 31, 63, 0.12)",
        glass: "0 8px 32px 0 rgba(0, 31, 63, 0.08)"
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
