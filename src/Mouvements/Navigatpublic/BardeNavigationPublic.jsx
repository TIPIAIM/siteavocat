import { useState, useEffect } from "react";
import styled from "styled-components";
import logoAODnoir from "../../assets/Logos/logoAODnoir.png";
import Contact from "../Contact/Contact";

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
  padding: 0.5rem 1rem;
  z-index: 1000;
  font-weight: bold;
  transition: background-color 1.3s ease-in-out, box-shadow 1.3s ease-in-out;

  ${(props) =>
    props.isScrolled
      ? `
    background-color:rgba(10, 34, 64, 1.9);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  `
      : `
    background-color: transparent;
    box-shadow: none;
  `}

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 0.5rem;
  }
`;

// Logo
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;

  img {
    height: 80px;
    margin-right: 0.5rem;
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
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// Style pour les liens principaux
const NavLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  position: relative;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #1e293b;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background-color: blue;
    transition: width 0.3s ease;
  }

  &:hover::before {
    width: 50%;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    width: 100%;
    text-align: center;
  }
`;

// Sous-menu
const SubMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(10, 86, 153, 0.6);
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
  padding: 0.5rem 1rem;

  &:hover {
    background-color: #1e293b;
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
        {/* Logo */}
        <Logo>
          <img
            src={logoAODnoir}
            alt="Logo du Cabinet"
            className=" font-serif font-extrabold text-xl"
          />
          AOD AVOCATS SCPA
        </Logo>

        {/* Bouton pour le menu hamburger */}
        <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </HamburgerButton>

        {/* Menu principal */}
        <Menu isOpen={isMenuOpen}>
          <NavLink style={{ color: "#0488b2" }} href="/contact">
            Contact
          </NavLink>

          <NavLink style={{ color: "#0488b2" }} href="#">
            Savoir-faire
            <SubMenu>
              <SubNavLink href="/asistance">Assistance juridique</SubNavLink>{" "}
              <SubNavLink href="/conseil">Conseils juridique</SubNavLink>{" "}
              <SubNavLink href="/audit">Audit juridique</SubNavLink>{" "}
              <SubNavLink href="/contentieux">Contentieux</SubNavLink>{" "}
              {/* Autres sous-liens */}
            </SubMenu>
          </NavLink>

          <NavLink style={{ color: "#0488b2" }} href="#">
            Expertises
            <SubMenu>
              <SubNavLink href="/nosexpertises">Nos-expertises</SubNavLink>
              <SubNavLink href="/commerciale">Droit fiscale</SubNavLink>
              <SubNavLink href="/affaires">Droit des affaires</SubNavLink>
              <SubNavLink href="/minier">Minier et environnementale</SubNavLink>
              <SubNavLink href="/affaires">
                Sociale et Securité sociale
              </SubNavLink>
              <SubNavLink href="/famille">Droit de la famille</SubNavLink>
              <SubNavLink href="/travail">Droit du travail</SubNavLink>
              <SubNavLink href="/personnel">Droit du sport</SubNavLink>
              <SubNavLink href="/public">Arbitrage</SubNavLink>
              <SubNavLink href="/propriete">Défence pénale</SubNavLink>
            </SubMenu>
          </NavLink>
          <NavLink style={{ color: "#0488b2" }} href="/article">
            Articles
          </NavLink>

          <NavLink style={{ color: "#0488b2" }} href="/apropos">
            À propos
          </NavLink>
        </Menu>
      </Nav>

      {/* Contenu principal */}
      <main  className="" style={{ paddingTop: "150px" }}>


      </main>
    </>
  );
}
