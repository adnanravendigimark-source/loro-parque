import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Loro Parque Tickets exact palette:
        brand: {
          mainBg: "#FFFFFF",
          softBg: "#F7F8F4",
          primary: "#17483F",
          secondary: "#8FA79A",
          lightSage: "#E8EEE9",
          accent: "#D8C7A0",
          text: "#172321",
          secondaryText: "#65736E",
          border: "#DCE3DF",
        },
        stone: {
          50: "#FFFFFF",   // Main Background: Pure White
          100: "#F7F8F4",  // Soft Background: Natural Ivory
          200: "#DCE3DF",  // Borders: Soft Gray
          800: "#172321",  // Text: Deep Charcoal
          900: "#17483F",  // Primary Brand: Deep Forest
        },
        gold: {
          400: "#E5D7B7",
          500: "#D8C7A0",  // Accent: Warm Sand ⭐
          600: "#C4B084",
        },
        emerald: {
          900: "#0F322B",
          800: "#17483F",  // Primary Brand: Deep Forest ⭐
          700: "#22594F",
          600: "#8FA79A",  // Secondary Green: Soft Sage
          100: "#E8EEE9",  // Light Sage: Pale Sage
        },
        sage: {
          light: "#E8EEE9",
          DEFAULT: "#8FA79A",
          dark: "#65736E",
        },
        maya: {
          forest: "rgb(var(--color-maya-forest) / <alpha-value>)",
          jungle: "rgb(var(--color-maya-jungle) / <alpha-value>)",
          ivory: "#F7F8F4",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          sand: "#D8C7A0",
          sage: "#E8EEE9",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          white: "#FFFFFF",
          emerald: "rgb(var(--color-maya-emerald) / <alpha-value>)",
          dark: "#17483F",
        },
        chichen: {
          navy: "rgb(var(--color-maya-forest) / <alpha-value>)",
          ottoman: "#17483F",
          gold: "rgb(var(--color-maya-gold) / <alpha-value>)",
          charcoal: "rgb(var(--color-maya-charcoal) / <alpha-value>)",
          ivory: "#F7F8F4",
          sky: "#E8EEE9",
          sand: "#DCE3DF",
        },
        navy: {
          900: "#0F322B",
          800: "#17483F",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Fraunces", "Georgia", "ui-serif", "serif"],
        script: ["var(--font-script)", "Caveat", "Alex Brush", "cursive"],
        body: ["system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        mosaic:
          "radial-gradient(circle at 20% 20%, rgba(184,134,59,0.08) 0, transparent 40%), radial-gradient(circle at 80% 0%, rgba(24,56,46,0.12) 0, transparent 40%)",
      },
    },
  },
  plugins: [],
};
export default config;
