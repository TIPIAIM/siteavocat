import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #0369a1, #0f172a);
  color: white;
  padding: 60px 20px;
  box-sizing: border-box;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const Card = styled(motion.div)`
  background: rgba(10, 34, 64, 0.9);
  border-radius: 10px;
  padding: 20px;
  text-align: left;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: transform 0.5s ease, box-shadow 0.5s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  
  font-weight: bold;
  margin-bottom: 10px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const ContactInfo = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);

  & > span {
    display: block;
    margin-top: 5px;
  }
`;

// Animation Variants
const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Main Component
const Aproposzeo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const values = [
    {
      title: "NOS VALEURS",
      description:
        "Dans un esprit de loyauté, de franchise, nous travaillons régulièrement à offrir à nos clients des solutions adaptées à leurs besoins et à leur situation.",
      email: "Offrir des solutions adaptées",
      city: "Conakry",
      phone: "123456789",
    },
    {
      title: "CONSEIL",
      description:
        "Nous apportons une valeur ajoutée dans le traitement des demandes de nos clients tout en les conseillant avec indépendance, objectivité, et ce, dès la première rencontre.",
      email:
        "Conseiller nos clients en toute indépendance, objectivité, efficacité et rigueur",
      city: "Conakry",
      phone: "987654321",
    },
    {
      title: "IDENTITE",
      description:
        "Notre identité est également marquée par notre engagement envers l’éthique et l’intégrité. Les Avocats veillent à respecter les normes déontologiques les plus strictes, tout en offrant des services juridiques de qualité.",
      email: "Engagement envers l’éthique et l’intégrité",
      city: "Conakry",
      phone: "456123789",
    },
    {
      title: "TRAVAIL",
      description:
        "Nous travaillons constamment à améliorer nos compétences et nos avocats suivent régulièrement des formations professionnelles pour se maintenir à la fine pointe du droit.",
      email:
        "Excellence de notre travail et le désir constant de nous perfectionner",
      city: "Conakry",
      phone: "789321456",
    },
    {
      title: "NOTRE MISSION",
      description:
        "Le cabinet AOD Avocats adopte de manière à répondre efficacement aux préoccupations de ses clients, une approche personnalisée en  fournissant des solutions sur mesure et des conseils juridiques         novateurs",
      email: "La perfection",
      city: "Conakry",
      phone: "789321456",
    },
    {
      title: "NOS SERVICES",
      description:
        "Dévoué à fournir des services juridiques spécialisés dans les domaines spécifiques du droit du travail et la sécurité sociale, droit des affaires, droit minier et de l’environnement, droit fiscal, droit du sport.",
      email: "Excellence dans le travail",
      city: "Conakry",
      phone: "789321456",
    },
  ];
  return (
    <Container>
      <Title>À PROPOS DE NOUS</Title>
      <SubTitle>
        Avant d’être des avocats, nous nous revendiquons de valeurs personnelles
        qui nous permettent d`accomplir notre mission avec dignité,
        indépendance, et probité.
      </SubTitle>
      <Grid>
        {values.map((value, index) => (
          <Card
            key={index}
            data-aos="fade-up"
            variants={animationVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <CardTitle>{value.title}</CardTitle>
            <CardDescription>{value.description}</CardDescription>
            <ContactInfo>
              <span>-: {value.email}</span>
            { /* <span>-: {value.city}</span>
              <span>-: {value.phone}</span>*/}
            </ContactInfo>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

export default Aproposzeo;
