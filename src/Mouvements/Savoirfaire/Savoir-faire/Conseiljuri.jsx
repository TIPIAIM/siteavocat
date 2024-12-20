import { motion } from "framer-motion";
import styled from "styled-components";
import BardeNavigationpublic from "../../Navigatpublic/BardeNavigationPublic";
import Footer from "../../Accueil/Footerr";

// Container principal avec fond d'image et dégradé pour la lisibilité
const Container = styled.div`
  background: url("img/confience.jpg") no-repeat center center/cover;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
  position: relative;
  min-height: 100vh;
  background-attachment: fixed;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9); /* Ombre pour améliorer la lisibilité */
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4ea8ff;
  margin-bottom: 3rem;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 10;
  max-width: 800px;
`;

const PointsList = styled.div`
  max-width: 800px;
  text-align: left;
  z-index: 10;
`;

const Point = styled(motion.div)`
  margin-bottom: 1.8rem;
  font-size: 1.2rem;
  line-height: 1.8;
  color: #ddd;
  padding-left: 2rem;
  position: relative;

  &::before {
    content: "✔";
    color: #4ea8ff;
    position: absolute;
    left: 0;
    font-size: 1.5rem;
    top: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Conseiljuri = () => {
  return (
    <div>
    <Container>
        <BardeNavigationpublic/>
      <Title initial="hidden" animate="visible" variants={textVariants}>
        Conseils juridiques ?
      </Title>
      <PointsList>
        <Point initial="hidden" animate="visible" variants={textVariants}>
          <strong>Expertise et expérience reconnue :</strong> Notre équipe de
          juristes et d'avocats est spécialisée dans de nombreux domaines du
          droit, vous offrant des solutions adaptées à vos besoins.
        </Point>
        <Point initial="hidden" animate="visible" variants={textVariants}>
          <strong>Approche proactive et stratégique :</strong> Nous anticipons
          les défis et élaborons des stratégies adaptées pour minimiser les
          risques et maximiser vos chances de succès.
        </Point>
        <Point initial="hidden" animate="visible" variants={textVariants}>
          <strong>Engagement envers vos intérêts :</strong> Nous défendons vos
          droits avec rigueur et professionnalisme, en vous apportant les
          meilleures solutions possibles.
        </Point>
        <Point initial="hidden" animate="visible" variants={textVariants}>
          <strong>Communication claire et transparente :</strong> Nous vous
          tenons informé à chaque étape du processus, garantissant une
          collaboration efficace et une totale compréhension de votre dossier.
        </Point>
        <Point initial="hidden" animate="visible" variants={textVariants}>
          <strong>Résultats probants :</strong> Notre expérience dans la
          résolution de contentieux complexes nous permet d'obtenir des
          résultats concrets et satisfaisants pour nos clients.
        </Point>
        <Point initial="hidden" animate="visible" variants={textVariants}>
          <strong>Discrétion et confidentialité :</strong> Votre confiance est
          primordiale. Nous garantissons la protection de vos informations et la
          confidentialité totale de vos dossiers.
        </Point>
        <Point initial="hidden" animate="visible" variants={textVariants}>
          <strong>Accompagnement sur mesure :</strong> Nous traitons chaque
          dossier avec soin et attention, vous offrant des conseils adaptés à
          votre situation spécifique.
        </Point>
        <Point initial="hidden" animate="visible" variants={textVariants}>
          <strong>Accessibilité et réactivité :</strong> Nous répondons
          rapidement à vos questions et préoccupations, en veillant à vous
          apporter un service de qualité à tout moment.
        </Point>
      </PointsList>
     
    </Container>
   

        <Footer/> 
    </div>
  );
};

export default Conseiljuri;
