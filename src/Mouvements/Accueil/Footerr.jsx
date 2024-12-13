import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import styled from "styled-components";

// Styled Components
const FooterContainer = styled.footer`
  width: 100%;
  background: linear-gradient(to bottom, #000, #0f172a, #000);
  color: white;
  padding: 30px 20px;
  box-sizing: border-box;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const FooterTitle = styled.h1`
  font-size: 2rem;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  margin-bottom: 1px;
  margin-top: 50px;
  text-align: center;
  color: #0488b2;
`;

const FooterDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  line-height: 1.4;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  underline : none
  margin-bottom: 30px;
  a {
    text-decoration: none; /* Retire le soulignement */
    color: #color: #0488b2; /* Change la couleur du lien, remplacez par la couleur souhaitée */
    transition: color 0.3s ease; /* Ajoute une transition pour un effet agréable */

    &:hover {
      color: white; /* Change la couleur au survol */
    }
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 1px;

  & > a {
    color: #0488b2;
    font-size: 1.4rem;
    transition: color 0.3s ease;

    &:hover {
      color: white; /* Couleur d'hover */
    }
  }
`;

const Copyright = styled.div`
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  margin-top: 80px;
`;

const LogoContainer = styled.div`
  margin-top: 1px;
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
      <motion.div {...Composantfinal.fadeInUp}>
        <FooterContent>
          {/* Titre du Footer */}
          <FooterTitle>Cabinet d`Avocat</FooterTitle>

          {/* Description du Cabinet */}
          <FooterDescription>
            Votre défense est notre priorité. Nous vous accompagnons dans toutes
            vos démarches juridiques avec professionnalisme et rigueur.
          </FooterDescription>

          {/* Liens de contact */}
          <FooterLinks>
            <motion.a
              className="  "
              href="mailto:: amadou.diallo@aod-avocats.com"
            >
              amadou.diallo@aod-avocats.com
            </motion.a>
            <motion.a href="tel:+224622253536">Tél: +2 246 222 53536</motion.a>
          </FooterLinks>

          {/* Icônes des réseaux sociaux */}
          <SocialIconsContainer>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://web.whatsapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </SocialIconsContainer>

          {/* Logo du Cabinet */}
          <LogoContainer>
            <motion.img
              src="/img/logoAODnoir.png" // Remplacez par le chemin réel de votre logo
              alt="Logo Cabinet d'Avocat"
              style={{ width: "190px", height: "auto" }}
              {...Composantfinal.fadeInUp}
            />
          </LogoContainer>
          {/* Copyright */}
          <Copyright>
            &copy; {new Date().getFullYear()} AOD AVOCATS SCPA. Tous droits
            réservés.
          </Copyright>
        </FooterContent>
      </motion.div>
    </FooterContainer>
  );
}
