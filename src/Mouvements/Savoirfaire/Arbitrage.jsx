import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Accueil/Footerr";

const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url("img/arbitra.png"); /* Image optimisée */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: white;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6));
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #;
  border-radius: 50%;
  box-shadow: 0 4px 15px #caf0f8;
  color: white;
  margin-bottom: 1rem;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    background-color: #ffffff;
    color: #4ea8ff;
    transform: scale(1.1);
  }

  &:focus {
    outline: 3px solid #ffffff;
    outline-offset: 4px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  color: #90e0ef;
  text-align: center;
  margin-bottom: 1rem;
`;

const Section = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  color: #2d3142;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 800px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  color: #03045e;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  text-align: justify;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default function Arbitrage() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };

  return (
    <div>
      <BackgroundContainer>
        <Overlay />
        <BardeNavigationpublic />
        <ContentWrapper
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <BackButton to="/nosexpertises" aria-label="Retour à la page des expertises">
            <FaArrowLeft size={20} />
          </BackButton>
          <Title variants={textVariants} ref={ref}>
            Le droit d’arbitrage ?
          </Title>
          <Section variants={textVariants}>
            <SectionTitle>Expertise reconnue dans l’arbitrage</SectionTitle>
            <Paragraph>
              Notre cabinet est composé de spécialistes chevronnés dans le domaine
              de l’arbitrage. Nous avons une maîtrise approfondie des procédures
              nationales et internationales, garantissant une gestion optimale de
              vos litiges en dehors des tribunaux traditionnels.
            </Paragraph>
          </Section>
          <Section variants={textVariants}>
            <SectionTitle>Résolution rapide et efficace</SectionTitle>
            <Paragraph>
              L’arbitrage est souvent préféré pour sa rapidité et sa
              confidentialité. Nous nous engageons à réduire les délais et à
              assurer un processus fluide, grâce à des stratégies adaptées à vos
              besoins spécifiques.
            </Paragraph>
          </Section>
          <Section variants={textVariants}>
            <SectionTitle>Approche personnalisée et collaborative</SectionTitle>
            <Paragraph>
              Chaque conflit est unique, et notre équipe adopte une méthode
              personnalisée pour garantir des solutions qui protègent vos
              intérêts. Nous collaborons étroitement avec vous à chaque étape pour
              maximiser les chances de succès.
            </Paragraph>
          </Section>
          <Section variants={textVariants}>
            <SectionTitle>Connaissance des industries variées</SectionTitle>
            <Paragraph>
              Que ce soit dans les secteurs commerciaux, technologiques, ou
              industriels, notre expérience diversifiée nous permet de comprendre
              les spécificités de votre domaine et d’apporter des réponses
              précises à vos problématiques.
            </Paragraph>
          </Section>
          <Section variants={textVariants}>
            <SectionTitle>Engagement pour votre succès</SectionTitle>
            <Paragraph>
              En choisissant notre cabinet, vous optez pour une équipe passionnée,
              rigoureuse et déterminée à défendre vos droits. Nous transformons
              les litiges complexes en opportunités de résolution claire et
              favorable.
            </Paragraph>
          </Section>
        </ContentWrapper>
      </BackgroundContainer>
      <Footer />
    </div>
  );
}
