import { useEffect, Suspense, lazy } from "react"; // Importation de useEffect, Suspense et lazy
import styled from "styled-components"; // Importation de styled-components pour les styles
import AOS from "aos"; // Importation de AOS pour les animations
import "aos/dist/aos.css"; // Importation du CSS de AOS
import tiptamcode from "./../../assets/Image/tiptamcode.avif"; // Importation de l'image de l'article
import Footer from "../Accueil/Footerr";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import CanonicalLink from "../../CanonicalLink";

// Importation dynamique des composants pour le chargement différé (lazy loading)
const BardeNavigationpublic = lazy(() =>
  import("../Navigatpublic/BardeNavigationPublic")
);
const Famille2 = lazy(() => import("./Famille2"));

// Conteneur principal avec l'image de fond
const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh; /* Hauteur minimale de la vue */
  background-image: url("img/maitactionn.avif"); /* Image de fond */
  background-size: cover; /* Couvre tout l'espace disponible */
  background-position: top; /* Alignement en haut */
  background-attachment: fixed; /* Fixe l'image lors du défilement */
`;

// Couche transparente sur l'image de fond
const Overlay = styled.div`
  position: absolute;
  inset: 0; /* Couvre tout l'espace du conteneur parent */
  background: rgba(0, 0, 0, 0.85); /* Fond noir semi-transparent */
`;

// Contenu principal
const ContentContainer = styled.div`
  position: relative;
  z-index: 10; /* Positionne au-dessus de la superposition */
  padding: 4rem 2rem; /* Espacement interne */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre le contenu horizontalement */
  text-align: center; /* Centrage du texte */
  color: white; /* Couleur du texte */

  @media (max-width: 768px) {
    padding: 2rem 1rem; /* Espacement réduit pour les petits écrans */
  }
`;

// Titre de la section
const Title = styled.h1`
  font-size: 2.5rem; /* Taille de la police */
  font-weight: bold; /* Gras */
  color: #90e0ef; /* Couleur du texte */
  margin-bottom: 2rem; /* Marge en bas */

  @media (max-width: 768px) {
    font-size: 2rem; /* Taille de police réduite pour les petits écrans */
  }

  @media (max-width: 480px) {
    font-size: 1.8rem; /* Taille de police réduite pour les très petits écrans */
  }
`;

// Paragraphe
const Paragraph = styled.p`
  font-size: 1.3rem; /* Taille de la police */
  line-height: 1.8; /* Hauteur de ligne */
  margin-bottom: 2rem; /* Marge en bas */
  max-width: 800px; /* Largeur maximale */
  text-align: left; /* Alignement du texte à gauche */

  @media (max-width: 1024px) {
    font-size: 1.1rem; /* Taille de police réduite pour les tablettes */
    line-height: 1.7rem; /* Hauteur de ligne réduite */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Taille de police réduite pour les petits écrans */
    line-height: 1.6rem; /* Hauteur de ligne réduite */
    margin: 2.1rem; /* Marge réduite */
  }
`;

// Diviseur
const Divider = styled.div`
  height: 3px; /* Hauteur du diviseur */
  width: 1000px; /* Largeur du diviseur */
  background: #90e0ef; /* Couleur du diviseur */
  margin: 2rem 0; /* Marge externe */

  @media (max-width: 480px) {
    width: 300px; /* Largeur réduite pour les petits écrans */
  }
`;
// Style pour le fallback (écran de chargement)
const FallbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Hauteur de la vue */
  background-color: #90e0ef; /* Fond bleu */
`;

const FallbackLogo = styled.img`
  width: 100px; /* Largeur du logo */
  height: auto; /* Hauteur automatique */
  animation: pulse 0.5s infinite; /* Animation de pulsation */

  @keyframes pulse {
    0% {
      transform: scale(0.8); /* Taille normale */
    }
    50% {
      transform: scale(2.2); /* Légèrement agrandi */
    }
    100% {
      transform: scale(1); /* Retour à la taille normale */
    }
  }
`;
// Bouton de retour
const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #;
  border-radius: 50%;
  box-shadow: 0 4px 1px #63b3ed;
  color: ;
  margin-bottom: 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e2e8f0;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;
