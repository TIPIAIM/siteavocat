import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BardeNavigationpublic from "../../Navigatpublic/BardeNavigationPublic";
import Footer from "../../Accueil/Footerr";
import EVOL from "./../../../assets/Image/EVOL.avif"
import logoAODnoir from "./../../../assets/Image/logoAODnoir.avif"
import sttis from "./../../../assets/Image/sttis.avif"
import PREV from "./../../../assets/Image/PREV.avif"
import conf from "./../../../assets/Image/conf.avif"
import affaire from "./../../../assets/Image/affaire.avif"
import jurid1 from "./../../../assets/Image/jurid1.avif"
import jurid from "./../../../assets/Image/jurid.avif"

const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url("img/confience.avif");
  background-size: cover;
  background-position: center;
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
  color: black;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 2rem 1rem;
    text-align: center; /* Alignement du texte à gauche */
    margin: 1rem;

    }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  color: #90e0ef;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const ParagraphWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0rem;
  max-width: 1000px;
  gap: 2rem;
  border-radius: 0px;
  padding: 1.5rem;
  background: rgba(10, 34, 64, 0.5);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: flex; /* Alignement du texte à gauche */
    padding: 0rem;
    
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ParagraphImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 5%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    border-radius: 0%;
    width: 400px;
    height: 250px;
    margin-bottom: 1rem;
    text-align: center; /* Alignement du texte à gauche */
  }
  @media (max-width: 1024px) {
    width: 400px;

    height: 200px;
    margin: 0 auto;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: left;
  color: #e0e0e0;

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6rem;
    text-align: left; /* Alignement du texte à gauche */
    padding: 2rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.7rem;
    text-align: left;
    justify-content: left;

    margin: 0.5rem;
  }
`;

const Divider = styled.div`
  height: 3px;
  width: 300px;
  background: #4ea8ff;
  margin: 2rem 0;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    gap: 0.5rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width:200px;
    background: rgba(250, 250, 250, 0.8);
margin-top: 4rem;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
      background: rgba(250, 250, 250, 0.3);
    }
  @media (max-width: 1024px) {
    max-width: 250px;
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
        <ContentContainer
          style={{ fontFamily: "Helvetica55Roman, Arial, sans-serif" }}
        >
          <Title
            initial="hidden"
            animate={controls}
            variants={textVariants}
            ref={ref}
          >
            Audit juridiques ?
          </Title>
          <Divider />
          <ParagraphWrapper>
            <ParagraphImage src={jurid} alt="Analyse" />

            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              Dans un environnement juridique de plus en plus complexe, un audit
              juridique rigoureux est essentiel pour garantir la pérennité de
              vos activités et la conformité de vos pratiques. Notre cabinet se
              distingue par son expertise et son approche personnalisée.
            </Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <ParagraphImage src={jurid1} alt="Stratégie" />

            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong style={{ color: "#90e0ef" }}>
                1. Une analyse approfondie et stratégique :
              </strong>{" "}
              Notre équipe procède à une évaluation complète de vos documents
              juridiques, tels que contrats, statuts, accords de partenariat, et
              politiques internes. Nous identifions non seulement les zones de
              risque, mais aussi les opportunités pour optimiser vos pratiques
              et renforcer votre position juridique.
            </Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <ParagraphImage src={affaire} alt="Expertise" />

            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong style={{ color: "#90e0ef" }}>
                2. Une expertise multidisciplinaire unique :
              </strong>{" "}
              Nos avocats spécialisés couvrent plusieurs branches du droit,
              notamment le droit des affaires, le droit du travail, le droit
              fiscal, et le droit commercial. Cette diversité garantit une
              vision globale et cohérente de votre environnement juridique.
            </Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <ParagraphImage src={conf} alt="Conformité" />

            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong style={{ color: "#90e0ef" }}>
                3. Une conformité avec les normes en constante évolution :
              </strong>
              Les lois et réglementations changent rapidement. Nous veillons à
              ce que vos pratiques soient en adéquation avec les dernières
              exigences légales, réduisant ainsi les risques de sanctions
              administratives ou de litiges.
            </Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <ParagraphImage src={PREV} alt="Prévention" />

            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong style={{ color: "#90e0ef" }}>
                4. Une prévention proactive des risques :
              </strong>{" "}
              Un audit juridique efficace vous permet de prévoir et d’éviter des
              problèmes avant qu’ils ne surviennent. Notre approche proactive
              inclut des recommandations précises pour corriger les anomalies
              identifiées et protéger vos intérêts.
            </Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <ParagraphImage src={EVOL} alt="Accompagnement" />

            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong style={{ color: "#90e0ef" }}>
                5. Un accompagnement sur mesure :
              </strong>{" "}
              Au-delà de l’audit, nous vous assistons dans la mise en œuvre des
              solutions proposées. Que ce soit pour la révision de vos contrats,
              la restructuration juridique ou la négociation de clauses, notre
              équipe est à vos côtés à chaque étape.
            </Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <ParagraphImage src={sttis} alt="Avantages" />

            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong style={{ color: "#90e0ef" }}>
                6. Des avantages concrets pour votre organisation :
              </strong>

              <li>
                Réduction des coûts liés aux litiges grâce à une prévention
                efficace.
              </li>
              <li>
                Amélioration de la crédibilité de votre entreprise vis-à-vis de
                vos partenaires et investisseurs.
              </li>
              <li>
                Optimisation de vos processus internes pour une gestion plus
                fluide et sécurisée.
              </li>
            </Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong style={{ color: "#90e0ef" }}>
                7. Une relation de confiance :
              </strong>{" "}
              Notre engagement repose sur la transparence, la discrétion, et une
              écoute active de vos besoins. Chaque client bénéficie d’un suivi
              personnalisé, car nous comprenons que chaque situation est unique.
            </Paragraph>
          </ParagraphWrapper>
          <ImageContainer>
            <Image src={logoAODnoir} alt="Analyse juridique" />
          </ImageContainer>
        </ContentContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
}
