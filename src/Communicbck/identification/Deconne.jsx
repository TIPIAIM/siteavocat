// LogoutButton.jsx
import { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import styled, { keyframes } from "styled-components";
import { FiLoader } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { Power } from "lucide-react";

const colors = {
  primary: "#002B5B",
  accent:  "#F2C94C",
  danger:  "#EF4444",
  white:   "#FFFFFF",
  gray:    "#6B7280",
};

const pulse = keyframes`
  0% { transform: scale(1);}
  50% { transform: scale(1.09);}
  100% { transform: scale(1);}
`;

const RedButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${colors.danger};
  color: ${colors.white};
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 0.7rem 1.25rem;
  font-size: 1.05rem;
  cursor: pointer;
  box-shadow: 0 4px 18px rgba(239,68,68,0.14);
  transition: background 0.18s, color 0.18s, box-shadow 0.18s;
  outline: none;
  margin: 0 8px;
  &:hover, &:focus {
    background: #d32029;
    color: ${colors.accent};
    animation: ${pulse} 0.55s linear;
    box-shadow: 0 8px 28px rgba(239,68,68,0.18);
  }
  opacity: ${props => (props.disabled ? 0.55 : 1)};
  pointer-events: ${props => (props.disabled ? "none" : "auto")};
`;

const Spinner = styled(FiLoader)`
  font-size: 24px;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`;

const SnackbarContainer = styled(motion.div)`
  position: fixed;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 340px;
  background: rgba(255,255,255,0.99);
  backdrop-filter: blur(16px);
  box-shadow: 0 8px 32px rgba(239,68,68,0.18);
  border-radius: 13px;
  padding: 1.1rem 1.3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 3000;
  @media (max-width: 500px) {
    width: 97vw;
    max-width: 97vw;
    padding: 0.9rem 0.7rem;
    font-size: 0.99rem;
  }
`;

const Message = styled.div`
  flex: 1;
  color: ${colors.primary};
  font-size: 1rem;
`;

const CancelButton = styled(motion.button)`
  background: transparent;
  border: none;
  color: ${colors.danger};
  font-weight: bold;
  cursor: pointer;
  padding: 0.32rem 0.6rem;
  border-radius: 4px;
  transition: background 0.2s;
  &:hover { background: rgba(239,68,68,0.1); }
`;

const LogoutButton = () => {
  const navigate = useNavigate();
  const { logout, user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const intervalRef = useRef(null);

  const executeLogout = async () => {
    setLoading(true);
    clearInterval(intervalRef.current);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_b}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      if (res.data.success) {
        localStorage.clear();
        sessionStorage.clear();
        logout();
        navigate("/seconnecter");
      } else {
        alert(res.data.message || "Erreur lors de la déconnexion.");
      }
    } catch (err) {
      alert("Erreur serveur lors de la déconnexion !");
    } finally {
      localStorage.clear();
      sessionStorage.clear();
      logout();
      navigate("/seconnecter");
      setLoading(false);
      setShowSnackbar(false);
    }
  };

  const scheduleLogout = () => {
    if (loading) return;
    setShowSnackbar(true);
    setCountdown(5);
    intervalRef.current = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          executeLogout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const cancelLogout = () => {
    clearInterval(intervalRef.current);
    setShowSnackbar(false);
  };

 // if (!user) return null; // Ne pas afficher si pas connecté

  return (
    <>
      <RedButton
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.98 }}
        disabled={loading}
        onClick={scheduleLogout}
        aria-label="Se déconnecter"
        title="Se déconnecter"
      >
        {loading ? <Spinner /> : <Power style={{ fontSize: 22, marginBottom: -2 }} />}
        {loading ? "Déconnexion..." : "Se déconnecter"}
      </RedButton>

      <AnimatePresence>
        {showSnackbar && (
          <SnackbarContainer
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Message>Déconnexion dans {countdown} s</Message>
            <CancelButton
              onClick={cancelLogout}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.93 }}
              disabled={loading}
            >Annuler</CancelButton>
          </SnackbarContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default LogoutButton;
