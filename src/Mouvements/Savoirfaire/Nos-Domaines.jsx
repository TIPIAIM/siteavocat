import { useEffect } from "react"; // Importation de useEffect pour les effets de bord
import AOS from "aos"; // Importation de AOS pour les animations
import "aos/dist/aos.css"; // Importation du CSS de AOS
import styled from "styled-components"; // Importation de styled-components pour les styles
import Footer from "../Accueil/Footerr"; // Importation du composant Footer
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic"; // Importation de la barre de navigation publique
import affair from "./../../assets/Image/affair.avif"; // Importation des images
import familled from "./../../assets/Image/familled.avif";
import fisc from "./../../assets/Image/fisc.avif";
import envir from "./../../assets/Image/envir.avif";
//import securitesocial from "./../../assets/Image/securitesocial.avif";
import travail from "./../../assets/Image/travail.avif";
import image from "./../../assets/Image/image.avif";
import AFFF from "./../../assets/Image/AFFF.webp";
import arbitra from "./../../assets/Image/arbitra.avif";
import CanonicalLink from "../../CanonicalLink";

// Conteneur principal avec l'image d'arrière-plan
const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh; /* Hauteur minimale de la vue */
  background-image: url("img/logoAODnoir.avif"); /* Image de fond */
  background-size: cover; /* Couvre tout l'espace disponible */
  background-position: center; /* Centre l'image */
  background-attachment: fixed; /* Fixe l'image lors du défilement */
`;

// Couche transparente sur l'image d'arrière-plan
const Overlay = styled.div`
  position: absolute;
  inset: 0; /* Couvre tout l'espace du conteneur parent */
  background: rgba(0, 0, 0, 0.9); /* Fond noir semi-transparent */
`;

// Contenu principal
const ContentContainer = styled.div`
  position: relative;
  z-index: 10; /* Positionne au-dessus de la superposition */
  padding: 2rem 1rem; /* Espacement interne */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre le contenu horizontalement */

  h1 {
    font-size: 2.5rem; /* Taille de la police */
    color: #00b4d8; /* Couleur du texte */
    margin-bottom: 1.5rem; /* Marge en bas */
    text-align: center; /* Centrage du texte */
    text-shadow: 0px 0px 1px rgba(144, 224, 239, 0.9); /* Ombre portée */
    box-shadow: 0px 4px 10px rgba(144, 224, 239, 0.1); /* Ombre bleue */
    padding: 0.5rem 1rem; /* Espacement interne */
    border-radius: 8px; /* Bordures arrondies */
  }

  p {
    font-size: 1rem;
    color: #90e0ef; /* Couleur du texte */
    text-align: center; /* Centrage du texte */
    max-width: 800px; /* Largeur maximale */
    margin-top: 1rem; /* Marge en bas */

    margin-bottom: 1.5rem; /* Marge en bas */
    line-height: 1.6; /* Hauteur de ligne */
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem; /* Taille de police réduite pour les petits écrans */
    }

    p {
      font-size: 1rem; /* Taille de police réduite pour les petits écrans */
      text-align: left; /* Centrage du texte */
      padding: 0 2rem;
    }
  }
`;

// Grille d'éléments
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(280px, 1fr)
  ); /* Grille responsive */
  gap: 2.1rem; /* Espacement entre les cartes */
  width: 100%;
  max-width: 1200px; /* Largeur maximale */
  margin-bottom: 8rem; /* Marge en bas */
  margin-top: 2rem; /* Marge en haut */
  padding: 1.2rem; /* Espacement interne */

  @media (max-width: 480px) {
    gap: 2.5rem; /* Espacement réduit pour les petits écrans */
  }
`;

