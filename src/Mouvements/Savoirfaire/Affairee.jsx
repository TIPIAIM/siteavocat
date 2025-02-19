import React, { useEffect, Suspense } from "react"; // Importation des modules React
import styled from "styled-components"; // Importation de styled-components pour les styles
import "aos/dist/aos.css"; // Importation du CSS de AOS pour les animations
import articleImage from "./../../assets/Image/avoc3.avif"; // Importation de l'image de l'article
import tiptamcode from "./../../assets/Image/tiptamcode.avif"; // Importation de l'image de l'article

// Importation dynamique des composants pour le chargement différé (lazy loading)
const Footer = React.lazy(() => import("../Accueil/Footerr"));
const Affair = React.lazy(() => import("./Affair"));
const Affairfinal = React.lazy(() => import("./Affairfinal"));

// Conteneur principal avec superposition sombre
const AffairesContainer = styled.section` /* Utilisation d'une balise sémantique */
  width: 100%;
  min-height: 100vh; /* Hauteur minimale de la vue */
  padding: 50px 20px; /* Espacement interne */
  position: relative; /* Position relative pour les éléments enfants */
  background: url("img/logoAODnoir.avif") center/cover no-repeat; /* Image de fond */
  background-attachment: fixed; /* Fond fixe lors du défilement */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white; /* Couleur du texte */
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    inset: 0; /* Couvre tout l'espace du conteneur */
    background: rgba(0, 0, 0, 0.7); /* Superposition sombre */
    z-index: 1; /* Positionne au-dessus du fond */
  }
`;

// Wrapper pour le contenu principal
const ContentWrapper = styled.article` /* Utilisation d'une balise sémantique */
  position: relative;
  z-index: 2; /* Positionne au-dessus de la superposition sombre */
  max-width: 1200px; /* Largeur maximale du contenu */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Titre de la section
const SectionTitle = styled.h1` /* Utilisation de h1 pour le titre principal (SEO) */
  font-size: 2.8rem; /* Taille de la police */
  font-weight: bold; /* Gras */
  margin-bottom: 40px; /* Marge en bas */
  color: #90e0ef; /* Couleur du texte */
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4); /* Ombre du texte */

  @media (max-width: 768px) {
    font-size: 2.2rem; /* Taille de police réduite pour les petits écrans */
  }
`;

// Carte d'article
const ArticleCard = styled.article` /* Utilisation d'une balise sémantique */
  background: rgba(10, 34, 64, 0.7); /* Fond semi-transparent */
  border-radius: 1px; /* Bordure arrondie */
  overflow: hidden; /* Cache le contenu débordant */
  box-shadow: 12px 12px 10px rgba(0, 0, 0, 0.4); /* Ombre */
  width: 100%;
  max-width: 900px; /* Largeur maximale */
  margin: 20px 0; /* Marge externe */
  transition: transform 0.3s ease; /* Animation au survol */

  &:hover {
    transform: translateY(-10px); /* Effet de levée au survol */
    box-shadow: 3px 3px 3px rgba(144, 224, 239, 0.6); /* Ombre modifiée au survol */
  }
`;

// Conteneur pour les médias (image ou vidéo)
const MediaWrapper = styled.div`
  width: 100%;
  height: 500px; /* Hauteur fixe */
  overflow: hidden; /* Cache le contenu débordant */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajuste l'image pour couvrir le conteneur */
  }

  @media (max-width: 768px) {
    height: 300px; /* Hauteur réduite pour les petits écrans */
  }
`;

// Contenu de l'article
const ArticleContent = styled.div`
  padding: 20px; /* Espacement interne */
  text-align: left; /* Alignement du texte à gauche */
  color: rgba(255, 255, 255, 0.85); /* Couleur du texte */
`;

// Titre de l'article
const ArticleTitle = styled.h2` /* Utilisation de h2 pour le titre de l'article (SEO) */
  font-size: 1.8rem; /* Taille de la police */
  font-weight: bold; /* Gras */
  margin-bottom: 5px; /* Marge en bas */
  color: #90e0ef; /* Couleur du texte */

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Taille de police réduite pour les petits écrans */
    text-align: left; /* Alignement du texte à gauche */
  }
`;

// Description de l'article
const ArticleDescription = styled.p`
  font-size: 1rem; /* Taille de la police */
  font-weight: bold; /* Gras */
  line-height: 1.8; /* Hauteur de ligne */
  margin-bottom: 20px; /* Marge en bas */

  ul {
    list-style: none; /* Supprime les puces de la liste */
    padding: 0; /* Supprime le padding par défaut */

    h3 {
      font-size: 1.2rem; /* Taille de la police */
      color: #90e0ef; /* Couleur du texte */
      margin-top: 40px; /* Marge en haut */
    }

    li {
      margin-bottom: 10px; /* Marge en bas pour chaque élément de la liste */
    }
  }

  @media (max-width: 768px) {
    font-size: 0.95rem; /* Taille de police réduite pour les petits écrans */
    line-height: 1.5rem; /* Hauteur de ligne réduite */
    padding: 1rem; /* Espacement interne réduit */
  }
