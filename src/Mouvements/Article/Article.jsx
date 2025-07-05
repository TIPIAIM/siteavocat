import { memo, lazy } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import videohomemoury from "./../../assets/Video/videohomemoury.mp4";
import articleVideo from "./../../assets/Video/feuillevid.mp4";
 
const Headerarticl = lazy(() => import("./Headerarticl"));
const Footer = lazy(() => import("../Accueil/Footerr"));
import { images } from "../../assets/images"; // Importation des images

// Styles
const ArticlesContainer = styled(motion.main)`
  width: 100%;
  padding: 50px;
  margin-bottom: 10rem;
  background: linear-gradient(to bottom, #0f172a, #1e293b);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionTitle = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 50px;
  color: #0077b6;
  text-shadow: 1px 1px 1px #90e0ef;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ArticlesGrid = styled(motion.section)`
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

const ArticleCard = styled(motion.article)`
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

const ArticleContent = styled.div`
  padding: 20px;
`;

const ArticleTitle = styled.h2`
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

const CodeCivilText = styled(motion.p)`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  max-width: 800px;
  text-align: center;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1px;
    text-align: left;
    margin-bottom: 40px;
  }
`;

// Animation des cartes
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Animation du conteneur
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Décalage entre les animations des enfants
    },
  },
};

// Animation du titre et du texte
const textVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Données des articles
const articles = [
  {
    title: "Le droit pénal et la défense des victimes",
    description:
      "Les procédures juridiques pour garantir justice aux victimes de crimes.",
    mediaType: "video",
    mediaSrc: articleVideo,
    link: "penal",
  },
  {
    title: "La sécurité sociale et le droit du travail",
    description:
      "Une analyse approfondie de la protection des employés en matière de sécurité sociale.",
    mediaType: "image",
    mediaSrc: images.travail,
    link: "securite",
  },
  {
    title: "L'impact de la fiscalité sur les entreprises",
    description:
      "Comprendre les implications fiscales pour une gestion d'entreprise efficace.",
    mediaType: "image",
    mediaSrc: images.technologie,
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
    mediaSrc: images.travaiil,
    link: "affaire",
  },
 
];

const Articles = () => {
  return (
    <div>
      <Headerarticl />
      <ArticlesContainer
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <SectionTitle variants={textVariants}>
          Le Code civil guinéen
        </SectionTitle>
        <CodeCivilText variants={textVariants}>
          Le Code civil guinéen, inspiré du droit français, régit les relations
          civiles et commerciales en Guinée. Il couvre des domaines tels que les
          contrats, la propriété, les successions et les obligations. Ce code
          est essentiel pour garantir la sécurité juridique et promouvoir la
          justice sociale dans le pays.
        </CodeCivilText>
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
                  <img
                    src={article.mediaSrc}
                    alt={article.title}
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={article.mediaSrc}
                    controls
                    aria-label={article.title}
                  />
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

export default memo(Articles);