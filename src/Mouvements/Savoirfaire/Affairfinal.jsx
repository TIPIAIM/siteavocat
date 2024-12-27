import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url("img/logoAODnoir.png"); /* Remplacez par le chemin de votre image */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.9); /* Ajustez la transparence ici */
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #ade8f4;
`;

const Title = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: bold;
  color: #63b3ed;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin-bottom: 1.5rem;
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  max-width: 800px;
  text-align: left;
  color: white;

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6rem;
    text-align: left; /* Alignement du texte à gauche */
    padding: 2rem;
  }
`;

const Divider = styled.div`
  height: 3px;
  background: linear-gradient(90deg, #63b3ed 0%, #3182ce 100%);
  width: 80%;
  margin: 1.5rem 0;
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg);
  border-radius: 50%;
  box-shadow: 0 4px 8px #90e0ef;
  color: white;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    background: #63b3ed;
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  &:focus {
    outline: 3px solid #90cdf4;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

export default function Affairfinal() {
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
      <ContentContainer>
        <BardeNavigationpublic />

        <BackButton to="/nosexpertises" aria-label="Retour aux expertises">
          <FaArrowLeft size={24} />
        </BackButton>

        <Title
          initial="hidden"
          animate={controls}
          variants={textVariants}
          ref={ref}
        >
          Le droit des affaires
        </Title>
        <Divider />
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          Notre cabinet est composé d’avocats spécialisés en droit des affaires,
          dotés de plusieurs années d’expérience dans le domaine. Nous
          maîtrisons les complexités juridiques des entreprises et sommes à jour
          sur les évolutions légales et réglementaires. Que ce soit pour la
          rédaction de contrats, la gestion de litiges ou des conseils
          stratégiques, nous avons les compétences pour défendre vos intérêts.
        </Paragraph>
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          Nous comprenons que chaque entreprise a des besoins uniques. C’est
          pourquoi nous proposons des solutions juridiques sur mesure, adaptées
          à vos objectifs commerciaux. Notre approche centrée sur le client
          garantit une attention particulière à vos attentes et un suivi
          rigoureux de votre dossier.
        </Paragraph>
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          Dans le monde des affaires, le temps est précieux. Notre équipe
          s’engage à répondre rapidement à vos demandes et à anticiper les
          risques pour minimiser les imprévus. Nous sommes disponibles à tout
          moment pour vous accompagner dans vos démarches juridiques.
        </Paragraph>
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          En choisissant notre cabinet, vous optez pour un partenaire engagé,
          professionnel et déterminé à défendre vos intérêts avec excellence.
          Faites confiance à notre expertise pour protéger vos droits et assurer
          la pérennité de vos affaires. Contactez-nous dès aujourd’hui pour une
          consultation personnalisée.
        </Paragraph>
      </ContentContainer>
    </BackgroundContainer>
  );
}