`;

// Bouton "Lire plus"
const ReadMoreButton = styled.a`
  font-size: 1rem; /* Taille de la police */
  font-weight: bold; /* Gras */
  color: #63b3ed; /* Couleur du texte */
  text-decoration: none; /* Supprime le soulignement */
  cursor: pointer; /* Curseur en forme de main */
  transition: color 0.3s ease; /* Animation de transition */

  &:hover {
    color: #ffffff; /* Changement de couleur au survol */
    text-decoration: underline; /* Soulignement au survol */
  }
`;

// Style pour le fallback (écran de chargement)
const FallbackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Hauteur de la vue */
  background-color: #022026; /* Fond bleu */
`;

const FallbackLogo = styled.img`
  width: 100px; /* Largeur du logo */
  height: auto; /* Hauteur automatique */
  animation: pulse 1.5s infinite; /* Animation de pulsation */

  @keyframes pulse {
    0% {
      transform: scale(0.8); /* Taille normale */
    }
    50% {
      transform: scale(2.2); /* Légèrement agrandi */
    }
    100% {
      transform: scale(1); /* Retour à la taille normale */
    }
  }
`;

// Composant principal
const Affairee = () => {
  // Initialisation de AOS pour les animations
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000, // Durée des animations
        once: false, // Les animations en boucle
      });
    });
  }, []);

  // Dynamisation du titre de la page pour le SEO
  useEffect(() => {
    document.title = "Les Contrats en Affaires - Expertise Juridique et Stratégique";
  }, []);

  return (
    <div>
      {/* Balise meta pour le SEO */}
      <meta name="description" content="Découvrez l'importance des contrats dans les affaires. Notre expertise juridique vous aide à sécuriser vos relations commerciales et à gérer les risques." />
      <meta name="keywords" content="contrats en affaires, expertise juridique, gestion des risques, droit des sociétés, droit commercial" />
      <meta name="author" content="Votre Nom ou Entreprise" />

      {/* Suspense pour le chargement différé des composants */}
      <Suspense
        fallback={
          <FallbackContainer>
            {/* Logo de l'entreprise avec animation */}
            <FallbackLogo src={tiptamcode} alt="TIPTAMCode - Chargement en cours" />
          </FallbackContainer>
        }
      >
        {/* Composants chargés de manière différée */}
        <Affairfinal />
        <Affair />
        {/* Conteneur principal */}
        <AffairesContainer>
          <ContentWrapper>
            {/* Titre de la section avec animation */}
            <SectionTitle data-aos="fade-down">L’importance des contrats en affaires</SectionTitle>
            {/* Carte d'article avec animation */}
            <ArticleCard data-aos="fade-up">
              <MediaWrapper>
                {/* Image de l'article avec chargement différé */}
                <img
                  src={articleImage}
                  alt="Contrats en affaires - Expertise juridique"
                  data-aos="zoom-in"
                  loading="lazy"
                />
              </MediaWrapper>
              <ArticleContent>
                {/* Titre de l'article avec animation */}
                <ArticleTitle data-aos="fade-down">
                  Les contrats : une fondation pour les affaires
                </ArticleTitle>
                {/* Description de l'article avec animation */}
                <ArticleDescription data-aos="fade-up">
                  Les contrats occupent une place centrale dans le
                  fonctionnement et le développement du monde des affaires.
                  Voici pourquoi leur importance ne peut être sous-estimée :
                  <ul>
                    <h3 data-aos="fade-down">
                      Un outil juridique indispensable
                    </h3>
                    <li>
                      Définition des droits et obligations : Les contrats
                      définissent clairement les engagements des parties.
                    </li>
                    <li>
                      Base légale pour résoudre les différends : Ils servent de
                      preuve en cas de conflits.
                    </li>
                    <li>
                      Respect des normes légales : Garantit la conformité avec
                      les lois.
                    </li>
                  </ul>
                  <ul>
                    <h3 data-aos="fade-down">
                      Un outil stratégique pour les entreprises
                    </h3>
                    <li>
                      Sécurisation des relations commerciales : Renforce la
                      confiance entre les parties.
                    </li>
                    <li>
                      Gestion des risques : Permet d’anticiper et limiter les
                      problèmes potentiels.
                    </li>
                    <li>
                      Flexibilité et adaptabilité : Inclut des clauses
                      ajustables pour faire face aux changements.
                    </li>
                  </ul>
                  <ul>
                    <h3 data-aos="fade-down">Des applications variées</h3>
                    <li>
                      Droit des sociétés : Contrats d’association, partenariats.
                    </li>
                    <li>Droit commercial : Vente, distribution, franchise.</li>
                    <li>
                      Propriété intellectuelle : Licence, cession, exploitation.
                    </li>
                  </ul>
                </ArticleDescription>
                {/* Bouton "Lire plus" avec animation */}
                <ReadMoreButton
                  href="https://aurelienbamde.com/2020/10/15/les-conditions-de-la-gestion-daffaires/"
                  data-aos="fade-down"
                  aria-label="En savoir plus sur les contrats en affaires"
                >
                  Lire plus
                </ReadMoreButton>
              </ArticleContent>
            </ArticleCard>
          </ContentWrapper>
        </AffairesContainer>
        {/* Pied de page */}
        <Footer />
      </Suspense>
    </div>
  );
};

// Exportation du composant avec memo pour optimiser les rendus
export default React.memo(Affairee);