/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      width: {
        14: '3.5rem',
        44: '11rem',
        60: '15rem',
        88: '22rem',
        160: '40rem',
      },
      height: {
        14: '3.5rem',
        68: '17rem',
        72: '18rem',
        80: '20rem',
      },
      gridTemplateColumns: {
        specialBookdCard: 'repeat(2, minmax(0, auto))',
      },
      inset: {
        inherit: 'inherit',
      },
    },
    colors: {
      primary: {
        default: '#4B6099',
        dark: '#273762',
      },
      secondary: {
        default: '#F5615F',
        dark: '#C93E3C',
      },
      black: '#0D0D0D',
      cream: '#F6F0EB',
      white: '#ffffff',
      gray: {
        lighter: '#97887C20',
        default: '#97887C',
        dark: '#C4C4C4',
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      robotoSlab: ['Roboto Slab', 'serif'],
    },
  },
  variants: {
    margin: ['responsive', 'first', 'last'],
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
