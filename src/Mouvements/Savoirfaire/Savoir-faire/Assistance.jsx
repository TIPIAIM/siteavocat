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
  color: #4ea8ff;
  margin-bottom: 2rem;
`;

const ParagraphWrapper = styled.div`
  display: flex;
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
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10%;
  
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: justify;
  margin: 20px;

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.4;
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
  max-width: 300px;
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
        <ContentContainer>
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
              <strong> Une expertise reconnue dans le domaine juridique </strong> 
              Notre équipe regroupe des avocats et juristes expérimentés,
              spécialisés en droit civil, commercial, fiscal, du travail, et
              administratif. Nous avons l’expérience et les compétences
              nécessaires pour résoudre vos problématiques juridiques, quelles
              qu’elles soient.Grâce à une veille juridique continue, nous
              restons à jour sur les évolutions législatives et réglementaires,
              vous garantissant des solutions toujours adaptées à la situation
              actuelle.
            </Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <ParagraphImage src="img/regulat.jpg" alt="Stratégie" />
            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong>Un accompagnement sur mesure </strong>
              Chaque client est unique. Nous prenons le temps d’étudier en
              profondeur votre situation pour construire une stratégie juridique
              parfaitement adaptée à vos besoins.Vous bénéficiez d’un
              interlocuteur dédié qui vous accompagne à chaque étape, en vous
              tenant informé de l’évolution de votre dossier et des démarches en
              cours. Notre approche consiste non seulement à gérer les litiges,
              mais aussi à anticiper les risques juridiques. Nous travaillons
              pour sécuriser vos contrats et pratiques afin de prévenir
              d’éventuels conflits.
            </Paragraph>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <ParagraphImage src="img/affaire.jpg" alt="Expertise" />
            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong>Une défense efficace et stratégique </strong>
              Nous avons une longue expérience dans la représentation de clients
              devant les tribunaux. Nos arguments sont toujours fondés sur des
              faits solides et une compréhension stratégique des enjeux. Nous
              veillons à ce que vous compreniez chaque étape du processus
              juridique. Aucune décision n’est prise sans votre consentement
              éclairé. Nous savons que les urgences juridiques peuvent survenir
              à tout moment. Notre équipe est toujours prête à répondre à vos
              besoins rapidement et efficacement.
            </Paragraph> 
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <ParagraphImage src="img/conf.jpeg" alt="Conformité" />
            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong>Nos domaines d’intervention</strong>
              <strong>Audit juridique :</strong> Nous vérifions vos contrats,
              politiques internes et pratiques commerciales pour vous protéger
              des risques légaux.
              <strong>Rédaction et sécurisation de contrats : </strong> Nous vous
              aidons à rédiger et sécuriser vos contrats, garantissant qu’ils
              protègent vos intérêts de manière claire et conforme aux
              réglementations.<strong>Gestion des litiges :</strong> En cas de
              conflit, nous mobilisons toute notre expertise pour défendre vos
              droits devant les tribunaux. Nous élaborons une stratégie basée
              sur une analyse minutieuse des faits et des lois applicables.{" "}
              <strong>
                Accompagnement dans les démarches administratives :
              </strong>
              Nous vous assistons dans vos relations avec les autorités
              administratives et vous accompagnons pour toutes vos obligations
              légales.<strong> Conseils stratégiques : </strong> Nous vous aidons
              à prendre les meilleures décisions juridiques pour atteindre vos
              objectifs et protéger vos intérêts à long terme.
            </Paragraph>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
            <Paragraph></Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper>
            <ParagraphImage src="img/PREV.jpeg" alt="Prévention" />
            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              <strong>Notre engagement : votre succès 
              En choisissant notre cabinet, vous optez pour: </strong>
              <ul>
                <li>
                  Une équipe passionnée et déterminée à défendre vos droits.
                </li>
                <li>
                  Une approche personnalisée et proactive pour résoudre vos
                  problématiques juridiques.
                </li>
                <li>
                  Un partenariat basé sur la confiance, la transparence, et des
                  résultats tangibles.
                </li>
              </ul>{" "}
              Contactez-nous dès aujourd’hui pour bénéficier d’une assistance
              juridique à la hauteur de vos attentes. Ensemble, nous protégerons
              vos intérêts avec rigueur et efficacité.
            </Paragraph>
            <Paragraph></Paragraph>
          </ParagraphWrapper>
          <ParagraphWrapper></ParagraphWrapper>

          <ImageContainer>
            <Image src="img/analysejuri.jpg" alt="Analyse juridique" />
            <Image src="img/regulat.jpg" alt="regulat" />
            <Image src="img/MOE_0400.jpg" alt="Équipe d'experts" />
          </ImageContainer>
        </ContentContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
}
