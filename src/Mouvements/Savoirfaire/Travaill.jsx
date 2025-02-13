import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation du CSS pour AOS
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Accueil/Footerr";
import tiptamcode from "./../../assets/Image/tiptamcode.avif"; // Importation de l'image de l'article

// Chargement différé du composant TravSecuritee
const TravSecuritee = React.lazy(() => import("./TravSecuritee"));

// Initialisation de AOS
AOS.init({
  duration: 1000,
  once: false,
});

// Styles
const BackgroundContainer = styled.section`
  position: relative;
  min-height: 100vh;
  background-image: url("img/logoAODnoir.avif");
  background-size: cover;
  background-position: top;
  background-attachment: fixed;

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
  @media (max-width: 480px) {
    padding-left: 1.4rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
`;

const ContentContainer = styled.article`
  position: relative;
  z-index: 10;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;

  @media (max-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 3.5rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #00b4d8;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #caf0f8;
  margin-bottom: 1.5rem;
  max-width: 800px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Divider = styled.div`
  height: 3px;
  width: 1000px;
  background: #4ea8ff;
  margin: 2rem auto;

  @media (max-width: 480px) {
    width: 150px;
  }
`;

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

const FallbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
`;

const FallbackLogo = styled.img`
  width: 150px;
  height: 150px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default function Travail() {
  useEffect(() => {
    AOS.refresh(); // Rafraîchir AOS après le rendu
  }, []);

  return (
    <div>
      <BackgroundContainer>
        <Suspense
          fallback={
            <FallbackContainer>
              <FallbackLogo src={tiptamcode} alt="TIPTAMCode" />
            </FallbackContainer>
          }
        >
          <Overlay />
          <BardeNavigationpublic />
          <ContentContainer>
            <BackButton to="/nosexpertises" data-aos="fade-right">
              <FaArrowLeft size={20} />
            </BackButton>
            <Title data-aos="fade-up">Le travail et securité sociale</Title>
            <Divider data-aos="fade-up" data-aos-delay="200" />
            <Paragraph data-aos="fade-up" data-aos-delay="300">
              Notre cabinet est composé de juristes et d’avocats hautement
              qualifiés, spécialisés en droit du travail. Nous comprenons les
              enjeux complexes des relations employeur-employé, et notre
              expertise couvre une large gamme de problématiques liées à
              l’emploi, y compris les contrats de travail, la gestion des
              conflits et les licenciements.
            </Paragraph>
            <Paragraph data-aos="fade-up" data-aos-delay="400">
              Nous nous engageons à fournir des solutions juridiques sur mesure
              adaptées à votre situation spécifique. Que vous soyez employeur ou
              salarié, nous analysons vos besoins pour proposer des stratégies
              qui protègent vos droits tout en favorisant une résolution rapide
              et efficace des différends.
            </Paragraph>
            <Paragraph data-aos="fade-up" data-aos-delay="500">
              Le droit du travail évolue constamment, et les litiges nécessitent
              souvent une réponse rapide. Notre équipe est disponible et
              réactive pour répondre à vos préoccupations, vous accompagner dans
              les négociations, et vous représenter devant les juridictions
              compétentes.
            </Paragraph>
            <Paragraph data-aos="fade-up" data-aos-delay="600">
              Pour les entreprises, nous mettons un point d’honneur à prévenir
              les litiges en veillant à ce que vos politiques internes, contrats
              de travail et pratiques RH soient conformes aux dernières
              réglementations. Pour les salariés, nous veillons à ce que vos
              droits soient respectés et défendus avec diligence.
            </Paragraph>
            <Paragraph data-aos="fade-up" data-aos-delay="700">
              En choisissant notre cabinet, vous bénéficiez d’un partenaire
              juridique qui place vos intérêts au cœur de son action. Nous vous
              apportons une expertise de pointe, un accompagnement humain et une
              défense acharnée pour atteindre des résultats concrets et
              satisfaisants.
            </Paragraph>
          </ContentContainer>
          <TravSecuritee />
        </Suspense>
      </BackgroundContainer>

      <Footer />
    </div>
  );
}
