import  { useState, lazy, Suspense } from "react";
import { ChevronsLeftRight } from "lucide-react";
import { Link } from "react-router-dom";
import photoaccueil from "../../assets/Image/photo-accueil.avif";
import logo from "../../assets/Image/TIPTAMcode.avif"; // Importez votre logo ici

// Chargement différé de BardeNavigationpublic
const BardeNavigationpublic = lazy(() => import("../Navigatpublic/BardeNavigationPublic"));

export default function Headerr() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <header className="relative h-[400px] sm:h-[400px] mb-20 overflow-hidden">
      {/* Chargement différé de BardeNavigationpublic avec logo comme fallback */}
      <Suspense fallback={
        <div className="flex items-center justify-center h-full">
          <img src={logo} alt="Logo du cabinet" className="w-24 h-24 animate-pulse" />
        </div>
      }>
        <BardeNavigationpublic />
      </Suspense>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Image de fond avec chargement différé natif */}
      <img
        src={photoaccueil}
        alt="Cabinet d'avocats"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
        onError={() => setImageError(true)}
        style={{ display: imageLoaded ? "block" : "none" }}
      />

      {/* Placeholder en cas d'erreur ou de chargement */}
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-teal-400">
          <img src={logo} alt="Logo du cabinet" className="w-24 h-24 animate-pulse" />
        </div>
      )}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <p>Image non trouvée</p>
        </div>
      )}

      {/* Contenu principal */}
      <div className="relative z-20 container mx-auto px-4 h-full flex flex-col text-center sm:text-left">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6" style={{ color: "#90e0ef" }}>
          CABINET AOD AVOCATS SCPA
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