import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#f5f3ec",
          50: "#fbfaf5",
          100: "#f5f3ec",
          200: "#ece9de",
          300: "#dcd7c4",
        },
        ink: {
          DEFAULT: "#0c0c0c",
          50: "#f4f4f3",
          100: "#e3e2df",
          200: "#c8c6c0",
          300: "#a3a09a",
          400: "#7a7873",
          500: "#5a5852",
          600: "#3f3d39",
          700: "#2a2926",
          800: "#181816",
          900: "#0c0c0c",
        },
        card: "#ece9de",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
