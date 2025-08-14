import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: './tailwind.config.js',
    }),
  ],
  base: '/',
<<<<<<< HEAD
})
=======
})
>>>>>>> 4f094a07f3d38f3f55d3cf0f063241a8ad038828
