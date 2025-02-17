import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FcAdvance } from "react-icons/fc";

export default function Contact2() {
  const [values, setValues] = useState({
    nom: "",
    email: "",
    message: "",
    dateajout: "", // Initialisé à vide
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Fonction pour récupérer la date actuelle au format "YYYY-MM-DD"
  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString("fr-FR").replace(/\//g, "-");
  };

  // Initialiser la date d'ajout lorsque le composant est monté
  useEffect(() => {
    setValues((prevValues) => ({
      ...prevValues,
      dateajout: getCurrentDate(),
    }));
  }, []);

  const sanitizeInput = (input) => {
    let sanitized = input.replace(/<[^>]*>?/gm, "");
    sanitized = sanitized.replace(/["'`;|\\]/g, "");
    sanitized = sanitized.replace(/\s+/g, " ");
    return sanitized;
  };

  const validateFields = () => {
    const newErrors = {};

    if (!values.nom.trim()) {
      newErrors.nom = "Le nom est obligatoire.";
    }
   //  else if (values.nom.length > 30) {  newErrors.nom = "Le nom ne doit pas dépasser 30 caractères.";  }

    if (!values.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {      newErrors.email = "Veuillez entrer un email valide.";   }

    if (!values.message.trim()) {
      newErrors.message = "Le message est requis.";
    }
    // else if (values.message.length > 300) {      newErrors.message = "Le message ne doit pas dépasser 400 caractères.";    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    const sanitizedValues = {
      nom: sanitizeInput(values.nom),
      email: sanitizeInput(values.email),
      message: sanitizeInput(values.message),
      dateajout: sanitizeInput(values.dateajout),
    };

    try {
      const result = await axios.post(
        //`${VITE_APIserveur}/contactenvoye`,
        "http://localhost:2025/contactenvoye",
        //"https://avocatdusiteback.onrender.com/contactenvoye",

        sanitizedValues,
        { timeout: 5000 }
      );
      console.log(result);
      navigate("/listec");
    } catch (err) {
      console.error("Erreur lors de l'envoi :", err);
      alert(
        "Une erreur est survenue.Le nom doit etre superieur a 5 lettres et le message 10."
      );
    }
  };

  return (
    <div className="relative min-h-screen bg-gray-900">
      
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="bg-gradient-to-br from-gray-200 p-4 rounded shadow-md">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <input
                type="text"
                id="dateajout"
                className="bg-red-50 text-sm text-center font-semibold text-blue-800 mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                value={values.dateajout}
                readOnly
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="nom"
                className="bg-red-50 text-sm text-center font-semibold text-blue-800 mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                required
                placeholder="Nom"
                maxLength={30}
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
              className="bg-gray-900 font-serif font-bold text-white py-2 px-4 rounded-md hover:bg-blue-900 focus:outline-none focus:ring focus:border-blue-500"
            >
              <FcAdvance />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
