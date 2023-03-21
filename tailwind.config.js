/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins, sans-serif",
      },

      colors: {
        gray: {
          100: "#F7F7F7",
          150: "rgba(31, 41, 55, 0.7)",
        },
      },

      backgroundImage: {
        banner: "url(/assets/nike-banner.jpg)",
      },
    },
  },
  plugins: [],
};
