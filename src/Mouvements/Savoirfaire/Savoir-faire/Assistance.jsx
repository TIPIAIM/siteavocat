import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BardeNavigationpublic from "../../Navigatpublic/BardeNavigationPublic";
import Footer from "../../Accueil/Footerr";

const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("img/confience.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
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
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  color: #90e0ef;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ParagraphWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  max-width: 1000px;
  gap: 2rem;
  border-radius: 8px;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ParagraphImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: justify;
  color: #e0e0e0;

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6rem;
  }
`;

const Divider = styled.div`
  height: 3px;
  width: 200px;
  background: #4ea8ff;
  margin: 2rem 0;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const Image = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }
`;

export default function AuditJuridique() {
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
          <Title
            initial="hidden"
            animate={controls}
            variants={textVariants}
            ref={ref}
          >
            Assistance juridique
          </Title>
          <Divider />
          <ParagraphWrapper>
            <ParagraphImage src="img/analysejuri.jpg" alt="Analyse" />
            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong style={{ color: '#90e0ef'}}>Une expertise reconnue dans le domaine juridique :</strong> 
              Notre équipe regroupe des avocats et juristes expérimentés,
              spécialisés en droit civil, commercial, fiscal, du travail, et
              administratif. Nous avons l’expérience et les compétences
              nécessaires pour résoudre vos problématiques juridiques, quelles
              qu’elles soient. Nous mettons à votre disposition un accompagnement
              sur mesure pour chaque situation.
            </Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <ParagraphImage src="img/regulat.jpg" alt="Régulation" />
            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong style={{ color: '#90e0ef'}}>Accompagnement dans la régulation :</strong>
              Nous vous assistons dans vos démarches administratives et
              réglementaires pour garantir la conformité de vos activités avec
              les lois en vigueur. Cela inclut l’élaboration des documents requis,
              la représentation auprès des autorités compétentes, et le suivi des
              modifications législatives.
            </Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <ParagraphImage src="img/MOE_0400.jpg" alt="Consultation" />
            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong style={{ color: '#90e0ef'}}>Consultations personnalisées :</strong>
              Nos experts sont à votre écoute pour vous fournir des solutions
              adaptées à vos besoins spécifiques, que ce soit pour des
              conseils, des analyses ou des recommandations stratégiques.
              Nous abordons chaque cas avec une attention particulière pour
              offrir un service réellement personnalisé.
            </Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <ParagraphImage src="img/enfamiavoc.jpg" alt="Formation" />
            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong style={{ color: '#90e0ef'}}>Formations spécialisées :</strong>
              Nous proposons des programmes de formation adaptés pour vous
              aider à mieux comprendre et gérer les aspects juridiques de vos
              projets. Ces formations couvrent des sujets variés allant de la
              gestion des contrats à la prévention des litiges.
            </Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <ParagraphImage src="img/envir.jpeg" alt="Protection" />
            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong style={{ color: '#90e0ef'}}>Protection juridique :</strong>
              Nous vous offrons une assistance pour anticiper et gérer les
              litiges, en assurant une protection efficace de vos droits.
              Notre approche proactive vise à réduire les risques légaux
              et à sécuriser vos intérêts sur le long terme.
            </Paragraph>
          </ParagraphWrapper>
          <ImageContainer>
            <Image src="img/analysejuri.jpg" alt="Analyse juridique" />
            <Image src="img/regulat.jpg" alt="Régulation" />
            <Image src="img/PREV.jpeg" alt="Équipe d'experts" />
          </ImageContainer>
        </ContentContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
}
