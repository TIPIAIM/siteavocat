import { useState, useEffect, lazy } from "react";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import styled from "styled-components"; 
import { images } from '../../../assets/images'// Import des images depuis le fichier images.js
const Footer = lazy(() => import("../../Accueil/Footerr"));

import {
  FaUser,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaPhoneAlt,
  FaBriefcase,
  FaGavel,
} from "react-icons/fa";
import { CloseButton } from "react-bootstrap";

const StyledLabelWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;

  font-size: 0.8rem;
  font-weight: 600;
  color: #ffffff;

  svg {
    color: #00b4d8;
  }
`;

//Les caractères à protéger sont inclus dans les crochets []de la regex Les caractères spéciaux comme [et ]sont échappés avec un antislash \.
const sanitizeInput = (input) => {
  return input.replace(/[<>"'%;()&+{}//*[\]]/g, "");
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  min-height: 100vh;
  background-color: rgba(228, 234, 240, 0);
  padding: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: block;
  max-width: 100%;
  align-self: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-right: 1px;
    max-width: 100%; /* Empêche l'image de dépasser son conteneur */
    max-height: 797px; /* Définit une hauteur maximale */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #0a223f, #112d54);
  padding: 1rem;
  border-radius: 1px;
  box-shadow: 3px 3px 0px rgba(0, 180, 216, 1);
  width: 90%;
  max-width: 600px;
  margin: auto;
  min-height: 80vh;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

const FormTitle = styled.h2`
  color: #a9fafb;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  margin-top: 0.2rem;
  text-align: center;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 0.6rem;
  background: linear-gradient(90deg, #1e3a8a, #2563eb);
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: none;
  border-radius: 1px; /* Courbure plus douce */
  cursor: pointer;
  transition: all 0.4s ease;
  margin-bottom: 2rem;
   margin-top: 1rem;
  &:hover {
    background: linear-gradient(90deg, #2563eb, #1d4ed8);
    transform: scale(1.05) translateY(-2px);
    box-shadow: 3px 3px 2px rgba(144, 224, 239, 1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.6),
      0 10px 20px rgba(37, 99, 235, 0.3);
  }

  &:active {
    transform: scale(0.97) translateY(2px);
    background: linear-gradient(90deg, #1d4ed8, #1e3a8a);
    box-shadow: 0 5px 10px rgba(37, 99, 235, 0.2);
  }

  &:disabled {
    background: #9ca3af;
    cursor: not-allowed;
    opacity: 0.7;
    transform: none;
    box-shadow: none;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 1px solid #d1d5db;
  border-radius: 2px;
  font-size: 1rem;
  color: #374151;
  background-color: #f9fafb;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.4);
    background-color: #ffffff;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 2px;
  font-size: 1rem;
  color: #374151;
  background-color: #f9fafb;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.4);
    background-color: #ffffff;
  }
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
`;

const ErrorMessage = styled.div`
  color: #a9fafb;
  font-size: 0.85rem;
  margin-top: -0.5rem;
  margin-bottom: 0.6rem;
`;
const BackLink = styled(Link)`
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 0.6rem;
  font-weight: bold;
  color: #ffffff;
  margin-top: 2rem;
  margin-left: 2rem;
  background-color: #023e8a;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0px 1px 1px rgba(243, 5, 37, 0.6);
  transition: all 0.3s ease;

  &:hover {
    background-color: #00b4d8;
    color: #caf0f8;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

export default function AjouterClient() {
  const aodb = import.meta.env.VITE_b; //e-
  //const aodbs = import.meta.env.VITE_bs; //e-

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    adresse: "",
    dateajout: "",
    numero: "",
    naturedaffaire: "",
    avocat: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Nom et prénom obligatoire.";
    else if (formData.name.length > 30)
      newErrors.name = "Maximum 30 caractères.";

    if (!formData.adresse.trim()) newErrors.adresse = "Adresse obligatoire.";
    else if (formData.adresse.length > 30)
      newErrors.adresse = "Maximum 30 caractères.";

    if (!formData.dateajout) newErrors.dateajout = "Date d'ajout obligatoire.";

    if (!formData.numero.trim())
      newErrors.numero = "Numéro de téléphone obligatoire.";
    else if (!/^[0-9]{8,15}$/.test(formData.numero))
      newErrors.numero = "Veuillez entrer un numéro valide (8 à 15 chiffres).";

    if (!formData.naturedaffaire)
      newErrors.naturedaffaire = "Nature d'affaire obligatoire.";

    if (!formData.avocat) newErrors.avocat = "L'avocat est obligatoire.";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: sanitizeInput(value),
    });

    // Supprime l'erreur associée au champ modifié
    if (errors[name]) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        delete updatedErrors[name];
        return updatedErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});

      axios
        .post(`${aodb}/FClient`, formData) //cal
        // .post(`${aodbs}/FClient`, formData) //orduc
        //.post("https://avocatdusiteback.onrender.com/FClient", formData)//en ligne

        .then((response) => {
          console.log("Données enregistrées :", response.data);
          navigate("/listeCl");
        })
        .catch((err) => {
          console.error("Erreur lors de l'envoi :", err);
        });
    }
  };

  return (
    <div className=" bg-black/5 ">
      <BackLink to="/gestclient">
        <CloseButton />
      </BackLink>
      <Container >
        <ImageWrapper data-aos="fade-up">
          <img src={images.MOE_0311} alt="Illustration" />
        </ImageWrapper>

        <FormWrapper data-aos="fade-down">
          <FormTitle>Information Client</FormTitle>
          <form onSubmit={handleSubmit}>
            {/* Nom et Prénom */}
            <StyledLabelWithIcon>
              <FaUser />
              <StyledLabel htmlFor="name">Nom et Prénom</StyledLabel>
            </StyledLabelWithIcon>
            <StyledInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}

            {/* Adresse */}
            <StyledLabelWithIcon>
              <FaMapMarkerAlt />
              <StyledLabel htmlFor="adresse">Adresse complète</StyledLabel>
            </StyledLabelWithIcon>
            <StyledInput
              type="text"
              name="adresse"
              value={formData.adresse}
              onChange={handleChange}
            />
            {errors.adresse && <ErrorMessage>{errors.adresse}</ErrorMessage>}

            {/* Date d'ajout */}
            <StyledLabelWithIcon>
              <FaCalendarAlt />
              <StyledLabel htmlFor="dateajout">Date d`ajout</StyledLabel>
            </StyledLabelWithIcon>
            <StyledInput
              type="datetime-local"
              name="dateajout"
              value={formData.dateajout}
              onChange={handleChange}
            />
            {errors.dateajout && (
              <ErrorMessage>{errors.dateajout}</ErrorMessage>
            )}

            {/* Téléphone */}
            <StyledLabelWithIcon>
              <FaPhoneAlt />
              <StyledLabel htmlFor="numero">Téléphone</StyledLabel>
            </StyledLabelWithIcon>
            <StyledInput
              type="text"
              name="numero"
              value={formData.numero}
              onChange={handleChange}
            />
            {errors.numero && <ErrorMessage>{errors.numero}</ErrorMessage>}

            {/* Nature d'affaire */}
            <StyledLabelWithIcon>
              <FaBriefcase />
              <StyledLabel htmlFor="naturedaffaire">
                Nature d`affaire
              </StyledLabel>
            </StyledLabelWithIcon>
            <StyledSelect
              name="naturedaffaire"
              value={formData.naturedaffaire}
              onChange={handleChange}
            >
              <option value="" disabled>
                Choisissez une nature d`affaire...
              </option>
              <option value="Droit Minier et de l’Environnement">
                Droit Minier et de l’Environnement
              </option>
              <option value="Droit Sociale et Sécurité Sociale">
                Droit Sociale et Sécurité Sociale
              </option>
              <option value="Droit des Affaires">Droit des Affaires</option>
              <option value="Droit du Sport">Droit du Sport</option>
              <option value="Défense Pénale">Défense Pénale</option>
              <option value="Arbitrage">Arbitrage</option>
              <option value="Correctionnelle">Correctionnelle</option>
              <option value="Civile">Civile</option>
              <option value="Commerciale">Commerciale</option>
              <option value="Autres">Autres</option>
            </StyledSelect>
            {errors.naturedaffaire && (
              <ErrorMessage>{errors.naturedaffaire}</ErrorMessage>
            )}

            {/* Avocat */}
            <StyledLabelWithIcon>
              <FaGavel />
              <StyledLabel htmlFor="avocat">Avocat en charge</StyledLabel>
            </StyledLabelWithIcon>
            <StyledSelect
              name="avocat"
              value={formData.avocat}
              onChange={handleChange}
            >
              <option value="" disabled>
                Choisissez un avocat...
              </option>
              <option value="Maitre Amadou Oury">Maitre Amadou Oury</option>
              <option value="Maitre Bangoura">Maitre Bangoura</option>
              <option value="Maitre Keita">Maitre Keita</option>
            </StyledSelect>
            {errors.avocat && <ErrorMessage>{errors.avocat}</ErrorMessage>}

            <StyledButton type="submit">Valider</StyledButton>
          </form>
        </FormWrapper>
      </Container>
      <div data-aos="fade-up" className="mt-40">
        <Footer />
      </div>
    </div>
  );
}