// Composant principal
export default function Famillee() {
  // Initialisation de AOS pour les animations
  useEffect(() => {
    AOS.init({
      duration: 500, // Durée des animations
      once: false, // Les animations ne se déclenchent qu'une fois
    });
  }, []);

  return (
    <div className=" bg-cyan-700">
        <CanonicalLink url="https://www.aod-avocats.net" />
      {/* Conteneur avec l'image de fond */}
      <BackgroundContainer>
        {/* Couche transparente */}
        <Overlay />

        {/* Suspense pour le chargement différé des composants */}
        <Suspense
          fallback={
            <FallbackContainer>
              {/* Logo de l'entreprise avec animation */}
              <FallbackLogo src={tiptamcode} alt="TIPTAMCode" />
            </FallbackContainer>
          }
        >
          {" "}
          <BardeNavigationpublic />
          {/* Contenu principal */}
          <ContentContainer>
            {/* Bouton de retour */}
            <BackButton
              data-aos="fade-up"
              to="/nosexpertises"
              aria-label="Retour aux expertises"
            >
              <FaArrowLeft data-aos-delay="600" size={24} />
            </BackButton>

            {/* Titre de la section avec animation AOS */}
            <Title data-aos="fade-down">Droit de la Famille</Title>

            {/* Diviseur avec animation AOS */}
            <Divider data-aos="fade-up" data-aos-delay="600" />

            {/* Paragraphes avec animations AOS */}
            <Paragraph data-aos="fade-up">
              Nous avons accompagné de nombreux clients dans des affaires
              complexes telles que les divorces, la garde d’enfants, les
              pensions alimentaires et la gestion des biens familiaux. Cette
              expertise nous permet d’offrir des solutions personnalisées et
              adaptées à chaque situation.
            </Paragraph>
            <Paragraph data-aos="fade-up">
              Nous comprenons que les affaires familiales touchent à des aspects
              émotionnels et personnels. C’est pourquoi nous mettons un point
              d’honneur à offrir un accompagnement humain, en faisant preuve
              d’écoute, d’empathie et de discrétion pour vous aider à traverser
              ces moments difficiles avec sérénité.
            </Paragraph>
            <Paragraph data-aos="fade-up">
              Grâce à notre connaissance approfondie des lois et procédures,
              nous élaborons des stratégies juridiques solides pour protéger vos
              droits et obtenir les meilleurs résultats. Nous analysons chaque
              détail de votre dossier pour vous donner un avantage dans toutes
              les négociations ou audiences.
            </Paragraph>
            <Paragraph data-aos="fade-up">
              Nous pensons que chaque client mérite une attention particulière.
              Notre équipe reste disponible pour répondre à toutes vos questions
              et vous tenir informé de l’évolution de votre dossier à chaque
              étape.
            </Paragraph>
            <Paragraph data-aos="fade-up">
              Nos résultats parlent d’eux-mêmes : nous avons permis à de
              nombreux clients de trouver des solutions favorables et équitables
              à leurs conflits familiaux. Que ce soit pour préserver vos
              relations familiales ou défendre vos intérêts, nous faisons
              toujours preuve d’un engagement total.
            </Paragraph>
            <Paragraph data-aos="fade-up">
              En choisissant notre cabinet, vous optez pour une équipe qui se
              consacre pleinement à défendre vos droits avec professionnalisme,
              humanité et détermination.
            </Paragraph>
          </ContentContainer>
          {/* Composant Famille2 */}
          <Famille2 />
        </Suspense>
      </BackgroundContainer>{" "}
      <Footer />
    </div>
  );
}
