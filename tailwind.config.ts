import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#003057",
          "primary-light": "#0a4a7a",
          "primary-dark": "#001f3a",
          secondary: "#F5F5F7",
          tertiary: "#111111",
          neutral: "#76777A",
          "neutral-light": "#a0a1a3",
        },
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        bobble: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-7px)" },
        },
      },
      animation: {
        bobble: "bobble 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
