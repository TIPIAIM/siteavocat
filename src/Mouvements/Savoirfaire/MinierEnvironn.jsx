import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Minier2 from "./MinierEnviron2";

const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url("img/logoAODnoir.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #caf0f8;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4ea8ff;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
      @media (max-width: 1024px) {
    padding: 3rem;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 2;
  margin-bottom: 0rem;
  max-width: 800px;
  text-align: left;

  @media (max-width: 1024px) {
    font-size : 1.1rem;
    line-height: 1.7rem;
    text-align: left;
    padding: 3rem;
  justify-content: left;
  }

  @media (max-width: 768px) {
    font-size : 1.1rem;
    line-height: 1.7rem;
    text-align: left;
    padding: 2rem;
  justify-content: left;
  }

  @media (max-width: 480px) {
  font-size: 1rem;
    line-height: 1.6rem;
    text-align: left; /* Alignement du texte à gauche */
    padding: 3rem;
  }
`;

const Divider = styled.div`
  height: 3px;
  width: 300px;
  background: #00b4d8;
  margin: 2rem 0;

  @media (max-width: 480px) {
    width: 100px;
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

export default function MinierEnvironn() {
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
  
      <BackgroundContainer>
        <Overlay />
        <BardeNavigationpublic />{" "}
        <ContentContainer>
          <BackButton to="/nosexpertises" data-aos="fade-right">
            <FaArrowLeft size={20} />
          </BackButton>
          <Title
            initial="hidden"
            animate={controls}
            variants={textVariants}
            ref={ref}
          >
            Droit minier et environnemental ?
          </Title>
          <Divider />
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Notre cabinet se distingue par son expertise approfondie en droit
            minier et environnemental, offrant des solutions juridiques adaptées
            aux défis complexes de ces secteurs. Nous comprenons l’importance de
            concilier développement économique et préservation de
            l’environnement.
          </Paragraph>
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Nous accompagnons nos clients dans toutes les étapes de leurs
            projets miniers, depuis les autorisations légales jusqu’à la gestion
            des litiges. Grâce à une maîtrise des réglementations
            environnementales, nous vous aidons à respecter vos obligations tout
            en maximisant vos opportunités d’investissement.
          </Paragraph>
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Face aux enjeux écologiques croissants, notre équipe s’engage à
            proposer des stratégies juridiques innovantes et responsables. Nous
            travaillons en étroite collaboration avec vous pour assurer la
            conformité de vos activités tout en minimisant les risques
            environnementaux.
          </Paragraph>
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            En choisissant notre cabinet, vous bénéficiez d’un partenaire
            engagé, compétent et à l’écoute de vos besoins. Faites confiance à
            notre savoir-faire pour défendre vos intérêts dans le respect des
            normes légales et environnementales. Contactez-nous pour un
            accompagnement personnalisé et efficace.
          </Paragraph>
        </ContentContainer>{" "}
        <Minier2 />
      </BackgroundContainer>
      

  );
}
