module.exports = {
  prefix: 'tw-',

  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-yellow': '#D7A300',
        'dark-green': '#076476',
        'light-green': '#50C18D',

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

