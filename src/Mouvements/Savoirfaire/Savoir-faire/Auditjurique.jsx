import { useEffect } from "react"; // Importation de React et useEffect
import AOS from "aos"; // Importation de AOS pour les animations
import "aos/dist/aos.css"; // Importation du CSS de AOS
import styled from "styled-components"; // Importation de styled-components pour les styles
import BardeNavigationpublic from "../../Navigatpublic/BardeNavigationPublic"; // Importation de la barre de navigation publique
import Footer from "../../Accueil/Footerr"; // Importation du composant Footer
import EVOL from "./../../../assets/Image/EVOL.avif"; // Importation des images
import logoAODnoir from "./../../../assets/Image/logoAODnoir.avif";
import sttis from "./../../../assets/Image/sttis.avif";
import PREV from "./../../../assets/Image/PREV.avif";
import conf from "./../../../assets/Image/conf.avif";
import affaire from "./../../../assets/Image/affaire.avif";
import jurid1 from "./../../../assets/Image/jurid1.avif";
import jurid from "./../../../assets/Image/jurid.avif";

// Conteneur principal avec fond fixe
const BackgroundContainer = styled.section` /* Utilisation d'une balise sémantique */
  position: relative;
  min-height: 100vh; /* Hauteur minimale de la vue */
  background-image: url("img/confience.avif"); /* Image de fond */
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
  background: rgba(0, 0, 0, 0.9); /* Fond noir semi-transparent */
`;