// Carte individuelle
const Card = styled.div`
  position: relative;
  background: #03045e; /* Fond bleu foncé */
  border-radius: 10px; /* Bordures arrondies */
  overflow: hidden; /* Cache le contenu débordant */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Ombre */
  transition: transform 0.2s ease-in-out; /* Animation au survol */

  &:hover {
    transform: scale(1.05); /* Effet de zoom au survol */
  }

  img {
    width: 100%;
    height: 180px; /* Hauteur fixe pour les images */
    object-fit: cover; /* Ajuste l'image pour couvrir le conteneur */
    loading: lazy; // Chargement différé pour améliorer les performances
  }

  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.8rem; /* Espacement interne */
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9),
      rgba(144, 224, 239, 0.2)
    ); /* Dégradé pour le texte */
    color: #90e0ef; /* Couleur du texte */

    h3 {
      font-size: 1rem; /* Taille de la police */
      margin-bottom: 0.3rem; /* Marge en bas */
    }

    a {
      font-size: 1.2rem; /* Taille de la police */
      font-weight: bold; /* Gras */
      color: #90e0ef; /* Couleur du texte */
      text-decoration: none; /* Supprime le soulignement */

      &:hover {
        text-decoration: underline; /* Soulignement au survol */
      }
    }
  }

  @media (max-width: 480px) {
    img {
      height: 150px; /* Hauteur réduite pour les petits écrans */
    }

    .info {
      padding: 0.5rem; /* Espacement interne réduit */

      h3 {
        font-size: 0.9rem; /* Taille de police réduite */
      }

      a {
        font-size: 0.8rem; /* Taille de police réduite */
      }
    }
  }
`;

// Composant principal
export default function Nosexpertise() {
  // Initialisation d'AOS pour les animations
  useEffect(() => {
    AOS.init({
      duration: 500, // Durée des animations
      once: false, // Les animations se répètent à chaque fois que l'élément entre dans la vue
    });
  }, []);

  // Données des cartes
  const images = [
    {
      src: affair,
      alt: "Droit des affaires",
      text: "Droit des affaires",
      link: "/affairee",
    },

    {
      src: fisc,
      alt: "Droit fiscal",
      text: "Droit fiscal",
      link: "/fiscalitee",
    },
    {
      src: envir,
      alt: "Minier",
      text: "Minier et Environnementale",
      link: "/minierr",
    },
    // {
    //   src: securitesocial,
    //   alt: "Sociale et Securité sociale",
    //   text: "Sociale et Securité sociale",
    //   link: "/securitee",
    // },
    {
      src: travail,
      alt: "LE DROIT DU TRVAIL ET SECURITÉ SOCIALE",
      text: "Droit du Travail et securité socile",
      link: "/travail",
    },
    { src: image, alt: "Pénal", text: "Droit Pénal", link: "/penall" },
    { src: AFFF, alt: "Sport", text: "Droit du Sport", link: "/sport" },
    { src: arbitra, alt: "Arbitrage", text: "Arbitrage", link: "/arbitrage" },
    {
      src: familled,
      alt: "Droit de la Famille",
      text: "Droit de la Famille",
      link: "/famillee",
    },
  ];

  return (
    <div>
        <CanonicalLink url="https://www.aod-avocats.net" />
      {/* Conteneur avec l'image de fond */}
      <BackgroundContainer>
        {/* Couche transparente */}
        <Overlay />

        {/* Contenu principal */}
        <ContentContainer>
          {/* Barre de navigation publique */}
          <BardeNavigationpublic />

          {/* Titre de la section */}
          <h1 data-aos="fade-don">Nos Expertises</h1>

          {/* Texte descriptif */}
          <p data-aos="fade-up" data-aos-delay="100">
            Forts de notre expérience et de notre engagement, nous offrons à nos
            clients une expertise juridique de haut niveau. Notre cabinet
            d`avocats est reconnu pour son professionnalisme, sa rigueur et sa
            capacité à fournir des solutions sur mesure dans tous les domaines
            du droit.
          </p>

          {/* Grille d'expertise */}
          <GridContainer>
            {images.map((image, index) => (
              <Card
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50} // Délai pour un effet en cascade
                aria-label={image.text} // Accessibilité
              >
                {/* Image de la carte */}
                <img src={image.src} alt={image.alt} loading="lazy" />

                {/* Informations de la carte */}
                <div
                  data-aos-delay={index * 50}
                  data-aos="fade-right"
                  className="info"
                >
                  <h3>{image.text}</h3>
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer" // Sécurité pour les liens externes
                  >
                    Voir plus ...
                  </a>
                </div>
              </Card>
            ))}
          </GridContainer>
        </ContentContainer>
      </BackgroundContainer>

      {/* Pied de page */}
      <Footer />
    </div>
  );
}
