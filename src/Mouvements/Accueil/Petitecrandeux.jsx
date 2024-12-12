import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

// Styles définis comme un objet constant
const styles = {
  container:
    "relative flex items-center justify-center text-blue-500 min-h-screen bg-cover bg-center overflow-auto",
  marqueeContainer:
    "relative flex items-center justify-center text-white min-h-screen bg-cover bg-center overflow-auto",
  text: "text-2xl md:text-2xl font-semibold text-blue-500", // Couleur contrastante pour le texte
  slogan: "text-lg md:text-sm mt-4 text-white font-bold",
  textWrapper: "p-2 font-serif text-center",
  backdrop: "absolute inset-0 bg-blue-500 bg-opacity-100 blur-lg z-0",
};

export default function Petitecrandeux() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url('/img/technologie.jpg')`, // Chemin vers l'image dans le dossier public/img
        backgroundAttachment: "fixed", // Effet de défilement sur l'image
      }}
    >
      {/* Effet de flou et couleur bleue */}
      <div className={styles.backdrop}></div>
      {/* Contenu principal */}
      <MarqueeText />
      <div className="h-screen"></div>{" "}
      {/* Simule une longue page pour tester le scroll */}
    </div>
  );
}

const MarqueeText = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      console.log("Text is in view!");
    }
  }, [inView]);

  return (
    <div ref={ref} className={styles.marqueeContainer}>
      <div className={styles.textWrapper} style={{ maxWidth: "400px" }}>
        <ScrollText />
      </div>
    </div>
  );
};

const ScrollText = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div ref={ref}>
      <motion.div
        className="text-center"
        style={{
          textShadow: "4px 2px 5px rgba(0, 0, 0, 1.7)", // Ombre noire subtile
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
      >
        <DefilTextBoucle />
        <p className={styles.slogan}>AVOCAT À LA COUR</p>
      </motion.div>
    </div>
  );
};

const DefilTextBoucle = () => {
  const texts = ["RIGUEUR", "LOYAUTÉ", "INTÉGRITÉ", "JUSTICE", "EXCELLENCE"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [currentTextIndex, texts.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={styles.text}
        key={currentTextIndex}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        {texts[currentTextIndex]}
      </motion.div>
    </AnimatePresence>
  );
};
