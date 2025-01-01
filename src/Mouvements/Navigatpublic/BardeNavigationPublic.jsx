import { useState, useEffect } from "react";
import styled from "styled-components";
import  aodblanc from "./../../assets/Image/aodblanc.avif"; // Exemple de vidéo

// Conteneur principal de la navigation
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  color: #0488b2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  z-index: 1000;
  font-weight: bold;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  background-color: ${({ isScrolled }) => (isScrolled ? 'rgba(10, 34, 64, 0.9)' : 'transparent')};
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 1rem;
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

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    background-color: #0f172a;
    padding: 1rem 0;
    max-height: 80vh;
    overflow-y: auto;
    transition: all 0.3s ease-in-out;
  }
`;

// Bouton pour menu hamburger
const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  transition: transform 0.3s ease;

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
  transition: all 0.3s ease;
  white-space: nowrap;
  font-size: 1.1rem;

  &:hover {
    background-color: #1e293b;
    border-radius: 4px;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background-color: #0488b2;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`;

// Sous-menu
const SubMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(10, 86, 153, 0.9);
  display: none;
  flex-direction: column;
  padding: 0.5rem 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 999;

  ${NavLink}:hover & {
    display: flex;
  }

  @media (max-width: 768px) {
    position: static;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    width: 100%;
    box-shadow: none;
  }
`;

const SubNavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.8rem 1.2rem;

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
      <NavLink href="/accueil">

        <Logo>
          <img
            src= {aodblanc}
            alt="Logo du Cabinet"
            className=" font-extrabold text-xl"
          />
         
        </Logo>
        </NavLink>
        {/* Bouton pour le menu hamburger */}
        <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </HamburgerButton>

        {/* Menu principal */}
        <Menu isOpen={isMenuOpen}>
        <NavLink href="/accueil">Accueil</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="#">
            Savoir-faire
            <SubMenu isOpen={isMenuOpen}>
              <SubNavLink href="/asistance">Assistance juridique</SubNavLink>
              <SubNavLink href="/audit">Audit juridique</SubNavLink>
              <SubNavLink href="/contentieux">Contentieux</SubNavLink>
              <SubNavLink href="/conseil">Conseils juridique</SubNavLink>
            </SubMenu>
          </NavLink>

          <NavLink href="#">
            Expertises
            <SubMenu isOpen={isMenuOpen}>
              <SubNavLink href="/nosexpertises">Nos expertises</SubNavLink>
              <SubNavLink href="/fiscalitee">Droit fiscal</SubNavLink>
              <SubNavLink href="/affairee">Droit des affaires</SubNavLink>
              <SubNavLink href="/minierr">Minier et environnementale</SubNavLink>
              <SubNavLink href="/securitee">Sociale et sécurité sociale</SubNavLink>
              <SubNavLink href="/famillee">Droit de la famille</SubNavLink>
              <SubNavLink href="/travail">Droit du travail</SubNavLink>
              <SubNavLink href="/sport">Droit du sport</SubNavLink>
              <SubNavLink href="/arbitrage">Arbitrage</SubNavLink>
              <SubNavLink href="/penall">Défense pénale</SubNavLink>
            </SubMenu>
          </NavLink>

          <NavLink href="/article">Articles</NavLink>
          <NavLink href="/apropos">À propos</NavLink>
        </Menu>
      </Nav>

      {/* Contenu principal */}
      <main style={{ paddingTop: "150px" }}>
        
      </main>
    </>
  );
}
