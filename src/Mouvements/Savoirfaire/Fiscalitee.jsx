import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import tiptamcode from "./../../assets/Image/tiptamcode.avif"; // Importation de l'image de l'article
//import Fiscalitee2 from "././Fiscalitee2";

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
  background-image: url("img/logoAODnoir.avif");
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

// Composant Fiscaliteee chargé de manière asynchrone
const Fiscalitee2 = React.lazy(() => import("./Fiscalitee2"));

function FiscaliteeWrapper() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      
      <BackgroundContainer>
        <Overlay />
        <BardeNavigationpublic />
        <ContentContainer>
          <BackButton to="/nosexpertises" data-aos="fade-up">
            <FaArrowLeft size={20} />
          </BackButton>
          <Title data-aos="fade-down">Le droit fiscal ?</Title>
          <Divider data-aos="fade-up" />
          <Paragraph data-aos="fade-down" data-aos-delay="200">
            Notre cabinet est composé d’experts en droit fiscal, ayant une
            solide expérience dans la gestion des problématiques fiscales
            complexes. Que vous soyez une entreprise ou un particulier, nous
            comprenons les enjeux fiscaux auxquels vous êtes confrontés et nous
            sommes là pour vous offrir des solutions adaptées.
          </Paragraph>
          <Paragraph data-aos="fade-up" data-aos-delay="200">
            Nous offrons un accompagnement personnalisé pour optimiser votre
            fiscalité tout en respectant strictement les lois en vigueur. Notre
            expertise inclut la planification fiscale, la gestion des audits,
            les contentieux fiscaux et la conformité réglementaire, vous
            garantissant une tranquillité d`esprit totale.
          </Paragraph>
          <Paragraph data-aos="fade-up" data-aos-delay="200">
            Grâce à une veille juridique constante, nous restons informés des
            évolutions fiscales et proposons des stratégies innovantes pour
            maximiser vos avantages tout en minimisant les risques. Nous sommes
            votre partenaire de confiance pour vous aider à naviguer dans un
            environnement fiscal en perpétuelle évolution.
          </Paragraph>
          <Paragraph data-aos="fade-up" data-aos-delay="200">
            En choisissant notre cabinet, vous bénéficiez d’une équipe dévouée,
            rigoureuse et engagée à défendre vos intérêts fiscaux avec
            professionnalisme et intégrité. Faites le choix de l’excellence pour
            sécuriser et optimiser votre situation fiscale.
          </Paragraph>
        </ContentContainer>
      </BackgroundContainer>
    </div>
  );
}

// Wrap the component with Suspense
export default function Fiscalitee() {
  return (
    <Suspense
      fallback={
        <FallbackContainer>
          <FallbackLogo src={tiptamcode} alt="Logo AOD" />
        </FallbackContainer>
      }
    >
      <FiscaliteeWrapper />
      <Fiscalitee2/>
    </Suspense>
  );
}