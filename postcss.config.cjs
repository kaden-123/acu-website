module.exports = {
  plugins: {
    'postcss-import': {
      resolve(id) {
        if (id === 'tailwindcss') {
          return require.resolve('tailwindcss')
        }
        return id
      }
    },
    tailwindcss: {},
    autoprefixer: {}
  }
}