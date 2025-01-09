import { useState, useEffect } from "react";
import styled from "styled-components";
import aodblanc from "./../../assets/Image/aodblanc.avif"; // Exemple de vidéo

// Conteneur principal de la navigation
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 1000;
  font-weight: bold;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  background-color: ${({ isScrolled }) =>
    isScrolled ? "rgba(10, 34, 64, 0.9)" : "transparent"};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none"};

  @media (max-width: 768px) {
    padding: 0.8rem 1.2rem;
  }
`;

// Logo
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: white;

  img {
    height: 80px;
    margin-right: 0.8rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    img {
      height: 60px;
    }
  }
`;

// Menu principal
const Menu = styled.div`
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgba(15, 23, 42, 0.95);
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
    overflow-y: auto; /* Ajout du défilement vertical */
    padding-top: 4rem; /* Espace en haut pour le bouton hamburger */
  }
`;

// Bouton pour menu hamburger
const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 1100;

  @media (max-width: 768px) {
    display: block;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.2);
  }
`;

// Style pour les liens principaux
const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  position: relative;
  font-size: 1.1rem;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00b4d8;
    border-radius: 4px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 2px;
    background-color: #0488b2;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 80%;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    text-align: center;
    width: 100%;
  }
`;

// Sous-menu
const SubMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
  flex-direction: column;
  background-color: rgba(15, 23, 42, 0.95);
  border-radius: 5px;
  padding: 0.5rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ${NavLink}:hover & {
    display: flex;
  }

  @media (max-width: 768px) {
    position: static;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    width: 100%;
    padding: 0;
    overflow-y: auto; /* Défilement si le contenu dépasse */
    max-height: 50vh; /* Limite la hauteur pour éviter de déborder */
  }
`;

const SubNavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.2rem;
  font-size: 0.9rem;

  &:hover {
    background-color: #1e293b;
    border-radius: 4px;
  }
`;

export default function BardeNavigationpublic() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gérer le défilement
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Nav isScrolled={isScrolled}>
        <Logo onClick={() => (window.location.href = "/")}>
          <img src={aodblanc} alt="Logo du Cabinet" />
        </Logo>

        {/* Bouton pour le menu hamburger */}
        <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </HamburgerButton>

        {/* Menu principal */}
        <Menu isOpen={isMenuOpen}>
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink>
            Savoir-faire
            <SubMenu isOpen={isMenuOpen}>
              <SubNavLink href="/asistance">Assistance juridique</SubNavLink>
              <SubNavLink href="/audit">Audit juridique</SubNavLink>
              <SubNavLink href="/contentieux">Contentieux</SubNavLink>
              <SubNavLink href="/conseil">Conseils juridique</SubNavLink>
            </SubMenu>
          </NavLink>

          <NavLink >
            Expertises
            <SubMenu isOpen={isMenuOpen}>
              <SubNavLink href="/nosexpertises">Nos expertises</SubNavLink>
              <SubNavLink href="/fiscalitee">Le droit fiscal</SubNavLink>
              <SubNavLink href="/affairee">Le droit des affaires</SubNavLink>
              <SubNavLink href="/minierr">
                Le droit minier et environnementale
              </SubNavLink>
              {/*  <SubNavLink href="/securitee">Sociale et sécurité sociale</SubNavLink>
            <SubNavLink href="/famillee">Droit de la famille</SubNavLink>*/}
              <SubNavLink href="/travail">
                Le droit de travail et sécurité social
              </SubNavLink>
              <SubNavLink href="/sport">Le droit du sport</SubNavLink>
              <SubNavLink href="/arbitrage">
                Le droit d’rbitrage et médiation
              </SubNavLink>
              <SubNavLink href="/penall">La défense pénale</SubNavLink>
            </SubMenu>
          </NavLink>

          <NavLink href="/article">Articles</NavLink>
          <NavLink href="/apropos">À propos</NavLink>
        </Menu>
      </Nav>
      <main style={{ paddingTop: "150px" }}></main>
    </>
  );
}
