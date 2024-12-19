import { memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Footer from "../Accueil/Footerr";

// Styled Components
const PenalContainer = styled.div`
  width: 100%;
  padding: 10px;
  background: linear-gradient(to bottom, #0369a1, #0f172a);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 50px;
  color: #0369a;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PenalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const PenalCard = styled(motion.div)`
  background: rgba(10, 34, 64, 0.9);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }
`;

const MediaWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  background: black;

  img,
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PenalContent = styled.div`
  padding: 20px;
`;

const PenalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const PenalDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

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


const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Penal2 = () => {
  const penalArticles = [
    {
      title: "Introduction au droit pénal",
      description:
        "Découvrez les bases du droit pénal et ses objectifs pour maintenir l'ordre public.",
      mediaType: "image",
      mediaSrc: "img/image.png",
      link: "https://derechos.org/intlaw/doc/gin1.html",
    },
    {
      title:
        "Objectifs du droit pénal : Prévention, Répression, et Réinsertion",
      description:
        "Le droit pénal vise la prévention des actes nuisibles à la société, leur répression, et la réinsertion des condamnés.",
      mediaType: "image",
      mediaSrc: "img/assistance.jpg",
      link: "https://interfacelonny.com/documents/do-1600922216",
    },
    {
      title: "Catégories d'infractions",
      description:
        "Les infractions sont classées selon leur gravité : contraventions, délits, et crimes, chacune avec des peines adaptées.",
      mediaType: "image",
      mediaSrc: "img/categor.jpg",
      link: "https://derechos.org/intlaw/doc/gin1.html",
    },
    {
      title: "Les acteurs clés du droit pénal",
      description:
        "Les acteurs principaux incluent le ministère public, le juge d'instruction, les avocats, la police, et les victimes.",
      mediaType: "video",
      mediaSrc: "img/feuillevid.mp4",
      link: "https://www.cnhj-guinee.org/publication/code-penal-guinee/",
    },
  ];

  return (
    <div>
      <PenalContainer>
       
        <SectionTitle>Exploration du Droit Pénal</SectionTitle>
        <p>
          Le droit pénal réprime les infractions pour protéger l'ordre public et
          la sécurité. Il définit les comportements interdits, les sanctions, et
          régule les relations entre l`individu et la société.
        </p>
        <PenalGrid>
          {penalArticles.map((article, index) => (
            <PenalCard
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
              <PenalContent>
                <PenalTitle>{article.title}</PenalTitle>
                <PenalDescription>{article.description}</PenalDescription>
                <ReadMoreButton href={article.link}>Lire plus</ReadMoreButton>
              </PenalContent>
            </PenalCard>
          ))}
        </PenalGrid>
      </PenalContainer>
      <Footer />
    </div>
  );
};

export default memo(Penal2);
