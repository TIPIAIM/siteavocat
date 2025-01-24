import "./gestclient.css"; 
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { IoReturnDownBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useViewportScroll, useTransform } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });
    animate(
      "ul",
      {
        clipPath: isOpen ? "inset(0% 0% 0% 0% round 10px)" : "inset(10% 50% 90% 50% round 10px)",
      },
      { type: "spring", bounce: 0, duration: 0.5 }
    );
    animate(
      "li",
      isOpen ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.2, filter: "blur(20px)" },
      { duration: 0.1, delay: isOpen ? staggerMenuItems : 0 }
    );
  }, [isOpen, animate]);

  return scope;
}

export default function Gestionclient() {
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const scope = useMenuAnimation(isOpen);

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('/pictures/logoAODnoir.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="  bg-opacity-60 min-h-screen w-full flex flex-col items-center justify-center">
        {/* Bouton de retour */}
        <Link to='/admindasboardgenerale' className="absolute top-5 left-4 p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition-all duration-200">
          <IoReturnDownBack size={20} className="text-white" />
        </Link>

        {/* Titre principal */}
        <motion.div
          ref={ref}
          style={{ scale }}
          className={`text-center ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 mb-8`}
        >
         {/* <h1 className="text-2xl md:text-4xl font-serif font-bold text-blue-200">
            Gestion de l'information de nos clients
          </h1>*/}
        </motion.div>

        {/* Menu de gestion des clients */}
        <nav className="menu px-2 py-1 bg-blue-900  rounded-lg shadow-lg" ref={scope}>
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex font-serif items-center justify-between w-full text-blue-900 text-lg font-semibold"
          >
            Choisissez une action   ?
            <div className="arrow " style={{ transformOrigin: "50% 55%" }}>
              <svg width="25" height="25" viewBox="10 0 20 20">
                <path d="M0 0 L 20 0 L 10 16" />
              </svg>
            </div>
          </motion.button>

          <ul
            className={`mt-1 space-y-2 ${isOpen ? 'block' : 'hidden'}`}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            <li>
              <Link to="/ajouterclient" className="text-lg text-blue-300 font-serif font-medium no-underline hover:text-blue-400">
                Ajouter un nouveau client
              </Link>
            </li>
            <li>
              <Link to="/ajouterClientsRecupliste" className="text-lg font-serif font-medium text-blue-300 no-underline hover:text-blue-300">
                Afficher la liste des clients
              </Link>
            </li>
            <li>
              <Link href="/#" className="text-lg  font-serif font-medium text-blue-300 no-underline hover:text-blue-300">
                Tableau récapitulatif
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <style jsx>{`
        @media screen and (max-width: 640px) {
          h1 {
            font-size: 1.5rem;
          }
        }

        @media print {
          @page {
            size: landscape;
          }
          body {
            -webkit-print-color-adjust: exact;
          }
          .print:hidden {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
