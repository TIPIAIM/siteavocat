import { lazy, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Importez le CSS de AOS
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Accueil/Footerr";
import SEO from "./Seoglobale";

const ArbitFamillee = lazy(() => import("./ArbitFamillee"));

// Styles
const BackgroundContainer = styled.section` /* Utilisation d'une balise sémantique */
  position: relative;
  min-height: 100vh;
  background-image: url("./src/assets/Image/keitaseul22.avif");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  overflow-y: auto;
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    background-attachment: scroll; /* Désactiver l'effet parallaxe sur mobile */
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6));
`;

const ContentWrapper = styled.main`
  position: relative;
  z-index: 10;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 0 4px 1px #90e0ef;
  color: white;
  margin-bottom: 1rem;
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

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #90e0ef;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Section = styled.section`
  background: rgba(255, 255, 255, 0.9);
  color: #2d3142;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 800px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #03045e;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  text-align: left;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0 1rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

// Composant principal
export default function Arbitrage() {
  // Initialisation de AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée des animations
      once: false, // Les animations ne se déclenchent qu'une fois
    });
  }, []);

  // Titre de la page dynamique
  useEffect(() => {
    document.title = "Le droit d’arbitrage | Cabinet Juridique";
  }, []);

  return (
    <div>
      {/* Intégration du composant SEO */}
      <SEO
        title="Droit d'Arbitrage - Expertise Juridique en Résolution de Litiges"
        description="Notre cabinet spécialisé en droit d'arbitrage vous accompagne dans la résolution rapide et efficace de vos litiges. Protégez vos droits avec notre expertise."
        keywords="droit d'arbitrage, résolution de litiges, expertise juridique, arbitrage international"
        url="https://aod-avocats.net/arbitrage"
        image="https://aod-avocats.net/img/logoAODnoir.avif"
      />

      <BackgroundContainer>
        <Overlay data-aos="fade-right" />
        <BardeNavigationpublic />
        <ContentWrapper>
          <BackButton
            to="/nosexpertises"
            aria-label="Retour à la page des expertises"
            data-aos="fade-down" // Animation AOS
          >
            <FaArrowLeft size={20} />
          </BackButton>
          <Title data-aos="fade-down" data-aos-delay="200">
            Le droit d’arbitrage ?
          </Title>
          <Section data-aos="fade-up" data-aos-delay="300">
            <SectionTitle data-aos="fade-down">Expertise reconnue dans l’arbitrage</SectionTitle>
            <Paragraph>
              Notre cabinet est composé de spécialistes chevronnés dans le
              domaine de l’arbitrage. Nous avons une maîtrise approfondie des
              procédures nationales et internationales, garantissant une gestion
              optimale de vos litiges en dehors des tribunaux traditionnels.
            </Paragraph>
          </Section>
          <Section data-aos="fade-up" data-aos-delay="400">
            <SectionTitle data-aos="fade-down">Résolution rapide et efficace</SectionTitle>
            <Paragraph>
              L’arbitrage est souvent préféré pour sa rapidité et sa
              confidentialité. Nous nous engageons à réduire les délais et à
              assurer un processus fluide, grâce à des stratégies adaptées à vos
              besoins spécifiques.
            </Paragraph>
          </Section>
          <Section data-aos="fade-up" data-aos-delay="500">
            <SectionTitle data-aos="fade-down">Approche personnalisée et collaborative</SectionTitle>
            <Paragraph>
              Chaque conflit est unique, et notre équipe adopte une méthode
              personnalisée pour garantir des solutions qui protègent vos
              intérêts. Nous collaborons étroitement avec vous à chaque étape
              pour maximiser les chances de succès.
            </Paragraph>
          </Section>
          <Section data-aos="fade-up" data-aos-delay="600">
            <SectionTitle data-aos="fade-down">Connaissance des industries variées</SectionTitle>
            <Paragraph>
              Que ce soit dans les secteurs commerciaux, technologiques, ou
              industriels, notre expérience diversifiée nous permet de
              comprendre les spécificités de votre domaine et d’apporter des
              réponses précises à vos problématiques.
            </Paragraph>
          </Section>
          <Section data-aos="fade-up" data-aos-delay="700">
            <SectionTitle data-aos="fade-down">Engagement pour votre succès</SectionTitle>
            <Paragraph>
              En choisissant notre cabinet, vous optez pour une équipe
              passionnée, rigoureuse et déterminée à défendre vos droits. Nous
              transformons les litiges complexes en opportunités de résolution
              claire et favorable.
            </Paragraph>
          </Section>
        </ContentWrapper>
        <ArbitFamillee />
      </BackgroundContainer>
      <Footer />
    </div>
  );
}