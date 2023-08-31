/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './mdx-components.jsx'
  ],
  theme: {
    fontFamily: {
      poppins: ['var(--font-poppins)', ...fontFamily.sans]
    },
    extend: {
      colors: {
        'primary-dark': '#1D1F21',
        'primary-light': '#FAFAFA',
        secondary: '#9333EA'
      }
    },
    screens: {
      xsm: '445px',
      xs: { min: '475px' },
      ...defaultTheme.screens,
      'max-md': { max: '768px' },
      'max-xs': { max: '475px' }
    }
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')]
}
