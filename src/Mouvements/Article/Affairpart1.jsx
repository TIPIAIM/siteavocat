import styled from "styled-components";
import AOS from "aos"; // Importation de AOS pour les animations
import "aos/dist/aos.css"; // Importation du CSS de AOS
import { useEffect } from "react"; // Pour initialiser AOS
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

// Conteneur principal avec image d'arrière-plan fixe
const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url("img/logoAODnoir.avif"); /* Remplacez par le chemin de votre image */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

// Couche transparente pour obscurcir le fond
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.9); /* Ajustez la transparence ici */
`;

// Conteneur de contenu principal
const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #ade8f4;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

// Titre principal avec style et animation
const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: bold;
  color: #63b3ed;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

// Paragraphe avec style et animation
const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  max-width: 800px;
  text-align: left;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6rem;
    padding: 0 2.2rem;
  }
`;

// Diviseur avec dégradé
const Divider = styled.div`
  height: 3px;
  background: linear-gradient(90deg, #63b3ed 0%, #3182ce 100%);
  width: 80%;
  margin: 1.5rem 0;

  @media (max-width: 480px) {
    width: 90%;
  }
`;

// Bouton de retour
const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  transition: background-color 0.3s ease;
 display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  box-shadow: 0 2px 3px #00b4d8;
  transition: transform 0.9s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 3px 5px #00b4d8;
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

export default function Affairpart1() {
  // Initialisation de AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée des animations
      once: false, // Les animations en boucle
    });
  }, []);

  return (
    <BackgroundContainer>
      {/* Couche de transparence */}
      <Overlay />

      {/* Contenu principal */}
      <ContentContainer>
        {/* Barre de navigation */}
        <BardeNavigationpublic />

        {/* Bouton de retour */}
        <BackButton
          data-aos="fade-up"
          to="/article"
          aria-label="Retour aux expertises"
        >
          <FaArrowLeft size={24} />
        </BackButton>

        {/* Titre principal */}
        <Title data-aos="fade-down">Le droit des affaires</Title>

        {/* Diviseur */}
        <Divider data-aos="fade-up" data-aos-delay="200" />

        {/* Paragraphes */}
        <Paragraph data-aos="fade-up" data-aos-delay="250">
          Notre cabinet est composé d’avocats spécialisés en droit des affaires,
          dotés de plusieurs années d’expérience dans le domaine. Nous
          maîtrisons les complexités juridiques des entreprises et sommes à jour
          sur les évolutions légales et réglementaires. Que ce soit pour la
          rédaction de contrats, la gestion de litiges ou des conseils
          stratégiques, nous avons les compétences pour défendre vos intérêts.
        </Paragraph>
        <Paragraph data-aos="fade-up" data-aos-delay="300">
          Nous comprenons que chaque entreprise a des besoins uniques. C’est
          pourquoi nous proposons des solutions juridiques sur mesure, adaptées
          à vos objectifs commerciaux. Notre approche centrée sur le client
          garantit une attention particulière à vos attentes et un suivi
          rigoureux de votre dossier.
        </Paragraph>
        <Paragraph data-aos="zoom-in" data-aos-delay="400">
          Dans le monde des affaires, le temps est précieux. Notre équipe
          s’engage à répondre rapidement à vos demandes et à anticiper les
          risques pour minimiser les imprévus. Nous sommes disponibles à tout
          moment pour vous accompagner dans vos démarches juridiques.
        </Paragraph>
        <Paragraph data-aos="zoom-in" data-aos-delay="450">
          En choisissant notre cabinet, vous optez pour un partenaire engagé,
          professionnel et déterminé à défendre vos intérêts avec excellence.
          Faites confiance à notre expertise pour protéger vos droits et assurer
          la pérennité de vos affaires. Contactez-nous dès aujourd’hui pour une
          consultation personnalisée.
        </Paragraph>
      </ContentContainer>
    </BackgroundContainer>
  );
}
