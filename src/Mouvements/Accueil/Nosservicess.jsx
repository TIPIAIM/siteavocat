import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import Maitre4 from "./../../assets/Image/Maitre4.avif";
import affaire from "./../../assets/Image/affaire.avif";
import MOE_0400 from "./../../assets/Image/MOE_0400.avif";
import travail from "./../../assets/Image/travail.avif";
import mine from "./../../assets/Image/mine.avif";
import MOE_0384 from "./../../assets/Image/MOE_0384.avif";
import familled from "./../../assets/Image/familled.avif";
import maitaction from "./../../assets/Image/maitaction.avif";

// Styled Components
const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background: linear-gradient(to bottom, #0488b2, #000);
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
  text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.4);

  text-shadow: ;
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
    padding: 15px;
    line-height: 1.6;
    font-size: 1rem;
    text-align: justify; /* Justification également sur les petits écrans */
    text-align: left; /* Alignement du texte à gauche */
    width: 100%; /* Le texte occupe tout l'espace du conteneur */
    box-sizing: border-box;
    white-space: normal; /* Les sauts de ligne automatiques sont autorisés */
    overflow-wrap: anywhere; /* Les mots peuvent être coupés n'importe où */
    word-break: break-word; /* Coupe les mots pour éviter des espaces vides */
    hyphens: auto; /* Ajoute des traits d'union pour les mots longs si nécessaire */
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 25px;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  box-sizing: border-box;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const Card = styled.div`
  background: rgba(10, 34, 64, 0.9);
  border-radius: 12px;
  padding: 0px;
  text-align: center;
  box-shadow: -2px -2px 10px;
  transition: transform 0.5s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 0px;
    margin: 10px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  max-height: 250px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    max-height: 150px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0px;
  color: #00b4d8;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 0px;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  font-weight: 300;
  text-align: left; /* Alignement du texte à gauche */

  padding: 20px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding-left: 0.75rem; /* Espacement réduit pour harmoniser */
    text-align: left; /* Alignement du texte à gauche */
    padding: 30px;
  }
`;

// Individual Card with Intersection Observer
const AnimatedCard = ({ title, description, image }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <Card
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(50px)",
        transition: "all 0.5s ease-in-out",
      }}
    >
      <CardImage src={image} alt={title || "Card Image"} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </Card>
  );
};

