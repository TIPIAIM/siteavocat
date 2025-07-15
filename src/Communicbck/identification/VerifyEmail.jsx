import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { images } from "../../assets/images";

const colors = {
  blueMarine: "#002B5B",
  greenDark: "#1A4D2E",
  goldenYellow: "#F2C94C",
  white: "#FFFFFF",
};

const Background = styled.div`
  background: url(${images.logoAODnoir}) no-repeat center center fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      rgba(0, 43, 91, 0.8),
      rgba(26, 77, 46, 0.8)
    );
    z-index: 1;
  }
`;

const Overlay = styled(motion.div)`
  position: relative;
  z-index: 2;
  backdrop-filter: blur(15px);
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 400px;
  width: 90%;
  color: ${colors.white};
  text-align: center;

  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h2`
  color: ${colors.goldenYellow};
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;
const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${colors.goldenYellow};
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: ${colors.white};
  }
`;
const Text = styled.p`
  color: ${colors.white};
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
`;

const Input = styled.input`
  padding: 0.9rem 1rem;
  width: 100%;
  margin-bottom: 1.2rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${colors.white};
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Button = styled(motion.button)`
  background-color: ${colors.goldenYellow};
  color: ${colors.greenDark};
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 0.5rem;
  width: 100%;
  transition: 0.3s;

  &:hover {
    background-color: ${colors.greenDark};
    color: ${colors.goldenYellow};
  }
`;

const Message = styled(motion.p)`
  margin-top: 1.2rem;
  color: ${colors.white};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.95rem;
`;

const VerifyEmail = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_b}/api/auth/verify-email`,
        { verificationCode },
        { withCredentials: true }
      );

      if (response.data.success) {
        setMessage("✅ Email vérifié avec succès.");
        setTimeout(() => navigate("/seconnecter"), 2000);
      } else {
        setMessage(response.data.message || "Code de vérification invalide.");
      }
    } catch (error) {
      setMessage(
        "Code expiré ou mauvais code utiliser . Veuillez vous réinscrire avec le meme mail après 15 min ou vous reinscrire avec un nouveau mail si vous ne voulez pas patienter."
      );
    }
  };

  return (
    <Background>
      <Overlay
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <BackButton to="/register">
          <FaArrowLeft />
        </BackButton>
        <Title>🔐 Vérification de l'email</Title>
        <Text>
          Un code vous a été envoyé par email. Entrez-le ci-dessous pour activer
          votre compte de manière sécurisée.
        </Text>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Code de vérification"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            required
          />
          <Button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Vérifier
          </Button>
        </form>
        {message && (
          <Message initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <FiCheckCircle /> {message}
          </Message>
        )}
      </Overlay>
    </Background>
  );
};

export default VerifyEmail;
