import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animate } from "popmotion";
import AOS from "aos";
import "aos/dist/aos.css";
import BardeNavigation from "./BardeNavigation";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const { ref: navbarRef, inView: navbarInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (navbarInView) {
      animate({
        from: 0,
        to: 1,
        duration: 1000,
        onUpdate: (latest) => {
          document.getElementById("navbar").style.opacity = latest;
        },
      });
    }
  }, [navbarInView]);

  return (
    <div>
      <motion.div
        id="navbar"
        ref={navbarRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: navbarInView ? 1 : 0 }}
      >
        <BardeNavigation />
      </motion.div>

      <div data-aos="fade-up">
      
      </div>
   
    </div>
  );
};

export default Home;
