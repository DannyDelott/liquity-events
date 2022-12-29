/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "liquity-blue": "#2Eb6EA",
        "liquity-purple": "#745DDF",
      },
    },
  },
  daisyui: {
    prefix: "daisy-",
    theme: ["winter"],
  },
  plugins: [require("daisyui")],
};
