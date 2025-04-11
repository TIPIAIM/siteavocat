import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    sitemap({
      // Désactive robots.txt si tu n'en as pas besoin :
      generateRobotsTxt: false,

      hostname: "https://aod-avocats.net", // Remplacez par l'URL de votre site
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
        "gestclient", //Gestclient
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
