import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation du CSS pour AOS
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import tiptamcode from "./../../assets/Image/tiptamcode.avif"; // Importation de l'image de l'article

// Chargement différé du composant Penal2
const Penal2 = React.lazy(() => import("./Penal2"));

// Initialisation de AOS
AOS.init({
  duration: 1000,
  once: true,
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
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
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
    padding: 2.5rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #4ea8ff;
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
     padding: 0.5rem;
  }
`;

const Divider = styled.div`
  height: 2px;
  width: 300px;
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

export default function Penall() {
  useEffect(() => {
    AOS.refresh(); // Rafraîchir AOS après le rendu
  }, []);

  return (
    <div>
          {/* Suspense pour le chargement différé de Penal2 */}
          <Suspense
        fallback={
          <FallbackContainer>
              <FallbackLogo src={tiptamcode} alt="TIPTAMCode" />
          </FallbackContainer>
        }
      >
      <BackgroundContainer>
        <Overlay />
        <BardeNavigationpublic />
        <ContentContainer>
          <BackButton to="/nosexpertises" data-aos="fade-right">
            <FaArrowLeft size={20} />
          </BackButton>
          <Title data-aos="fade-right">Le droit pénal</Title>
          <Divider data-aos="fade-down" data-aos-delay="200" />
          <Paragraph data-aos="fade-up" data-aos-delay="300">
            Notre cabinet possède une expertise approfondie en droit pénal, avec
            une équipe d’avocats expérimentés qui maîtrisent toutes les facettes
            de cette discipline. Que vous soyez victime ou accusé, nous vous
            garantissons une défense rigoureuse, basée sur une analyse approfondie
            de votre dossier et des stratégies juridiques adaptées.
          </Paragraph>
          <Paragraph data-aos="fade-down" data-aos-delay="400">
            Nous comprenons que les affaires pénales sont souvent complexes et
            émotionnellement difficiles. C’est pourquoi nous adoptons une approche
            humaine, en vous écoutant attentivement et en vous accompagnant tout
            au long du processus judiciaire. Chaque client est unique, et nous
            nous engageons à vous offrir un soutien sur mesure.
          </Paragraph>
          <Paragraph data-aos="fade-up" data-aos-delay="500">
            Notre objectif est de protéger vos droits à chaque étape de la
            procédure pénale. Grâce à notre connaissance des lois, des procédures
            et des juridictions, nous anticipons les éventuelles complications et
            mettons tout en œuvre pour obtenir le meilleur résultat possible, que
            ce soit en négociant une peine réduite ou en plaidant en votre faveur
            devant les tribunaux.
          </Paragraph>
          <Paragraph data-aos="fade-right" data-aos-delay="600">
            Dans les affaires pénales, chaque minute compte. Notre équipe est
            disponible pour répondre rapidement à vos besoins urgents, qu’il
            s’agisse d’une garde à vue, d’une comparution immédiate ou d’une mise
            en détention. Nous sommes à vos côtés pour agir avec efficacité et
            réactivité.
          </Paragraph>
          <Paragraph data-aos="fade-down" data-aos-delay="700">
            En choisissant notre cabinet, vous faites appel à des professionnels
            engagés, compétents et déterminés à défendre vos intérêts. Faites
            confiance à notre savoir-faire pour vous représenter avec force et
            conviction face à la justice.
          </Paragraph>
          <Paragraph data-aos="fade-up" data-aos-delay="800">
            Si vous êtes confronté à une affaire pénale, ne restez pas seul.
            Contactez notre cabinet pour une consultation confidentielle et
            laissez-nous vous accompagner avec professionnalisme et intégrité.
          </Paragraph>
        </ContentContainer>
      </BackgroundContainer>

  
        <Penal2 />
      </Suspense>
    </div>
  );
}