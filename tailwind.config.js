module.exports = {
  prefix: 'tw-',

  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'dark-yellow': '#D7A300',
        'dark-green': '#076476',
        'light-green': '#50C18D',
        'bright-green': '#16B41C',

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

