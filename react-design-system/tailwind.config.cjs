/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 13,
      sm: 14,
      md: 15,
      lg: 16,
      xl: 19,
      '2xl': 20,
    },
    colors: {
      'black': '#0F1419',
      'dark-1': '#17202A',
      'dark-2': '#1C2733',
      'dark-3': '#283340',
      'dark-4': '#3A444C',
      'dark-5': '#5B7083',
      'dark-6': '#8899A6',
      'dark-7': '#EBEEF0',
      'dark-8': '#F7F9FA',
      'primary-blue': '#1DA1F2',
      'dark-blue': '#0073BF',
      'white': '#FFFFFF',
      'transparent': 'transparent',
    },
    extend: {
      fontFamily : { 
        sans: 'Poppins, sans-serif'
      },
    },
    spacing: {
      '1.3': '.3438rem',
      '3.7': '.9375rem',
      '2.5': '0.625rem',
      '22': '5.8125rem',

      
    }
  },
  plugins: [],
}
