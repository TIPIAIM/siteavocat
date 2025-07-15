import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiCheckCircle, FiAlertCircle, FiArrowLeft } from "react-icons/fi";
import { login, loginAfter2FA } from "./authService";
import { colors } from "../../Styles/colors";
import { images } from "../../assets/images"; // images.aodblanc doit contenir ton logo blanc

// --- Fond flou & overlay ---
const Background = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
  overflow: hidden;
  background: ${colors.bgDark};
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url('img/logoAODnoir.avif') center/cover no-repeat;
    filter: blur(7px) brightness(0.95);
    opacity: 0.9;
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, ${colors.bgDark}C9 45%, ${colors.bgSecondary}D7 100%);
    opacity: 0.95;
    z-index: 2;
  }
`;

// --- Centrage du formulaire ---
const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

const Card = styled(motion.div)`
  background: ${colors.white};
  padding: 1rem 2.2rem 2.1rem 2.2rem;
  border-radius: 5px;
  box-shadow: 0 8px 48px 8px #102a4322;
  width: 100%;
  max-width: 400px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 72px;
  height: 72px;
  object-fit: contain;
  margin-bottom: 0rem;
  filter: drop-shadow(0 2px 10px #102a4333);
`;

const Title = styled.h2`
  color: ${colors.bgDark};
  font-size: 1.42rem;
  margin-bottom: 2.15rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: 0.01em;
`;

// --- Inputs Material Design ---
const MaterialField = styled.div`
  position: relative;
  margin-bottom: 4px;
  width: 100%;
`;

const MaterialIcon = styled.div`
  position: absolute;
  left: 10px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  color: ${colors.bgSecondary};
  opacity: 0.92;
  font-size: 20px;
  pointer-events: none;
`;

const MaterialInput = styled.input`
  width: 100%;
  font-size: 1.08rem;
  font-weight: 500;
  color: ${colors.bgDark};
  background: ${colors.white}E8;
  border: 1.7px solid ${colors.blueMid};
  border-radius: 3px;
  padding: 1rem 1rem 1rem 45px;
  transition: border 0.23s, box-shadow 0.23s;
  box-shadow: 0 1px 1px  ${colors.blueMid};
  &:focus {
    outline: none;
    border-color: ${colors.accent};
    background: ${colors.skyBlue}17;
    box-shadow: 0 3px 20px #4865811A;
  }
  &:disabled {
    opacity: 0.7;
    background: #f9fafb;
  }
  &:not(:placeholder-shown) + label,
  &:focus + label {
    top: 1px;
    left: 44px;
    font-size: 0.7rem;
    color: ${colors.bgSecondary};
    //background: ${colors.white};
    padding: 0 4px;
    font-weight: 600;
    letter-spacing: 0.01em;
  }
`;

const MaterialLabel = styled.label`
  position: absolute;
  top: 1.18rem;
  left: 44px;
  color: ${colors.bgSecondary};
  font-size: 1.07rem;
  font-weight: 600;
  pointer-events: none;
  background: transparent;
  padding: 0 2px;
  border-radius: 4px;
  transition: all 0.19s cubic-bezier(.35,1.41,.59,0.9);
  z-index: 2;
  letter-spacing: 0.01em;
`;

// --- Bouton submit ---
const Button = styled(motion.button)`
  background: linear-gradient(92deg, ${colors.blueMid} 30%, ${colors.white} 100%);
  color: ${colors.bgDark};
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 0.6rem 0.9rem;
  cursor: pointer;
  font-size: 1.07rem;
  margin-top: 1.9rem;
  box-shadow: 0 4px 18px #f2c94c24;
   transition: background 0.23s, color 0.23s;
  letter-spacing: 0.01em;
  &:hover {
    background: linear-gradient(92deg, ${colors.white} 55%, ${colors.bgSecondary} 100%);
    box-shadow:  2px 2px  ${colors.bgDark};
   }
  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

// --- Message d'erreur ou succès ---
const Message = styled.div`
  margin-top: 0.7rem;
  color: ${({ error }) => (error ? colors.danger : colors.success)};
  display: flex;
  align-items: center;
  gap: 0.48rem;
  font-weight: 500;
  font-size: 0.86rem;
  min-height: 28px;
`;

const BottomLink = styled.div`
  margin-top: 2.17rem;
  text-align: center;
  font-size: 0.98rem;
  a {
    color: ${colors.bgDark};
    text-decoration: underline;
    font-weight: bold;
    transition: color 0.17s;
    &:hover {
      color: ${colors.accent};
    }
  }
`;

const BLOCKED_STORAGE_KEY = "login_block_until_ts";
const BLOCK_DURATION = 15 * 60; // 15 minutes (en secondes)

const LoginFormclient = ({ isTwoFactorAuthComplete }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState({ text: "", error: true });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [blockCountdown, setBlockCountdown] = useState(0);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  // Blocage UX au mount (persisté)
  useEffect(() => {
    const blockUntil = Number(localStorage.getItem(BLOCKED_STORAGE_KEY) || 0);
    const now = Math.floor(Date.now() / 1000);
    if (blockUntil > now) {
      setIsBlocked(true);
      setBlockCountdown(blockUntil - now);
      startCountdown(blockUntil - now);
    }
    return () => clearInterval(timerRef.current);
  }, []);

  const startCountdown = (duration) => {
    clearInterval(timerRef.current);
    let timeLeft = duration;
    setBlockCountdown(timeLeft);
    setIsBlocked(true);

    timerRef.current = setInterval(() => {
      timeLeft -= 1;
      setBlockCountdown(timeLeft);
      if (timeLeft <= 0) {
        setIsBlocked(false);
        setBlockCountdown(0);
        localStorage.removeItem(BLOCKED_STORAGE_KEY);
        clearInterval(timerRef.current);
      }
    }, 1000);
  };

  // Validation email & password
  const validateFields = () => {
    const newErrors = {};
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Veuillez entrer un email valide.";
    }
    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Le mot de passe doit contenir au moins 8 caractères.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setServerMessage({ text: "", error: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerMessage({ text: "", error: false });
    if (!validateFields()) return;
    setIsSubmitting(true);

    try {
      let response;
      if (isTwoFactorAuthComplete) {
        response = await loginAfter2FA({
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
        });
      } else {
        response = await login({
          email: formData.email.trim().toLowerCase(),
          password: formData.password,
        });
      }
      navigate(response.redirectTo || "/");
    } catch (error) {
      const status = error.response?.status;
      const errMsg = error.response?.data?.message || "";
      if (
        status === 429 ||
        errMsg.includes("Trop de tentatives") ||
        errMsg.toLowerCase().includes("réessayez dans")
      ) {
        setIsBlocked(true);
        setBlockCountdown(BLOCK_DURATION);
        const until = Math.floor(Date.now() / 1000) + BLOCK_DURATION;
        localStorage.setItem(BLOCKED_STORAGE_KEY, until);
        startCountdown(BLOCK_DURATION);
        setServerMessage({
          text:
            errMsg ||
            "Trop de tentatives. Réessayez dans 15 minutes.",
          error: true,
        });
        return;
      }
      setServerMessage({
        text:
          error.response?.data?.message ||
          error.message ||
          "Erreur de connexion au serveur",
        error: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Formatage MM:SS
  const formatCountdown = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m < 10 ? "0" : ""}${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <>
      <Background />
      <Wrapper>
        <Card
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        <Logo src={images.aodblanc} alt="Logo cabinet" draggable={false} />
          <Title>Connexion</Title>
          <form onSubmit={handleSubmit} autoComplete="off" style={{ width: "100%" }}>
            <MaterialField>
              <MaterialIcon>
                <FiMail />
              </MaterialIcon>
              <MaterialInput
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                placeholder=" "
                value={formData.email}
                onChange={handleChange}
                required
                error={!!errors.email}
                disabled={isBlocked}
              />
              <MaterialLabel htmlFor="email">Adresse email</MaterialLabel>
            </MaterialField>
            {errors.email && (
              <Message error>{errors.email}</Message>
            )}

            <MaterialField>
              <MaterialIcon>
                <FiLock />
              </MaterialIcon>
              <MaterialInput
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                placeholder=" "
                value={formData.password}
                onChange={handleChange}
                required
                error={!!errors.password}
                disabled={isBlocked}
              />
              <MaterialLabel htmlFor="password">Mot de passe</MaterialLabel>
            </MaterialField>
            {errors.password && (
              <Message error>{errors.password}</Message>
            )}

            {serverMessage.text && (
              <Message error={serverMessage.error}>
                {serverMessage.error ? <FiAlertCircle /> : <FiCheckCircle />}
                {serverMessage.text}
                {isBlocked && blockCountdown > 0 && (
                  <span
                    style={{
                      marginLeft: 8,
                      color: "#FFA726",
                      fontWeight: 500,
                      fontSize: "0.99em"
                    }}
                  >
                    Déblocage dans {formatCountdown(blockCountdown)}
                  </span>
                )}
              </Message>
            )}

            <Button
              type="submit"
              whileHover={{ scale: 1.03 }}
              disabled={isSubmitting || isBlocked}
            >
              {isBlocked
                ? `Bloqué${
                    blockCountdown > 0
                      ? " (" + formatCountdown(blockCountdown) + ")"
                      : ""
                  }`
                : isSubmitting
                ? "Connexion..."
                : "Se connecter"}
            </Button>

          </form>
        </Card>
      </Wrapper>
    </>
  );
};

LoginFormclient.propTypes = {
  isTwoFactorAuthComplete: PropTypes.bool,
};

export default LoginFormclient;
