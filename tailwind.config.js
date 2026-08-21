/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#08090D",
        panel: "#101218",
        card: "#151821",
        text: "#F5F7FA",
        muted: "#9AA3B2",
        accent: "#7C5CFF",
        aqua: "#20D9C3",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(124, 92, 255, 0.22)",
      },
    },
  },
  plugins: [],
};
