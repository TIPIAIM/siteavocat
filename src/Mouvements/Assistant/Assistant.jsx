import { lazy, useEffect, useState } from "react";

import styled, { keyframes } from "styled-components";
import {
  X,
  Search,
  Scale,
  Building2,
  HandshakeIcon,
 
} from "lucide-react";
 import { Helmet } from "react-helmet";
import { images } from "../../assets/images"; // Importation des images

const BardeNavigationpublic = lazy(() =>
  import("../Navigatpublic/BardeNavigationPublic")
);

//pour les frappe
const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #00b4d8 }
`;


const questions = [
  { id: 1, question: "Comment protéger une marque ?", category: "juridique" },
  {
    id: 2,
    question: "Création d'entreprise étape par étape",
    category: "entreprise",
  },
  { id: 3, question: "Procédure de licenciement", category: "juridique" },
  { id: 4, question: "Droits des actionnaires", category: "entreprise" },
  { id: 5, question: "Gestion des impôts société", category: "entreprise" },
  {
    id: 6,
    question: "Rédaction d'un contrat de travail",
    category: "juridique",
  },
  {
    id: 7,
    question: "Protection des données RGPD",
    category: "juridique",
  },
  {
    id: 8,
    question: "Résolution d'un litige commercial",
    category: "juridique",
  },
  {
    id: 9,
    question: "Droit de la propriété intellectuelle",
    category: "juridique",
  },
  {
    id: 10,
    question: "Régime social du dirigeant",
    category: "entreprise",
  },
  {
    id: 11,
    question: "Obligations comptables annuelles",
    category: "entreprise",
  },
  {
    id: 12,
    question: "Cession de parts sociales",
    category: "juridique",
  },
  {
    id: 13,
    question: "Rédiger un business plan",
    category: "entreprise",
  },
  {
    id: 14,
    question: "Clause de non-concurrence",
    category: "juridique",
  },
  {
    id: 15,
    question: "Embauche d'un salarié étranger",
    category: "entreprise",
  },
  {
    id: 16,
    question: "Responsabilité civile des dirigeants",
    category: "juridique",
  },
  {
    id: 17,
    question: "Création d'une SASU",
    category: "entreprise",
  },
  {
    id: 18,
    question: "Rupture conventionnelle",
    category: "juridique",
  },
  {
    id: 19,
    question: "Déclaration TVA",
    category: "entreprise",
  },
  {
    id: 20,
    question: "Protection des inventions",
    category: "juridique",
  },
];

const answers = {
  1: "Pour protéger une marque, il faut effectuer un dépôt auprès de l'INPI. La protection dure 10 ans et est renouvelable.",
  2: "1. Choix du statut juridique\n2. Rédaction des statuts\n3. Immatriculation\n4. Ouverture compte bancaire",
  3: "Un licenciement doit suivre une procédure stricte : entretien préalable, notification écrite, et respect des délais de préavis.",
  4: "Les actionnaires ont droit au vote, dividende, et information. Leurs obligations dépendent des statuts.",
  5: "Les sociétés sont soumises à l'IS (Impôt sur les Sociétés) à 25% ou à l'IR selon le statut choisi.",
  6: "Un contrat de travail doit contenir :\n- Identité des parties\n- Poste occupé\n- Rémunération\n- Durée du travail\n- Convention collective applicable\n- Période d'essai",
  7: "Les obligations RGPD incluent :\n1. Registre des traitements\n2. Consentement explicite\n3. Droit à l'oubli\n4. Notification des violations\n5. DPO si nécessaire",
  8: "Procédure recommandée :\n- Mise en demeure\n- Médiation\n- Arbitrage\n- Action en justice (Tribunal de commerce)",
  9: "Protégez vos créations via :\n- Brevets (inventions)\n- Droits d'auteur (œuvres)\n- Marques (signes distinctifs)\n- Dessins et modèles",
  10: "Options possibles :\n- TNS (Travailleur Non Salarié)\n- Assimilé salarié\n- Cumul salaire/dividendes\nCotisations sociales variables selon régime",
  11: "Obligations incluent :\n- Bilan annuel\n- Compte de résultat\n- Annexes comptables\n- Dépôt au greffe\n- Audit si dépassement seuils",
  12: "Étapes clés :\n- Approbation en AG\n- Pacte d'actionnaires\n- Déclaration au registre\n- Publication d'avis\n- Droits de préemption",
  13: "Structure type :\n1. Executive Summary\n2. Étude de marché\n3. Stratégie marketing\n4. Plan opérationnel\n5. Prévisions financières",
  14: "Conditions de validité :\n- Limitée dans le temps\n- Délimitée géographiquement\n- Spécifique à un secteur\n- Compensation financière",
  15: "Procédure :\n- Autorisation de travail\n- Contrat en français\n- Visa long séjour\n- Déclaration URSSAF\n- Respect convention collective",
  16: "Engagements :\n- Responsabilité pénale\n- Faute de gestion\n- Abus de biens sociaux\n- Obligation de vigilance\n- Assurance RC recommandée",
  17: "Création en 5 étapes :\n1. Rédaction statuts\n2. Dépôt capital social\n3. Publication JAL\n4. Immatriculation RCS\n5. Kbis électronique",
  18: "Conditions :\n- Accord mutuel\n- Indemnité légale\n- Délai de rétractation\n- Homologation DIRECCTE\n- Exonération chômage possible",
  19: "Fréquence :\n- Mensuelle (CA > 4M€)\n- Trimestrielle\n- Annuelle\nDéclaration via formulaire CA3",
  20: "Protections possibles :\n- Brevet (20 ans)\n- Certificat d'utilité (6 ans)\n- Secret industriel\n- Enveloppe Soleau",
  // Ajoute des réponses pour les autres questions en suivant ce modèle.
   
};

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: ${fadeIn} 0.3s ease;
`;
//cest bon
const ModalContent = styled.div`
  background: white;
  border-radius: 1px;
  width: min(90%, 700px);
  max-height: 80vh;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;
//bon
const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background: rgb(1, 14, 29);
  color: white;
  position: relative;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    flex-grow: 1;
    padding-right: 2rem;
  }

  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);

    &:hover {
      color: #4a90e2;
    }
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
  overflow-y: auto;
  max-height: 60vh;

  p {
    color: rgb(0, 2, 5);
    font-size: 1rem;
    line-height: 1.6;
    margin: 0;
    white-space: pre-wrap;
    
    /* Effet machine à écrire */
    overflow: hidden;
    border-right: 2px solid #00b4d8
    animation: 
      ${typing} 3.5s steps(40, end),
      ${blinkCaret} 0.75s step-end infinite;
  }
`;

