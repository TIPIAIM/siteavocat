import styled from "styled-components"; // Importation de styled-components pour les styles
import { useEffect } from "react"; // Importation de useEffect pour les effets de bord
import BardeNavigationpublic from "../../Navigatpublic/BardeNavigationPublic"; // Importation de la barre de navigation publique
import Footer from "../../Accueil/Footerr"; // Importation du composant Footer
import EVOL from "./../../../assets/Image/EVOL.avif"; // Importation des images
import logoAODnoir from "./../../../assets/Image/logoAODnoir.avif";
import commercial from "../../../assets/Image/commercial.avif";
import MOE_0400 from "../../../assets/Image/MOE_0400.avif";
import jurid from "../../../assets/Image/jurid.avif";
import AOS from "aos"; // Importation de AOS pour les animations
import "aos/dist/aos.css"; // Importation du CSS de AOS

// Conteneur principal avec fond dégradé et image
const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh; /* Hauteur minimale de la vue */
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("img/confience.avif"); /* Image de fond avec dégradé sombre */
  background-size: cover; /* Couvre tout l'espace disponible */
  background-position: center; /* Centre l'image */
  background-attachment: fixed; /* Fond fixe lors du défilement */
`;

// Couche transparente (non utilisée ici, peut être supprimée si inutile)
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
    padding: 2.5rem; /* Espacement réduit pour les petits écrans */
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


const ParagraphWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0rem;
  max-width: 1000px;
  gap: 2rem;
  border-radius: 0px;
  padding: 1.5rem;
  background: rgba(10, 34, 64, 0.9);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 0rem;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;


// Image des paragraphes
const ParagraphImage = styled.img`
  width: 180px; /* Largeur fixe */
  height: 180px; /* Hauteur fixe */
  object-fit: cover; /* Ajuste l'image pour couvrir le conteneur */
  border-radius: 5%; /* Bordures arrondies */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* Ombre */

  @media (max-width: 768px) {
    border-radius: 0%;
    width: 400px;
    height: 250px;
    margin-bottom: 1rem;
    text-align: center;
  }
  @media (max-width: 1024px) {
    width: 400px;
    height: 200px;
    margin: 0 auto;
  }
`;

// Paragraphe
const Paragraph = styled.p`
  font-size: 1.2rem; /* Taille de la police */
  line-height: 1.8rem; /* Hauteur de ligne */
  text-align: justify; /* Justification du texte */
  color: #e0e0e0; /* Couleur du texte */

  @media (max-width: 1024px) {
    font-size: 1.1rem; /* Taille de police réduite pour les tablettes */
    line-height: 1.7rem; /* Hauteur de ligne réduite */
    padding: 1rem; /* Espacement interne */
  }

  @media (max-width: 768px) {
    font-size: 1rem; /* Taille de police réduite pour les petits écrans */
    line-height: 1.6rem; /* Hauteur de ligne réduite */
    text-align: left; /* Alignement du texte à gauche */
  }
`;



const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
 margin-bottom:4rem;
  @media (max-width: 1024px) {
    gap: 0.5rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 200px;
  background: rgba(250, 250, 250, 0.8);
  margin-top: 4rem;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    background: rgba(250, 250, 250, 0.3);
  }
  @media (max-width: 1024px) {
    max-width: 250px;
  }
`;

// Diviseur
const Divider = styled.div`
  height: 3px; /* Hauteur du diviseur */
  width: 200px; /* Largeur du diviseur */
  background: #4ea8ff; /* Couleur du diviseur */
  margin: 2rem 0; /* Marge externe */
`;

// Composant principal
export default function AuditJuridique() {
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
          <Title data-aos="fade-down">Assistance juridique</Title>
          <Divider />

          {/* Section 1 : Expertise juridique */}
          <ParagraphWrapper data-aos="zoom-in">
            <Paragraph>
              <strong data-aos="fade-down" data-aos-delay="400" style={{ color: "#90e0ef" }}>
                Une expertise reconnue dans le domaine juridique :
              </strong>
              Notre équipe regroupe des avocats et juristes expérimentés,
              spécialisés en droit civil, commercial, fiscal, du travail, et
              administratif. Nous avons l’expérience et les compétences
              nécessaires pour résoudre vos problématiques juridiques, quelles
              qu’elles soient. Nous mettons à votre disposition un
              accompagnement sur mesure pour chaque situation.
            </Paragraph>
            <ParagraphImage src={commercial} alt="Analyse juridique" />
          </ParagraphWrapper>

          {/* Section 2 : Accompagnement dans la régulation */}
          <ParagraphWrapper data-aos="fade-up" data-aos-delay="400">
            <Paragraph>
              <strong data-aos="fade-down" style={{ color: "#90e0ef" }}>
                Accompagnement dans la régulation :
              </strong>
              Nous vous assistons dans vos démarches administratives et
              réglementaires pour garantir la conformité de vos activités avec
              les lois en vigueur. Cela inclut l’élaboration des documents
              requis, la représentation auprès des autorités compétentes, et le
              suivi des modifications législatives.
            </Paragraph>
            <ParagraphImage src={EVOL} alt="Régulation juridique" />
          </ParagraphWrapper>

          {/* Section 3 : Consultations personnalisées */}
          <ParagraphWrapper data-aos="zoom-in">
            <Paragraph>
              <strong data-aos="fade-down" data-aos-delay="400" style={{ color: "#90e0ef" }}>
                Consultations personnalisées :
              </strong>
              Nos experts sont à votre écoute pour vous fournir des solutions
              adaptées à vos besoins spécifiques, que ce soit pour des conseils,
              des analyses ou des recommandations stratégiques. Nous abordons
              chaque cas avec une attention particulière pour offrir un service
              réellement personnalisé.
            </Paragraph>
            <ParagraphImage src={MOE_0400} alt="Consultation juridique" />
          </ParagraphWrapper>

          {/* Section 4 : Formations spécialisées */}
          <ParagraphWrapper data-aos="fade-up">
            <Paragraph>
              <strong data-aos="fade-down" data-aos-delay="400" style={{ color: "#90e0ef" }}>
                Formations spécialisées :
              </strong>
              Nous proposons des programmes de formation adaptés pour vous aider
              à mieux comprendre et gérer les aspects juridiques de vos projets.
              Ces formations couvrent des sujets variés allant de la gestion des
              contrats à la prévention des litiges.
            </Paragraph>
            <ParagraphImage src={jurid} alt="Formation juridique" />
          </ParagraphWrapper>

          {/* Section 5 : Protection juridique */}
          <ParagraphWrapper data-aos="fade-down">
            <Paragraph>
              <strong data-aos="fade-down" data-aos-delay="400" style={{ color: "#90e0ef" }}>
                Protection juridique :
              </strong>
              Nous vous offrons une assistance pour anticiper et gérer les
              litiges, en assurant une protection efficace de vos droits. Notre
              approche proactive vise à réduire les risques légaux et à
              sécuriser vos intérêts sur le long terme.
            </Paragraph>
          </ParagraphWrapper>

          {/* Conteneur des images */}
          <ImageContainer>
            <Image src={logoAODnoir} alt="Logo AOD" data-aos="zoom-in" />
          </ImageContainer>
        </ContentContainer>
      </BackgroundContainer>

      {/* Pied de page */}
      <Footer />
    </div>
  );
}