/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#ffffff",
          900: "#f8fafc",
          800: "#e2e8f0",
          700: "#cbd5e1",
          400: "#64748b",
          200: "#0f172a",
        },
        accent: {
          400: "#0284c7",
          500: "#0369a1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
