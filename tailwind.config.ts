import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"]
      },
      colors: {
        ink: "#050711",
        panel: "rgba(255, 255, 255, 0.06)",
        line: "rgba(255, 255, 255, 0.12)",
        cyanGlow: "#6de8ff",
        violetGlow: "#a986ff",
        pinkGlow: "#ff6ad5"
      },
      boxShadow: {
        glow: "0 0 40px rgba(109, 232, 255, 0.18)",
        violet: "0 0 55px rgba(169, 134, 255, 0.20)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          "50%": { transform: "translate3d(0, -18px, 0) rotate(2deg)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        pulseRing: {
          "0%": { transform: "scale(0.92)", opacity: "0.7" },
          "70%": { transform: "scale(1.15)", opacity: "0" },
          "100%": { transform: "scale(1.15)", opacity: "0" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        shimmer: "shimmer 6s linear infinite",
        marquee: "marquee 32s linear infinite",
        pulseRing: "pulseRing 2.6s ease-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
