import styled from "styled-components";
import { motion } from "framer-motion";
import articleImage from "./../../assets/Image/avoc3.jpg"; // Image spécifique à l'article
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Accueil/Footerr";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import Affair from "../Savoirfaire/Affair";

// Conteneur principal
const AffairesContainer = styled.div`
  width: 100%;
  padding: 50px 20px;
  background: linear-gradient(to bottom, #0369a1, #0f172a);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

// Titre de la section
const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #ffffff;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// Carte d'article
const ArticleCard = styled(motion.div)`
  background: rgba(10, 34, 64, 0.9);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 900px;
  margin: 20px 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.7);
  }
`;

// Media (image ou vidéo)
const MediaWrapper = styled.div`
  width: 100%;
  height: 550px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-bottom: 5px solid #00bfff;
  }
`;

// Contenu d'article
const ArticleContent = styled.div`
  padding: 30px;
  text-align: justify;
`;

// Titre d'article
const ArticleTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

// Description d'article
const ArticleDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  margin-bottom: 20px;

  ul {
    list-style: none;
    padding: 0;

    h4 {
      font-size: 1.2rem;
      color: #00bfff;
      margin-bottom: 10px;
    }

    li {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

// Bouton "Lire plus"
const ReadMoreButton = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: #00bfff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;
const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 12px; /* Coins arrondis */
  padding: 0.5rem; /* Espacement interne */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ombre légère */
  animation: pulse 0.5s infinite; /* Animation pulsation */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  /* Style au survol */
  &:hover {
    transform: scale(1.1); /* Légère mise en avant */
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* Ombre plus forte */
  }

  /* Focus clavier pour accessibilité */
  &:focus {
    outline: 2px solid #3182ce; /* Bordure de focus */
    outline-offset: 2px;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Affaires = () => {
  return (
    <div>
        <BardeNavigationpublic/>
        <Affair/>
      <AffairesContainer>
      <StyledLink to="/article">
            <FaArrowLeft size={20} />
          </StyledLink>
        <SectionTitle>
          L'importance des contrats en droit des affaires
        </SectionTitle>
        <ArticleCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <MediaWrapper>
            <img src={articleImage} alt="Contrats en affaires" />
          </MediaWrapper>
          <ArticleContent>
            <ArticleTitle>
              Les contrats : une fondation pour les affaires
            </ArticleTitle>
            <ArticleDescription>
              Les contrats occupent une place centrale dans le fonctionnement et
              le développement du monde des affaires. Voici pourquoi leur
              importance ne peut être sous-estimée :
              <ul>
                <h4>Un outil juridique indispensable</h4>
                <li>
                  Définition des droits et obligations : Les contrats
                  définissent clairement les engagements des parties, réduisant
                  ainsi les ambiguïtés.
                </li>
                <li>
                  Base légale pour résoudre les différends : Ils servent de
                  preuve en cas de conflits.
                </li>
                <li>
                  Respect des normes légales : Garantit la conformité avec les
                  lois.
                </li>
              </ul>
              <ul>
                <h4>Un outil stratégique pour les entreprises</h4>
                <li>
                  Sécurisation des relations commerciales : Renforce la
                  confiance entre les parties.
                </li>
                <li>
                  Gestion des risques : Permet d'anticiper et limiter les
                  problèmes potentiels.
                </li>
                <li>
                  Flexibilité et adaptabilité : Inclut des clauses ajustables
                  pour faire face aux changements.
                </li>
              </ul>
              <ul>
                <h4>Des applications variées</h4>
                <li>
                  Droit des sociétés : Contrats d’association, partenariats,
                  etc.
                </li>
                <li>Droit commercial : Vente, distribution, franchise.</li>
                <li>
                  Propriété intellectuelle : Licence, cession, exploitation
                  sécurisée.
                </li>
              </ul>
            </ArticleDescription>
            <ReadMoreButton href="https://aurelienbamde.com/2020/10/15/les-conditions-de-la-gestion-daffaires/">
              Plus loin +
            </ReadMoreButton>
          </ArticleContent>
        </ArticleCard>
      </AffairesContainer>
   <Footer/>
    </div>
  );
};

export default Affaires;