// Conteneur du contenu
const ContentContainer = styled.article` /* Utilisation d'une balise sémantique */
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
    padding: 2.2rem; /* Espacement réduit pour les petits écrans */
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

const ParagraphWrapper = styled.section` /* Utilisation d'une balise sémantique */
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
  border-radius: 1%; /* Bordures arrondies */
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
  background: #90e0ef; /* Couleur du diviseur */
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
  border-radius: 1px; /* Bordures arrondies */
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
export default function AuditJuridique() {
  // Initialisation de AOS pour les animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée des animations
      once: false, // Les animations se répètent à chaque fois que l'élément entre dans la vue
    });
  }, []);

  // Dynamisation du titre de la page pour le SEO
  useEffect(() => {
    document.title = "Audit Juridique - Expertise et Accompagnement sur Mesure";
  }, []);

  return (
    <div>
      {/* Balise meta pour le SEO */}
      <meta name="description" content="Obtenez un audit juridique professionnel et personnalisé. Notre équipe d'experts vous accompagne pour garantir la conformité et la sécurité de vos activités." />
      <meta name="keywords" content="audit juridique, expertise juridique, conformité, prévention des risques, accompagnement juridique" />
      <meta name="alpha ousmane" content="TIPTAMCode" />

      {/* Conteneur avec l'image de fond */}
      <BackgroundContainer>
        <Overlay />
        {/* Barre de navigation publique */}
        <BardeNavigationpublic />

        {/* Contenu principal */}
        <ContentContainer style={{ fontFamily: "Helvetica55Roman, Arial, sans-serif" }}>
          {/* Titre principal avec animation AOS */}
          <Title data-aos="fade-down">Audit juridiques ?</Title>
          <Divider />

          {/* Section 1 : Analyse approfondie */}
          <ParagraphWrapper data-aos="fade-up">
            <ParagraphImage src={jurid} alt="Analyse juridique - Expertise en droit" />
            <Paragraph>
              Dans un environnement juridique de plus en plus complexe, un audit
              juridique rigoureux est essentiel pour garantir la pérennité de
              vos activités et la conformité de vos pratiques. Notre cabinet se
              distingue par son expertise et son approche personnalisée.
            </Paragraph>
          </ParagraphWrapper>

          {/* Section 2 : Analyse stratégique */}
          <ParagraphWrapper data-aos="fade-up">
            <ParagraphImage src={jurid1} alt="Stratégie juridique - Optimisation des contrats" />
            <Paragraph>
              <strong style={{ color: "#90e0ef" }}>1. Une analyse approfondie et stratégique :</strong>{" "}
              Notre équipe procède à une évaluation complète de vos documents
              juridiques, tels que contrats, statuts, accords de partenariat, et
              politiques internes. Nous identifions non seulement les zones de
              risque, mais aussi les opportunités pour optimiser vos pratiques
              et renforcer votre position juridique.
            </Paragraph>
          </ParagraphWrapper>

          {/* Section 3 : Expertise multidisciplinaire */}
          <ParagraphWrapper>
            <ParagraphImage src={affaire} alt="Expertise juridique - Droit des affaires" />
            <Paragraph>
              <strong style={{ color: "#90e0ef" }}>2. Une expertise multidisciplinaire unique :</strong>{" "}
              Nos avocats spécialisés couvrent plusieurs branches du droit,
              notamment le droit des affaires, le droit du travail, le droit
              fiscal, et le droit commercial. Cette diversité garantit une
              vision globale et cohérente de votre environnement juridique.
            </Paragraph>
          </ParagraphWrapper>

          {/* Section 4 : Conformité */}
          <ParagraphWrapper>
            <ParagraphImage src={conf} alt="Conformité juridique - Mise à jour des normes" />
            <Paragraph>
              <strong style={{ color: "#90e0ef" }}>3. Une conformité avec les normes en constante évolution :</strong>{" "}
              Les lois et réglementations changent rapidement. Nous veillons à
              ce que vos pratiques soient en adéquation avec les dernières
              exigences légales, réduisant ainsi les risques de sanctions
              administratives ou de litiges.
            </Paragraph>
          </ParagraphWrapper>

          {/* Section 5 : Prévention des risques */}
          <ParagraphWrapper>
            <ParagraphImage src={PREV} alt="Prévention juridique - Gestion des risques" />
            <Paragraph>
              <strong style={{ color: "#90e0ef" }}>4. Une prévention proactive des risques :</strong>{" "}
              Un audit juridique efficace vous permet de prévoir et d’éviter des
              problèmes avant qu’ils ne surviennent. Notre approche proactive
              inclut des recommandations précises pour corriger les anomalies
              identifiées et protéger vos intérêts.
            </Paragraph>
          </ParagraphWrapper>

          {/* Section 6 : Accompagnement sur mesure */}
          <ParagraphWrapper>
            <ParagraphImage src={EVOL} alt="Accompagnement juridique - Solutions personnalisées" />
            <Paragraph>
              <strong style={{ color: "#90e0ef" }}>5. Un accompagnement sur mesure :</strong>{" "}
              Au-delà de l’audit, nous vous assistons dans la mise en œuvre des
              solutions proposées. Que ce soit pour la révision de vos contrats,
              la restructuration juridique ou la négociation de clauses, notre
              équipe est à vos côtés à chaque étape.
            </Paragraph>
          </ParagraphWrapper>

          {/* Section 7 : Avantages concrets */}
          <ParagraphWrapper>
            <ParagraphImage src={sttis} alt="Avantages juridiques - Réduction des coûts" />
            <Paragraph>
              <strong style={{ color: "#90e0ef" }}>6. Des avantages concrets pour votre organisation :</strong>
              <ul>
                <li>
                  Réduction des coûts liés aux litiges grâce à une prévention
                  efficace.
                </li>
                <li>
                  Amélioration de la crédibilité de votre entreprise vis-à-vis de
                  vos partenaires et investisseurs.
                </li>
                <li>
                  Optimisation de vos processus internes pour une gestion plus
                  fluide et sécurisée.
                </li>
              </ul>
            </Paragraph>
          </ParagraphWrapper>

          {/* Section 8 : Relation de confiance */}
          <ParagraphWrapper>
            <Paragraph>
              <strong style={{ color: "#90e0ef" }}>7. Une relation de confiance :</strong>{" "}
              Notre engagement repose sur la transparence, la discrétion, et une
              écoute active de vos besoins. Chaque client bénéficie d’un suivi
              personnalisé, car nous comprenons que chaque situation est unique.
            </Paragraph>
          </ParagraphWrapper>

          {/* Conteneur des images */}
          <ImageContainer>
            <Image src={logoAODnoir} alt="Logo AOD - Expertise Juridique" />
          </ImageContainer>
        </ContentContainer>
      </BackgroundContainer>

      {/* Pied de page */}
      <Footer />
    </div>
  );
}