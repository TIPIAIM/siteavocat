import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logoAODnoir from "../../assets/Image/logoAODnoir.avif";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.9);
  color: white;
  margin-top: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
    transform: scale(1.1);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.9);
  }

  &:before {
    content: "";
    position: absolute;
    top: -100%;
    left: -100%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.5);
    transform: rotate(55deg);
    transition: all 0.5s ease;
  }

  &:hover:before {
    top: 0;
    left: 0;
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const styles = {
  container: "relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center",
  backdrop: "absolute inset-0 bg-black bg-opacity-50 z-0 animate-fadeIn", // Animation progressive du fond
  content: "relative z-10 text-center text-white p-8",
  text: "text-5xl md:text-6xl font-extrabold mb-6",
  slogan: "text-lg md:text-xl font-light mt-4",
};

export default function Erreur() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${logoAODnoir})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className={styles.backdrop}></div>
      <BackButton
          to="/"
          aria-label="Retour aux expertises"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <FaArrowLeft size={24} />
        </BackButton>
      <div className={styles.content} data-aos="fade-up">
        <h1 className={styles.text}>404 - Page non trouvée</h1>
        <MarqueeText />
        <p className={styles.slogan}>AVOCAT À LA COUR</p>
       
      </div>
    </div>
  );
}

const MarqueeText = () => {
  const texts = ["RIGUEUR", "LOYAUTÉ", "INTÉGRITÉ", "JUSTICE", "EXCELLENCE"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div data-aos="fade-up" data-aos-delay="200">
      <h2 className="text-3xl md:text-4xl font-bold">
        {texts[currentTextIndex]}
      </h2>
    </div>
  );
};
