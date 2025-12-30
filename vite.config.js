{/*
  import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    sitemap({
      // Désactive robots.txt si tu n'en as pas besoin :
      generateRobotsTxt: false,

      hostname: "https://aod-avocats.com", // Remplacez par l'URL de votre site
      routes: [
        "/",
        "/accueil",
        "/apropos",
        "/contact",
        "/article",
        "/affairee",
        "/securitee",
        "/fiscalitee",
        "/minierr",
        "/famillee",
        "/travail",
        "/penall",
        "/sport",
        "/arbitrage",
        "/contentieux",
        "/audit",
        "/conseil",
        "/asistance",

        "/adminfils",
        "/contact2",

        "/adminmere",
        "/gestclient", //Gestclient
        "/comptecl", //enregistrement des clients L'utilisateur client
        "/listeCl", //liste
        "/miseajourAclientRecup/:id",
      ],
    }),
    react(),
  ],

  build: {
    outDir: "dist", // Assurez-vous que la sortie est "dist"
    chunkSizeWarningLimit: 3000, // Ajustez cette valeur à 3000 kB (3 GB)
    rollupOptions: {
      output: {
        manualChunks: {
          // Divisez les chunks ici si nécessaire
          vendor: ["react", "react-dom", "aos"],
        },
      },
    },
  },
});

import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react"; // ou plugin-react-swc selon ton projet
import { vitePrerenderPlugin } from "vite-prerender-plugin";

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: path.resolve(__dirname, "src/prerender.jsx"),
      additionalPrerenderRoutes: ["/equipe-cabinet"],
    }),
  ],
});





// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    plugins: [react()],

    // Alias utile: import "@/..." => src/...
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },

    // Vercel: laisse "/" (ok pour domaine root)
    base: "/",

    build: {
      outDir: "dist",
      chunkSizeWarningLimit: 3000,
      reportCompressedSize: true,
      sourcemap: false,

      rollupOptions: {
        output: {
          // Chunks plus stables et plus efficaces que { vendor: [...] }
          manualChunks(id) {
            if (!id.includes("node_modules")) return;

            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom")
            )
              return "react-vendor";

            if (id.includes("framer-motion")) return "motion";
            if (id.includes("lucide-react")) return "icons";
            if (id.includes("aos")) return "aos";

            return "vendor";
          },
        },
      },
    },

    // Optionnel: supprime console/debugger seulement en PROD
    esbuild: isProd ? { drop: ["console", "debugger"] } : {},

    server: {
      port: 5173,
      strictPort: true,
    },

    preview: {
      port: 4173,
      strictPort: true,
    },
  };
});
*/}
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
