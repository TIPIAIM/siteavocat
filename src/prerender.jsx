// src/prerender.jsx
import React from "react";
import { renderToString } from "react-dom/server";
import EquipeCabinetPage from "./pages/EquipeCabinetPage";

const SITE_URL = "https://www.aod-avocats.com";

export async function prerender({ url }) {
  // Ici on pré-rend /equipe-cabinet (mais le plugin peut en gérer d'autres)
  const html = renderToString(<EquipeCabinetPage />);

  const pageUrl = `${SITE_URL}${url}`;
  const title =
    "Notre Équipe | AOD AVOCATS — Avocats & Juristes à Conakry (Guinée)";
  const description =
    "Découvrez l’équipe AOD AVOCATS à Conakry : avocats et juristes orientés résultats, confidentialité, rigueur et qualité d’exécution.";
  const keywords =
    "AOD AVOCATS,AOD AVOCATS SCPA, avocat Conakry,avocat en guinée Conakry,avocat en guinée,avocat à Conakry, cabinet d’avocats Conakry, cabinet d’avocats à guinée Conakry, avocat Guinée, meilleur avocat Conakry, cabinet d’avocats avis Conakry, droit des affaires Conakry, contentieux Conakry, droit pénal Conakry, droit minier Guinée";

  return {
    html,
    head: {
      lang: "fr",
      title,
      elements: new Set([
        { type: "meta", props: { name: "description", content: description } },
        { type: "meta", props: { name: "keywords", content: keywords } },
        {
          type: "meta",
          props: {
            name: "robots",
            content:
              "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
          },
        },
        { type: "link", props: { rel: "canonical", href: pageUrl } },

        // OpenGraph minimal
        { type: "meta", props: { property: "og:title", content: title } },
        { type: "meta", props: { property: "og:description", content: description } },
        { type: "meta", props: { property: "og:url", content: pageUrl } },
        { type: "meta", props: { property: "og:type", content: "website" } },
        { type: "meta", props: { property: "og:site_name", content: "AOD AVOCATS" } },
        { type: "meta", props: { property: "og:locale", content: "fr_FR" } },

        // Twitter minimal
        { type: "meta", props: { name: "twitter:card", content: "summary" } },
        { type: "meta", props: { name: "twitter:title", content: title } },
        { type: "meta", props: { name: "twitter:description", content: description } },
      ]),
    },
  };
}
