import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    sitemap({
      hostname: "https://aod-avocats-scpa.vercel.app", // Remplacez par l'URL de votre site
      routes: [
        "/",
        "/accueil",
        "/apropos",
        "/contact",
        //"/contact2",
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
      ],
    }),
    react(),
  ],

  //

  build: {
    outDir: "dist", // Assurez-vous que la sortie est "dist"
  },
});
