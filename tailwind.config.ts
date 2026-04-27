import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  "#fdf2f5",
          100: "#fce7ec",
          200: "#fad0db",
          300: "#f6a9bc",
          400: "#ef7596",
          500: "#e44d74",
          600: "#d02d57",
          700: "#ae1f44",
          800: "#8B1538",
          900: "#6e1130",
          950: "#3f0619",
        },
        wine: "#8B1538",
        "wine-dark": "#6e1130",
        "wine-light": "#a91d47",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "gradient-wine":
          "linear-gradient(135deg, #8B1538 0%, #6e1130 50%, #3f0619 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #1a0a12 0%, #4a0e20 40%, #8B1538 100%)",
      },
      boxShadow: {
        wine: "0 4px 24px rgba(139, 21, 56, 0.3)",
        "wine-lg": "0 8px 40px rgba(139, 21, 56, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
