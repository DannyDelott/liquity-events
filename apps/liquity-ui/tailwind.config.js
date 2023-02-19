/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "liquity-blue": "#2Eb6EA",
        "liquity-purple": "#745DDF",
        // TODO: come up with a better name for this, this is the color of the
        // app background. The background is a gradient that passes through this
        // color.
        "card-shadow": "#dad4ec",
      },
    },
  },
  daisyui: {
    prefix: "daisy-",
    theme: ["winter"],
  },
  plugins: [require("tailwindcss-debug-screens"), require("daisyui")],
};
