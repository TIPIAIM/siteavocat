import { useState, useEffect } from "react";
import styled from "styled-components";
import aodblanc from "./../../assets/Image/aodblanc.avif";

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
    height: 50px;
    border-radius: 1px;
    margin-right: 0.8rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    img {
      height: 40px;
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
    height: 100vh;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgba(15, 23, 42, 0.98);
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0%)" : "translateX(100%)"};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
    overflow-y: auto;
    padding-top: 4rem;
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
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
  transition: all 0.8s ease;

  &:hover {
    background-color: #0077b6;
    border-radius: 3px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%);
    width: 0%;
    height: 4px;
    background-color: #90e0ef;
    transition: width 1.3s ease;
  }

  &:hover::after {
    width: 90%;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    text-align: center;
    width: 100%;
    padding: 1rem;
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
  border-radius: 1px;
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
    background-color: rgba(0, 0, 0, 0.2);
    animation: fadeIn 0.6s ease-in-out;
    max-height: ${({ isOpen }) => (isOpen ? "500px" : "0")};
    overflow-y: auto;
    transition: max-height 0.3s ease-in-out;

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 1rem;
  }
`;

// Indicateur de sous-menu (flèche)
const SubMenuIndicator = styled.span`
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;


export default function BardeNavigationpublic() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

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

  // Gérer l'ouverture/fermeture des sous-menus
  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <>
      <Nav isScrolled={isScrolled}>
        
        <Logo onClick={() => (window.location.href = "/")}>
          <img src={aodblanc} alt="Logo du Cabinet" />
        </Logo>
        {/* Bouton pour le menu hamburger */}
        <HamburgerButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMenuOpen ? "✕" : "☰"}
        </HamburgerButton>
        {/* Menu principal */}
        <Menu isOpen={isMenuOpen}>
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink onClick={() => toggleSubMenu("savoir-faire")}>
            Savoir-faire
            <SubMenuIndicator isOpen={openSubMenu === "savoir-faire"}>
              ▼
            </SubMenuIndicator>
            <SubMenu isOpen={openSubMenu === "savoir-faire"}>
              <SubNavLink href="/asistance">Assistance juridique</SubNavLink>
              <SubNavLink href="/audit">Audit juridique</SubNavLink>
              <SubNavLink href="/contentieux">Contentieux</SubNavLink>
              <SubNavLink href="/conseil">Conseils juridique</SubNavLink>
            </SubMenu>
          </NavLink>
          <NavLink onClick={() => toggleSubMenu("expertises")}>
            Expertises
            <SubMenuIndicator isOpen={openSubMenu === "expertises"}>
              ▼
            </SubMenuIndicator>
            <SubMenu isOpen={openSubMenu === "expertises"}>
              <SubNavLink href="/nosexpertises">Nos expertises</SubNavLink>
              <SubNavLink href="/fiscalitee">Le droit fiscal</SubNavLink>
              <SubNavLink href="/affairee">Le droit des affaires</SubNavLink>
              <SubNavLink href="/minierr">
                Le droit minier et environnementale
              </SubNavLink>
              <SubNavLink href="/travail">
                Le droit de travail et sécurité social
              </SubNavLink>
              <SubNavLink href="/sport">Le droit du sport</SubNavLink>
              <SubNavLink href="/arbitrage">
                Le droit d’arbitrage et médiation
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
