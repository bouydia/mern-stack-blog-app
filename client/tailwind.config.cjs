/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      flex: {
        9: '9 9 0',
        3: '3 3 0',
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
}
