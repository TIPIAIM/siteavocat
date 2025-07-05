import { useEffect } from "react"; // Importation de useEffect pour les effets de bord
import styled from "styled-components"; // Importation de styled-components pour les styles
import AOS from "aos"; // Importation de AOS pour les animations
import "aos/dist/aos.css"; // Importation du CSS de AOS
import { images } from "../../assets/images";

// Conteneur principal avec fond fixe
const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh; /* Hauteur minimale de la vue */
  background: url(${images.moe0384}) center/cover no-repeat; /* Image de fond */
  background-attachment: fixed; /* Fond fixe lors du défilement */
  background-size: cover; /* Couvre tout l'espace disponible */
  color: black; /* Couleur du texte par défaut */

  @media (max-width: 768px) {
    background-attachment: scroll; /* Désactive le fond fixe sur les petits écrans */
  }
`;

// Conteneur du contenu
const ContentWrapper = styled.div`
  max-width: 1350px; /* Largeur maximale du contenu */
  margin: 2rem auto; /* Centrage horizontal */
  padding: 4rem; /* Espacement interne */
  background-color: rgba(0, 0, 0, 0.7); /* Fond semi-transparent */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25); /* Ombre */
  backdrop-filter: blur(8px); /* Effet de flou pour un style moderne */

  @media (max-width: 1024px) {
    padding: 3rem; /* Espacement réduit pour les tablettes */
  }

  @media (max-width: 768px) {
    padding: 1.5rem; /* Espacement réduit pour les petits écrans */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Taille de police réduite */
    line-height: 1.6rem; /* Hauteur de ligne réduite */
    text-align: left; /* Alignement du texte à gauche */
    padding: 2rem; /* Espacement interne réduit */
  }
`;

// Titre principal
const Title = styled.h1`
  font-size: 2.5rem; /* Taille de la police */
  font-weight: 700; /* Gras */
  color: #90e0ef; /* Couleur du texte */
  text-align: center; /* Centrage du texte */
  margin-bottom: 3rem; /* Marge en bas */

  @media (max-width: 1024px) {
    font-size: 3rem; /* Taille de police réduite pour les tablettes */
  }

  @media (max-width: 768px) {
    font-size: 2rem; /* Taille de police réduite pour les petits écrans */
  }
`;

// Section de l'article
const ArticleSection = styled.div`
  margin-bottom: 2rem; /* Marge en bas */
  padding: 2rem; /* Espacement interne */
  font-size: 1.2rem; /* Taille de la police */
  color: #caf0f8; /* Couleur du texte */
  background-color: rgba(255, 255, 255, 0.1); /* Fond semi-transparent */
  box-shadow: 2px 2px 1px #90e0ef; /* Ombre */
  backdrop-filter: blur(6px); /* Effet de flou */

  @media (max-width: 768px) {
    padding: 2rem; /* Espacement interne réduit pour les petits écrans */
  }
`;

// Lien de l'article
const ArticleLink = styled.a`
  color: #00b4d8; /* Couleur du lien */
  text-decoration: none; /* Supprime le soulignement */
  font-weight: bold; /* Gras */
  &:hover {
    text-decoration: underline; /* Soulignement au survol */
  }
`;

// Composant principal
const Famille2 = () => {
  // Initialisation de AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée des animations
      once: false, // Les animations ne se déclenchent a chaque fois
    });
  }, []);

  return (
    <div>
      {/* Conteneur avec l'image de fond */}
      <BackgroundContainer>
        {/* Conteneur du contenu */}
        <ContentWrapper>
          {/* Titre principal avec animation AOS */}
          <Title data-aos="fade-down">Articles Pertinents</Title>

          {/* Section 1 : Médiation familiale */}
          <ArticleSection data-aos="fade-up">
            <h2 style={{ color: "#90e0ef" }}>
              La médiation familiale : un outil clé pour résoudre les conflits
              familiaux
            </h2>
            <p data-aos="fade-down">
              La médiation familiale est une méthode de résolution des conflits
              qui permet aux membres d’une famille de discuter de manière
              constructive des différends les opposant. Elle est souvent
              utilisée dans des situations telles que le divorce, la garde des
              enfants ou les questions patrimoniales. L’objectif est d’éviter
              une procédure judiciaire longue et coûteuse en favorisant un
              dialogue ouvert et respectueux. Ce processus aide également à
              préserver les relations familiales en réduisant les tensions
              émotionnelles. Enfin, il permet aux parties de trouver des
              solutions personnalisées et adaptées à leurs besoins spécifiques.
            </p>
            <ArticleLink
              href="https://aurore-avocats.fr/actualites-droit-personne-famille-patrimoine/qu-est-ce-que-la-mediation-familiale/?utm_source=chatgpt.com"
              target="_blank"
              rel="noopener noreferrer" // Sécurité pour les liens externes
            >
              Lire plus
            </ArticleLink>
          </ArticleSection>

          {/* Section 2 : Droits des enfants en cas de divorce */}
          <ArticleSection data-aos="fade-up">
            <h2>
              Les droits des enfants en cas de divorce : ce que vous devez
              savoir
            </h2>
            <p data-aos="fade-down">
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
              rel="noopener noreferrer"
            >
              Lire plus d’article
            </ArticleLink>
          </ArticleSection>

          {/* Section 3 : Implications légales de la médiation */}
          <ArticleSection data-aos="fade-up">
            <h2>
              Les implications légales de la médiation dans les affaires de
              garde d’enfants
            </h2>
            <p data-aos="fade-down">
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
              rel="noopener noreferrer"
            >
              Lire plus d’article
            </ArticleLink>
          </ArticleSection>

          {/* Section 4 : Conséquences d’un divorce non médiatisé */}
          <ArticleSection data-aos="fade-up">
            <h2>Les conséquences d’un divorce non médiatisé</h2>
            <p data-aos="fade-down">
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
              data-aos="fade-down"
              href="https://demarchesadministratives.fr/demarches/faire-appel-a-un-mediateur-familial"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lire plus
            </ArticleLink>
          </ArticleSection>
        </ContentWrapper>
      </BackgroundContainer>
    </div>
  );
};

export default Famille2;
