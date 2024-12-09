import { useState } from "react";
import styled from "styled-components";
import logoAODnoir from "../assets/Logos/logoAODnoir.png";

import Composant from "./composant";

// Conteneur principal de la navigation
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #0f172a;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

// Logo
const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;

  img {
    height: 60px;
    margin-right: 0.5rem;
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
    max-height: 80vh; /* Limite la hauteur sur mobile */
    overflow-y: auto; /* Active le défilement si nécessaire */
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
    width: 100%;
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
  top: 97%;
  left: 0;
  background-color: #444;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 10;

  ${NavLink}:hover & {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 768px) {
    position: static;
    visibility: visible;
    opacity: 1;
    width: 100%;
  }
`;

// Sous-lien de navigation
const SubNavLink = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  white-space: nowrap;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    text-align: center;
  }
`;

export default function BardeNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Nav>
        {/* Logo */}
        <Logo>
          <img
            src={logoAODnoir}
            alt="Logo du Cabinet"
            className=" font-serif font-extrabold text-2xl"
          />
          AOD AVOCATS SCPA
        </Logo>

        {/* Bouton pour le menu hamburger */}
        <HamburgerButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </HamburgerButton>

        {/* Menu principal */}
        <Menu isOpen={isMenuOpen}>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/article">Articles</NavLink>

          <NavLink href="#">
            Savoir-faire
            <SubMenu>
              <SubNavLink href="/asistance">Assistance juridique</SubNavLink>{" "}
              <SubNavLink href="/conseil">Conseils juridique</SubNavLink>{" "}
              <SubNavLink href="/audit">Audit juridique</SubNavLink>{" "}
              <SubNavLink href="/contentieux">Contentieux</SubNavLink>{" "}
              {/* Autres sous-liens */}
            </SubMenu>
          </NavLink>

          <NavLink href="#">
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
          <NavLink href="/apropos">À propos</NavLink>
        </Menu>
      </Nav>

      <div style={{ paddingTop: "79px" }} className=" bg-gray-900">
        <Composant />
        
      </div>
    </>
  );
}
