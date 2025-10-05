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
          DEFAULT: "#1e3a5f",
          dark: "#152b47",
        },
        blue: {
          light: "#4a90e2",
          DEFAULT: "#4a90e2",
        },
        success: "#4caf50",
        danger: "#f44336",
        background: "#f5f7fa",
        card: "#ffffff",
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
