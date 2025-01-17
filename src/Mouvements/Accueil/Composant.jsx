import { motion } from "framer-motion"; // Assurez-vous que Framer Motion est installé
import mitre71 from "../../assets/Image/mitre71.jpg";
import EnhancedComponent from "./Nosservicess";
import Petitecranun from "./Petitecranun";

const Composant = () => {
  return (
    <div
      className="relative mb-1 h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${mitre71})`,
        backgroundSize: "contain", // ou 'contain'
        backgroundAttachment: "fixed", // ou 'scroll'
        backgroundPosition: "center center", // ou 'top left'
      }}
    >
      {/* Overlay floutée */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

      {/* Texte superposé */}
      <motion.div
        className="relative  z-10 flex h-full flex-col items-center justify-center text-center text-white px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {" "}
      </motion.div>

      <motion.h1
        style={{ color: "rgba(10,34,64,1)" }}
        className="text-2xl mx-2 mt-6 font-serif font-bold md:text-6xl drop-shadow-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
      ></motion.h1>

      <motion.h1
        style={{ color: "rgba(10,34,64,1)" }}
        className="text-2xl font-serif mx-2 mt-5 font-bold md:text-6xl drop-shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      ></motion.h1>

      {/* Section supplémentaire */}
      <div className="absolute bottom-10 mt-8 w-full flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Petitecranun />
        </motion.div>
      </div>
      <div className=" text-white">
        <motion.h3
          style={{ color: "#0488b2" }}
          className=" mx-4  font-serif md:text-xl md:text-center drop-shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        ></motion.h3>
      </div>
      <EnhancedComponent />
    </div>
  );
};

export default Composant;
