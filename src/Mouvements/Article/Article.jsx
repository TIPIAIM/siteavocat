import styled from "styled-components";
import { motion } from "framer-motion";
import videohomemoury from "./../../assets/Video/videohomemoury.mp4"; // Exemple d'image
import articleVideo from "./../../assets/Video/feuillevid.mp4"; // Exemple de vidéo
import commercial from "./../../assets/Image/travail.png"; // Exemple de vidéo
import traval from "./../../assets/Image/travail.jpg"; // Exemple de vidéo
import techno from "./../../assets/Image/technologie.jpg"; // Exemple de vidéo
import Footer from "../Accueil/Footerr";
import Headerr from "../Headerr/Header";

// Conteneur principal
const ArticlesContainer = styled.div`
  width: 100%;
  padding: 50px;
  background: linear-gradient(to bottom, #, #0f172a);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Titre de la section
const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 50px;

  color: #0077b6;
  text-shadow: px 4px 2px #90e0ef;

  @media (max-width: 768px) {
    font-size: 2rem;
    align-items: center;
  }
`;

// Grille d'articles
const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 35px;
  }
`;

// Carte d'article
const ArticleCard = styled(motion.div)`
  background: rgba(10, 34, 64, 0.9);
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 180, 216, 1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

// Image ou vidéo d'article
const MediaWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  background: black;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Contenu d'article
const ArticleContent = styled.div`
  padding: 20px;
`;

// Titre d'article
const ArticleTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #90e0ef;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.7rem;
    text-align: left;
    margin-left: 1.2rem;
  }
`;

// Description d'article
const ArticleDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 1);
  line-height: 1.5;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-left: 1.2rem;
  }
`;

// Bouton "Lire plus"
const ReadMoreButton = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: #90e0ef;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-left: 1.2rem;
  }
  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;

// Animation des cartes
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Articles = () => {
  const articles = [
    {
      title: "L'impact de la fiscalité sur les entreprises",
      description:
        "Comprendre les implications fiscales pour une gestion d'entreprise efficace.",
      mediaType: "image",
      mediaSrc: techno,
      link: "fiscalite",
    },
    {
      title: "Les litiges miniers et environnementaux",
      description: "Un aperçu des défis juridiques dans le secteur minier.",
      mediaType: "video",
      mediaSrc: articleVideo,
      link: "minier",
    },
    {
      title: "Les droits de la famille et la médiation",
      description:
        "La médiation : une alternative pour résoudre les conflits familiaux.",
      mediaType: "video",
      mediaSrc: videohomemoury,
      link: "famille",
    },
    {
      title: "Importance des contrats en droit des affaires",
      description:
        "Découvrez comment un contrat bien rédigé peut protéger vos intérêts juridiques et économiques.",
      mediaType: "image",
      mediaSrc: commercial,
      link: "affaire",
    },
    {
      title: "La sécurité sociale et le droit du travail",
      description:
        "Une analyse approfondie de la protection des employés en matière de sécurité sociale.",
      mediaType: "image",
      mediaSrc: traval,
      link: "securite",
    },
    {
      title: "Le droit pénal et la défense des victimes",
      description:
        "Les procédures juridiques pour garantir justice aux victimes de crimes.",
      mediaType: "video",
      mediaSrc: articleVideo,

      link: "penal",
    },
  ];

  return (
    <div>
      <Headerr />
      <ArticlesContainer>
        <SectionTitle>Le Code civil</SectionTitle>
        <ArticlesGrid>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <MediaWrapper>
                {article.mediaType === "image" ? (
                  <img src={article.mediaSrc} alt={article.title} />
                ) : (
                  <video src={article.mediaSrc} controls />
                )}
              </MediaWrapper>
              <ArticleContent>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDescription>{article.description}</ArticleDescription>
                <ReadMoreButton href={article.link}>Lire plus</ReadMoreButton>
              </ArticleContent>
            </ArticleCard>
          ))}
        </ArticlesGrid>
      </ArticlesContainer>
      <Footer />
    </div>
  );
};

export default Articles;
