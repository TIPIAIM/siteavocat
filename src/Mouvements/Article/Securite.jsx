import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation du CSS pour AOS
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import Footer from "../Accueil/Footerr";
import tiptamcode from "./../../assets/Image/tiptamcode.avif"; // Importation de l'image de l'article
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

// Chargement différé du composant Securite
const Securit = React.lazy(() => import("./Securit"));

// Styles
const BackgroundContainer = styled.section`
  position: relative;
  min-height: 100vh;
  background-image: url("img/logoAODnoir.avif");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const ContentContainer = styled.article`
  max-width: 900px;
  margin: 2rem auto;
  padding: 4rem;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  backdrop-filter: blur(5px);

  @media (max-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 2.5rem;
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

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Divider = styled.div`
  height: 3px;
  width: 800px;
  background: #4ea8ff;
  margin: 2rem auto;

  @media (max-width: 480px) {
    width: 150px;
  }
`;

const FallbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #022026; /* Fond bleu */
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

export default function Securite1() {
  // Initialisation de AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div>
      <BackgroundContainer>
        {/* Suspense pour le chargement différé de Securite */}
        <Suspense
          fallback={
            <FallbackContainer>
              <FallbackLogo src={tiptamcode} alt="TIPTAMCode" />
            </FallbackContainer>
          }
        >
          <Overlay data-aos-delay="500" />
          <BardeNavigationpublic />

          <ContentContainer>
            <BackButton
              data-aos-delay="300"
              to="/article"
              data-aos="fade-right"
            >
              <FaArrowLeft size={20} />
            </BackButton>
            <Title data-aos="fade-down">Sécurité et Sécurité Sociale</Title>
            <Divider data-aos="fade-up" data-aos-delay="200" />
            <Paragraph data-aos="fade-up">
              Dans un monde où les risques professionnels et les enjeux sociaux
              sont omniprésents, notre cabinet est votre allié pour naviguer en
              toute confiance dans les méandres du droit de la sécurité et de la
              sécurité sociale.
            </Paragraph>
            <Paragraph data-aos="fade-up" data-aos-delay="100">
              Que vous soyez employeur ou salarié, nous vous offrons une expertise
              pointue pour protéger vos droits et anticiper les risques. Notre
              mission ? Vous garantir une sécurité juridique sans faille.
            </Paragraph>
            <Paragraph data-aos="fade-up" data-aos-delay="200">
              Les accidents du travail, les litiges liés aux prestations sociales
              ou les obligations légales complexes ne sont pas une fatalité. Avec
              notre équipe, chaque problème trouve une solution sur mesure.
            </Paragraph>
            <Paragraph data-aos="fade-up" data-aos-delay="300">
              Pour les employeurs, nous vous aidons à vous conformer aux
              réglementations tout en minimisant les risques. Pour les salariés,
              nous veillons à ce que vos droits soient respectés, que ce soit pour
              des congés maladie, des indemnités ou des pensions.
            </Paragraph>
            <Paragraph data-aos="fade-up" data-aos-delay="400">
              Nous comprenons que la sécurité sociale touche à l’essentiel : votre
              santé, votre famille, votre avenir. C’est pourquoi nous agissons avec
              rigueur et empathie pour défendre vos intérêts.
            </Paragraph>
            <Paragraph data-aos="fade-up" data-aos-delay="500">
              En choisissant notre cabinet, vous optez pour un partenaire engagé,
              réactif et déterminé à faire valoir vos droits. Notre approche
              personnalisée et notre expertise font la différence.
            </Paragraph>
            <Paragraph data-aos="fade-up" data-aos-delay="600">
              Prêt à sécuriser votre avenir ? Contactez-nous dès aujourd’hui pour
              une consultation sur mesure. Ensemble, bâtissons une protection
              sociale solide et pérenne.
            </Paragraph>
          </ContentContainer>

          <Securit />
        </Suspense>
      </BackgroundContainer>
      <Footer />
    </div>
  );
}