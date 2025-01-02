import {  ChevronsLeftRight } from "lucide-react";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import photoaccueil from "../../assets/Image/photo-accueil.avif";
import LazyLoad from "react-lazyload";

import { Link } from "react-router-dom";
import { useState } from "react";
import { Placeholder } from "react-bootstrap";

export default function Headerr() {
   const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
  
  return (
  
    <header className="relative h-[400px] sm:h-[400px] mb-20 overflow-hidden">
    <BardeNavigationpublic />
    <div className="absolute inset-0 bg-black/50 z-10" />
    <LazyLoad height={400} offset={100} debounce={300} once>
      {!imageLoaded && !imageError && (
        <Placeholder>TIPTAM ...</Placeholder>
      )}
      {!imageError ? (
        <img
          src={photoaccueil}
          alt="Cabinet d'avocats"
          className="absolute inset-0 w-full h-full object-cover"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          style={imageLoaded ? { display: "block" } : { display: "none" }}
        />
      ) : (
        <Placeholder>Image n'est pas trouvable</Placeholder>
      )}
    </LazyLoad>
    <div className="relative z-20 container mx-auto px-4 h-full flex flex-col text-center sm:text-left">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6" style={{ color: "#90e0ef" }}>
      CABINET AOD AVOCATS SCPA
      </h1>
      <Link
        to="/accueil"
        className="bg-[rgba(10,34,64,0.9)] no-underline animate-pulse hover:bg-[rgba(0,119,182,1)] px-6 sm:px-8 py-2 sm:py-3 rounded-md inline-flex items-center w-fit mx-auto sm:mx-0"
        style={{ color: "#00b4d8" }}
      >
        Retourner
        <ChevronsLeftRight className="ml-2 h-5 w-5" />
      </Link>
    </div>
  </header>
  )
}
