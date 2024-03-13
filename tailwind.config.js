// tailwind.config.js

module.exports = {
  content:  [
    './pages/**/*.{html,js, jsx, ts, tsx}',
    './src/**/*.{html,js, jsx, ts, tsx}',
   
    ],
  theme: {
    extend: {
      colors: {
        primary: '#222831',
        secondary: '#31363F',
        accent: '#76ABAE',
        background: '#EEEEEE',
      },
   
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}
