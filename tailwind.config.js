/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './node_modules/flowbite-react/**/*.js',
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//     './public/**/*.html',
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require('flowbite/plugin')],
// };

module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
      },
    },
  },
};
