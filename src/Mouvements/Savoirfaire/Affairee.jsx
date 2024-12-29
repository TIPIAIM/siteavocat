import styled from "styled-components";
import { motion } from "framer-motion";
import articleImage from "./../../assets/Image/avoc3.jpg"; // Image spécifique à l'article
import Footer from "../Accueil/Footerr";
import Affair from "./Affair";
import Affairfinal from "./Affairfinal";

// Conteneur principal avec superposition
const AffairesContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 50px 20px;
  position: relative;
  background: url("img/logoAODnoir.png") center/cover no-repeat;
  background-attachment: fixed; /* Image d'arrière-plan fixe */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7); /* Superposition sombre */
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Titre de la section
const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 40px;
  color: #90e0ef;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

// Carte d'article
const ArticleCard = styled(motion.div)`
  background: rgba(10, 34, 64, 0.7);
  border-radius: 1px;
  overflow: hidden;
  box-shadow: 12px 12px 10px 
  width: 100%;
  max-width: 900px;
  margin: 20px 0;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 3px 3px 3px rgba(144, 224, 239);
  }
`;

// Media (image ou vidéo)
const MediaWrapper = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Contenu d'article
const ArticleContent = styled.div`
  padding: 20px;
  text-align: left;
  color: rgba(255, 255, 255, 0.85);
`;

// Titre d'article
const ArticleTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #90e0ef;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: left;
  }
`;

// Description d'article
const ArticleDescription = styled.p`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.8;
  margin-bottom: 20px;

  ul {
    list-style: none;
    padding: 0;

    h4 {
      font-size: 1.2rem;
      color: #90e0ef;
      margin-top: 40px;
    }

    li {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5rem;

    padding: 2rem;
  }
`;

// Bouton "Lire plus"
const ReadMoreButton = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: #63b3ed;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;

const Affairee = () => {
  return (
    <div>
      <Affairfinal />
      <Affair />
      <AffairesContainer>
        <ContentWrapper>
          <SectionTitle>L’importances</SectionTitle>
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
                Les contrats occupent une place centrale dans le fonctionnement
                et le développement du monde des affaires. Voici pourquoi leur
                importance ne peut être sous-estimée :
                <ul>
                  <h4>Un outil juridique indispensable</h4>
                  <li>
                    Définition des droits et obligations : Les contrats
                    définissent clairement les engagements des parties.
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
                    Gestion des risques : Permet d’anticiper et limiter les
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
                    Droit des sociétés : Contrats d’association, partenariats.
                  </li>
                  <li>Droit commercial : Vente, distribution, franchise.</li>
                  <li>
                    Propriété intellectuelle : Licence, cession, exploitation.
                  </li>
                </ul>
              </ArticleDescription>
              <ReadMoreButton href="https://aurelienbamde.com/2020/10/15/les-conditions-de-la-gestion-daffaires/">
                Lire plus
              </ReadMoreButton>
            </ArticleContent>
          </ArticleCard>
        </ContentWrapper>
      </AffairesContainer>
      <Footer />
    </div>
  );
};

export default Affairee;
