module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}", 
        "./src/*.{js,jsx}"            
      ],
    theme: {
      extend: {
        colors: {
          'teal': '#5DAAA3',
          'light-mint': '#DFF5F0',
          'warm-gray': '#F6F6F6',
          'slate-blue-gray': '#6C7A89',
          'soft-peach': '#FBE8D3',
          'charcoal-gray': '#2E2E2E', 
        },
      },
    },
  }