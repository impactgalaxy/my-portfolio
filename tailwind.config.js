
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {},
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "dark", "cupcake", "business"],
  },
  darkMode: 'selector',
});