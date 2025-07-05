import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation du CSS pour AOS
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { images } from "../../assets/images";

// Chargement différé du composant Securite
const Securite = React.lazy(() => import("./Securite"));
const Footer = React.lazy(() => import("../Accueil/Footerr"));
const BardeNavigationpublic = React.lazy(() =>
  import("../Navigatpublic/BardeNavigationPublic")
);

// Styles
const BackgroundContainer = styled.section`
  position: relative;
  min-height: 100vh;
  background-image: url(${images.logoAODnoir} ");
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

export default function Securitee() {
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
              <FallbackLogo src={images.tiptamcode} alt="TIPTAMCode" />
            </FallbackContainer>
          }
        >
          <Overlay data-aos-delay="500" />
          <BardeNavigationpublic />

          <ContentContainer>
            <BackButton
              data-aos-delay="300"
              to="/nosexpertises"
              data-aos="fade-right"
            >
              <FaArrowLeft size={20} />
            </BackButton>
            <Title data-aos="fade-down">Sécurité et sécurité sociale</Title>
            <Divider data-aos="fade-up" data-aos-delay="200" />
            <Paragraph data-aos="fade-up" data-aos-delay="300">
              Notre cabinet se distingue par une expertise approfondie dans le
              domaine du droit de la sécurité et de la sécurité sociale. Nous
              comprenons les défis complexes auxquels vous êtes confrontés,
              qu’il s’agisse de la protection de vos droits en tant qu’employé
              ou de la gestion des obligations légales en tant qu’employeur.
            </Paragraph>
            <Paragraph data-aos="fade-up" data-aos-delay="400">
              Nous restons constamment à jour sur les évolutions des lois
              relatives à la sécurité au travail et à la sécurité sociale. Cela
              nous permet de vous offrir des solutions juridiques adaptées et
              efficaces, répondant aux normes en vigueur.
            </Paragraph>
            <Paragraph data-aos="fade-up" data-aos-delay="500">
              Que ce soit pour des litiges liés aux accidents de travail, la
              négociation de prestations sociales, ou la défense de vos droits
              face à des institutions, nous vous accompagnons à chaque étape.
              Nous élaborons des stratégies personnalisées pour garantir vos
              intérêts et résoudre vos problématiques juridiques.
            </Paragraph>
            <Paragraph data-aos="fade-up" data-aos-delay="600">
              Notre cabinet aide les employeurs à se conformer aux
              réglementations en matière de sécurité et de protection sociale
              tout en minimisant les risques juridiques. Pour les salariés, nous
              nous assurons que vos droits soient respectés, qu’il s’agisse de
              congés maladie, d’indemnités ou de pensions.
            </Paragraph>
            <Paragraph data-aos="fade-up" data-aos-delay="700">
              Nous savons que les questions de sécurité sociale touchent
              directement à la vie quotidienne. C’est pourquoi notre équipe
              s’engage à vous écouter attentivement et à réagir rapidement à vos
              besoins, avec un suivi rigoureux de chaque dossier.
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
      <Footer />
    </div>
  );
}
