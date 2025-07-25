import React, { Suspense, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
 // Utilisation de ton gestionnaire SEO
 import SEO from "./Seoglobale";
import { images } from "../../assets/images";
const Minier2 = React.lazy(() => import("./MinierEnviron2")); 
const BardeNavigationpublic = React.lazy(() => import("../Navigatpublic/BardeNavigationPublic")); 

const BackgroundContainer = styled.section`
  position: relative;
  min-height: 100vh;
  background-image: url(${images.logoAODnoir});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
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
  color: #caf0f8;

  @media (max-width: 1024px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4ea8ff;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  max-width: 800px;
  text-align: left;
  color: #e0f7fa;

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.7;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
    padding: 0 0.5rem;
  }
`;

const Divider = styled.div`
  height: 3px; /* Hauteur du diviseur */
  width: 1000px; /* Largeur du diviseur */
  background: #90e0ef; /* Couleur du diviseur */
  margin: 2rem 0; /* Marge externe */

  @media (max-width: 480px) {
    width: 300px; /* Largeur réduite pour les petits écrans */
  }
`;
// Bouton de retour
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


function MinierEnvironnWrapper() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <BackgroundContainer>
      <SEO
        title="Droit Minier et Environnemental - AOD Avocats"
        description="Découvrez notre expertise en droit minier et environnemental. Nous accompagnons nos clients dans la gestion des réglementations et des risques."
        keywords="Droit minier, Réglementation minière, Avocats environnementaux, Projets miniers, Gestion environnementale"
        url="https://www.aod-avocats.net/minierr"
        image="https://www.aod-avocats.net/img/logoAODnoir.avif"
      />

      <Overlay />
      <BardeNavigationpublic />

      <ContentContainer>
        <BackButton to="/nosexpertises" aria-label="Retour aux expertises" data-aos="fade-right">
          <FaArrowLeft size={20} />
        </BackButton>

        <Title data-aos="fade-down">Droit minier et environnemental</Title>
        <Divider data-aos="fade-up" />

        <Paragraph data-aos="fade-up" data-aos-delay="300">
          Notre cabinet se distingue par son expertise approfondie en droit
          minier et environnemental, offrant des solutions juridiques adaptées
          aux défis complexes de ces secteurs. Nous comprenons l’importance de
          concilier développement économique et préservation de l’environnement.
        </Paragraph>
        <Paragraph data-aos="fade-up" data-aos-delay="400">
          Nous accompagnons nos clients dans toutes les étapes de leurs projets
          miniers, depuis les autorisations légales jusqu’à la gestion des
          litiges. Grâce à une maîtrise des réglementations environnementales,
          nous vous aidons à respecter vos obligations tout en maximisant vos
          opportunités d’investissement.
        </Paragraph>
        <Paragraph data-aos="fade-up" data-aos-delay="500">
          Face aux enjeux écologiques croissants, notre équipe s’engage à
          proposer des stratégies juridiques innovantes et responsables. Nous
          travaillons en étroite collaboration avec vous pour assurer la
          conformité de vos activités tout en minimisant les risques
          environnementaux.
        </Paragraph>
        <Paragraph data-aos="fade-up" data-aos-delay="600">
          En choisissant notre cabinet, vous bénéficiez d’un partenaire engagé,
          compétent et à l’écoute de vos besoins. Faites confiance à notre
          savoir-faire pour défendre vos intérêts dans le respect des normes
          légales et environnementales. Contactez-nous pour un accompagnement
          personnalisé et efficace.
        </Paragraph>
      </ContentContainer>
    </BackgroundContainer>
  );
}

export default function MinierEnvironn() {
  return (
    <Suspense fallback={<FallbackContainer><FallbackLogo src={images.tiptamcode} alt="Chargement..." /></FallbackContainer>}>
      <MinierEnvironnWrapper />
      <Minier2 />
    </Suspense>
  );
}
