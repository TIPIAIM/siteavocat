import { useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { Link } from "react-router-dom";
import photoaccueil from "../../assets/Image/photo-accueil.avif";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic"; // Chargement direct

export default function Headerr() {
  const [imageStatus, setImageStatus] = useState("loading"); // "loading", "loaded", "error"

  return (
    <header className="relative h-[400px] sm:h-[400px] mb-20 overflow-hidden">
      {/* Chargement direct de BardeNavigationpublic */}
      <BardeNavigationpublic />

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Image de fond avec chargement différé natif */}
      <img
        src={photoaccueil}
        alt="Cabinet d'avocats"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        onLoad={() => setImageStatus("loaded")}
        onError={() => setImageStatus("error")}
        style={{ display: imageStatus === "loaded" ? "block" : "none" }}
      />

      {/* Placeholder en cas de chargement ou d'erreur */}
      {imageStatus !== "loaded" && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            backgroundColor: imageStatus === "error" ? "#f3f4f6" : "#0a223e", // Fond gris en cas d'erreur, foncé pendant le chargement
          }}
        >
          {imageStatus === "error" ? (
            <p className="text-gray-700">Image non trouvée</p>
          ) : (
            <div className="w-24 h-24 bg-teal-950 animate-pulse rounded-full" />
          )}
        </div>
      )}

      {/* Contenu principal */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6" style={{ color: "#90e0ef" }}>
          CABINET AOD AVOCATS 
        </h1>
        <Link
          to="/accueil"
          className="bg-[rgba(10,34,64,0.9)] no-underline hover:bg-[rgba(0,119,182,1)] px-6 sm:px-8 py-2 sm:py-3 rounded-md inline-flex items-center w-fit mx-auto sm:mx-0"
          style={{ color: "#00b4d8" }}
          aria-label="Retourner à la page d'accueil"
        >
          Retourner
          <ChevronsLeftRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </header>
  );
}