import  {  useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation du CSS pour AOS
import Footer from "../Accueil/Footerr";
import image from './../../assets/Image/image.avif';
import assistance from './../../assets/Image/assistance.avif';
import categor from './../../assets/Image/categor.avif';

// Initialisation de AOS
AOS.init({
  duration: 1000,
  once: false,
});

// Styles
const PenalContainer = styled.section`
  width: 100%;
  padding: 20px;
  background: linear-gradient(to bottom, #0369a1, #0f172a);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 1.5;
  padding: 5rem;

  @media (max-width: 480px) {
    font-size: 1.8rem;
    padding: 1rem;
  }
`;

const SectionTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const Description = styled.p`
  margin-bottom: 30px;
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  text-align: left;
  max-width: 800px;
  padding: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 1rem;
  }
`;

const PenalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
    padding: 1rem;
  }
`;

const PenalCard = styled.div`
  background: linear-gradient(to bottom, #0369a1, #0f172a);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  min-height: 550px; /* Hauteur minimale pour uniformiser les cartes */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }

  &:focus {
    outline: 2px solid #00bfff;
  }
`;

const MediaWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
   background: linear-gradient(to bottom, #0369a1, #0f172a);

  img,
  video {
    width: 100%;
    height: 95%;
    object-fit: cover;
  }
`;

const PenalContent = styled.div`
  padding: 20px;
  flex: 1; /* Permet au contenu de remplir l'espace disponible */
  display: flex;
  flex-direction: column;
`;

const PenalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #00bfff;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    text-align: center;
  }
`;

const PenalDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
  margin-bottom: 15px;
  flex: 1; /* Permet à la description de remplir l'espace disponible */

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 1rem;
  }
`;

const ReadMoreButton = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: #00bfff;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  text-align: center; /* Centrer le bouton */
  margin-top: auto; /* Aligner le bouton en bas */

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;

const Penal2 = () => {
  const penalArticles = [
    {
      title: "Introduction au droit pénal",
      description:
        "Découvrez les bases du droit pénal et ses objectifs pour maintenir l'ordre public.",
      mediaType: "image",
      mediaSrc: image,
      link: "https://derechos.org/intlaw/doc/gin1.html",
    },
    {
      title: "Objectifs du droit pénal : Prévention, Répression, et Réinsertion",
      description:
        "Le droit pénal vise la prévention des actes nuisibles à la société, leur répression, et la réinsertion des condamnés.",
      mediaType: "image",
      mediaSrc: assistance,
      link: "https://interfacelonny.com/documents/do-1600922216",
    },
    {
      title: "Catégories d'infractions",
      description:
        "Les infractions sont classées selon leur gravité : contraventions, délits, et crimes, chacune avec des peines adaptées.",
      mediaType: "image",
      mediaSrc: categor,
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

  useEffect(() => {
    AOS.refresh(); // Rafraîchir AOS après le rendu
  }, []);

  return (
    <div>
      <PenalContainer>
        <SectionTitle data-aos="fade-right">Exploration Pénal</SectionTitle>
        <Description data-aos="fade-up" data-aos-delay="200">
          Le droit pénal réprime les infractions pour protéger l’ordre public et
          la sécurité. Il définit les comportements interdits, les sanctions, et
          régule les relations entre l’individu et la société.
        </Description>
        <PenalGrid>
          {penalArticles.map((article, index) => (
            <PenalCard
              key={index}
              data-aos="zoom-in"
              data-aos-delay={300 + index * 100}
              tabIndex={0}
            >
              <MediaWrapper>
                {article.mediaType === "image" ? (
                  <img src={article.mediaSrc} alt={article.title} />
                ) : (
                  <video src={article.mediaSrc} controls poster="img/video_poster.png" />
                )}
              </MediaWrapper>
              <PenalContent>
                <PenalTitle>{article.title}</PenalTitle>
                <PenalDescription>{article.description}</PenalDescription>
                <ReadMoreButton data-aos="zoom-in" href={article.link} target="_blank" rel="noopener noreferrer">
                  Lire plus
                </ReadMoreButton>
              </PenalContent>
            </PenalCard>
          ))}
        </PenalGrid>
      </PenalContainer>
      <Footer />
    </div>
  );
};

export default Penal2;