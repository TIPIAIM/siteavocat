import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import image2 from "./../../assets/Image/Maitre3.jpg";
import image3 from "./../../assets/Image/Maitre1.jpg";
import image5 from "./../../assets/Image/mbangou.jpg";
import image6 from "./../../assets/Image/maitre13.jpg";
import image7 from "./../../assets/Image/keitaseul2.jpg";
import image8 from "./../../assets/Image/naroumb.jpg";
import image9 from "./../../assets/Image/MOE_0400.jpg";
import image10 from "./../../assets/Image/MOE_0311.jpg";
import Footer from "../Accueil/Footerr";
import Aproposdeux from "./Apropos2";
import Aproposzeo from "./Aproposzeo";
import Headerr from "../Headerr/Header";

// Images de démonstration
const images = [
  {
    src: image9,
    title: "NOS solutions ",
    description:
      "Dans un esprit de loyauté, de franchise, nous travaillons régulièrement à offrir à nos clients des solutions adaptées à leurs besoins et à leur situation.",
    email: "Offrir des solutions adaptées",
    city: "Conakry",
    phone: "00624138395",
  },
  {
    src: image6,
    title: "Conseiller ",
    description:
      "Nous apportons une valeur ajoutée dans le traitement des demandes de nos clients tout en les conseillant avec indépendance, objectivité, et ce,dès la première rencontre.",
    email:
      "Conseiller nos clients en toute indépendance, objectivité, efficacité et rigueur",
    city: "Conakry",
    phone: "00224624138395",
  },
  {
    src: image5,
    title: "Engagement ",
    description:
      "Notre identité est également marquée par notre engagement envers l’éthique et l’intégrité. Les Avocats veillent à respecter les normes déontologiques les plus strictes, tout en offrant des services juridiques de qualité dans le respect des Lois et règlements en vigueur.",
    email: "Engagement envers l’éthique et l’intégrité",
    city: "Conakry",
    phone: "624138395",
  },
  {
    src: image8,
    title: "Excellence  ",
    description:
      "Nous travaillons constamment à améliorer nos compétences et, à ce titre, nos avocats suivent régulièrement des formations professionnelles dans leurs champs d’expertise afin de se maintenir à la fine pointe du droit.Le cabinet s‘engage à apporter des solutions juridiques pertinentes et adaptées aux réalités locales tout en tenant compte des normes internationales applicables",
    email:
      "Excellence de notre travail et le désir constant de nous perfectionner",
    city: "Conakry",
    phone: "00224624138395",
  },
  {
    src: image2,
    title: "NOTRE STRATEGIE ",
    description:
      "Nous posons un diagnostic complet, clair et précis dès le départ afin d’exposer à nos clients les tenants et aboutissants de leur dossier. Nous cernons rapidement les enjeux légaux et d’affaires,les points forts et les points faibles, ainsi que les coûts afférents, et les exposons à nos clients de manière transparente, et objective",
    email:
      "Une approche stratégique et transparente axée sur l’atteinte de résultat et la communication",
    city: "Conakry",
    phone: "624138395",
  },
  {
    src: image7,
    title: "Chez AOD Avocats ",
    description:
      "Que vous soyez un particulier ou une entreprise, et quel que soit la nature ou l’ampleur du mandat qui nous est confié, vous bénéficiez d’un service de premier plan et aucun compromis n’est fait au niveau de la qualité de notre travail.Nous nous engageons à vous livrer des résultats satisfaisants dans les délais suivant la complexité du dossier.",
    email: "Chez AOD Avocats, le client est au centre de nos préoccupations ",
    city: "Conakry",
    phone: "00224624138395",
  },
  {
    src: image10,
    title: "NOTRE APPROCHE ",
    description:
      "Nous nous distinguons par notre approche stratégique et transparente centrée sur l’obtention de résultats tangibles. Notre action est orientée vers la réalisation d’objectifs concrets et de résultats satisfaisants",
    email: "Une approche stratégique",
    city: "Conakry",
    phone: "147258369",
  },
  {
    src: image3,
    title: "NOS VALEURS ",
    description:
      "Que vous soyez un particulier ou une entreprise, et quel que soit la nature ou l’ampleur du mandat qui nous est confié, vous bénéficiez d’un service de premier plan et aucun compromis n’est fait au niveau de la qualité de notre travail.Nous nous engageons à vous livrer des résultats satisfaisants dans les délais suivant la complexité du dossier.",
    email: "Chez AOD Avocats, le client est au centre de nos préoccupations :",
    city: "Conakry",
    phone: "369258147",
  },
];

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 0px;
  background: linear-gradient(120deg, #0f172a 60%, #0369a1 80%);
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ImageWrapper = styled.div`
  perspective: 1000px;
  margin: 5px;
`;

const ImageCard = styled(motion.div)`
  width: 350px;
  height: 450px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: rotateY(180deg);
    box-shadow: 2px 5px 15px rgba(0, 180, 216, 1);
  }
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  background: linear-gradient(135deg, #0f172a 50%, #0f172a 50%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  font-size: 1rem;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 1.8rem;
  font-weight: bold;

  color: #0488b2;
`;

const Description = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  line-height: 1.5;
`;

const Email = styled.a`
  color: white;
  font-size: 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ControlButton = styled.button`
  position: absolute;
  bottom: 6px;
  right: 20px;
  padding: 5px 7px;
  background-color: #0488b2;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #023047;
  }
  &:focus {
    outline: none;
  }
`;

const ScrollWrapper = styled(motion.div)`
  display: flex;
  transition: transform 1s ease-in-out;
  animation: ${({ isPaused }) =>
    isPaused ? "none" : "scroll 500s linear infinite"};

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

const IndicatorWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
`;

const Indicator = styled.div`
  width: 12px;
  height: 12px;
  margin: 0 12px;
  border-radius: 50%;
  background-color: ${({ active }) => (active ? "#0488b2" : "#ffffff")};
  transition: background-color 0.3s;
`;

const Apropos = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const infiniteImages = [...images, ...images];

  const handleButtonClick = () => {
    setIsPaused(!isPaused);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div>
      <Headerr />
      <CarouselContainer>
        <ScrollWrapper isPaused={isPaused}>
          {infiniteImages.map((item, index) => (
            <ImageWrapper key={index}>
              <ImageCard>
                <Front style={{ backgroundImage: `url(${item.src})` }} />
                <Back>
                  <Title>{item.title}</Title>
                  <Description>{item.description}</Description>
                  <Email href={`mailto:${item.email}`}>{item.email}</Email>
                </Back>
              </ImageCard>
            </ImageWrapper>
          ))}
        </ScrollWrapper>

        <ControlButton onClick={handleButtonClick}>
          {isPaused ? "Play" : "Reset"}
        </ControlButton>

        <IndicatorWrapper>
          {infiniteImages.map((_, index) => (
            <Indicator key={index} active={index === currentIndex} />
          ))}
        </IndicatorWrapper>
      </CarouselContainer>
      <Aproposzeo />
      <Aproposdeux />
      <Footer />
    </div>
  );
};

export default Apropos;
