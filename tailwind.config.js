/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logoFont: ["Agu Display", "sans-serif"],
        body: ["Poppins"],
      },
      // fontFamily: { logoFont: "Agu Display" },
    },
  },
  plugins: [require("daisyui")],
};
