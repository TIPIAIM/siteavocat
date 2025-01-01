import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BardeNavigationpublic from "../../Navigatpublic/BardeNavigationPublic";
import Footer from "../../Accueil/Footerr";
import logoAODnoir from "./../../../assets/Image/logoAODnoir.avif"
import FISCAL from "./../../../assets/Image/FISCAL.avif"
import arbitra from "./../../../assets/Image/arbitra.avif"
import travail from "./../../../assets/Image/travail.avif"
import image from "./../../../assets/Image/FISCAL.avif"


const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("img/confience.jpg");
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
  color: black;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 1rem 1rem;
    text-align: left; /* Alignement du texte à gauche */
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

const ParagraphContainer = styled.div`
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
    text-align: center; /* Alignement du texte à gauche */
    padding: 0rem;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledImage = styled(motion.img)`
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
export default function Contentieux() {
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

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div>
      <BackgroundContainer >
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
            Le droit de contentieux ?
          </Title>
          <Divider />
          {/* Section 1 */}
          <ParagraphContainer>
            
            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              Notre cabinet dispose d’une équipe de juristes et d’avocats
              expérimentés, spécialisés dans la gestion des litiges complexes.
              Nous maîtrisons les procédures judiciaires, garantissant une
              représentation solide et stratégique à chaque étape de votre
              dossier.
            </Paragraph>
          </ParagraphContainer>
          {/* Section 2 */}
          <ParagraphContainer>
            <StyledImage
              src={FISCAL}
              alt="Illustration 2"
              variants={imageVariants}
              initial="hidden"
              animate={controls}
            />
            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              Chaque contentieux est unique. Nous analysons minutieusement votre
              situation pour élaborer des stratégies adaptées à vos besoins
              spécifiques. Notre approche proactive vise à résoudre les
              différends de manière rapide et efficace, tout en minimisant les
              risques.
            </Paragraph>
          </ParagraphContainer>
          {/* Section 3 */}
          <ParagraphContainer>
            <StyledImage
              src={arbitra}
              alt="Illustration 3"
              variants={imageVariants}
              initial="hidden"
              animate={controls}
            />
            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              Nous sommes déterminés à protéger vos droits et à défendre vos
              intérêts avec rigueur et professionnalisme. Que ce soit pour des
              litiges commerciaux, civils, ou administratifs, notre équipe se
              consacre entièrement à obtenir les meilleurs résultats possibles
              pour vous.
            </Paragraph>
          </ParagraphContainer>
          {/* Section 4 */}
          <ParagraphContainer>
            <StyledImage
              src={travail}
              alt="Illustration 4"
              variants={imageVariants}
              initial="hidden"
              animate={controls}
            />
            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              Nous croyons en une communication claire et continue avec nos
              clients. Vous serez informé à chaque étape du processus, et nous
              travaillerons en collaboration étroite avec vous pour garantir une
              gestion optimale de votre dossier.
            </Paragraph>
          </ParagraphContainer>
          {/* Section 5 */}
          <ParagraphContainer>
            <StyledImage
              src={image}
              alt="Illustration 5"
              variants={imageVariants}
              initial="hidden"
              animate={controls}
            />
            <Paragraph
              variants={textVariants}
              initial="hidden"
              animate={controls}
            >
              Notre cabinet est reconnu pour sa capacité à résoudre des
              contentieux complexes avec succès. Nos résultats et la
              satisfaction de nos clients témoignent de notre engagement envers
              l’excellence et la justice.
            </Paragraph>
          </ParagraphContainer>
          <ImageContainer>
            <Image src={logoAODnoir} alt="Analyse juridique" />
          </ImageContainer>
        </ContentContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
}
