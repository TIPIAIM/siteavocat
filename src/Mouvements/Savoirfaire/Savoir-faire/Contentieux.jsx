import  { useEffect } from "react"; // Importation de React et useEffect
import AOS from "aos"; // Importation de AOS pour les animations
import "aos/dist/aos.css"; // Importation du CSS de AOS
import styled from "styled-components"; // Importation de styled-components pour les styles
import BardeNavigationpublic from "../../Navigatpublic/BardeNavigationPublic"; // Importation de la barre de navigation publique
import Footer from "../../Accueil/Footerr"; // Importation du composant Footer
import logoAODnoir from "./../../../assets/Image/logoAODnoir.avif"; // Importation des images
import FISCAL from "./../../../assets/Image/FISCAL.avif";
import arbitra from "./../../../assets/Image/arbitra.avif";
import travail from "./../../../assets/Image/travail.avif";
import image from "./../../../assets/Image/FISCAL.avif";

// Conteneur principal avec fond fixe
const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh; /* Hauteur minimale de la vue */
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("img/confience.avif"); /* Image de fond avec dégradé sombre */
  background-size: cover; /* Couvre tout l'espace disponible */
  background-position: center; /* Centre l'image */
  background-attachment: fixed; /* Fond fixe lors du défilement */

  @media (max-width: 768px) {
    background-attachment: scroll; /* Désactive le fond fixe sur les petits écrans */
  }
`;

// Couche transparente
const Overlay = styled.div`
  position: absolute;
  inset: 0; /* Couvre tout l'espace du conteneur parent */
`;

// Conteneur du contenu
const ContentContainer = styled.div`
  position: relative;
  z-index: 10; /* Positionne au-dessus de la superposition */
  padding: 4rem 2rem; /* Espacement interne */
  display: flex;
  flex-direction: column;
  align-items: center; /* Centre le contenu horizontalement */
  text-align: center; /* Centrage du texte */
  color: black; /* Couleur du texte par défaut */
  max-width: 1200px; /* Largeur maximale du contenu */
  margin: 0 auto; /* Centrage horizontal */

  @media (max-width: 1024px) {
    padding: 2rem 1rem; /* Espacement réduit pour les tablettes */
  }

  @media (max-width: 768px) {
    padding: 1rem; /* Espacement réduit pour les petits écrans */
  }
`;

// Titre principal
const Title = styled.h1`
  font-size: 3rem; /* Taille de la police */
  font-weight: bold; /* Gras */
  color: #90e0ef; /* Couleur du texte */
  margin-bottom: 2rem; /* Marge en bas */
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5); /* Ombre du texte */

  @media (max-width: 1024px) {
    font-size: 2.5rem; /* Taille de police réduite pour les tablettes */
  }

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Taille de police réduite pour les petits écrans */
  }
`;

// Conteneur des paragraphes
const ParagraphContainer = styled.div`
  display: flex;
  align-items: flex-start; /* Alignement en haut */
  margin-bottom: 2rem; /* Marge en bas */
  max-width: 1000px; /* Largeur maximale */
  gap: 2rem; /* Espacement entre les éléments */
  border-radius: 0px; /* Bordures arrondies */
  padding: 1.5rem; /* Espacement interne */
  background: rgba(10, 34, 64, 0.5); /* Fond semi-transparent */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Ombre */

  @media (max-width: 768px) {
    flex-direction: column; /* Disposition en colonne pour les petits écrans */
    align-items: center; /* Centrage des éléments */
    padding: 1rem; /* Espacement interne réduit */
  }
`;

// Image des paragraphes
const StyledImage = styled.img`
  width: 180px; /* Largeur fixe */
  height: 180px; /* Hauteur fixe */
  object-fit: cover; /* Ajuste l'image pour couvrir le conteneur */
  border-radius: 5%; /* Bordures arrondies */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Ombre */

  @media (max-width: 768px) {
    width: 100%; /* Largeur maximale pour les petits écrans */
    height: auto; /* Hauteur automatique */
    margin-bottom: 1rem; /* Marge en bas */
  }
`;

// Paragraphe
const Paragraph = styled.p`
  font-size: 1.2rem; /* Taille de la police */
  line-height: 1.8rem; /* Hauteur de ligne */
  text-align: left; /* Alignement du texte à gauche */
  color: #e0e0e0; /* Couleur du texte */

  @media (max-width: 1024px) {
    font-size: 1.1rem; /* Taille de police réduite pour les tablettes */
    line-height: 1.7rem; /* Hauteur de ligne réduite */
    padding: 1rem; /* Espacement interne */
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Taille de police réduite pour les petits écrans */
    line-height: 1.6rem; /* Hauteur de ligne réduite */
  }
