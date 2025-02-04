import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation du CSS pour AOS
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import tiptamcode from "./../../assets/Image/tiptamcode.avif"; // Importation de l'image de l'article

// Chargement différé du composant Securite
const Securite = React.lazy(() => import("./Securite"));

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
  background: rgba(0, 0, 0, 0.3);
`;

const ContentContainer = styled.article`
  max-width: 900px;
  margin: 2rem auto;
  padding: 4rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  backdrop-filter: blur(5px);

  @media (max-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    
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

export default function TravSecuritee() {
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
            <Paragraph data-aos="fade-up" data-aos-delay="400">
              Nous restons constamment à jour sur les évolutions des lois
              relatives à la sécurité au travail et à la sécurité sociale. Cela
              nous permet de vous offrir des solutions juridiques adaptées et
              efficaces, répondant aux normes en vigueur.
            </Paragraph>

            <Paragraph data-aos="fade-up" data-aos-delay="600">
              Notre cabinet aide les employeurs à se conformer aux
              réglementations en matière de sécurité et de protection sociale
              tout en minimisant les risques juridiques. Pour les salariés, nous
              nous assurons que vos droits soient respectés, qu’il s’agisse de
              congés maladie, d’indemnités ou de pensions.
            </Paragraph>

            <Paragraph data-aos="fade-up" data-aos-delay="800">
              En nous choisissant, vous optez pour un cabinet engagé, compétent
              et soucieux de protéger vos droits. Faites confiance à notre
              savoir-faire pour résoudre vos litiges, assurer votre sécurité
              juridique et garantir une gestion efficace de vos affaires en
              matière de sécurité sociale. Contactez-nous dès aujourd’hui pour
              une consultation personnalisée et laissez-nous vous accompagner
              avec excellence.
            </Paragraph>
          </ContentContainer>

          <Securite />
        </Suspense>
      </BackgroundContainer>
    </div>
  );
}
