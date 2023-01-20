/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue, js}"
  ],
  theme: {
    extend: {
      colors: {
        indigo: '#28406F',
        sapphire: '#1B6475',
        originBlue: '#0370EF'
      }
    },
    backgroundImage: {
      docktorIllustration: "url('/src/assets/images/docktor-illustration.png')",
      nurseIllustration: "url('/src/assets/images/nurse-illustration.png')"
    },
    transitionProperty: {
      'width': 'width',
      'margin': 'margin',
      'top': 'top'
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
