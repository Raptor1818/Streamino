import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path"

// https://vitejs.dev/config
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    mainFields: ['module', 'jsnext:main', 'jsnext'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
