import { useEffect, useState } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiOutlineBook,
} from "react-icons/ai";
import { FaGavel } from "react-icons/fa";

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: linear-gradient(to right, #f8fafc, #f8fafc);
`;

const FormWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  background: #ffffff;
  box-shadow: 2px 6px 0px rgba(0, 180, 216, 1);
  border-radius: 1px;
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(10, 34, 64, 0.9);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(10, 34, 64, 0.9);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${(props) => (props.error ? "#f56565" : "#cbd5e0")};
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.3);
  }
`;

const Select = styled(Form.Select)`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${(props) => (props.error ? "#f56565" : "#cbd5e0")};
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #3182ce;
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.3);
  }
`;

const ErrorMessage = styled.p`
  font-size: 0.875rem;
  color: #f56565;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  width: 50%;

  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: rgba(10, 34, 64, 1);
  border: none;
  border-radius: 2px;
  box-shadow: 0px 4px 1px rgba(0, 180, 216, 1);
  transition: background-color 0.3s ease, transform 0.2s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#03045e" : "#023e8a")};
    transform: ${(props) => (props.disabled ? "none" : "scale(1.05)")};
    box-shadow: ${(props) => (props.disabled ? "none" : "0px 2px 0px #00b4d8")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }

  &:active {
    transform: ${(props) => (props.disabled ? "none" : "scale(0.98)")};
    background-color: ${(props) => (props.disabled ? "#a0aec0" : "#065a8e")};
  }

  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export default function MiseajourAjoutclientRecup() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    adresse: "",
    numero: "",
    naturedaffaire: "",
    avocat: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {//recupere
    axios
      .get(`https://avocatdusiteback.onrender.com/recupparidclient/${id}`)
      .then((result) => {
        const { name, adresse, numero, naturedaffaire, avocat } = result.data;
        setFormData({
          name,
          adresse,
          numero,
          naturedaffaire,
          avocat,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const sanitizeInput = (input) => input.replace(/[<>"';%()&+{}//*[\]]/g, "");

  const validateForm = () => {
    const newErrors = {};
    const { name, adresse, numero, naturedaffaire, avocat } = formData;

    if (!name.trim()) newErrors.name = "Nom et prénom obligatoire.";
    else if (name.length > 30)
      newErrors.name = "Maximum 30 caractères autorisés.";

    if (!adresse.trim()) newErrors.adresse = "Adresse obligatoire.";
    else if (adresse.length > 30)
      newErrors.adresse = "Maximum 30 caractères autorisés.";

    if (!numero.trim()) newErrors.numero = "Numéro de téléphone obligatoire.";
    else if (!/^[0-9]{8,15}$/.test(numero))
      newErrors.numero = "Numéro invalide (8 à 15 chiffres).";

    if (!naturedaffaire)
      newErrors.naturedaffaire = "La nature de l'affaire est obligatoire.";

    if (!avocat) newErrors.avocat = "L'avocat est obligatoire.";

    return newErrors;
  };

  const MiseAjour = (e) => {
    e.preventDefault();
    const sanitizedData = {
      name: sanitizeInput(formData.name),
      adresse: sanitizeInput(formData.adresse),
      numero: sanitizeInput(formData.numero),
      naturedaffaire: formData.naturedaffaire,
      avocat: formData.avocat,
    };

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    axios
      //  .put(`http://localhost:2025/Metajourlerecuperer/${id}`, sanitizedData)//local
      .put(
        `https://avocatdusiteback.onrender.com/Metajourlerecuperer/${id}`,
        sanitizedData
      )
      .then(() => navigate("/listeCl"))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Container data-aos="fade-down">
        <FormWrapper>
          <Header>
            <Title>Mettre à jour le client</Title>
            {/*<img
            src="/img/aodblanc.avif"
            alt="Cabinet"
            style={{ width: "48px", height: "48px" }}
          />*/}
          </Header>
          <StyledForm onSubmit={MiseAjour}>
            <div>
              <Label htmlFor="name">
                <AiOutlineUser
                  className="inline mr-2 text-blue-900"
                  size={20}
                />{" "}
                Nom et prénom
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="Ex: alpha diallo"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                error={errors.name}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </div>

            <div>
              <Label htmlFor="adresse">
                <AiOutlineEnvironment
                  className="inline text-red-600 mr-2"
                  size={20}
                />{" "}
                Adresse
              </Label>
              <Input
                type="text"
                id="adresse"
                placeholder="Ex: 123 rue Exemple, Paris"
                value={formData.adresse}
                onChange={(e) =>
                  setFormData({ ...formData, adresse: e.target.value })
                }
                error={errors.adresse}
              />
              {errors.adresse && <ErrorMessage>{errors.adresse}</ErrorMessage>}
            </div>

            <div>
              <Label htmlFor="numero">
                <AiOutlinePhone
                  className="inline mr-2 text-yellow-900"
                  size={20}
                />{" "}
                Téléphone
              </Label>
              <Input
                type="tel"
                id="numero"
                placeholder="Ex: 0612345678"
                value={formData.numero}
                onChange={(e) =>
                  setFormData({ ...formData, numero: e.target.value })
                }
                error={errors.numero}
              />
              {errors.numero && <ErrorMessage>{errors.numero}</ErrorMessage>}
            </div>

            <div>
              <Label htmlFor="avocat">
                <FaGavel className="inline mr-2 text-blue-950" size={20} />{" "}
                Avocat
              </Label>
              <Select
                id="avocat"
                value={formData.avocat}
                onChange={(e) =>
                  setFormData({ ...formData, avocat: e.target.value })
                }
                error={errors.avocat}
              >
                <option value="" disabled>
                  Choisissez un avocat...
                </option>
                <option value="Maitre Amadou Oury">Maitre Amadou Oury</option>
                <option value="Maitre Bangoura">Maitre Bangoura</option>
                <option value="Maitre Keita">Maitre Keita</option>
              </Select>
              {errors.avocat && <ErrorMessage>{errors.avocat}</ErrorMessage>}
            </div>

            <div>
              <Label htmlFor="naturedaffaire">
                <AiOutlineBook
                  className="inline mr-2 text-green-900"
                  size={20}
                />{" "}
                Nature d`affaire
              </Label>
              <Select
                id="naturedaffaire"
                value={formData.naturedaffaire}
                onChange={(e) =>
                  setFormData({ ...formData, naturedaffaire: e.target.value })
                }
                error={errors.naturedaffaire}
              >
                <option value="" disabled>
                  Sélectionnez une nature...
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
              </Select>
              {errors.naturedaffaire && (
                <ErrorMessage>{errors.naturedaffaire}</ErrorMessage>
              )}
            </div>

            <SubmitButton type="submit">Mettre à jour</SubmitButton>
          </StyledForm>
        </FormWrapper>
      </Container>
    </div>
  );
}
