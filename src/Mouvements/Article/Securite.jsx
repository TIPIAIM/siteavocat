import { lazy, Suspense, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation du CSS pour AOS
import tiptamcode from "./../../assets/Image/tiptamcode.avif"; // Importation de l'image de l'article
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const BardeNavigationpublic = lazy(() =>
  import("../Navigatpublic/BardeNavigationPublic")
);
const ArticleDroitSocial = lazy(() =>
  import("./ArticleAssoc/ArticleDroitSocial")
);
const Footer = lazy(() => import("../Accueil/Footerr"));

// Styles
const BackgroundContainer = styled.section`
  position: relative;
  min-height: 58vh;
  background-image: url("img/logoAODnoir.avif");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const FallbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #022026; /* Fond bleu */
`;

const FallbackLogo = styled.img`
  width: 150px;
  height: 150px;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 20px;
  left: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  box-shadow: 0 2px 3px #00b4d8;
  transition: transform 0.9s ease, box-shadow 0.2s ease;
  margin: 0 auto; /* Centrage horizontal */
  margin-top: 5rem; /* Ajout d'une marge supérieure pour espacer du haut */

  &:hover {
    transform: scale(1.1);
    box-shadow: 3px 5px #00b4d8;
  }
`;

export default function Securite1() {
  // Initialisation de AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div>
      <BackgroundContainer>
        {/* Suspense pour le chargement différé de Securite */}
        <Suspense
          fallback={
            <FallbackContainer>
              <FallbackLogo src={tiptamcode} alt="TIPTAMC" />
            </FallbackContainer>
          }
        >
          <Overlay data-aos-delay="500" />
          <BardeNavigationpublic />

          <BackButton data-aos-delay="300" to="/article" data-aos="fade-right">
            <FaArrowLeft size={20} />
          </BackButton>
        </Suspense>
      </BackgroundContainer>{" "}
      <ArticleDroitSocial />
      <Footer />
    </div>
  );
}
