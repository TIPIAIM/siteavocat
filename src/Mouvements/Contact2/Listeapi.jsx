import { useEffect, useState } from "react";

// Définition du composant `ElementList`
function ElementList() {
  // Déclaration des états : 
  // `elements` pour stocker les données récupérées depuis l'API
  // `isLoading` pour gérer l'état de chargement (true ou false)
  // `error` pour gérer les erreurs éventuelles lors de la requête
  const [elements, setElements] = useState([]);  
  const [isLoading, setIsLoading] = useState(true);  
  const [error, setError] = useState(null);

  // Utilisation de `useEffect` pour fetcher les données lorsque le composant est monté
  useEffect(() => {
    async function fetchData() {
      try {
        // Requête API
        const response = await fetch(
          "https://avocatdusiteback.onrender.com/listecontact"
        );
        if (!response.ok) {
          // Si la réponse n'est pas OK, on lance une erreur
          throw new Error("Erreur lors de la récupération des données car le  serveur est inaccessible.");
        }
        const data = await response.json();  // On récupère les données en JSON
        setElements(data);  // Mise à jour de l'état `elements`
      } catch (error) {
        setError(error.message);  // Capture des erreurs et mise à jour de `error`
      } finally {
        setIsLoading(false);  // Indique la fin du chargement
      }
    }
    fetchData();  // Appel de la fonction `fetchData`
  }, []);

  // Retour du composant JSX
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Liste des Éléments
      </h1>

      {/* Gestion de l'affichage en fonction de l'état */}
      {isLoading ? (
        <p className="text-center text-blue-500 text-lg animate-pulse">
          Chargement en cours...
        </p>
      ) : error ? (
        <p className="text-center text-red-500 text-lg">{error}</p>
      ) : elements.length > 0 ? (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Affichage des éléments sous forme de liste */}
          {elements.map((element, index) => (
            <li
              key={index}  // Utilisation de l'index à la place de l'id
              className="p-4 bg-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition duration-300 overflow-hidden"
            >
              <div className="mb-2">
                <strong className="text-teal-600">Nom:</strong>{" "}
                <span className="text-gray-700 truncate">{element.nom}</span>  {/* Affichage du nom */}
              </div>
              <div className="mb-2">
                <strong className="text-teal-600">Message:</strong>{" "}
                <span className="text-gray-700 truncate">{element.message}</span>  {/* Affichage du message */}
              </div>
              <div>
                <strong className="text-teal-600">Email:</strong>{" "}
                <span className="text-gray-700 truncate">{element.email}</span>  {/* Affichage de l'email */}
              </div>
              <div>
                <strong className="text-teal-600">Date:</strong>{" "}
                <span className="text-gray-700 truncate">{element.dateajout}</span>  {/* Affichage de l'email */}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500 text-lg">
          Aucun élément à afficher.
        </p>
      )}
    </div>
  );
}

export default ElementList;
