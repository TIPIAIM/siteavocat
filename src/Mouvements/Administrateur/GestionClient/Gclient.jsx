import { useState, useEffect } from "react";
import { useAnimate, motion, useScroll, useTransform } from "framer-motion"; // Import des hooks d'animation de Framer Motion
import { IoReturnDownBack } from "react-icons/io5"; // Icône de retour
import { Link } from "react-router-dom"; // Pour la navigation entre les pages
import { useInView } from "react-intersection-observer"; // Pour détecter si un élément est visible à l'écran
import styled, { keyframes } from "styled-components"; // Pour le style des composants
import { MdTurnSharpLeft } from "react-icons/md"; // Icône de flèche

// Animation de dégradé de couleur pour les textes
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Style du conteneur principal
const Container = styled.div`
  min-height: 100vh; // Hauteur minimale de la vue
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("/img/logoAODnoir.avif") no-repeat center center/cover; // Image de fond
`;

// Style de l'overlay (calque semi-transparent)
const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.4); // Fond noir semi-transparent
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; // Position relative pour positionner les éléments enfants
`;

// Style du bouton de retour
const BackButton = styled(Link)`
  position: absolute; // Position absolue pour le placer en haut à gauche
  top: 1rem;
  left: 1rem;
  padding: 0.5rem;
  background: #1f2937; // Couleur de fond
  border-radius: 50%; // Bord arrondi pour un effet de cercle
  transition: background 0.8s; // Transition fluide pour le survol

  &:hover {
    background: #2563eb; // Changement de couleur au survol
  }

  svg {
    color: #90e0ef; // Couleur de l'icône
    font-size: 1.25rem; // Taille de l'icône
  }
`;

// Style du menu
const Menu = styled.nav`
  padding: 0.1rem;
  transition: background 0.8s;
  background-color: #1f2937; // Couleur de fond du menu
  border-radius: 0.1rem;
  box-shadow: 4px 4px 1px #90e0ef; // Ombre pour un effet 3D
`;

// Style du bouton du menu
const MenuButton = styled(motion.button)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: black;
  font-size: 1.2rem;
  font-weight: 800;
  cursor: pointer; // Curseur en forme de main au survol
  background: linear-gradient(30deg, #2563eb, #1e3a8a, #90e0ef); // Dégradé de fond
  background-size: 300% 300%;
  border: none;
  outline: none;
  border-radius: 0.02rem;
  padding: 0.5rem 1rem;
  animation: gradient-shift 3s infinite; // Animation du dégradé

  .arrow {
    transition: transform 2.2s; // Transition pour la rotation de l'icône
    transform-origin: center;
  }

  @keyframes gradient-shift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

// Style de la liste du menu
const MenuList = styled.ul`
  margin-top: 1.1rem;
   margin-left: 1rem;
  display: ${(props) => (props.isOpen ? "block" : "none")}; // Affichage conditionnel
  list-style: none;
  padding: 0;
  overflow: hidden;
  transition: max-height 0.5s ease-in-out; // Transition pour l'ouverture/fermeture

  li {
    margin-bottom: 0.5rem;
    opacity: ${(props) => (props.isOpen ? "1" : "0")}; // Opacité conditionnelle
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(-20px)"}; // Translation conditionnelle
    transition: opacity 0.5s, transform 0.5s; // Transition pour l'effet d'apparition

    a {
      color: #93c5fd; // Couleur du lien
      font-size: 1.2rem;
      font-weight: 700;
      text-decoration: none;
      position: relative; // Position relative pour l'effet de soulignement
      transition: color 0.3s;

      &:hover {
        color: #2563eb; // Changement de couleur au survol
      }

      /* Effet de soulignement animé */
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -2px;
        width: 100%;
        height: 2px;
        background: linear-gradient(
          90deg,
          #2563eb,
          #1e3a8a,
          #90e0ef
        ); // Dégradé de couleur
        background-size: 200% 100%;
        transform: scaleX(0); // Initialement invisible
        transform-origin: right;
        transition: transform 0.3s ease-in-out;
      }

      &:hover::after {
        transform: scaleX(1); // Soulignement visible au survol
        transform-origin: left;
      }
    }
  }
`;

// Style du titre avec animation de dégradé de couleur
const Title = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1rem;
  text-align: center;
  background: linear-gradient(50deg, #caf0f8, #023e8a, #00b4d8 ); // Dégradé de couleur
  background-size: 300% 300%;
  -webkit-background-clip: text; // Applique le dégradé au texte
  -webkit-text-fill-color: transparent; // Rend le texte transparent
  animation: ${gradientAnimation} 4s ease infinite; // Animation du dégradé
`;

// Fonction pour animer le menu
function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate(); // Hook pour les animations

  useEffect(() => {
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 }); // Animation de la flèche
  }, [isOpen, animate]);

  return scope;
}

// Composant principal
export default function Gclient() {
  const [isOpen, setIsOpen] = useState(false); // État pour gérer l'ouverture/fermeture du menu
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 }); // Détecte si l'élément est visible
  const { scrollY } = useScroll(); // Hook pour suivre le scroll
  const scale = useTransform(scrollY, [0, 300], [1.2, 1.1]); // Transformation en fonction du scroll
  const scope = useMenuAnimation(isOpen); // Applique les animations du menu

  // Phrases à afficher
  const phrases = [
    "Bienvenue a vous",
    "Espace clients",
    "Création client",
    "Enregistrement client",
    "Mise à jour client",
  ];

  // État pour gérer l'index de la phrase actuelle
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // Effet pour changer la phrase toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Cycle à travers les phrases
    }, 2500); // Change de phrase toutes les 2 secondes

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, [phrases.length]);

  return (
    <Container>
      <Overlay>
        {/* Bouton de retour */}
        <BackButton to="/admindasboardgenerale">
          <IoReturnDownBack />
        </BackButton>

        {/* Titre avec animation de changement de phrase */}
        <motion.div
          ref={ref}
          style={{ scale }}
          className={`text-center ${
            inView ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 mb-10`}
        >
          <Title
            key={currentPhraseIndex} // Force la réinitialisation de l'animation à chaque changement de phrase
            initial={{ opacity: 0, y: 20 }} // État initial de l'animation
            animate={{ opacity: 1, y: 0 }} // État animé
            exit={{ opacity: 0, y: -20 }} // État de sortie
            transition={{ duration: 0.5 }} // Durée de l'animation
          >
            {phrases[currentPhraseIndex]}
          </Title>
        </motion.div>

        {/* Menu interactif */}
        <Menu ref={scope}>
          <MenuButton
            whileTap={{ scale: 0.95 }} // Animation au clic
            onClick={() => setIsOpen(!isOpen)} // Gère l'ouverture/fermeture du menu
          >
            Choisissez une action ?
            <div className="arrow">
              <MdTurnSharpLeft />
            </div>
          </MenuButton>

          {/* Liste des options du menu */}
          <MenuList isOpen={isOpen}>
            <li>
              <Link to="/comptecl">Ajouter un nouveau client</Link>
            </li>
            <li>
              <Link to="/listeCl">Afficher la liste des clients</Link>
            </li>
          </MenuList>
        </Menu>
      </Overlay>
    </Container>
  );
}