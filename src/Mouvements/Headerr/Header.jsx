import { ChevronRight, ChevronsLeftRight } from "lucide-react";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";

import { Link } from "react-router-dom";

export default function Headerr() {
  return (
  
    <header className="relative h-[400px] sm:h-[400px] mb-20 overflow-hidden">
    <BardeNavigationpublic />
    <div className="absolute inset-0 bg-black/50 z-10" />
    <img
      src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
      alt="Cabinet d'avocats"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-20 container mx-auto px-4 h-full flex flex-col text-center sm:text-left max-w-screen-md">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6" style={{ color: "#90e0ef" }}>
        Cabinet AOD-AVOCATS-SCPA
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
  </header>)
}
