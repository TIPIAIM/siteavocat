import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Securite from "./Securite";
import Footer from "../Accueil/Footerr";

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
  background: rgba(10, 34, 64, 0.9)
;
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
  font-family: "Georgia", serif;

`;

const Paragraph = styled(motion.p)`
  font-size: 1.3rem;
  line-height: 2rem;
  margin-bottom: 2rem;
  max-width: 800px;
  text-align: justify;
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
  box-shadow: 0 4px 15px #caf0f8;
  color: ;
  margin-bottom: 0rem;
  transition: background-color 0.2s ease;

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
      <ContentContainer className=" font-serif">
        <BackButton to="/nosexpertises" data-aos="fade-right">
          <FaArrowLeft size={20} />
        </BackButton>
        <Title
          initial="hidden"
          animate={controls}
          variants={textVariants}
          ref={ref}
        >
          Sécurité et sécurité sociale ?
        </Title>
        <Divider />
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          Notre cabinet se distingue par une expertise approfondie dans le
          domaine du droit de la sécurité et de la sécurité sociale. Nous
          comprenons les défis complexes auxquels vous êtes confrontés, qu’il
          s’agisse de la protection de vos droits en tant qu’employé ou de la
          gestion des obligations légales en tant qu’employeur.
        </Paragraph>
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          Nous restons constamment à jour sur les évolutions des lois relatives
          à la sécurité au travail et à la sécurité sociale. Cela nous permet de
          vous offrir des solutions juridiques adaptées et efficaces, répondant
          aux normes en vigueur.
        </Paragraph>
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          Que ce soit pour des litiges liés aux accidents de travail, la
          négociation de prestations sociales, ou la défense de vos droits face
          à des institutions, nous vous accompagnons à chaque étape. Nous
          élaborons des stratégies personnalisées pour garantir vos intérêts et
          résoudre vos problématiques juridiques.
        </Paragraph>
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          Notre cabinet aide les employeurs à se conformer aux réglementations
          en matière de sécurité et de protection sociale tout en minimisant les
          risques juridiques. Pour les salariés, nous nous assurons que vos
          droits soient respectés, qu’il s’agisse de congés maladie,
          d’indemnités ou de pensions.
        </Paragraph>
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          Nous savons que les questions de sécurité sociale touchent directement
          à la vie quotidienne. C’est pourquoi notre équipe s’engage à vous
          écouter attentivement et à réagir rapidement à vos besoins, avec un
          suivi rigoureux de chaque dossier.
        </Paragraph>
        <Paragraph variants={textVariants} initial="hidden" animate={controls}>
          En nous choisissant, vous optez pour un cabinet engagé, compétent et
          soucieux de protéger vos droits. Faites confiance à notre savoir-faire
          pour résoudre vos litiges, assurer votre sécurité juridique et
          garantir une gestion efficace de vos affaires en matière de sécurité
          sociale. Contactez-nous dès aujourd’hui pour une consultation
          personnalisée et laissez-nous vous accompagner avec excellence.
        </Paragraph>
      </ContentContainer>
      <Securite />
      
    </BackgroundContainer><Footer/>

    </div>
  );
}
