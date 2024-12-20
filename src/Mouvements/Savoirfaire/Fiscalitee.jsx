import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Fiscalitee2 from "./Fiscalitee2";

const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url("img/logoAODnoir.png");
  background-size: cover;
  background-position:center;
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
  color: white;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4ea8ff;
  margin-bottom: 2rem;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 2;
  margin-bottom: 2rem;
  max-width: 800px;
  text-align: justify;
`;

const Divider = styled.div`
  height: 2px;
  width: 150px;
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
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
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


export default function Fiscalitee() {
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
            Le droit fiscal ?
          </Title>
          <Divider />
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Notre cabinet est composé d’experts en droit fiscal, ayant une
            solide expérience dans la gestion des problématiques fiscales
            complexes. Que vous soyez une entreprise ou un particulier, nous
            comprenons les enjeux fiscaux auxquels vous êtes confrontés et nous
            sommes là pour vous offrir des solutions adaptées.
          </Paragraph>
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Nous offrons un accompagnement personnalisé pour optimiser votre
            fiscalité tout en respectant strictement les lois en vigueur. Notre
            expertise inclut la planification fiscale, la gestion des audits,
            les contentieux fiscaux et la conformité réglementaire, vous
            garantissant une tranquillité d`esprit totale.
          </Paragraph>
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Grâce à une veille juridique constante, nous restons informés des
            évolutions fiscales et proposons des stratégies innovantes pour
            maximiser vos avantages tout en minimisant les risques. Nous sommes
            votre partenaire de confiance pour vous aider à naviguer dans un
            environnement fiscal en perpétuelle évolution.
          </Paragraph>
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            En choisissant notre cabinet, vous bénéficiez d’une équipe dévouée,
            rigoureuse et engagée à défendre vos intérêts fiscaux avec
            professionnalisme et intégrité. Faites le choix de l’excellence pour
            sécuriser et optimiser votre situation fiscale.
          </Paragraph>
        </ContentContainer>{" "}
        <Fiscalitee2 />
      </BackgroundContainer>
    </div>
  );
}
