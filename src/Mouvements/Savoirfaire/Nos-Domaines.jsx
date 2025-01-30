import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';
import Footer from '../Accueil/Footerr';
import BardeNavigationpublic from '../Navigatpublic/BardeNavigationPublic';
import affair from './../../assets/Image/affair.avif';
import familled from './../../assets/Image/familled.avif';
import fisc from './../../assets/Image/fisc.avif';
import envir from './../../assets/Image/envir.avif';
import securitesocial from './../../assets/Image/securitesocial.avif';
import travail from './../../assets/Image/travail.avif';
import image from './../../assets/Image/image.avif';
import AFFF from './../../assets/Image/AFFF.webp';
import arbitra from './../../assets/Image/arbitra.avif';

// Conteneur principal avec l'image d'arrière-plan
const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url("img/logoAODnoir.avif");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

// Couche transparente sur l'image d'arrière-plan
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
`;

// Contenu principal
const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    color: #90e0ef;
    margin-bottom: 4rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

// Grille d'éléments
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 8rem;
   margin-top: 5rem;
  padding: 0.5rem;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

// Carte individuelle
const Card = styled.div`
  position: relative;
  background: #03045e;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    loading: lazy; // Chargement différé pour améliorer les performances
  }

  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.8rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(144, 224, 239, 0.2));
    color: #90e0ef;

    h3 {
      font-size: 1rem;
      margin-bottom: 0.3rem;
    }

    a {
      font-size: 0.9rem;
      font-weight: bold;
      color: #90e0ef;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media (max-width: 480px) {
    img {
      height: 150px;
    }

    .info {
      padding: 0.5rem;

      h3 {
        font-size: 0.9rem;
      }

      a {
        font-size: 0.8rem;
      }
    }
  }
`;

export default function Nosexpertise() {
  // Initialisation d'AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Les animations se répètent à chaque fois que l'élément entre dans la vue
    });
  }, []);

  // Données des cartes
  const images = [
    { src: affair, alt: "Droit des affaires", text: "Droit des affaires", link: "/affairee" },
    { src: familled, alt: "Droit de la Famille", text: "Droit de la Famille", link: "/famillee" },
    { src: fisc, alt: "Droit fiscal", text: "Droit fiscal", link: "/fiscalitee" },
    { src: envir, alt: "Minier", text: "Minier et Environnementale", link: "/minierr" },
    { src: securitesocial, alt: "Sociale et Securité sociale", text: "Sociale et Securité sociale", link: "/securitee" },
    { src: travail, alt: "Droit du Travail", text: "Droit du Travail", link: "/travail" },
    { src: image, alt: "Pénal", text: "Droit Pénal", link: "/penall" },
    { src: AFFF, alt: "Sport", text: "Droit du Sport", link: "/sport" },
    { src: arbitra, alt: "Arbitrage", text: "Arbitrage", link: "/arbitrage" },
  ];

  return (
    <div>
      <BackgroundContainer>
        {/* Couche transparente */}
        <Overlay />

        {/* Contenu principal */}
        <ContentContainer>
          <BardeNavigationpublic />
          <h1 data-aos="fade-left">Nos Expertises</h1>

          {/* Grille d'expertise */}
          <GridContainer>
            {images.map((image, index) => (
              <Card
                key={index}
                data-aos="fade-down"
                data-aos-delay={index * 200} // Délai pour un effet en cascade
                aria-label={image.text}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="info">
                  <h3>{image.text}</h3>
                  <a href={image.link} target="_blank" rel="noopener noreferrer">
                    Voir détail ...
                  </a>
                </div>
              </Card>
            ))}
          </GridContainer>
        </ContentContainer>
      </BackgroundContainer>

      {/* Footer */}
      <Footer />
    </div>
  );
}