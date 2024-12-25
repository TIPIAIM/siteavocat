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
  background-image: url("img/confience.jpg");
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
  color: white;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: bold;
  color: #90e0ef;
  margin-bottom: 2rem;
`;

const ParagraphWrapper = styled.div`
  display: flex;
  background: rgba(10, 34, 64, 0.4);
  border-radius: 52px;
  align-items: flex-start;
  margin-bottom: 1rem;
  max-width: 1000px;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ParagraphImage = styled.img`
  width: 150px;
  height: 150px;
  padding: 10px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 100%;
    height: 250px;
    max-height: 250px;
    object-fit: cover;
    border-radius: 20%;
    
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 2;
  text-align: justify;
  margin: 20px;

  @media (max-width: 480px) {
    font-size: 1rem;
   padding : 20px;
    line-height: 1.4;
    text-align: left; /* Alignement du texte à gauche */
  }
`;

const Divider = styled.div`
  height: 2px;
  width: 150px;
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
  max-width: 200px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
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
          className=" font-serif"
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
            <ParagraphImage src="img/jurid.jpg" alt="Analyse" />
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
            <ParagraphImage src="img/jurid1.avif" alt="Stratégie" />
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
            <ParagraphImage src="img/affaire.jpg" alt="Expertise" />
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
            <ParagraphImage src="img/conf.jpeg" alt="Conformité" />
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
            <ParagraphImage src="img/PREV.jpeg" alt="Prévention" />
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
            <ParagraphImage src="img/EVOL.jpeg" alt="Accompagnement" />
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
            <ParagraphImage src="img/sttis.webp" alt="Avantages" />
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
                  Amélioration de la crédibilité de votre entreprise vis-à-vis
                  de vos partenaires et investisseurs.
                </li>
                <li>
                  Optimisation de vos processus internes pour une gestion plus
                  fluide et sécurisée.
                </li>
              
            </Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <ParagraphImage src="img/confience.jpg" alt="Confiance" />
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
            <Image src="img/logoAODnoir.png" alt="Analyse juridique" />
          </ImageContainer>
        </ContentContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
}
