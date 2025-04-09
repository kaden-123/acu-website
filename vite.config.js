// import { defineConfig } from 'vite'
// import tailwindcss from '@tailwindcss/vite'
// import react from '@vitejs/plugin-react-swc'

// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss({
//       config: './tailwind.config.js' 
//     }),
//   ],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  optimizeDeps: {
    include: ['tailwindcss'],
    exclude: ['postcss-import']
  },
  plugins: [react()]
})

