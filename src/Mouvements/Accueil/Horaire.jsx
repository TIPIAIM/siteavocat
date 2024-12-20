import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Importation de la bibliothèque pour observer la visibilité des éléments
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #0f172a, #0f172a, #0f172a);
  color: white;
  padding: 0px;
  box-sizing: border-box;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
  margin-top: 40px;
  color: #0488b2;
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
  margin-bottom: 25px;
  max-width: 900px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.8);
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Card = styled.div`
  background: linear-gradient(to bottom, #, #0f172a, #0488b2);
  border-radius: 1px;
  padding: 10px;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
  box-shadow: -12px -1px 2px rgba(255, 255, 255, 0.8);
  transition: transform 0.5s ease;
  overflow: hidden;
  &:hover {
    transform: scale(0.9);
  }
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 8px;
  color: #ffffff;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.4;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const Composantfinal = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
    transition: { duration: 1 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
    transition: { duration: 1 },
  },
};

export default function Horaire() {
  const sections = [
    { title: "Honoraires:", description: " ?" },
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
    <Container className=" mt-2">
      {/* Contenu principal */}
      <motion.div {...Composantfinal.fadeInUp}>
        <Title> COMBIEN COÛTE UN AVOCAT ?</Title>
        <Description>
          Les honoraires de l’avocat sont libres et fixés en accord avec le
          client. Il n’existe pas de barème indicatif. Il est donc nécessaire
          d’aborder avec votre avocat les modalités qui permettent de déterminer
          le montant des honoraires.
        </Description>
      </motion.div>

      {/* Sections avec animations */}
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

      {/* Image centrée */}
    </Container>
  );
}

// Section Component with different animations based on index
const Section = ({ title, description, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Dynamically set animation based on the section index
  let animation;
  switch (index % 4) {
    case 0:
      animation = Composantfinal.fadeInLeft;
      break;
    case 1:
      animation = Composantfinal.fadeInRight;
      break;
    case 2:
      animation = Composantfinal.fadeInUp;
      break;
    default:
      animation = Composantfinal.fadeInUp;
  }

  return (
    <motion.div
      ref={ref}
      {...animation}
      className="mb-8"
      style={{ opacity: inView ? 1 : 0 }} // Affichage conditionnel basé sur la visibilité
    >
      <Card>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </Card>
    </motion.div>
  );
};
