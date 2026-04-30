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
        gold: "#00C853", // Using gold variable for our emerald accent as per instructions
        cream: "#f6f2eb",
        muted: "#9b9488",
        navy: "#0A3D62"
      },
      boxShadow: {
        glow: "0 18px 60px rgba(0, 200, 83, 0.24)", // Emerald glow
        lift: "0 20px 50px rgba(0, 0, 0, 0.5)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" // Stronger glass shadow
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
