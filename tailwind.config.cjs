/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ← вот эта строка
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: { extend: {} },
  plugins: [],
}