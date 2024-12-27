import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Penal2 from "./Penal2";

const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url("img/logoAODnoir.png");
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
  font-size: 3.5rem;
  font-weight: bold;
  color: #4ea8ff;
  margin-bottom: 2rem;
`;

const Paragraph = styled(motion.p)`
  font-size: 1rem;
  line-height: 2;
  margin-bottom: 2rem;
  max-width: 800px;
  text-align: left;
   @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6rem;
    text-align: left; /* Alignement du texte à gauche */
    padding: 1rem;
  }
`;


const Divider = styled.div`
  height: 2px;
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

export default function Penall() {
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
      <ContentContainer className=" ">
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
          Le droit pénal ?
        </Title>
        <Divider />
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          Notre cabinet possède une expertise approfondie en droit pénal, avec
          une équipe d’avocats expérimentés qui maîtrisent toutes les facettes
          de cette discipline. Que vous soyez victime ou accusé, nous vous
          garantissons une défense rigoureuse, basée sur une analyse approfondie
          de votre dossier et des stratégies juridiques adaptées.
        </Paragraph>
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          Nous comprenons que les affaires pénales sont souvent complexes et
          émotionnellement difficiles. C’est pourquoi nous adoptons une approche
          humaine, en vous écoutant attentivement et en vous accompagnant tout
          au long du processus judiciaire. Chaque client est unique, et nous
          nous engageons à vous offrir un soutien sur mesure.
        </Paragraph>
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          Notre objectif est de protéger vos droits à chaque étape de la
          procédure pénale. Grâce à notre connaissance des lois, des procédures
          et des juridictions, nous anticipons les éventuelles complications et
          mettons tout en œuvre pour obtenir le meilleur résultat possible, que
          ce soit en négociant une peine réduite ou en plaidant en votre faveur
          devant les tribunaux.
        </Paragraph>
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          Dans les affaires pénales, chaque minute compte. Notre équipe est
          disponible pour répondre rapidement à vos besoins urgents, qu’il
          s’agisse d’une garde à vue, d’une comparution immédiate ou d’une mise
          en détention. Nous sommes à vos côtés pour agir avec efficacité et
          réactivité.
        </Paragraph>
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          En choisissant notre cabinet, vous faites appel à des professionnels
          engagés, compétents et déterminés à défendre vos intérêts. Faites
          confiance à notre savoir-faire pour vous représenter avec force et
          conviction face à la justice.
        </Paragraph>
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          Si vous êtes confronté à une affaire pénale, ne restez pas seul.
          Contactez notre cabinet pour une consultation confidentielle et
          laissez-nous vous accompagner avec professionnalisme et intégrité.
        </Paragraph>
      </ContentContainer>
     
    </BackgroundContainer>


         <Penal2/>
    </div>
  );
}
