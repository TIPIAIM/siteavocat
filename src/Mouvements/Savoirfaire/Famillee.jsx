import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Famille2 from "./Famille2";
import Footer from "../Accueil/Footerr";

const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url("img/maitaction.jpg");
  background-size: cover;
  background-position: top;
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
  color: #90e0ef;
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
  width: 300px;
  background: #90e0ef;
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
  box-shadow: 0 4px 15px #90e0ef;
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

export default function Famillee() {
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
      
        <ContentContainer>  <BackButton to="/nosexpertises" data-aos="fade-right">
          <FaArrowLeft size={20} />
        </BackButton>
          <Title
            initial="hidden"
            animate={controls}
            variants={textVariants}
            ref={ref}
          >
            Droit de la Famille
          </Title>
          <Divider />
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Nous avons accompagné de nombreux clients dans des affaires
            complexes telles que les divorces, la garde d’enfants, les pensions
            alimentaires et la gestion des biens familiaux. Cette expertise nous
            permet d’offrir des solutions personnalisées et adaptées à chaque
            situation.
          </Paragraph>
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Nous comprenons que les affaires familiales touchent à des aspects
            émotionnels et personnels. C’est pourquoi nous mettons un point
            d’honneur à offrir un accompagnement humain, en faisant preuve
            d’écoute, d’empathie et de discrétion pour vous aider à traverser
            ces moments difficiles avec sérénité.
          </Paragraph>
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Grâce à notre connaissance approfondie des lois et procédures, nous
            élaborons des stratégies juridiques solides pour protéger vos droits
            et obtenir les meilleurs résultats. Nous analysons chaque détail de
            votre dossier pour vous donner un avantage dans toutes les
            négociations ou audiences.
          </Paragraph>

          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Nous pensons que chaque client mérite une attention particulière.
            Notre équipe reste disponible pour répondre à toutes vos questions
            et vous tenir informé de l’évolution de votre dossier à chaque
            étape.
          </Paragraph>
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Nos résultats parlent d`eux-mêmes : nous avons permis à de nombreux
            clients de trouver des solutions favorables et équitables à leurs
            conflits familiaux. Que ce soit pour préserver vos relations
            familiales ou défendre vos intérêts, nous faisons toujours preuve
            d’un engagement total.
          </Paragraph>

          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            En choisissant notre cabinet, vous optez pour une équipe qui se
            consacre pleinement à défendre vos droits avec professionnalisme,
            humanité et détermination.
          </Paragraph>
        </ContentContainer>
        <Famille2 />
      </BackgroundContainer>

      <Footer />
    </div>
  );
}
