 
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; 
// https://vite.dev/config/ 
export default defineConfig({ 
  plugins: [ react() ],
  server: { host: true }
,
   build: { outDir: "dist", 
    chunkSizeWarningLimit: 3000, 
    rollupOptions: { output: { manualChunks: { vendor: ["react", "react-dom", "aos"],

     }, }, }, }, });
