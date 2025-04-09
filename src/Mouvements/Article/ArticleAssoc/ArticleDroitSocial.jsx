import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import paul from "../../../assets/Image/MOE_0311.avif"; // Importation de l'image de l'article
// Données des articles
const articlesData = [
  {
    id: 1,
    title: "Commentaire de l’article 211.10 ",
    excerpt:
      "« L’élaboration d’un règlement intérieur est obligatoire dans toutes les entreprises et tous les établissements employant habituellement au moins vingt-cinq salariés. » ",
    content:
      "L'article dispose que « L’élaboration d’un règlement intérieur est obligatoire dans toutes les entreprises et tous les établissements employant habituellement au moins vingt-cinq salariés. » Ce texte engage une réflexion sur la nécessité, les enjeux et les modalités de la mise en place d'un règlement intérieur dans les entreprises guinéennes, en particulier en ce qui concerne les droits des travailleurs et les obligations des employeurs.L’obligation de l’élaboration d’un règlement intérieur vise à encadrer la relation de travail au sein des entreprises, en garantissant un cadre juridique précis pour la gestion des rapports entre l'employeur et les salariés. Le règlement intérieur, étant un document contractuel interne, joue un rôle fondamental en fixant les règles de discipline, les normes de sécurité, les conditions d'hygiène et la discipline au sein de l'entreprise. Ce dispositif met aussi en place un seuil d’obligation : il concerne que les entreprises qui emploient au moins 25 salariés de manière habituelle. Cela est justifié par le fait que dans les grandes entreprises, la gestion des relations de travail devient plus complexe et nécessite un cadre formel pour prévenir les conflits, organiser la discipline, et garantir une certaine harmonisation des pratiques. L'objectif est ainsi de protéger les droits des salariés tout en assurant la bonne marche de l'entreprise.",
    imageUrl: paul,
    date: "9 avril 2025 : Paul Lamah Juriste chez AOD-AVOCATS ",
  },
  {
    id: 2,
    title: "Les dernières réformes du droit des contrats",
    excerpt:
      "Un aperçu des modifications récentes dans le droit des contrats et leurs implications pour les entreprises.",
    content:
      "Un aperçu des modifications récentes dans le droit des contrats et leurs implications pour les entreprises.",
    imageUrl: "/images/droit-contrats.jpg",
    date: "15 mars 2024",
  },
  {
    id: 3,
    title: "Les dernières réformes du droit des contrats",
    excerpt:
      "Un aperçu des modifications récentes dans le droit des contrats et leurs implications pour les entreprises.",
    content:
      "Un aperçu des modifications récentes dans le droit des contrats et leurs implications pour les entreprises.",
    imageUrl: "/images/droit-contrats.jpg",
    date: "15 mars 2024",
  },
  // ... autres articles
];

// Styles avec styled-components
const ArticlesContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  margin-bottom: 10rem;
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #1a365d;
  text-align: center;
  position: relative;
  font-weight: 700;
  line-height: 1.9;
  margin-bottom: 5rem;
  font-size: 2.5rem;
  color: #1a365d;

  &:after {
    content: "";
    display: block;
    width: 120px;
    height: 3px;
    background: #0077b6;
    margin: 1rem auto 0;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ArticleCard = styled(motion.article)`
  background: #fff;
  border-radius: 0px;
  overflow: hidden;
  box-shadow: 0 3px 1px #0077b6;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.12);
    transform: translateY(-3px);
  }
`;

const ArticleImage = styled.div`
  height: 400px;
  overflow: hidden;

  img {
    width: 100%;
    height: 110%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  ${ArticleCard}:hover & img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
  }
`;

const ArticleContent = styled.div`
  padding: 1.25rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ArticleDate = styled.span`
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const ArticleTitle = styled.h3`
  font-size: 1.25rem;
  color: #1a365d;
  margin-bottom: 0.75rem;
  font-weight: 500;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ArticleExcerpt = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex-grow: 1;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ReadMoreButton = styled.button`
  color: #1a365d;
  text-decoration: none;
  font-weight: 500;
  align-self: flex-start;
  position: relative;
  padding-bottom: 2px;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 0.95rem;
  padding: 0;
  margin-top: auto;

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #1a365d;
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

// Styles pour le modal
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(4px);
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 1px;
  width: 90%;
  max-width: 1000px;
  max-height: 90vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 95%;
    max-height: 85vh;
  }
`;

const ModalImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    min-height: 300px;
    object-fit: cover;
    border-radius: 0px 0 0 0px;
  }

  @media (max-width: 768px) {
    height: 400px;

    img {
      border-radius: 8px 8px 0 0;
      min-height: auto;
    }
  }
`;

const ModalText = styled.div`
  padding: 2rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const ModalTitle = styled.h3`
  font-size: 1.6rem;
  color: #1a365d;
  margin-bottom: 1rem;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const ModalDate = styled.span`
  font-size: 0.9rem;
  color: #666;
  display: block;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const ModalFullContent = styled.div`
  color: #555;
  line-height: 1.8;
  font-size: 1rem;

  p {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.7;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f5f5f5;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    background: #e0e0e0;
    transform: scale(1.05);
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 16px;
    height: 2px;
    background-color: #666;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

// Animations
const cardVariants = {
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.6,
    },
  },
};

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const modalContentVariants = {
  hidden: { scale: 0.96, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 300,
    },
  },
  exit: { scale: 0.96, opacity: 0 },
};

const ArticleDroitSocial = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const openModal = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedArticle(null);
    document.body.style.overflow = "auto";
  };

  // Fermer le modal avec la touche ESC
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ArticlesContainer>
      <SectionTitle>Nos Publications</SectionTitle>

      <ArticlesGrid>
        {articlesData.map((article) => (
          <ArticleCard
            key={article.id}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={cardVariants}
          >
            <ArticleImage>
              <img src={article.imageUrl} alt={article.title} loading="lazy" />
            </ArticleImage>

            <ArticleContent>
              <ArticleDate>{article.date}</ArticleDate>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
              <ReadMoreButton onClick={() => openModal(article)}>
                Lire plus
              </ReadMoreButton>
            </ArticleContent>
          </ArticleCard>
        ))}
      </ArticlesGrid>

      <AnimatePresence>
        {selectedArticle && (
          <ModalOverlay
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={closeModal}
          >
            <ModalContent
              variants={modalContentVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={closeModal} aria-label="Fermer" />

              <ModalImage>
                <img
                  src={selectedArticle.imageUrl}
                  alt={selectedArticle.title}
                />
              </ModalImage>

              <ModalText>
                <ModalTitle>{selectedArticle.title}</ModalTitle>
                <ModalDate>{selectedArticle.date}</ModalDate>
                <ModalFullContent>
                  <p>{selectedArticle.content}</p>
                </ModalFullContent>
              </ModalText>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ArticlesContainer>
  );
};

export default ArticleDroitSocial;
