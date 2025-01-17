import { motion } from "framer-motion";
import styled from "styled-components";
import Accueilfooter from "./Accueilfooter";

// Styled Components
const FooterContainer = styled.footer`
  width: 100%;
  background: linear-gradient(to bottom, #000, #0f172a, #000);
  color: white;
  padding: px px;
  box-sizing: border-box;
  text-align: center;
`;

const Composantfinal = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 1 },
  },
};

export default function Footer() {
  return (
    <FooterContainer>
      <footer>
        <motion.div {...Composantfinal.fadeInUp}>
          <Accueilfooter />
        </motion.div>
      </footer>
    </FooterContainer>
  );
}
