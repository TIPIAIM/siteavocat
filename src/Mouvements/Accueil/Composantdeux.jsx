import styled from "styled-components";
import { motion } from "framer-motion";
import Fond from "./Fond";

// Conteneur principal avec un fond dégradé
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #0488b2, #0f172a, #000);
  color: white;
  overflow: hidden;

  .overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent);
  }
`;

// Texte superposé
const Title = styled(motion.h1)`
  font-size: 2rem;
  margin: 1rem 0;
  color: rgba(255, 255, 255, 0.9);
  font-family: serif;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);

  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

const AdditionalSection = styled.div`
  position: absolute;
  bottom: 10%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Composantdeux = () => {
  return (
    <Container>
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Animations des titres */}
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        RIGUEUR
      </Title>
      <Title
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        LOYAUTÉ
      </Title>

      {/* Section supplémentaire */}
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
