// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 👇 all requests starting with /api will be sent to backend
      "/api": {
        target: "http://localhost:4000", // your backend port
        changeOrigin: true,
        secure: false,
      },
    },
  },
})