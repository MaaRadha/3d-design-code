/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "text-dark": "#4C4747",
        "bg-gray": "#e5e6e0",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bgPic.jpg')",
      },
      fontFamily: {
        redish: ["Red Hat Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
