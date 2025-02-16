import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";

// Styles définis comme un objet constant
const styles = {
  container: "flex items-center justify-center text-white min-h-screen",
  marqueeContainer: "flex flex-col items-center justify-center text-center",
  text: "text-2xl md:text-2xl font-semibold ",
  slogan: "text-lg md:text-sm mt-4",
  textWrapper: "p-2 font-serif text-center",
};

export default function Petitecranun() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className={styles.container}>
      <MarqueeText />
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
      <div
        className={styles.textWrapper}
        style={{ maxWidth: "400px", color: "#0f172a" }}
      >
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
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
      >
        <DefilTextBoucle />
        <p
          className={styles.slogan}
          style={{ color: "#0f172a", font: "bold" }}
        ></p>
      </motion.div>
    </div>
  );
};

const DefilTextBoucle = () => {
  const texts = [
    "Votre défense, notre priorité.",
    "L'intégrité au service de la justice.",
    "Votre avocat, votre voix.",
    "Faites confiance à notre expertise pour défendre vos droits.",
    "Pour une justice équitable et accessible.",
    "Nous faisons valoir vos droits, avec rigueur et conviction.",
    "La loi à votre service, la justice dans notre cœur.",
    "Des solutions juridiques claires pour un avenir serein.",
    "Parce que chaque droit mérite d'être défendu.",
    "L'assistance juridique, avec professionnalisme et humanité.",
    "Les bons conseils, pour les bonnes décisions.",
    "La justice, c'est notre métier, votre droit notre mission.",
    "Avocats passionnés, résultats garantis.",
    "Un partenaire juridique de confiance pour tous vos défis.",
    "Nous défendons vos intérêts, pas seulement votre cause.",
    "Pour la justice, pour vos droits.",
    "Confiance et expertise pour des résultats durables.",
  
    "Justice, équité, et défense de vos droits.",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2500);

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
