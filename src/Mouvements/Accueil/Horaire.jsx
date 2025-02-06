import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Importation de la bibliothèque pour observer la visibilité des éléments
import styled from "styled-components";

import "aos/dist/aos.css";

// Styled Components
const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #0f172a, #1e293b);
  color: white;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin: 40px 0;
  color: #90e0ef;

  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 30px;
  max-width: 800px;
  line-height: 1.8;

  color: white;
  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.6;
    padding-left: 1.5rem; /* Espacement réduit pour harmoniser */
    text-align: left; /* Alignement du texte à gauche */
  }
`;

const Card = styled.div`
  background: linear-gradient(to bottom, #90e0ef, #);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  box-shadow: 1px 8px 1px #90e0ef;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.6);
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #90e0ef;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);

  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 1rem;

    padding-left: 1rem; /* Espacement réduit pour harmoniser */
    text-align: left; /* Alignement du texte à gauche */
  }
`;

const Composantfinal = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 0.8 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
    transition: { duration: 0.8 },
  },
};

export default function Horaire() {
  const sections = [
    { title: "Honoraires:", description: "Quelle que soit la formule choisie" },
    {
      title: "L’honoraire au temps passé",
      description:
        "L’avocat et son client se mettent d’accord dés le début sur une rémunération horaire. L’honoraire définitif sera calculé par l’avocat en fin de dossier.",
    },
    {
      title: "L’honoraire forfaitaire",
      description:
        "L’avocat et son client se mettent dés le début de leur relation d’accord sur une rémunération globale pour la prestation définie entre eux. Au-delà, toute prestation non prévue fera l’objet d’une nouvelle rémunération",
    },

    {
      title: "L’honoraire de résultat",
      description:
        "Il n’est pas possible de déterminer les honoraires de l’avocat par le gain du procès ou en fonction du résultat obtenu.En revanche, il est possible de convenir d’un honoraire de base (forfait ou horaire), complété par une rémunération supplémentaire calculée en fonction du résultat obtenu. Cet honoraire supplémentaire doit faire l’objet d’une convention préalable.",
    },
    {
      title: "Bon à savoir :",
      description:
        "Quelle que soit la formule choisie, il est recommandé de la déterminer par écrit avec votre avocat. La rémunération de votre avocat ne constitue pas obligatoirement la seule dépense engagée lors d’un procès. Appelées frais ou dépens, ces dépenses supplémentaires couvrent généralement des frais de procédure ou la rémunération d’autres auxiliaires de justice (l’intervention d’un huissier de justice, par exemple). Toute contestation concernant les honoraires relève de la compétence du Bâtonnier à qui vous pouvez écrire par lettre recommandée avec accusé de réception en lui expliquant les arguments qui vous poussent à contester les honoraires de votre avocat.",
    },
  ];

  return (
    <Container className="mt-2">
      <motion.div {...Composantfinal.fadeInUp}>
        <Title> COMBIEN COÛTE UN AVOCAT ?</Title>
        <Description>
          Les honoraires de l’avocat sont libres et fixés en accord avec le
          client. Il n’existe pas de barème indicatif. Il est donc nécessaire
          d’aborder avec votre avocat les modalités qui permettent de déterminer
          le montant des honoraires.
        </Description>
      </motion.div>

      <AnimatePresence>
        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            description={section.description}
            index={index}
          />
        ))}
      </AnimatePresence>
    </Container>
  );
}

const Section = ({ title, description, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  let animation;
  switch (index % 4) {
    case 0:
      animation = Composantfinal.fadeInLeft;
      break;
    default:
      animation = Composantfinal.fadeInUp;
  }

  return (
    <motion.div
      ref={ref}
      {...animation}
      className="mb-8"
      style={{ opacity: inView ? 1 : 0 }}
    >
      <Card data-aos="fade-right">
        <CardTitle data-aos="fade-down">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </Card>
    </motion.div>
  );
};
