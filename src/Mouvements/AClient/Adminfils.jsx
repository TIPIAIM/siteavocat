import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Button } from "react-bootstrap";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SocialLinks from "../Lienlateral/SocialLinks";
import aodblanc from "../../assets/Image/aodblanc.avif";
import feuillevid from "../../assets/Image/feuillevid.mp4";

import { Link } from "react-router-dom";

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
 fontFamily: "Helvetica55Roman, Arial, sans-serif";
    background-color: ${(props) => (props.isNightMode ? "#121212" : "#f9f9f9")};
    color: ${(props) => (props.isNightMode ? "#ffffff" : "#333333")};
    transition: background-color 0.3s, color 0.3s;
  }
`;

// Styled Components
const Header = styled.header`
  background: rgba(10, 34, 64, 0.9);
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  height: 50px;
  margin-right: 1rem;
  border-radius: 5px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;

    background: #0488b;
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;

const NavLink = styled.a`
  color: white;
  font-weight: bold;

  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 119, 182, 1);
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  text-align: center;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.8)
    );
    z-index: -1;
  }
`;

const AnimatedText = styled(motion.div)`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.color};
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Footer = styled.footer`
  background: #1f2937;
  color: white;
  text-align: center;
  padding: 1rem;
`;

function Adminfils() {
  const [isNightMode, setIsNightMode] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const { ref, inView } = useInView();

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  const texts = [
    { text: "Bonjour, vous allez bien ?", color: "#3b82f6" },
    { text: "Bienvenue chez AOD AVOCATS", color: "#3b82f6" },
    { text: "Pour vos requêtes, nous vous proposons :", color: "blue" },
    { text: "Gestion d'audiences", color: "#6366f1" },
    { text: "Gestion des documents", color: "#6366f1" },
    { text: "Gestion des factures", color: "#6366f1" },
    { text: "Gestion des messages", color: "#6366f1" },
    { text: "Contactez-nous dans notre rubrique message", color: "#3b82f6" },
    { text: "Merci de votre visite ", color: "rgba(10, 34, 64, 0.9)" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <>
      <GlobalStyle isNightMode={isNightMode} />

      <Header>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link href="/adminfils" style={{ fontSize: "1.5rem" }}>
            <Logo src={aodblanc} alt="Logo" />
          </Link>
        </div>
        <Nav>
          <NavLink href="/gestionaudience">Audiences</NavLink>
          <NavLink href="/gestionsubassement">Documents</NavLink>
          <NavLink href="/gestionfluxclient">Factures</NavLink>
          <NavLink href="/gestionmessage">Messages</NavLink>
          <Button
            variant="outline-light"
            style={{ padding: "0.5rem 1rem" }}
            onClick={toggleNightMode}
          >
            {isNightMode ? (
              <BsFillSunFill size={20} />
            ) : (
              <BsFillMoonFill size={20} />
            )}
          </Button>
        </Nav>
      </Header>

      <Main>
        <video autoPlay loop muted>
          <source src={feuillevid} type="video/mp4" />
        </video>
        <AnimatedText
          color={texts[currentTextIndex].color}
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
        >
          {texts[currentTextIndex].text}
        </AnimatedText>
        <SocialLinks />
        <Link to="/" className="text-2xl animate-gradient-x">
              <Button className="mt-4 button-shine bg-gradient-to-tr to-gray-900 from-blue-900 text-white  py-2 px-4 rounded">
                Visiteur
              </Button>
            </Link>
      </Main>

      <Footer>
        <p>&copy; 2025 AOD AVOCATS. Tous droits réservés.</p>
      </Footer>
    </>
  );
}

export default Adminfils;
