import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { GiBeveledStar } from "react-icons/gi";
import { Button } from "react-bootstrap";

// Messages pour le typewriter
const typewriterMessages = [
  "Bienvenue dans votre espace!",
  "Nous créons des solutions innovantes.",
  "Pour vous aidez dans la gestion de votre cabinet...",
  "Nous vous proposons une sécurité maximale pour vos données...",
  "Une bonne gestion du temps...",
  "Diminution de l'utilisation des paperasses...",
  "Diminution du stress...",
  "Accessibilité des données dans le temps",
  "Un espace de communication...",
  "Un espace de partage de fichiers",
  "L'analyse des données pour vous aider dans la prise de décisions",
  "Une meilleure expérience client ou utilisateur.",
  "Contactez-nous pour en savoir plus.",
];

// Tableau des couleurs pour chaque ligne de texte
const textColors = [
  "text-red-500",
  "text-green-950",
  "text-blue-950",
  "text-yellow-950",
  "text-pink-950",
  "text-purple-950",
  "text-orange-500",
  "text-teal-900",
  "text-indigo-9000",
  "text-cyan-900",
  "text-lime-900",
  "text-amber-900",
  "text-orange-900",
];

export default function MachineaecrirepourAvoc() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Hook useEffect pour mettre à jour la couleur du texte chaque fois que le texte change
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentColorIndex(
        (prevIndex) => (prevIndex + 1) % typewriterMessages.length
      );
    }, 5000); // Change la couleur toutes les 5 secondes ou selon la durée souhaitée

    return () => clearInterval(intervalId); // Nettoie l'intervalle lors du démontage
  }, []);

  return (
    <div className="min-h-screen  flex items-center justify-center text-black p-1">
      <div className="flex flex-col bg-gradient-to-t from-green-100 md:flex-row items-center rounded-lg shadow-lg p-1">
        {/* Image à gauche */}

        {/* Conteneur de la machine à écrire */}
        <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-0">
          <GiBeveledStar
            size={40}
            className="mb-4 md:mb-4 bg-gradient-to-tr from-green-200 rounded-full animate-pulse"
          />
          <h1
            className={`text-3xl font-extrabold bg-gradient-to-tr from-green-300 rounded-3xl  font-serif ${textColors[currentColorIndex]}`}
          >
            <Typewriter
              words={typewriterMessages}
              loop={20} // Nombre de répétitions du texte.
              cursor
              cursorStyle="|"
              typeSpeed={70} // Vitesse de frappe.
              deleteSpeed={50} // Vitesse de suppression.
              delaySpeed={1000} // Délai avant de commencer à supprimer le texte.
            />
          </h1>
          <p className="text-sm  font-extrabold text-black md:mt-2">
            Appuyez sur un bouton ci-dessous pour explorer davantage.
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="/codeVerific"
              className="text-2xl font-serif font-bold animate-gradient-x"
            >
              <Button className="mt-4 button-shine bg-gradient-to-tr to-blue-900 from-lime-900 hover:bg-green-400 text-white font-serif font-bold py-2 px-4 rounded">
                Avocat
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
