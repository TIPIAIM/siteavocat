import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import image2 from "./../../assets/Image/maitreetblouz.jpg"; // Chemin d'image

// Container principal
const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 45px;
  background: linear-gradient(to top, #0369a1, #0f172a);
  border-radius: 0px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

// Conteneur pour l'image et la section "À propos"
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

// Conteneur de l'image
const ImageWrapper = styled.div`
  perspective: 1000px;
  width: 400px;
  height: 500px;

  @media (max-width: 768px) {
    width: 300px;
    height: 350px;
  }
`;

// Image qui se retourne
const ImageCard = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: rotateY(180deg);
  }
`;

// Face avant de l'image
const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

// Face arrière avec texte
const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background: linear-gradient(120deg, #0f172a 60%, #0369a1 80%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 40px;
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
`;

// Section "À propos" à gauche
const AboutSection = styled.div`
  flex: 1;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  color: white;
  text-align: justify;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const AboutTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const AboutDescription = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  max-height: ${({ expanded }) => (expanded ? "none" : "9.6em")};
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ReadMoreButton = styled.button`
  margin-top: 10px;
  background: none;
  border: none;
  color: #00bfff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

// Titre et description de la face arrière
const Title = styled.h3`
  margin-bottom: 20px;
  font-size: 1.8rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  max-width: 280px;
  color: rgba(255, 255, 255, 0.9);

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Composant principal
const Aproposdeux = () => {
  const [expanded, setExpanded] = useState(false);

  const description = `

  Avant de fonder le cabinet AOD Avocats, Maître Amadou Oury DIALLO a
  accumulé plusieurs années d’expérience en tant que conseiller
  juridique pour des sociétés opérant dans le secteur minier, et
  exercé en tant que collaborateur au sein de la Société Civile
  Professionnelle d’Avocats KABELE LAW GROUP (KLG). La SCPA AOD
  (Société Civile Professionnelle d’Avocats AOD) est un cabinet
  d’avocats spécialisé en droit des affaires fondé en juillet 2022 et
  géré par Maître Amadou Oury DIALLO. Il a pour but de devenir un
  cabinet d’avocats de renom offrant des services juridiques de
  qualité, adaptés aux besoins spécifiques d’une clientèle variée,
  qu’il s’agisse de particuliers ou d’entreprises. Fort de ces
  expériences, le cabinet AOD Avocats a pour objectif de fournir des
  services juridiques de qualité et adaptés aux besoins spécifiques de
  sa clientèle. Le Cabinet AOD Avocats reconnu pour sa rigueur, son
  dynamisme et son professionnalisme est dévoué à fournir des services
  juridiques spécialisés dans les domaines spécifiques du droit du
  travail et la sécurité sociale, droit des affaires, droit minier et
  de l’environnement, droit fiscal, droit du sport. Son équipe est
  constituée de jeunes professionnels compétents dotés d’une
  expérience et expertise significative qui leur permet d’offrir des
  conseils juridiques et assistance de qualité avec la motivation à
  servir au mieux ses clients.
  
  L’accent est mis sur le travail d’équipe au sein du cabinet afin
  d’offrir des services efficaces et adaptés aux exigences de ses
  clients. En privilégiant la collaboration et l’excellence dans la
  prestation de services juridiques, la SCPA AOD vise à établir des
  relations solides inclusives et durables avec sa clientèl  `;

  return (
    <CarouselContainer>
      <ContentWrapper>
        <AboutSection>
          <AboutTitle>AOD AVOCATS SCPA</AboutTitle>
          <AboutDescription expanded={expanded}>
            {description}
          </AboutDescription>
          <ReadMoreButton onClick={() => setExpanded(!expanded)}>
            {expanded ? "moins" : "plus"}
          </ReadMoreButton>
        </AboutSection>
        <ImageWrapper>
          <ImageCard>
            <Front style={{ backgroundImage: `url(${image2})` }} />
            <Back>
              <Title>NOTRE MISSION</Title>
              <Description>
                Fournir des conseils juridiques novateurs, adaptés aux besoins
                des clients, avec un engagement envers l’excellence.
              </Description>
            </Back>
          </ImageCard>
        </ImageWrapper>
      </ContentWrapper>
      
    </CarouselContainer>
  );
};

export default Aproposdeux;

