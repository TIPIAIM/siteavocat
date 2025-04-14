import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import image1 from "../../assets/image/affair.avif";
import image2 from "../../assets/image/envir.avif";
import image3 from "../../assets/image/travaiil.avif";
import image4 from "../../assets/image/jurid1.avif";
import image5 from "../../assets/image/MOE_0384.avif";
import image6 from "../../assets/image/conf.avif";
import image7 from "../../assets/image/EVOL.avif";
import image8 from "../../assets/image/MOE_0384.avif";

// Animation pour le défilement des images
const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
    50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;fadeInOut

// Styled Components
const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 1rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.5rem;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  opacity: 0;
  animation: ${fadeInOut} 24s linear infinite;
  animation-delay: ${(props) => props.delay}s;

  /* Fond bleu semi-transparent */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 139, 0.5); /* Bleu semi-transparent */
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 56rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;
const MainHeading = styled(motion.h1)`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: #f4f5f1;
  text-shadow: 0 4px 6px rgba(0, 0, 0, 0.9);

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }

  @media (max-width: 480px) {
    font-size: 1.875rem;
  }
`;

const GradientText = styled.span`
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, #00b4d8, #023e8a);
`;
const TypingText = styled(motion.span)`
  display: inline-block;
  font-size: 1.25rem;
  color: #f4f5f1;
  border-right: 2px solid #00b4d8;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 3s steps(30, end), blink 0.5s step-end infinite alternate;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink {
    from {
      border-color: transparent;
    }
    to {
      border-color: #00b4d8;
    }
  }
`;

const CTAButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  background: linear-gradient(to right, #00b4d8, #023e8a);
  border: none;
  border-radius: 1px;
  cursor: pointer;
  transition: transform 0.5s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.5);
  }
`;

const Accueilpourarticle = () => {
  const messages = [
   "Le droit pénal et la défense des victimes",
    "  promouvoir la justice sociale dans le pays",
    "Le droit pénal et la défense des victimes",
    " La sécurité sociale et le droit du travail",
    "Importance des contrats en droit des affaires",
    "La sécurité sociale et le droit du travail",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);

  const images = [image5,image1, image2, image3, image4,  image6, image7,image8];

  return (
    <HeroSection>
      {/* Images de fond */}
      {images.map((image, index) => (
        <BackgroundImage
          key={index}
          image={image}
          delay={index * 3} // Décalage de 2 secondes entre chaque image
        />
      ))}

      {/* Contenu principal */}
      <ContentWrapper>
        <MainHeading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Espace <GradientText>Article</GradientText>
        </MainHeading>

        <TypingText
          key={currentMessage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {messages[currentMessage]}
        </TypingText>

        <CTAButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Avocat au barreau de Guinée
        </CTAButton>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Accueilpourarticle;