// Enhanced Component
const Nosservicess = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // L'animation ne se répète pas après la première exécution
    });
  }, []);

  const services = [
    {
      title: "DROIT DES CONTRATS",
      description: `Dans l’élaboration et la rédaction, il ne faut pas perdre de vue deux choses essentielles. Mettre sur papier les demandes d’une manière précise, et prévoir lors de chaque stipulation ou même d’une phrase l’exacte interprétation possible et les situations de conflits qui peuvent en résulter afin de parfaire sa rédaction et prévoir des possibilités de règlement de tout litige éventuel. Le rôle du Cabinet se trouve dans la rigueur de rédaction pour tranquiliser son client.`,
      image: Maitre4,
    },
    {
      title: "DROIT PENAL",
      description: `Le cabinet peut vous assister et vous représenter devant les juridictions pénales en toute matières pénales concernant les délits et les crimes. A ce titre, il dispose d’avocats spécialisés en droit pénal et en droit pénal des affaires, qui dominent ce domaine et qui s’investissent totalement en se rapprochant du client dont ils ont en charge le dossier, en le visitant, en l’écoutant, et en prenant à bras le corps sa défense en y mettant toute la force et l’énergie nécessaires.`,
      image: affaire,
    },
    {
      title: "DROIT DES AFFAIRES",
      description: `Au sein de notre cabinet, nous comprenons que le droit des affaires ne se résume pas simplement à la rédaction de contrats ou à la résolution de litiges. Il s'agit d'un levier essentiel pour la réussite de votre entreprise. Notre rôle est de mettre notre expertise juridique au service de votre savoir-faire pour vous fournir des solutions pratiques et stratégiques. Que vous cherchiez à nouer de nouveaux partenariats, à élaborer des projets ambitieux ou à sécuriser vos contrats, nous vous accompagnons à chaque étape avec des conseils éclairés et personnalisés. Notre objectif est de vous offrir une sécurité juridique optimale, tout en vous permettant de vous concentrer sur la croissance de votre activité.`,
      image: MOE_0400,
    },
    {
      title: "DROIT DE TRAVAIL",
      description: `Le droit du travail est un domaine complexe et en constante évolution. Mon objectif est de vous offrir des conseils clairs, adaptés à votre situation, pour sécuriser vos démarches et préserver vos intérêts, quelle que soit votre position. Pour les Employeurs : Je vous aide à prévenir les litiges en mettant en place des pratiques conformes à la loi. En cas de conflit, je vous représente avec détermination. Pour les Salariés : Je suis votre défenseur face à des situations de licenciement abusif, de harcèlement ou d’injustice, pour faire valoir vos droits. Dans le monde du travail, chaque droit compte. Je suis là pour m’assurer qu’ils soient respectés.`,
      image: travail,
    },
    {
      title: "DROIT FISCAL",
      description: `Le Code Général des Impôts évolue sans cesse avec de nouvelles dispositions. Il concerne tout particulier et toute entreprise, et il faut être au fait de ces différents changements pour conseiller et assister tout contribuable pour tout ce qui concerne le côté imposable en cas de cession d’un bien immeuble ou d’un fonds de commerce, en cas de redressement fiscal, ou d’une imposition que le contribuable ne trouve pas légitime, en cas de besoin d’un quitus fiscal pour les expatriés, ou autres. Le cabinet peut vous conseiller efficacement, vous assister auprès de la Direction des Impôts directs et indirects, en clair, vous faciliter la tâche, en vous trouvant des solutions rapides et appropriées.`,
      image: maitaction,
    },
    {
      title: "DROIT MINIER ET ENVIRONNEMENTALE",
      description: `En matière de droit minier, nous intervenons pour : Assister les entreprises minières dans l'obtention des permis et autorisations nécessaires pour l'exploration et l'exploitation des ressources naturelles. Rédiger et négocier des contrats miniers, en garantissant leur conformité avec les lois nationales et internationales. Conseiller sur les obligations réglementaires, notamment en matière de fiscalité minière et de partage des bénéfices. Du côté environnemental, notre rôle est d'assurer : La conformité avec les lois environnementales. La gestion des litiges environnementaux. Nous sommes là pour vous guider.`,
      image: mine,
    },
    {
      title: "DROIT SOCIALE ET SECURITE SOCIALE",
      description: `Le droit social et la sécurité sociale ne sont pas de simples concepts juridiques. Ils incarnent la justice et l'équité dans le monde du travail. Ils assurent un équilibre entre les intérêts des employeurs et des travailleurs, tout en protégeant les plus vulnérables de notre société. En tant qu’avocat, je m’efforce de défendre ces principes, que ce soit en conseillant mes clients, en négociant pour eux ou en plaidant en leur nom devant les juridictions compétentes. Ces branches du droit, dynamiques et en constante évolution, reflètent notre engagement collectif pour une société où chacun a droit à la dignité et à la sécurité. Notre mission est de garantir que ces droits soient respectés et appliqués avec rigueur et humanité.`,
      image: MOE_0384,
    },
    {
      title: "DROIT DE LA FAMILLE",
      description: `Le droit de la famille n’est pas qu’une affaire de lois et de règlements. Il est avant tout une question d’humanité. Mon objectif est de vous accompagner avec respect et bienveillance, en trouvant des solutions justes et équitables qui respectent vos droits et vos valeurs. Parce que chaque famille est unique, chaque solution doit l’être aussi. Chaque décision prise dans ce domaine peut avoir des conséquences profondes sur les relations et le bien-être des personnes impliquées, en particulier des enfants. En tant qu’avocat, je suis là pour : Écouter vos besoins avec empathie. Trouver des solutions adaptées à votre situation personnelle. Défendre vos intérêts tout en cherchant à préserver l’harmonie familiale lorsque cela est possible.`,
      image: familled,
    },
  ];

  return (
    <Container>
      <Title>Bienvenue à Notre Service</Title>
      <Description>
        Notre cabinet offre des services juridiques de qualité dans divers
        domaines, avec une expertise reconnue et une approche humaine pour
        répondre à vos besoins spécifiques.
      </Description>
      <Grid>
        {services.map((service, index) => (
          <AnimatedCard
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

export default Nosservicess;