// Modification du conteneur principal
const ProfessionalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 10, 19, 0.98);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: ${fadeIn} 0.3s ease;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      circle at 100% 10%,
      rgb(10, 100, 136) 10%,
      transparent 20%
    );
    pointer-events: none;
  }
`;
const QuestionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
  width: 100%;
  height: calc(100vh - 200px); // Hauteur fixe pour le scroll
  overflow-y: auto; // Activation du scroll
  box-sizing: border-box;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0.5rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    height: calc(100vh - 180px);
  }
`;
//ici qu'on gere l tille du contenire des questionnires
const EnhancedSidebar = styled.div`
  width: ${(props) => (props.isOpen ? "min(720px, 100%)" : "0")};
  height: 100vh;
  background: rgba(8, 17, 27, 0.97);
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 0.1);
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: ${(props) => (props.isOpen ? "100%" : "0")};
    z-index: 1000;
  }
`;

const FloatingToggle = styled.div`
  position: fixed;
  left: ${(props) => (props.isOpen ? "calc(40px + 1rem)" : "2.5rem")};
  top: 6rem;
  width: 50px;
  height: 45px;
  background: rgb(3, 28, 54);
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 1px rgb(0, 186, 243);
  transition: all 0.6s ease;
  z-index: 1001;

  &:hover {
    transform: scale(1.1);
  }

  svg {
    color: white;
    width: 1.4rem;
    height: 1.4rem;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    left: ${(props) => (props.isOpen ? "calc(100% - 60px)" : "1rem")};

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

const ChatHeader = styled.div`
  padding: 1rem;
  background: rgb(4, 22, 46)
  display: flex
  align-items: center
  gap: 1rem;
  border-bottom: 2px solid rgb(7, 169, 190);

  h2 {
    color: white;
    align-items: center;
    margin: 0.5rem;
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;

    h2 {
      font-size: 1rem;
    }
  }
