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
        panel: "#090713",
        line: "rgba(148, 163, 184, 0.2)",
        cyan: "#a855f7",
        electric: "#6d28d9",
        teal: "#c084fc"
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.45)",
        glow: "0 0 70px rgba(109, 40, 217, 0.30)"
      }
    }
  },
  plugins: []
};
