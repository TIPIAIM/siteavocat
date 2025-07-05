import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { Helmet } from "react-helmet"; // Ajout pour le SEO
 import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { images } from "../../assets/images";
 
// Chargement asynchrone de Fiscalitee2
const Fiscalitee2 = React.lazy(() => import("./Fiscalitee2"));
const BardeNavigationpublic = React.lazy(() => import("../Navigatpublic/BardeNavigationPublic"));

// Fallback Container for Suspense
const FallbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #022026; /* Fond bleu */

`;

// Fallback Logo avec votre logo
const FallbackLogo = styled.img`
  width: 150px; // Ajustez la taille selon votre logo
  height: auto; // Conserve les proportions
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.9);
      opacity: 0.8;
    }
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(0.9);
      opacity: 0.8;
    }
  }
`;

const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image:url(${images.logoAODnoir});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4ea8ff;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.3rem;
  line-height: 2;
  margin-bottom: 2rem;
  max-width: 800px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.7rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6rem;
    padding: 0rem 2.2rem;
    
  }
`;

const Divider = styled.div`
  height: 3px;
  width: 1000px;
  background: #90e0ef;
  margin: 2rem 0;

  @media (max-width: 480px) {
    width: 300px;
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
  color: #4ea8ff;
  margin-bottom: 2rem;
  transition: background-color 0.3s ease;
  max-width: 1200px; /* Largeur maximale du contenu */
  margin: 0 auto; /* Centrage horizontal */
  margin-top: 5rem; /* Ajout d'une marge supérieure pour espacer du haut */

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

function FiscaliteeWrapper() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
    });
  }, []);

  return (
    <BackgroundContainer>
      <Helmet>
        <title>Droit Fiscal - Optimisation et Gestion des Impôts | AOD Avocats</title>
        <meta
          name="description"
          content="Nos experts en droit fiscal vous accompagnent pour optimiser votre fiscalité en entreprise et gérer les contentieux fiscaux. Contactez-nous dès aujourd'hui."
        />
        <meta name="keywords" content="Droit fiscal, Fiscalité entreprise, Avocats fiscaux, Contentieux fiscal, Audit fiscal, Impôts, Conformité fiscale" />
        <meta property="og:title" content="Droit Fiscal - AOD Avocats" />
        <meta property="og:description" content="Nos avocats spécialisés vous accompagnent pour optimiser votre fiscalité et sécuriser votre entreprise." />
        <meta property="og:image" content="https://www.aod-avocats.net/img/logoAODnoir.avif" />
        <meta property="og:url" content="https://www.aod-avocats.net/fiscalite" />
      </Helmet>

      <Overlay />
      <BardeNavigationpublic />

      <ContentContainer>
        <BackButton to="/nosexpertises" aria-label="Retour aux expertises" data-aos="fade-up">
          <FaArrowLeft size={20} />
        </BackButton>

        <Title data-aos="fade-down">Le Droit Fiscal</Title>
        <Divider data-aos="fade-up" />

        <Paragraph data-aos="fade-up" data-aos-delay="100">
          Notre cabinet est composé d’experts en droit fiscal ayant une solide expérience 
          dans la gestion des problématiques fiscales complexes. Que vous soyez une entreprise 
          ou un particulier, nous comprenons les enjeux fiscaux auxquels vous êtes confrontés et 
          nous sommes là pour vous offrir des solutions adaptées.
        </Paragraph>

        <Paragraph data-aos="fade-up" data-aos-delay="200">
          Nous offrons un accompagnement personnalisé pour optimiser votre fiscalité 
          tout en respectant strictement les lois en vigueur. Notre expertise inclut 
          la planification fiscale, la gestion des audits, les contentieux fiscaux et 
          la conformité réglementaire.
        </Paragraph>

        <Paragraph data-aos="fade-up" data-aos-delay="300">
          Grâce à une veille juridique constante, nous restons informés des évolutions fiscales 
          et proposons des stratégies innovantes pour maximiser vos avantages tout en minimisant les risques.
        </Paragraph>

        <Paragraph data-aos="fade-up" data-aos-delay="400">
          En choisissant notre cabinet, vous bénéficiez d’une équipe engagée à défendre vos intérêts fiscaux 
          avec professionnalisme et intégrité.
        </Paragraph>
      </ContentContainer>
    </BackgroundContainer>
  );
}

// Wrapping avec Suspense pour le chargement asynchrone
export default function Fiscalitee() {
  return (
    <Suspense fallback={<FallbackContainer><FallbackLogo src={images.tiptamcode} alt="Chargement..." /></FallbackContainer>}>
      <FiscaliteeWrapper />
      <Fiscalitee2 />
    </Suspense>
  );
}
