import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animate } from "popmotion";
import AOS from "aos";
import "aos/dist/aos.css";
import "./MarqueeText.css";
import fondhome from "../../assets/Image/fondhome.jpg";

export default function Fond() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="flex items-center justify-center bg-gray-90 text-white min-h-screen">
      <MarqueeText />
    </div>
  );
}

const MarqueeText = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      animate({
        from: 0,
        to: 1,
        duration: 1000,
        onUpdate: (latest) => {
          document
            .getElementById("marquee-image")
            ?.style.setProperty("opacity", latest.toString());
        },
      });
    }
  }, [inView]);

  return (
    <div ref={ref} className=" flex-col  items-center ">
      {/* Image */}
      <motion.div
        className=" lg:flex w-full  items-center justify-center p- mt-8"
        style={{ maxWidth: "1000px", maxHeight: "400px" }} // Dimensions fixes
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={fondhome}
          alt="À propos"
          id="marquee-image"
          className="w-full h-auto rounded-lg shadow-lg object-cover"
          style={{ width: "100%", height: "auto", maxHeight: "300px" }} // Taille fixe responsive
        />
      </motion.div>

      {/* Texte */}
      <div
        className=" p-1 font-serif text-center "
        style={{ maxWidth: "400px" }} // Dimensions fixes pour le texte
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
        <p className="text-lg md:text-sm ">
          Nos services exceptionnels
        </p>
      </motion.div>
    </div>
  );
};

const DefilTextBoucle = () => {
  const texts = [
    "Droit des Affaires",
    "Droit d'Arbitrage",
    "Défense Pénale",
    "Droit du Sport",
    "Droit Minier",
    "Droit Fiscal",
    "Droit Social",
    "Droit de la Sécurité Sociale",
    "Droit de l'Environnement",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, [currentTextIndex, texts.length]);

  return (
    <motion.div
      className="text-2xl md:text-2xl font-semibold text-blue-500"
      key={currentTextIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      {texts[currentTextIndex]}
    </motion.div>
  );
};
