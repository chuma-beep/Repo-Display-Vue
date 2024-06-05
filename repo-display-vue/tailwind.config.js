/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
  variants: {
    extend: {},
  },
};

// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//   purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   darkMode: false, // or 'media' or 'class'
//   variants: {
//     extend: {},
//   },
// };
