/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#02040a",
        panel: "#07111f",
        line: "rgba(148, 163, 184, 0.2)",
        cyan: "#67e8f9",
        electric: "#3b82f6",
        teal: "#14b8a6"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.45)",
        glow: "0 0 60px rgba(34, 211, 238, 0.22)"
      }
    }
  },
  plugins: []
};
