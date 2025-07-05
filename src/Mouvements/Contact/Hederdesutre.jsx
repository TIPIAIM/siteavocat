import { lazy, Suspense, useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation du CSS pour AOS
 import { images } from "../../assets/images";
const BardeNavigationpublic = lazy(() =>
  import("../Navigatpublic/BardeNavigationPublic")
);

// Styles
const BackgroundContainer = styled.section`
  position: relative;
  min-height: 1.5vh;
 // background-image: url("img/logoAODnoir.avif");
     background-image: url(${images.logoAODnoir});
  
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



export default function Hederdesutre() {
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
              <FallbackLogo src={images.tiptamcode} alt="TIPTAMC" />
            </FallbackContainer>
          }
        >
          <Overlay data-aos-delay="500" />
          <BardeNavigationpublic />          
        </Suspense>
      </BackgroundContainer>{" "}
     
    </div>
  );
}
