import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { images } from '../../assets/images'// Import des images depuis le fichier images.js

// Styles optimisés
const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #0f172a;
  font-family: "Helvetica55Roman", Arial, sans-serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 25px;
  max-width: 900px;
  line-height: 1.5;
  color: #0f172a;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
    padding: 0 20px 20px 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes par ligne */
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 colonne sur mobile */
  }
`;

const Card = styled.div`
  background: rgba(10, 34, 64, 0.9);
  border-radius: 1px;
  padding: 0px;
  text-align: center;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 2px 2px 6px #00b4d8;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 1px;
  background: #f8f9fa;
  opacity: ${({ loaded }) => (loaded ? 1 : 0)};
  transition: opacity 0.3s ease;

  @media (max-width: 768px) {
    max-height: 150px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #00b4d8;
  margin: 15px 0;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  font-weight: 300;
  text-align: left;
  padding: 0 20px 20px 20px;
  max-height: ${({ expanded }) => (expanded ? "1000px" : "4.3em")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out, opacity 0.3s ease-in-out;
`;

// Placeholder SVG pour les images
const placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 250'%3E%3C/svg%3E";

// Composant ServiceCard optimisé
const ServiceCard = React.memo(({ title, description, image }) => {
  const [expanded, setExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef();
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "100px 0px" }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <Card
      ref={cardRef}
      data-aos="fade-up"
      onClick={() => setExpanded(!expanded)}
      aria-expanded={expanded}
    >
      <CardImage
        ref={imgRef}
        src={isVisible ? image : placeholder}
        alt={title}
        loading="lazy"
        decoding="async"
        width="300"
        height="250"
        loaded={isLoaded}
        onLoad={() => setIsLoaded(true)}
      />
      <CardTitle data-aos="fade-down">{title}</CardTitle>
      <CardDescription expanded={expanded}>{description}</CardDescription>
    </Card>
  );
});

// Données complètes des services
const services = [
  {
    title: "L’ESSENTIEL DANS LES CONTRATS",
    description: `
    Dans l’élaboration et la rédaction de contrats, l’intervention d’un avocat est essentielle pour sécuriser les intérêts de chaque partie. Cela permet de garantir une rédaction rigoureuse, d’anticiper les risques de conflits et d’envisager des solutions adaptées en cas de litige. Le rôle du Cabinet est de veiller à une rédaction claire et précise, en protégeant les droits de ses clients tout en leur offrant une tranquillité d’esprit.
    `,
    image: images.maitre4,
  },
  {
    title: "DROIT PENAL",
    description: `Le cabinet peut vous assister et vous représenter devant les juridictions pénales en toute matières pénales concernant les délits et les crimes. A ce titre, il dispose d’avocats spécialisés en droit pénal et en droit pénal des affaires, qui dominent ce domaine et qui s’investissent totalement en se rapprochant du client dont ils ont en charge le dossier, en le visitant, en l’écoutant, et en prenant à bras le corps sa défense en y mettant toute la force et l’énergie nécessaires.`,
    image: images.affaire,
  },
  {
    title: "DROIT DES AFFAIRES",
    description: `
    Au sein de notre cabinet, nous comprenons que le droit des affaires ne se résume pas simplement à la rédaction de contrats ou à la résolution de litiges. Il s'agit d'un levier essentiel pour la réussite de votre entreprise. Notre rôle est de mettre notre expertise juridique au service de votre savoir-faire pour vous fournir des solutions pratiques et stratégiques. Que vous cherchiez à nouer de nouveaux partenariats, à élaborer des projets ambitieux ou à sécuriser vos contrats, nous vous accompagnons à chaque étape avec des conseils éclairés et personnalisés. Notre objectif est de vous offrir une sécurité juridique optimale, tout en vous permettant de vous concentrer sur la croissance de votre activité.
    `,
    image: images.moe0384,
  },
  {
    title: "DROIT DU TRAVAIL ET SÉCURITÉ SOCIALE",
    description: `
    Le droit du travail est un domaine complexe et en constante évolution. Mon objectif est de vous offrir des conseils clairs, adaptés à votre situation, pour sécuriser vos démarches et préserver vos intérêts, quelle que soit votre position. Pour les Employeurs : Nous vous aidons à prévenir les litiges en mettant en place des pratiques conformes à la loi. En cas de conflit, nous vous représentons avec détermination. Pour les Salariés : nous sommes votre défenseur face à des situations de licenciement abusif, de harcèlement ou d’injustice, pour faire valoir vos droits. Dans le monde du travail, chaque droit compte. Nous sommes là pour nous assurer qu’ils soient respectés.
    En tant qu’avocat, nous nous efforçons de défendre ces principes, que ce soit en conseillant nos clients, en négociant pour eux ou en plaidant en leur nom devant les juridictions compétentes. 
    Ces branches du droit, dynamiques et en constante évolution, reflètent notre engagement collectif pour une société où chacun a droit à la dignité et à la sécurité. Notre mission est de garantir que ces droits soient respectés et appliqués avec rigueur et humanité.
    `,
    image:images.abdoulayeavoc,
  },
  {
    title: "DROIT MINIER ET ENVIRONNEMENTAL",
    description: `En matière de droit minier, nous intervenons pour : Assister les entreprises minières dans l'obtention des permis et autorisations nécessaires pour l'exploration et l'exploitation des ressources naturelles. Rédiger et négocier des contrats miniers, en garantissant leur conformité avec les lois nationales et internationales. Conseiller sur les obligations réglementaires, notamment en matière de fiscalité minière et de partage des bénéfices. Du côté environnemental, notre rôle est d'assurer : La conformité avec les lois environnementales. La gestion des litiges environnementaux. Nous sommes là pour vous guider.`,
    image: images.mine,
  },
  {
    title: "DROIT FISCAL",
    description: `
    Le Code Général des Impôts évolue sans cesse avec de nouvelles dispositions. Il concerne tout particulier et toute entreprise, et il faut être au fait de ces différents changements pour conseiller et assister tout contribuable pour tout ce qui concerne le côté imposable en cas de cession d’un bien immeuble ou d’un fonds de commerce, en cas de redressement fiscal, ou d’une imposition que le contribuable ne trouve pas légitime, en cas de besoin d’un quitus fiscal pour les expatriés, ou autres. Le cabinet AOD AVOCATS peut vous conseiller efficacement, vous assister auprès de la Direction des Impôts directs et indirects, en clair, vous faciliter la tâche, en vous trouvant des solutions rapides et appropriées.
    `,
    image: images.maitaction,
  },
];

// Initialisation unique de AOS
let aosInitialized = false;

const Nosservicess = () => {
  useEffect(() => {
    if (!aosInitialized) {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: "ease-out-quad",
      });
      aosInitialized = true;
    }
    return () => AOS.refresh();
  }, []);

  return (
    <Container>
      <Title data-aos="zoom-in">Services</Title>
      <Description data-aos="fade-up" data-aos-delay="150">
        Notre cabinet offre des services juridiques de qualité dans divers
        domaines, avec une expertise reconnue et une approche humaine.
      </Description>

      <Grid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default React.memo(Nosservicess);