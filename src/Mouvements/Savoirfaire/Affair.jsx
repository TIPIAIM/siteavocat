import styled from "styled-components";
import { motion } from "framer-motion";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

// Conteneur principal avec image d'arrière-plan fixe
const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url("img/MOE_0384.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Fond fixe */
  color: #fff;
`;

// Couche transparente pour obscurcir le fond
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 50, 50, 0.7),
    rgba(0, 0, 0, 0.9)
  );
`;

// Conteneur de contenu principal
const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  padding: 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

// Titre principal avec style et animation
const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #4ea8ff;
  margin-bottom: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

// Sous-titre pour contextualiser
const SubTitle = styled(motion.h2)`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-weight: 300;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

// Texte défilant
const ScrollAnimation = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 250px);
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1); /* Légère transparence */
  backdrop-filter: blur(20px); /* Effet de flou */
  scrollbar-width: thin; /* Barres de défilement fines */
  scrollbar-color: #4ea8ff transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4ea8ff;
    border-radius: 10px;
  }
`;

// Texte descriptif avec animation et espacement
const Description = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 1.5rem auto;
  color: #e0e0e0;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

// Bouton interactif
const ActionButton = styled(motion.a)`
  margin-top: 1.5rem;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: #4ea8ff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3a8dd0;
  }
`;


export default function Affair() {
  return (
    <BackgroundContainer>
      
      {/* Couche de transparence */}
      <Overlay />
     
      {/* Barre de navigation */}
      <BardeNavigationpublic />

      {/* Contenu principal */}
      <ContentContainer> 
        {/* Titre principal */}
        <Title
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Le Droit des Affaires
        </Title>

        {/* Sous-titre */}
        <SubTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Une expertise indispensable pour sécuriser vos transactions
          commerciales.
        </SubTitle>

        {/* Texte descriptif défilant */}
        <ScrollAnimation>
          <Description
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
          >
            Parmi les composantes essentielles du droit des affaires, on
            retrouve le droit commercial, qui encadre les actes de commerce et
            le statut des commerçants, ainsi que le droit des sociétés, qui
            régule la création, la gestion et la dissolution des entités
            juridiques telles que les SARL, SA ou SAS. Ces disciplines
            permettent aux entrepreneurs de structurer légalement leurs
            activités tout en protégeant leurs intérêts financiers.
          </Description>
          <Description
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            En outre, le droit des affaires s’étend au droit fiscal, aux
            contrats commerciaux, à la propriété intellectuelle, et à la
            concurrence. Par exemple, il garantit une concurrence loyale entre
            les entreprises tout en protégeant les inventions et marques
            déposées. Il joue également un rôle crucial dans les processus de
            médiation et de règlement des litiges entre les partenaires
            commerciaux, offrant ainsi des solutions rapides et efficaces.
          </Description>
          <Description
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
          >
            Enfin, le droit des affaires n’est pas seulement une protection pour
            les entreprises, mais aussi un outil stratégique. En anticipant les
            risques juridiques et en respectant les réglementations, les
            entrepreneurs peuvent consolider leur réputation, attirer des
            investisseurs, et garantir la pérennité de leurs projets. Ainsi, le
            droit des affaires est un levier essentiel pour la croissance et le
            développement économique durable.
          </Description>
        </ScrollAnimation>

        {/* Bouton d'action */}
        <ActionButton
          href="https://fr.wikipedia.org/wiki/Droit_des_affaires"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          +
        </ActionButton>
      </ContentContainer>
    </BackgroundContainer>
  );
}