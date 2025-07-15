import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiCheckCircle, FiAlertCircle, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
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
 border-radius: 4px 30px 0 30px;
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
  color: ${colors.bgDark};
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
    font-size: 0.61rem;
    color: ${colors.success};
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
  transition: all 0.19s cubic-bezier(.35,1.41,.59,.9);
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
  margin-top: 0.17rem;
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

// ----- Regex et constantes -----
const NAME_REGEX = /^[A-Za-zÀ-ÿ' -]{2,50}$/;
const ERROR_LIMIT = 6;
const LOCK_DURATION = 15 * 60; // secondes

// ----- Composant principal -----
const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState({ text: "", error: false });
  const [loading, setLoading] = useState(false);

  const [errorCount, setErrorCount] = useState(
    Number(sessionStorage.getItem("registerErrorCount") || 0)
  );
  const [lockUntil, setLockUntil] = useState(
    Number(sessionStorage.getItem("registerLockUntil") || 0)
  );
  const [lockCountdown, setLockCountdown] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (lockUntil && Date.now() < lockUntil) {
      updateLockCountdown();
      const timer = setInterval(updateLockCountdown, 1000);
      return () => clearInterval(timer);
    } else if (lockUntil && Date.now() >= lockUntil) {
      unlockForm();
    }
    // eslint-disable-next-line
  }, [lockUntil]);

  const updateLockCountdown = () => {
    const now = Date.now();
    if (lockUntil > now) {
      setLockCountdown(Math.ceil((lockUntil - now) / 1000));
    } else {
      unlockForm();
    }
  };

  const unlockForm = () => {
    setLockUntil(0);
    setLockCountdown(0);
    setErrorCount(0);
    sessionStorage.removeItem("registerLockUntil");
    sessionStorage.removeItem("registerErrorCount");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMessage({ text: "", error: false });
  };

  const validate = () => {
    if (!form.name.trim()) return "Le nom est obligatoire.";
    if (!NAME_REGEX.test(form.name.trim()))
      return "Le nom ne doit contenir que des lettres, espaces ou tirets (pas de caractères spéciaux ou chiffres).";
    if (!form.email.trim()) return "L'email est obligatoire.";
    if (!/^[\w-.]+@[\w-]+\.[\w-]{2,}$/.test(form.email))
      return "Format d'email invalide.";
    if (form.password.length < 8)
      return "Le mot de passe doit contenir au moins 8 caractères.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: "", error: false });

    // Vérification du blocage
    if (lockUntil && Date.now() < lockUntil) {
      setMessage({
        text: `Trop de tentatives. Réessayez dans ${lockCountdown} secondes.`,
        error: true,
      });
      return;
    }

    const validationError = validate();
    if (validationError) {
      setMessage({ text: validationError, error: true });
      incrementError();
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_b}/api/auth/register`,
        form,
        { withCredentials: true }
      );
      if (res.data.success) {
        unlockForm();
        setMessage({
          text: "✅ Inscription réussie. Un code de vérification a été envoyé sur votre email.",
          error: false,
        });
        setTimeout(() => navigate("/confimation-mail"), 2000);
      } else {
        setMessage({
          text: res.data.message || "Erreur lors de l’inscription.",
          error: true,
        });
        incrementError();
      }
    } catch (err) {
      setMessage({
        text:
          err.response?.data?.message ||
          "Erreur lors de l’inscription. Essayez encore.",
        error: true,
      });
      incrementError();
    } finally {
      setLoading(false);
    }
  };

  const incrementError = () => {
    const newCount = errorCount + 1;
    setErrorCount(newCount);
    sessionStorage.setItem("registerErrorCount", String(newCount));
    if (newCount >= ERROR_LIMIT) {
      const until = Date.now() + LOCK_DURATION * 1000;
      setLockUntil(until);
      sessionStorage.setItem("registerLockUntil", String(until));
      setMessage({
        text: `Trop de tentatives. Veuillez attendre 15min avant de réessayer.`,
        error: true,
      });
    }
  };

  return (
    <>
      <Background />
      <Wrapper>
        <Card
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Logo src={images.aodblanc} alt="Logo cabinet" draggable={false} />
          <Title>Créer un compte</Title>
          <form onSubmit={handleSubmit} autoComplete="off" style={{ width: "100%" }}>
            <MaterialField>
              <MaterialIcon>
                <FiUser />
              </MaterialIcon>
              <MaterialInput
                type="text"
                id="name"
                name="name"
                placeholder=" "
                value={form.name}
                onChange={handleChange}
                autoFocus
                required
                minLength={2}
                maxLength={50}
                pattern={NAME_REGEX.source}
                title="Lettres, espaces, tirets uniquement"
                disabled={!!lockCountdown}
              />
              <MaterialLabel htmlFor="name">Nom complet</MaterialLabel>
            </MaterialField>
            <MaterialField>
              <MaterialIcon>
                <FiMail />
              </MaterialIcon>
              <MaterialInput
                type="email"
                id="email"
                name="email"
                placeholder=" "
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
                disabled={!!lockCountdown}
              />
              <MaterialLabel htmlFor="email">Adresse email</MaterialLabel>
            </MaterialField>
            <MaterialField>
              <MaterialIcon>
                <FiLock />
              </MaterialIcon>
              <MaterialInput
                type="password"
                id="password"
                name="password"
                placeholder=" "
                value={form.password}
                onChange={handleChange}
                minLength={8}
                required
                autoComplete="new-password"
                disabled={!!lockCountdown}
              />
              <MaterialLabel htmlFor="password">Mot de passe</MaterialLabel>
            </MaterialField>
            <Button
              type="submit"
              whileHover={{ scale: 1.03 }}
              disabled={loading || !!lockCountdown}
            >
              {loading
                ? "Création du compte..."
                : lockCountdown
                ? `Réessayer dans ${lockCountdown}s`
                : "S’inscrire"}
            </Button>
          </form>
          <Message error={message.error}>
            {message.text ? (
              <>
                {message.error ? <FiAlertCircle /> : <FiCheckCircle />}
                {message.text}
              </>
            ) : null}
          </Message>
          <BottomLink>
            Vous avez déjà un compte ? <Link to="/seconnecter">Se connecter</Link>
          </BottomLink>
        </Card>
      </Wrapper>
    </>
  );
};

export default Register;