`;
//c'est bon
const ClosedStateContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(1, 11, 14, 1) 0%,
    rgba(4, 22, 46, 0.95) 100%
  );
  position: relative;
  overflow: hidden;
  padding: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${images.photoAccueil}) center/cover no-repeat;
    opacity: 0.4;
    z-index: 0;
  }

  .welcome-message {
    position: relative;
    z-index: 1;
    max-width: 800px;
    padding: 2rem;
    background: rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transform: translateY(0);
    transition: all 0.4s cubic-bezier(0.1, 0, 0.2, 1);

    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      background: linear-gradient(45deg, white, #00b4d8);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: 700;
      letter-spacing: -0.5px;
      line-height: 1.2;
      animation: ${fadeIn} 0.6s ease-out;
    }

    p {
      font-size: 1rem;
      line-height: 1.8;
      color: white;
      margin: 1.5rem 0;
      position: relative;
      padding-left: 2rem;

      svg {
        transform: translateY(-50%);
        color: #00b4d8;

        filter: drop-shadow(0 2px 4px rgba(74, 144, 226, 0.3));
      }
    }
  }

  .cta-button {
    margin-top: 1.5rem;
    padding: 1rem 2.5rem;
    background: linear-gradient(45deg, gray);
    color: #00b4d8;
    border: none;
    border-radius: 1px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    box-shadow: 2px 6px 0px #00b4d8;

    &:hover {
      transform: translateY(-2px);
      box-shadow: -1px 1px 1px 3px rgba(2, 11, 22, 0.97);

    }

    svg {
    
      width: 1.4rem;
      height: 1.4rem;
      animation: float 3s ease-in-out infinite;
    }
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    .welcome-message {
      padding: 2rem;
      margin: 1rem;

      h1 {
        font-size: 2rem;
      }

      p {
      
        font-size: 1rem;
        padding-left: 1.5rem;

        svg {
          width: 1.5rem;
          height: 1.5rem;
        }
      }
    }

    .cta-button {
      padding: 0.8rem 2rem;
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .welcome-message {
      padding: 1.5rem;

      h1 {
        font-size: 1.8rem;
      }

      p {
        font-size: 0.95rem;
      }
    }

    .cta-button {
      width: 100%;
      justify-content: center;
    }
  }
`;

const EnhancedSearch = styled.div`
  position: relative;
  margin: 2rem auto;
  width: 90%;
  max-width: 800px;

  input {
    width: 100%;
    padding: 1.2rem 1.5rem 1.2rem 4rem;
    border: none;
    border-radius: 1px;
    background: rgb(1, 103, 121);
    color: rgb(0, 0, 0);
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);

    &::placeholder {
      color: rgb(2, 10, 22);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.3);
    }
  }

  svg {
    position: absolute;
    left: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgb(3, 184, 255);
    width: 1.5rem;
    height: 1.5rem;
  }
`;
// Nouveau composant pour le message d'absence de résultats
const NoResultsMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  background: #;
  border-radius: 1px;
  border: 1px solid rgba(255, 255, 255, 0.01);

  p {
    color: #ff6b6b;
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }

  span {
    color: #4a90e2;
    font-style: italic;
  }
