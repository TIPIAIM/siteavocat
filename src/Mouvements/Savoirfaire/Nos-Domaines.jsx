import { motion } from "framer-motion";
import styled from "styled-components";
import Footer from "../Accueil/Footerr";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";

// Conteneur principal avec l'image d'arrière-plan
const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url("img/logoAODnoir.png");
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Rend l'arrière-plan fixe */
`;
// Couche transparente sur l'image d'arrière-plan
const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
`;

// Contenu principal
const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2.5rem;
    color: #90e0ef;
    margin-bottom: 0.5rem;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1));

    margin-bottom: 6rem;
  }
`;

// Grille d'éléments
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
      margin-bottom: 10rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  padding: 1.5rem
    }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

// Carte individuelle
const Card = styled(motion.div)`
  position: relative;
  background: #03045e;
  border-radius: 1.rem;
  overflow: hidden;
  box-shadow: 0px 4px 0px rgba(144, 224, 239, 1);
  transition: transform 0.1s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem;

    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(144, 224, 239, 0.2));
    color: #90e0ef;

    h3 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    a {
      font-size: 1rem;
      font-weight: bold;
      color: #90e0ef;
      text-decoration: none;
      &:hover {
      }
    }
  }
`;

export default function Nosexpertise() {
  const images = [
    {
      src: "img/affair.jpeg",
      alt: "Droit des affaires",
      text: "Droit des affaires",
      link: "/affairee",
    },
    {
      src: "img/familled.png",
      alt: "Droit de la Famille",
      text: "Droit de la Famille",
      link: "/famillee",
    },
    {
      src: "img/fisc.png",
      alt: "Droit fiscal",
      text: "Droit fiscal",
      link: "/fiscalitee",
    },

    {
      src: "img/envir.jpeg",
      alt: "Minier",
      text: "Minier et Environnementale",
      link: "/minierr",
    },
    {
      src: "img/securitesocial.png",
      alt: "Sociale et Securité sociale",
      text: "Sociale et Securité sociale ",
      link: "/securitee",
    },
    {
      src: "img/travail.jpg",
      alt: "Droit du Travail",
      text: "Droit du Travail ",
      link: "/travail",
    },

    {
      src: "img/image.png",
      alt: "penal",
      text: "Droit Pénal",
      link: "/penall",
    },
    {
      src: "img/AFFF.webp",
      alt: "sport",
      text: "Droit du Sport",
      link: "/sport",
    },
    {
      src: "img/arbitra.png",
      alt: "arbit",
      text: "Arbitrage",
      link: "/arbitrage",
    },
  ];

  return (
    <div>
      <BackgroundContainer>
        {/* Couche transparente */}
        <Overlay />

        {/* Contenu principal */}
        <ContentContainer>
          <BardeNavigationpublic />
          <h1 className="  text-4xl font-bold mb-8" style={{ color: "#90e0ef" }}>
            Nos Expertises
          </h1>

          {/* Grille d'expertise */}
          <GridContainer>
            {images.map((image, index) => (
              <Card
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.8 }}
              >
                <img src={image.src} alt={image.alt} />
                <div className="info">
                  <h3>{image.text}</h3>
                  <a
                    href={image.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir detail ...
                  </a>
                </div>
              </Card>
            ))}
          </GridContainer>
        </ContentContainer>

        {/* Footer */}
      </BackgroundContainer>

      <Footer />
    </div>
  );
}
