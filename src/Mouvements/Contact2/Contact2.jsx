import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FcAdvance } from "react-icons/fc";
export default function Contact2() {
  const [values, setValues] = useState({
    nom: "",
    email: "",
    message: "",
  });
  //const VITE_APIserveur = import.meta.env.NEXT_PUBLIC_API_URL;
  const [errors, setErrors] = useState({}); // État pour stocker les erreurs de validation
  const navigate = useNavigate();
  // Fonction améliorée pour nettoyer les entrées utilisateur
  const sanitizeInput = (input) => {
    // Remplace les balises HTML
    let sanitized = input.replace(/<[^>]*>?/gm, "");
    // Supprime les caractères potentiellement dangereux
    sanitized = sanitized.replace(/["'`;|\\]/g, "");
    // Limite les espaces multiples à un seul
    sanitized = sanitized.replace(/\s+/g, " ");
    return sanitized;
  };
  // Validation des champs avant l'envoi
  const validateFields = () => {
    const newErrors = {};

    if (!values.nom.trim()) {
      newErrors.nom = "Le nom est obligatoire.";
    } else if (values.nom.length > 30) {
      newErrors.nom = "Le nom ne doit pas dépasser 50 caractères.";
    }

    if (!values.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
      newErrors.email = "Veuillez entrer un email valide.";
    }

    if (!values.message.trim()) {
      newErrors.message = "Le message est requis.";
    } else if (values.message.length > 300) {
      newErrors.message = "Le message ne doit pas dépasser 500 caractères.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return; // Si la validation échoue, arrête l'exécution

    const sanitizedValues = {
      nom: sanitizeInput(values.nom),
      email: sanitizeInput(values.email),
      message: sanitizeInput(values.message),
    };

    try {
      const result = await axios.post(
        //`${VITE_APIserveur}/contactenvoye`,
        //"http://localhost:2025/contactenvoye",
        "https://avocatdusiteback.onrender.com/contactenvoye",
        sanitizedValues,
        { timeout: 5000 } // Timeout pour éviter les requêtes bloquées
      );
      console.log(result);
      navigate("/listec");
    } catch (err) {
      console.error("Erreur lors de l'envoi :", err);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900">
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-200 p-4 rounded shadow-md"
        >
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <input
                type="text"
                id="nom"
                className="bg-red-50 text-sm text-center font-semibold text-blue-800 mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                required
                placeholder="Nom"
                maxLength={50}
                value={values.nom}
                onChange={(e) =>
                  setValues({ ...values, nom: sanitizeInput(e.target.value) })
                }
              />
              {errors.nom && (
                <p className="text-red-600 text-sm">{errors.nom}</p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                className="bg-red-50 text-sm text-center font-semibold text-blue-800 mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                required
                placeholder="Email"
                maxLength={100}
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: sanitizeInput(e.target.value) })
                }
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                required
                placeholder="Message"
                rows="4"
                maxLength={300}
                className="text-sm font-semibold bg-yellow-50 text-gray-600 mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                value={values.message}
                onChange={(e) =>
                  setValues({
                    ...values,
                    message: sanitizeInput(e.target.value),
                  })
                }
              />
              {errors.message && (
                <p className="text-red-600 text-sm">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              className="bg-gray-900 font-serif font-bold text-white py-2 px-4 rounded-md animate-pulse hover:bg-blue-900 focus:outline-none focus:ring focus:border-blue-500"
            >
              <FcAdvance />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