`;
//cest bon
const QuestionCard = styled.div`
  background: linear-gradient(
    145deg rgba(26, 38, 52, 0.95),
    rgba(16, 28, 42, 0.95)
  );
  border-radius: 1px;
  padding: 1.5rem;
  transition: all 0.2s ease;
  border: 1px solid rgba(74, 144, 226, 0.05);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  min-height: 180px;
  position: relative;
  overflow: visible;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 4px rgba(2, 170, 236, 0.78);
  }

  h3 {
    font-size: 1rem;
    color: white;
    margin: 0;
    line-height: 1.4;
    font-weight: 500;
    flex-grow: 1;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .category {
    font-size: 0.85rem;
    font-weight: 600;
    color: ${(props) =>
      props.category === "juridique" ? "#90e0ef" : "#00b4d8"};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${(props) =>
      props.category === "juridique" ? "#90e0ef" : "#00b4d8"};
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    min-height: auto;
    padding: 1.8rem;
    gap: 0.5rem;

    h3 {
      font-size: 0.95rem;
      -webkit-line-clamp: 2;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
  width: 100%;
  padding: 0.6rem;
`;
const Assistant = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const [displayText, setDisplayText] = useState("");

  // Ajoutez cet useEffect pour gérer l'animation
  useEffect(() => {
    if (selectedQuestion && showResponse) {
      const answer = answers[selectedQuestion.id] || "";
      let currentText = "";
      let i = 0;

      const typingInterval = setInterval(() => {
        currentText = answer.substring(0, i);
        setDisplayText(currentText);
        i++;

        if (i > answer.length) {
          clearInterval(typingInterval);
        }
      }, 30); // Ajustez la vitesse de frappe ici

      return () => clearInterval(typingInterval);
    }
  }, [selectedQuestion, showResponse]);

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    setShowResponse(true);
    setDisplayText(""); // Réinitialiser le texte à chaque nouvelle question
  };

  const filteredQuestions = questions.filter((q) =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCloseModal = () => {
    setShowResponse(false);
    setDisplayText(""); // Réinitialiser le texte à la fermeture
  };

  return (
    <ProfessionalContainer>
      <Helmet>
        <title>Assistance AOD-Avocats</title>
        <meta name="description" content="Posez votre question" />
        <meta
          name="keywords"
          content="juridique, entreprise, droit,assistance, comptabilité"
        />
        <meta name="TIPTAMCode" content="TIPTAMCode" />
      </Helmet>
      <BardeNavigationpublic />
      <FloatingToggle
        isOpen={isSidebarOpen}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <Scale /> : <HandshakeIcon />}
      </FloatingToggle>

      <EnhancedSidebar className=" mt-12" isOpen={isSidebarOpen}>
        <ChatHeader>
          <h2></h2>
        </ChatHeader>

        <ContentWrapper>
          {" "}
          {/* Nouveau wrapper ajouté */}
          <EnhancedSearch>
            <Search />
            <input
              type="text"
              placeholder="Rechercher une question..."
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </EnhancedSearch>
          <QuestionsContainer>
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((q) => (
                <QuestionCard
                  key={q.id}
                  onClick={() => handleQuestionClick(q)}
                  category={q.category}
                >
                  <div>
                    {q.category === "juridique" ? <Scale /> : <Building2 />}
                  </div>
                  <h3>{q.question}</h3>
                  <p className="category">{q.category.toUpperCase()}</p>
                </QuestionCard>
              ))
            ) : (
              <NoResultsMessage>
                <p>Désolé, nous n`avons pas de réponse pour cette recherche.</p>
                <span>
                  Veuillez essayer avec d`autres termes ou choisir une question
                  dans notre liste.
                </span>
              </NoResultsMessage>
            )}
          </QuestionsContainer>
        </ContentWrapper>
      </EnhancedSidebar>
      {!isSidebarOpen && (
        <ClosedStateContent>
          <div className="welcome-message">
            <h1>Expertise Juridique sur Mesure</h1>
            <hr/>  <p>
              Vous avez des questions ? <br/> Accédez à notre intelligence juridique en un clic
            </p>
            <button
              className="cta-button"
              onClick={() => setIsSidebarOpen(true)}
            >
              <HandshakeIcon />
              Ouvrir l`Assistant
            </button>
          </div>
        </ClosedStateContent>
      )}

      {showResponse && (
   <ModalOverlay onClick={handleCloseModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <h3>{selectedQuestion?.question}</h3>
          <button onClick={handleCloseModal}>
            <X size={20} />
          </button>
        </ModalHeader>
        <ModalBody>
          <p>{displayText}</p>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
      )}
    </ProfessionalContainer>
  );
};

export default Assistant;
