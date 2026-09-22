/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "'Plus Jakarta Sans'", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        background: {
          light: "#ffffff",
          dark: "#09090b",
        },
      },
    },
  },
  plugins: [],
}
