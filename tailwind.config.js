/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")],
// }

module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    // container: {
    //   center: true,
    //   padding: '2rem',
    // },
  },
  variants: {},
  plugins: [require("daisyui")],
};
