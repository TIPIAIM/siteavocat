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
  background-image: url("img/MOE_0400.jpg");
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
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
`;

const ParagraphContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 1rem;
  max-width: 800px;
  text-align: justify;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const Image = styled.img`
  width: 200px;
  height: auto;
   object-fit: cover;
  border-radius: 10%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;

  @media (max-width: 768px) {
   
     margin-bottom: 0.5rem;
  }
`;

const Paragraph = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 2;
`;

const Divider = styled.div`
  height: 2px;
  width: 150px;
  background: #4ea8ff;
  margin: 2rem 0;
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
          Le droit de contentieux ?
        </Title>
        <Divider />
        <ParagraphContainer>
          <Image src="img/analysejuri.jpg" alt="Illustration 1" />
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Notre cabinet dispose d’une équipe de juristes et d’avocats
            expérimentés, spécialisés dans la gestion des litiges complexes.
            Nous maîtrisons les procédures judiciaires , garantissant une
            représentation solide et stratégique à chaque étape de votre
            dossier.
          </Paragraph>
        </ParagraphContainer>
        <ParagraphContainer>
          <Image src="img/keitaseul2.jpg" alt="Illustration 2" />
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Chaque contentieux est unique. Nous analysons minutieusement votre
            situation pour élaborer des stratégies adaptées à vos besoins
            spécifiques. Notre approche proactive vise à résoudre les différends
            de manière rapide et efficace, tout en minimisant les risques.
          </Paragraph>
        </ParagraphContainer>
        <ParagraphContainer>
          <Image src="img/technologie.jpg" alt="Illustration 3" />
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
        <ParagraphContainer>
          <Image src="img/travail.png" alt="Illustration 4" />
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
        <ParagraphContainer>
          <Image src="img/sttis.webp" alt="Illustration 5" />
          <Paragraph
            variants={textVariants}
            initial="hidden"
            animate={controls}
          >
            Notre cabinet est reconnu pour sa capacité à résoudre des
            contentieux complexes avec succès. Nos résultats et la satisfaction
            de nos clients témoignent de notre engagement envers l’excellence et
            la justice.
          </Paragraph>
        </ParagraphContainer>
      </ContentContainer>
    </BackgroundContainer>
   

      <Footer/>
    </div>
  );
}
