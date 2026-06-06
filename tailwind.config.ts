import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#0f1f4b",
          800: "#1e3a8a",
          700: "#1d4ed8",
          600: "#2563eb",
        },
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
          600: "#0891b2",
        },
        brand: {
          from: "#1e3a8a",
          to: "#06b6d4",
        },
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #1e3a8a 0%, #06b6d4 100%)",
        "brand-gradient-r": "linear-gradient(135deg, #06b6d4 0%, #1e3a8a 100%)",
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
