import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation du CSS pour AOS
import Footer from "../Accueil/Footerr";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { Link } from "react-router-dom";

AOS.init(); // Initialisation de AOS dans le composant

// Conteneur principal avec fond fixe
const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;

  background: url("/img/MOE_0384.jpg") center/cover no-repeat;
  background-attachment: fixed;
  background-size: cover;
  color: black;

  @media (max-width: 768px) {
    background-attachment: scroll;
    text-align: left;
  }
`;

// Conteneur du contenu
const ContentWrapper = styled.div`
  max-width: 1350px;
  margin: 2rem auto;
  padding: 4rem;
  background-color: rgba(1, 1, 1, 0.8); /* Fond semi-transparent */

  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(8px); /* Flou pour un effet moderne */

  @media (max-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem;
  }

  @media (max-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem;
  }
`;

// Titre principal
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #00b4d8;

  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    font-size: 3rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

// Section de l'article
const ArticleSection = styled.div`
  margin-bottom: 2rem;
  padding: 2rem;
  font-size: 1.2rem;
  color: #caf0f8;
  background-color: rgba(0, 0, 0, 0.6);

  box-shadow: 1px 2px 1px #00b4d8;
  backdrop-filter: blur(0px);

  @media (max-width: 768px) {
    padding: 2.3rem;
    font-size: 1.1rem;
    line-height: 1.6rem;
  }
`;

// Lien de l'article
const ArticleLink = styled.a`
  color: #00b4d8;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ;
  border-radius: 20px; /* Coins arrondis */
  padding: 0.5rem; /* Espacement interne */
  box-shadow: 12px 4px 6px #0077b6;
  animation: pulse 0.5s infinite; /* Animation pulsation */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  color: white;
  /* Style au survol */
  &:hover {
    transform: scale(1.1); /* Légère mise en avant */
    box-shadow: 0 6px 10px #0077b6; /* Ombre plus forte */
  }

  /* Focus clavier pour accessibilité */
  &:focus {
    outline: 2px solid #00b4d8; /* Bordure de focus */
    outline-offset: 2px;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      box-shadow: 0 4px 6px #caf0f8;
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 6px 10px #0077b6;
    }
  }
`;

const OverlayTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 34, 64, 0.9); /* Fond noir semi-transparent */
`;

const Famille = () => {
  return (
    <div>
      {" "}
      <OverlayTop />
      <BardeNavigationpublic />
      <BackgroundContainer>
        <ContentWrapper>
          <StyledLink to="/article">
            <FaArrowLeft size={20} />
          </StyledLink>
          <Title>Droit de la Famille et la Médiation</Title>

          <ArticleSection>
            <h2 className="  p-2 " style={{ color: "#00b4d8" }}>
              La médiation familiale : un outil clé pour résoudre les conflits
              familiaux
            </h2>
            <p>
              La médiation familiale est une méthode de résolution des conflits
              qui permet aux membres d’une famille de discuter de manière
              constructive des différends les opposant. Elle est souvent
              utilisée dans des situations telles que le divorce, la garde des
              enfants ou les questions patrimoniales. Lobjectif est d’éviter une
              procédure judiciaire longue et coûteuse en favorisant un dialogue
              ouvert et respectueux. Ce processus aide également à préserver les
              relations familiales en réduisant les tensions émotionnelles.
              Enfin, il permet aux parties de trouver des solutions
              personnalisées et adaptées à leurs besoins spécifiques.
            </p>
            <ArticleLink
              href="https://aurore-avocats.fr/actualites-droit-personne-famille-patrimoine/qu-est-ce-que-la-mediation-familiale/?utm_source=chatgpt.com"
              target="_blank"
            >
              Lire plus d’article
            </ArticleLink>
          </ArticleSection>

          <ArticleSection>
            <h2 className="  p-2 " style={{ color: "#00b4d8" }}>
              Les droits des enfants en cas de divorce : ce que vous devez
              savoir
            </h2>
            <p>
              Lors d’un divorce, la question des droits des enfants est
              primordiale. Il est essentiel que le bien-être de l’enfant soit au
              cœur des préoccupations des parents et des tribunaux. Les parents
              doivent prendre des décisions concernant la garde, la résidence et
              le droit de visite de manière responsable et respectueuse des
              besoins de leurs enfants. Les tribunaux interviennent lorsque les
              parents ne parviennent pas à un accord, et ils déterminent des
              arrangements qui respectent les droits de l’enfant. Ce processus
              peut être facilité par la médiation familiale, qui offre un cadre
              de discussion pour parvenir à un consensus avant d’aller devant le
              juge.
            </p>
            <ArticleLink
              href="https://www.justifit.fr/b/guides/droit-famille/"
              target="_blank"
            >
              Lire plus d’article{" "}
            </ArticleLink>
          </ArticleSection>

          <ArticleSection>
            <h2 className="  p-2 " style={{ color: "#00b4d8" }}>
              Les implications légales de la médiation dans les affaires de
              garde d’enfants
            </h2>
            <p>
              La médiation joue un rôle crucial dans les affaires de garde
              d’enfants, permettant aux parents de trouver des solutions
              adaptées aux besoins de leurs enfants. En France, elle est souvent
              recommandée avant d’engager une procédure judiciaire. Ce processus
              permet de définir les modalités de garde, de visite et d’éducation
              dans un cadre amiable et respectueux. En impliquant les parents,
              la médiation assure que les décisions prises sont dans l’intérêt
              supérieur de l’enfant. De plus, elle permet de réduire les
              tensions et d’éviter des décisions imposées par un tribunal,
              souvent perçues comme plus conflictuelles.
            </p>
            <ArticleLink
              href="https://www.example.com/article3"
              target="_blank"
            >
              Lire plus d’article
            </ArticleLink>
          </ArticleSection>

          <ArticleSection>
            <h2 className="  p-2 " style={{ color: "#00b4d8" }}>
              Les conséquences d’un divorce non médiatisé
            </h2>
            <p>
              Un divorce non médiatisé peut avoir des conséquences lourdes, tant
              sur le plan juridique qu’émotionnel. En l’absence de médiation,
              les conflits peuvent s’intensifier, ce qui peut mener à des
              décisions judiciaires rigides et moins adaptées aux besoins des
              parties, en particulier des enfants. La médiation, en revanche,
              permet de trouver des solutions plus personnalisées et moins
              conflictuelles. De plus, un divorce litigieux peut avoir un impact
              négatif sur les relations familiales à long terme, en créant des
              divisions permanentes entre les membres de la famille. C’est
              pourquoi il est fortement recommandé d’explorer la médiation avant
              de prendre des mesures judiciaires.
            </p>
            <ArticleLink
              href="https://demarchesadministratives.fr/demarches/faire-appel-a-un-mediateur-familial"
              target="_blank"
            >
              Lire plus d’article
            </ArticleLink>
          </ArticleSection>
        </ContentWrapper>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default Famille;
