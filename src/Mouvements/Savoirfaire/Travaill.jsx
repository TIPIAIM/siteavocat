import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
//import Travail2 from "./Traval2";
import Footer from "../Accueil/Footerr";
import Securitee from "./Securitee";

const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url("img/logoAODnoir.avif");
  background-size: cover;
  background-position: top;
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

    @media (max-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: 700;
  color: #00b4d8;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled(motion.p)`

color: #caf0f8;

font-size: 1.3rem;
line-height: 1.8;

max-width: 800px;
text-align: left;

  @media (max-width: 480px) {
  font-size: 1rem;
  line-height: 1.6rem;
  text-align: left; /* Alignement du texte à gauche */
  margin : 2rem;
}
@media (max-width: 1024px) {
  font-size : 1.1rem;
  line-height: 1.7rem;
  text-align: left;
justify-content: left;

`;

const Divider = styled.div`
  height: 3px;
  width: 300px;
  background: #4ea8ff;
  margin: 2rem 0;
`;
const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #;
  border-radius: 50%;
  box-shadow: 0 4px 1px #90e0ef;
  color: ;
  margin-bottom: 0rem;
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

export default function Travail() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
    <div>
      <BackgroundContainer>
        <Overlay />

        <BardeNavigationpublic />
        <ContentContainer >
          {" "}
          <BackButton to="/nosexpertises" data-aos="fade-right">
            <FaArrowLeft size={20} />
          </BackButton>
          <Title
            initial="hidden"
            animate={controls}
            variants={textVariants}
            ref={ref}
          >
            Le droit de travail
          </Title>
          <Divider />
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Notre cabinet est composé de juristes et d’avocats hautement
            qualifiés, spécialisés en droit du travail. Nous comprenons les
            enjeux complexes des relations employeur-employé, et notre expertise
            couvre une large gamme de problématiques liées à l’emploi, y compris
            les contrats de travail, la gestion des conflits et les
            licenciements.
          </Paragraph>
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Nous nous engageons à fournir des solutions juridiques sur mesure
            adaptées à votre situation spécifique. Que vous soyez employeur ou
            salarié, nous analysons vos besoins pour proposer des stratégies qui
            protègent vos droits tout en favorisant une résolution rapide et
            efficace des différends.
          </Paragraph>
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Le droit du travail évolue constamment, et les litiges nécessitent
            souvent une réponse rapide. Notre équipe est disponible et réactive
            pour répondre à vos préoccupations, vous accompagner dans les
            négociations, et vous représenter devant les juridictions
            compétentes.
          </Paragraph>
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Pour les entreprises, nous mettons un point d’honneur à prévenir les
            litiges en veillant à ce que vos politiques internes, contrats de
            travail et pratiques RH soient conformes aux dernières
            réglementations. Pour les salariés, nous veillons à ce que vos
            droits soient respectés et défendus avec diligence.
          </Paragraph>
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            En choisissant notre cabinet, vous bénéficiez d’un partenaire
            juridique qui place vos intérêts au cœur de son action. Nous vous
            apportons une expertise de pointe, un accompagnement humain et une
            défense acharnée pour atteindre des résultats concrets et
            satisfaisants.
          </Paragraph>
        </ContentContainer>
      </BackgroundContainer>
    <Securitee/>
      {/*<Travail2 />*/}
     { /**/}
      <Footer />
    </div>
  );
}
