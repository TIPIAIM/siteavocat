import { lazy, memo } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
 
import { images } from "../../assets/images"; // Importation des images

const BardeNavigationpublic = lazy(() =>
  import("../Navigatpublic/BardeNavigationPublic")
);
const Footer = lazy(() => import("../Accueil/Footerr"));
const ArticleDroitPenl = lazy(() => import("./ArticleAssoc/ArticleDroitPenl"));

// Styled Components
const PenalContainer = styled.div`
  width: 100%;
  padding: 20px;
  color: #f0f4f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 1200px; /* Largeur maximale du contenu */
  margin: 0 auto; /* Centrage horizontal */
  margin-top: 5rem; /* Ajout d'une marge supérieure pour espacer du haut */

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
`; 

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #00b4d8;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: 1rem;
    margin: 2rem;
  }
`;

const PenalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 6rem;
  padding: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
     margin-bottom: 2rem;
  }
`;

const PenalCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.9);
 
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
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

const PenalContent = styled.div`
  margin: 1rem;
  margin-bottom: 2rem;
`;

const PenalTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #00b4d8;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const PenalDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-left: 1rem;
    text-align: left;
  }
`;

const ReadMoreButton = styled.a`
  font-size: 1rem;
  font-weight: bold;
  color: #00b4d8;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #00b4d8;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
  }
`;

const BackButton = styled(Link)`
  position: absolute;
  top: 80px;
  left: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  box-shadow: 0 2px 3px #00b4d8;
  transition: transform 0.9s ease, box-shadow 0.2s ease;
  margin-top: 0rem;

  &:hover {
    transform: scale(1.1);
    box-shadow: 3px 5px #00b4d8;
  }
`;
const BackgroundContainer = styled.section`
  position: relative;
  min-height: 58vh;
  //background-image: url("img/logoAODnoir.avif");
  background-image: url(${images.logoAODnoir});

  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;
const BackgroundContaine = styled.section`
  position: relative;
  min-height: 5vh;
  //background-image: url("img/logoAODnoir.avif");
  background-image: url(${images.logoAODnoir});

  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Penal = () => {
  const penalArticles = [
    {
      title: "Introduction",
      description:
        "Découvrez les bases du droit pénal et ses objectifs pour maintenir l'ordre public.",
      mediaType: "image",
      mediaSrc: images.image,
      link: "https://derechos.org/intlaw/doc/gin1.html",
    },
    {
      title: "Objectifs",
      description:
        "Le droit pénal vise la prévention des actes nuisibles à la société, leur répression, et la réinsertion des condamnés.",
      mediaType: "image",
      mediaSrc: images.assistance,
      link: "https://interfacelonny.com/documents/do-1600922216",
    },
    {
      title: "Catégories d'infractions",
      description:
        "Les infractions sont classées selon leur gravité : contraventions, délits, et crimes, chacune avec des peines adaptées.",
      mediaType: "image",
      mediaSrc: images.categor,
      link: "https://derechos.org/intlaw/doc/gin1.html",
    },
    {
      title: "Les acteurs clés",
      description:
        "Les acteurs principaux incluent le ministère public, le juge d'instruction, les avocats, la police, et les victimes.",
      mediaType: "video",
      mediaSrc: "img/feuillevid.mp4",
      link: "https://www.cnhj-guinee.org/publication/code-penal-guinee/",
    },
  ];

  return (
    <div className="bg-gray-900">
      <BardeNavigationpublic />
      <BackgroundContainer></BackgroundContainer>
      <BackButton data-aos="fade-down" to="/article">
        <FaArrowLeft size={20} />
      </BackButton><ArticleDroitPenl />
      
      <BackgroundContaine>
        <PenalContainer>
          <SectionTitle data-aos="fade-up">
            Exploration du Droit Pénal
          </SectionTitle>
        {/*  <Description data-aos="fade-up">
            Le droit pénal est une branche essentielle du système juridique,
            chargée de réprimer les infractions pour protéger l’ordre public et
            la sécurité des citoyens. Il définit les comportements interdits,
            les sanctions applicables, et régule les relations entre l’individu
            et la société. En établissant des règles claires, il vise à prévenir
            les actes criminels, à punir les auteurs d’infractions, et à assurer
            la réinsertion des condamnés.
            <br />
            <br />
            Le droit pénal couvre un large éventail de domaines, allant des
            infractions mineures comme les contraventions aux crimes les plus
            graves tels que les homicides ou les actes de terrorisme. Il
            s’appuie sur des principes fondamentaux tels que la présomption
            d’innocence, la légalité des délits et des peines, et le respect des
            droits de la défense.
            <br />
            <br />
            En explorant ce domaine, vous découvrirez comment le droit pénal
            interagit avec d’autres branches du droit, comme le droit civil ou
            le droit administratif, pour garantir une justice équitable et
            efficace. Que vous soyez étudiant, professionnel du droit, ou
            simplement curieux, cette exploration vous offrira une compréhension
            approfondie des enjeux et des mécanismes du droit pénal.
          </Description>*/}
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
                  <ReadMoreButton
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lire plus
                  </ReadMoreButton>
                </PenalContent>
              </PenalCard>
            ))}
          </PenalGrid>
        </PenalContainer>
      </BackgroundContaine>
      <Footer />
    </div>
  );
};

export default memo(Penal);