`;

// Diviseur
const Divider = styled.div`
  height: 3px; /* Hauteur du diviseur */
  width: 500px; /* Largeur du diviseur */
  background: #4ea8ff; /* Couleur du diviseur */
  margin: 2rem 0; /* Marge externe */

  @media (max-width: 768px) {
    width: 200px; /* Largeur réduite pour les petits écrans */
  }
`;

// Conteneur des images
const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Passage à la ligne si nécessaire */
  gap: 1rem; /* Espacement entre les images */
  justify-content: center; /* Centrage horizontal */
  margin-top: 2rem; /* Marge en haut */
  margin-bottom: 4rem; /* Marge en bas */

  @media (max-width: 1024px) {
    gap: 0.5rem; /* Espacement réduit pour les tablettes */
  }
`;

// Image dans le conteneur
const Image = styled.img`
  width: 100%; /* Largeur maximale */
  max-width: 200px; /* Largeur maximale */
  background: rgba(250, 250, 250, 0.8); /* Fond semi-transparent */
  margin-top: 4rem; /* Marge en haut */
  border-radius: 12px; /* Bordures arrondies */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Animation au survol */

  &:hover {
    transform: scale(1.05); /* Effet de zoom au survol */
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4); /* Ombre au survol */
    background: rgba(250, 250, 250, 0.3); /* Fond semi-transparent au survol */
  }

  @media (max-width: 1024px) {
    max-width: 250px; /* Largeur maximale réduite pour les tablettes */
  }
`;

// Composant principal
export default function Contentieux() {
  // Initialisation de AOS pour les animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée des animations
      once: false, // Les animations se répètent à chaque fois que l'élément entre dans la vue
    });
  }, []);

  return (
    <div>
      {/* Conteneur avec l'image de fond */}
      <BackgroundContainer>
        <Overlay />
        {/* Barre de navigation publique */}
        <BardeNavigationpublic />

        {/* Contenu principal */}
        <ContentContainer style={{ fontFamily: "Helvetica55Roman, Arial, sans-serif" }}>
          {/* Titre principal avec animation AOS */}
          <Title data-aos="fade-up">Le droit de contentieux ?</Title>
          <Divider />

          {/* Section 1 : Expertise en contentieux */}
          <ParagraphContainer data-aos="fade-down">
            <Paragraph>
              Notre cabinet dispose d’une équipe de juristes et d’avocats
              expérimentés, spécialisés dans la gestion des litiges complexes.
              Nous maîtrisons les procédures judiciaires, garantissant une
              représentation solide et stratégique à chaque étape de votre
              dossier.
            </Paragraph>
          </ParagraphContainer>

          {/* Section 2 : Stratégies adaptées */}
          <ParagraphContainer data-aos="fade-up">
            <StyledImage data-aos="fade-up" src={FISCAL} alt="Stratégies adaptées" />
            <Paragraph>
              Chaque contentieux est unique. Nous analysons minutieusement votre
              situation pour élaborer des stratégies adaptées à vos besoins
              spécifiques. Notre approche proactive vise à résoudre les
              différends de manière rapide et efficace, tout en minimisant les
              risques.
            </Paragraph>
          </ParagraphContainer>

          {/* Section 3 : Protection des droits */}
          <ParagraphContainer >
            <StyledImage src={arbitra} alt="Protection des droits" />
            <Paragraph>
              Nous sommes déterminés à protéger vos droits et à défendre vos
              intérêts avec rigueur et professionnalisme. Que ce soit pour des
              litiges commerciaux, civils, ou administratifs, notre équipe se
              consacre entièrement à obtenir les meilleurs résultats possibles
              pour vous.
            </Paragraph>
          </ParagraphContainer>

          {/* Section 4 : Communication claire */}
          <ParagraphContainer >
            <StyledImage src={travail} alt="Communication claire" />
            <Paragraph>
              Nous croyons en une communication claire et continue avec nos
              clients. Vous serez informé à chaque étape du processus, et nous
              travaillerons en collaboration étroite avec vous pour garantir une
              gestion optimale de votre dossier.
            </Paragraph>
          </ParagraphContainer>

          {/* Section 5 : Résultats probants */}
          <ParagraphContainer >
            <StyledImage src={image} alt="Résultats probants" />
            <Paragraph>
              Notre cabinet est reconnu pour sa capacité à résoudre des
              contentieux complexes avec succès. Nos résultats et la
              satisfaction de nos clients témoignent de notre engagement envers
              l’excellence et la justice.
            </Paragraph>
          </ParagraphContainer>

          {/* Conteneur des images */}
          <ImageContainer>
            <Image src={logoAODnoir} alt="Logo AOD" />
          </ImageContainer>
        </ContentContainer>
      </BackgroundContainer>

      {/* Pied de page */}
      <Footer />
    </div>
  );
}