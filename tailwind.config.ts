import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7D1C4A",
        accent: "#FFBF40",
      },
      fontFamily: {
        "sf-pro": ['"SF Pro"', "system-ui", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        hero: "clamp(2rem, 8vw, 3.13rem)",
        section: "clamp(1.5rem, 6vw, 2.22rem)",
        body: "clamp(0.875rem, 2vw, 1rem)",
      },
      lineHeight: {
        tight: "1.2",
        normal: "1.5",
      },
      spacing: {
        gutter: "clamp(1rem, 5vw, 2rem)",
        gap: "clamp(1rem, 3vw, 1.5rem)",
      },
    },
  },
  plugins: [],
};

export default config;
