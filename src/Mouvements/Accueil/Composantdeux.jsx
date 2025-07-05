import styled from "styled-components";
import { motion } from "framer-motion";
//import Fond from "./Petitecranzero";
import { images } from '../../assets/images'// Import des images depuis le fichier images.js
import { lazy } from "react";

// Chargement paresseux des composants
const Fond = lazy(() => import("./Petitecranzero"));

// Conteneur principal avec un fond dégradé
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #000, #0f172a, #0488b2);
  color: white;
  overflow: hidden;

  .overlay {
    position: absolute;
    inset: 0;
  }
`;

// Conteneur pour l'image et le conteneur droit
const TopSection = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.1rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    position: static; // Permet de ne plus avoir une position absolue
    margin-top: 2.5rem;
  }
`;

// Conteneur pour le contenu supplémentaire à droite
const RightContainer = styled.div`
  background-color: rgba(#0488b2, #0f172a, #000 0.1);
  border: px solid rgba(50, 250, 250, 0.3);
  padding: 0.4rem;
  border-radius: 15px;
  box-shadow: 10px 5px 2px rgba(50, 250, 250, 0.2);
  color: rgba(00, 160, 200);
  max-width: 450px;

  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

// Texte superposé
const Title = styled(motion.h1)`
  font-size: 0rem;
  margin: 0rem 0;
  color: rgba(50, 250, 250, 0.9);
  font-family: serif;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 4px 4px rgba(50, 250, 250, 0.8);

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const AdditionalSection = styled.div`
  position: absolute;
  bottom: 10%;

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    position: relative; // Déplace Fond sous le texte
    margin-top: 2rem; // Ajoute un peu de marge entre le texte et Fond
  }
`;

const Composantdeux = () => {
  return (
    <Container>
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Section du haut avec image et conteneur droit */}
      <TopSection>
        {/* Image ou contenu à gauche */}
        <motion.img
          src={images.affaire} // Remplacez par votre URL d'image
          alt="ffàire"
          style={{
            borderRadius: "50%",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
            width: "50px", // Réduisez la taille selon vos besoins
            height: "50px", // Assurez-vous que la hauteur soit égale à la largeur pour garder une forme circulaire
          }}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Conteneur supplémentaire à droite */}
        <RightContainer>
          <motion.h3
            className=" font-serif text-center font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Nos prestations
          </motion.h3>
          <p className="  text-center">
            Notre cabinet d’avocats est spécialisé dans les services juridiques
            complets et de haute qualité à nos clients...
          </p>
        </RightContainer>
      </TopSection>

      {/* Animations des titres */}
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      ></Title>
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      ></Title>

      {/* Section supplémentaire avec Fond déplacé en bas sur les petits écrans */}
      <AdditionalSection>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Fond />
        </motion.div>
      </AdditionalSection>
    </Container>
  );
};

export default Composantdeux;
