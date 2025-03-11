import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Import PropTypes
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
// Styled Components
const HeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4rem 1rem;
  position: relative;
  background-color: rgba(15, 23, 42, 1);
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 0.5rem;
  }
`;

const CanvasWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
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

const MessageText = styled(motion.p)`
  font-size: 1.125rem;
  color: #f4f5f1;
  max-width: 42rem;
  margin: 0 auto;
  opacity: 1;
  transition: opacity 0.5s ease;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0 0.5rem;
  }
`;

const Instructions = styled(motion.div)`
  position: sticky;
  text-align: center;

  left: 50%;
  bottom: 0%;
  transform: translateX(-50%);
  color: #f4f5f1;
  font-size: 1rem;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  @media (max-width: 480px) {
    font-size: 0.975rem;
    position: relative;
    left: 50%;
    border-radius: 0rem;
  }
`;

const Particles = ({ mousePosition }) => {
  const meshRef = useRef();
  const [positions] = useState(() => {
    const positions = [];
    for (let i = 0; i < 5000; i++) {
      positions.push((Math.random() - 0.5) * 10);
      positions.push((Math.random() - 0.9) * 0);
      positions.push((Math.random() - 0.5) * 40);
    }
    return new Float32Array(positions);
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x = mousePosition.y * 2.5;
      meshRef.current.rotation.y = mousePosition.x * 0.5;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position" // Correction ici
          array={positions} // Tableau de positions
          count={positions.length / 3} // Nombre de sommets
          itemSize={3} // Taille de chaque sommet (x, y, z)
        />
      </bufferGeometry>
      <pointsMaterial color="#00b4d8" size={0.04} />
    </points>
  );
};

Particles.propTypes = {
  mousePosition: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

const MovingStars = () => {
  const starsRef = useRef();

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Stars
      ref={starsRef}
      radius={100}
      depth={50}
      count={100}
      factor={90}
      saturation={0}
      fade
      color="white"
    />
  );
};

const WindParticles = () => {
  const meshRef = useRef();
  const [positions] = useState(() => {
    const positions = [];
    for (let i = 0; i < 1000; i++) {
      positions.push((Math.random() - 0.5) * 20);
      positions.push((Math.random() - 0.5) * 20);
      positions.push((Math.random() - 0.5) * 20);
    }
    return new Float32Array(positions);
  });

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position" // Correction ici
          array={positions} // Tableau de positions
          count={positions.length / 3} // Nombre de sommets
          itemSize={3} // Taille de chaque sommet (x, y, z)
        />
      </bufferGeometry>
      <pointsMaterial color="black" size={0.1} />
    </points>
  );
};
const Accueilpourcontact = () => {
  const messages = [
    " Si vous avez des questions",
    " des commentaires ou",
    "des préoccupations",
    " Votre satisfaction est",
    "notre priorité absolue",
    "nous apprécions tous les commentaires",
  ];

  const [currentMessage, setCurrentMessage] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages.length]);

  const handleMouseMove = (event) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    });
  };

  const handleTouchMove = (event) => {
    if (event.touches.length > 0) {
      const touch = event.touches[0];
      setMousePosition({
        x: (touch.clientX / window.innerWidth) * 2 - 1,
        y: -(touch.clientY / window.innerHeight) * 2 + 1,
      });
    }
  };

  return (
    <HeroSection onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
      <CanvasWrapper>
        <Canvas>
          <MovingStars />
          <Particles mousePosition={mousePosition} />
          <WindParticles />
        </Canvas>
      </CanvasWrapper>

      <ContentWrapper>
        <MainHeading
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contactez
          <GradientText>-nous</GradientText>
        </MainHeading>

        <MessageText
          key={currentMessage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {messages[currentMessage]}
        </MessageText>
      </ContentWrapper>

      <Instructions
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      ></Instructions>
    </HeroSection>
  );
};

export default Accueilpourcontact;
