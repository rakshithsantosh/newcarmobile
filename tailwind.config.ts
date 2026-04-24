import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        graphite: "#0a0a0a",
        line: "rgba(255,255,255,0.1)",
        gold: "#c7a45a",
        cream: "#f6f2eb",
        muted: "#9b9488"
      },
      boxShadow: {
        glow: "0 18px 60px rgba(199, 164, 90, 0.24)",
        lift: "0 20px 50px rgba(0, 0, 0, 0.5)",
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)"
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
