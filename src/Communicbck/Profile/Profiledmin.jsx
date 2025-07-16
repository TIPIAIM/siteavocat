import { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { UploadCloud } from "lucide-react";
import { colors } from "../../Styles/colors";
import { images } from "../../assets/images";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_b || "";

// --- Fond flou avec logo entreprise ---
const Background = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  position: fixed;
  z-index: -1;
  left: 0; top: 0;
  overflow: hidden;
  background: ${colors.bgDark};
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url('/img/logoAODnoir.avif') center/cover no-repeat;
    filter: blur(10px) brightness(0.98);
    opacity: 0.91;
    z-index: 1;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, ${colors.bgDark}C6 50%, ${colors.bgSecondary}E2 100%);
    opacity: 0.93;
    z-index: 2;
  }
`;
const ProgressBar = styled(motion.div)`
  position: absolute;
  top: 0; left: 5;
  width: 100%;
  height: 8px;
  border-radius: 4px 4px 0 0;
  background: linear-gradient(90deg, ${colors.blueMid} 10%, ${colors.bgSecondary} 100%);
  z-index: 8;
`;

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
  padding: 1.3rem 2rem 2rem 2rem;
  border-radius: 4px 30px 0 30px;
  box-shadow: 0 8px 48px 12px #102a4326;
  width: 100%;
  max-width: 470px;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled(motion.img)`
  width: 63px;
  height: 63px;
  object-fit: contain;
   
  filter: drop-shadow(0 2px 10px #102a4333);
`;

const Title = styled(motion.h2)`
  color: ${colors.bgDark};
  font-size: 1.28rem;
  margin-bottom: 0.5rem;
  font-weight: 800;
  text-align: center;
  letter-spacing: 0.01em;
`;

// Avatar/photo animée
const PhotoZone = styled.div`
  position: relative;
  margin-bottom: 2.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Avatar = styled(motion.img)`
  width: 94px; height: 94px;
  object-fit: cover;
  border-radius: 50%;
  background: ${colors.white};
  border: 3px solid ${colors.blueMid};
  box-shadow: 0 2px 14px ${colors.bgSecondary}24;
  margin-bottom: 0.35rem;
  transition: box-shadow 0.19s, border 0.18s, filter 0.22s;
  cursor: pointer;
  user-select: none;
`;

const UploadBtn = styled(motion.label)`
  position: absolute;
  right: -2px; bottom: 1px;
  background: ${colors.blueMid};
  border-radius: 80%;
  box-shadow: 0 2px 10px ${colors.bgSecondary}18;
  padding: 0.47rem;
  border: 2px solid ${colors.white};
  display: flex; align-items: center; cursor: pointer;
  transition: background 0.16s, box-shadow 0.14s;
  &:hover { background: ${colors.bgSecondary}; }
  svg { color: ${colors.bgDark}; }
`;

// --- Grille 2 colonnes responsive (max 800px: colonne simple) ---
const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.18rem 1.1rem;
  width: 100%;
  margin-bottom: 1rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 1.1rem 0;
  }
`;

// Material fields + animation
const MaterialField = styled(motion.div)`
  position: relative;
  width: 100%;
`;

const MaterialIcon = styled(motion.div)`
  position: absolute;
  left: 10px;
  top: 0; bottom: 0;
  display: flex;
  align-items: center;
  color: ${colors.bgSecondary};
  opacity: 0.96;
  font-size: 19px;
  pointer-events: none;
`;

const MaterialInput = styled(motion.input)`
  width: 100%;
  font-size: 1.06rem;
  font-weight: 500;
  color: ${colors.bgDark};
  background: ${colors.white}EA;
  border: 1.5px solid ${colors.blueMid};
  border-radius: 4px;
  padding: 1rem 1rem 1rem 44px;
  transition: border 0.22s, box-shadow 0.22s;
  box-shadow: 0 1px 1px ${colors.blueMid};
  &:focus {
    outline: none;
    border-color: ${colors.accent};
    background: ${colors.skyBlue}17;
    box-shadow: 0 3px 16px #48658112;
  }
  &:disabled {
    opacity: 0.7;
    background: #f9fafb;
  }
  &:not(:placeholder-shown) + label,
  &:focus + label {
    top: 1px;
    left: 42px;
    font-size: 0.73rem;
    color: ${colors.bgSecondary};
    font-weight: 600;
    letter-spacing: 0.01em;
  }
`;

const MaterialLabel = styled(motion.label)`
  position: absolute;
  top: 1.13rem;
  left: 42px;
  color: ${colors.bgSecondary};
  font-size: 1.05rem;
  font-weight: 600;
  pointer-events: none;
  background: transparent;
  padding: 0 2px;
  border-radius: 4px;
  transition: all 0.19s cubic-bezier(.35,1.41,.59,0.9);
  z-index: 2;
  letter-spacing: 0.01em;
`;

const SaveBtn = styled(motion.button)`
  background: linear-gradient(92deg, ${colors.blueMid} 30%, ${colors.white} 100%);
  color: ${colors.bgDark};
  font-weight: bold;
  border: none;
  border-radius: 5px;
  padding: 0.6rem 0.9rem;
  cursor: pointer;
  font-size: 1.11rem;
  width: 100%;
  margin-top: 0.3rem;
  margin-bottom: 0.25rem;
  box-shadow: 0 4px 18px #f2c94c24;
   transition: background 0.23s, color 0.23s;
  letter-spacing: 0.01em;
  &:hover {
    background: linear-gradient(92deg, ${colors.white} 60%, ${colors.bgSecondary} 100%);
    box-shadow:  2px 2px  ${colors.bgDark};
   }
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const Msg = styled(motion.div)`
  margin-top: 0.85rem;
  color: ${({ success }) => (success ? colors.success : colors.danger)};
  font-weight: 500;
  font-size: 0.98rem;
  min-height: 26px;
  text-align: center;
  letter-spacing: 0.01em;
`;

// Loader animé
const Loader = styled(motion.div)`
  width: 25px; height: 25px; border: 3px solid ${colors.bgSecondary}44;
  border-top: 3px solid ${colors.blueMid};
  border-radius: 50%;
  margin: 0 auto 0 auto;
  animation: spin 1s linear infinite;
  @keyframes spin { to { transform: rotate(360deg); } }
`;

function getPhotoUrl(photo) {
  if (!photo) return "/default-avatar.png";
  if (photo.startsWith("http")) return photo;
  return BASE_URL + photo;
}

export default function Profiledmin() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({});
  const [file, setFile] = useState(null);
  const [msg, setMsg] = useState({ text: "", success: false });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (loading) {
      setProgress(0);
      // Simule la progression rapide, puis attente
      const id = setInterval(() => {
        setProgress((p) => {
          if (p >= 98) { clearInterval(id); return 98; }
          return p + 13 + Math.random() * 6;
        });
      }, 120);
      return () => clearInterval(id);
    } else if (!loading && progress > 0) {
      setProgress(100);
      setTimeout(() => setProgress(0), 800);
    }
    // eslint-disable-next-line
  }, [loading]);
  
  // useRef pour focus sur "Nom"
  const nameRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
   
    axios.get(BASE_URL + "/api/auth/me", { withCredentials: true })
      .then(res => {
        setUser(res.data);
        setForm({
          name: res.data.name || "",
          prenom: res.data.prenom || "",
          email: res.data.email || "",
          tel: res.data.tel || "",
          profession: res.data.profession || "",
        });
        setMsg({ text: "", success: false });
        setTimeout(() => {
          if (nameRef.current) nameRef.current.focus();
        }, 220);
      })
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  const handleInput = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setMsg({ text: "", success: false });
  };
  const handlePhoto = e => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setMsg({ text: "", success: false });
    }
  };

  const handleSave = async e => {
    e.preventDefault();
    setMsg({ text: "", success: false });
    setLoading(true);

    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("prenom", form.prenom);
      data.append("email", form.email);
      data.append("tel", form.tel);
      data.append("profession", form.profession);
      if (file) data.append("photo", file);

      await axios.put(BASE_URL + "/api/auth/me", data, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" }
      });
      setMsg({ text: "Profil mis à jour !", success: true });
      setFile(null);
      setTimeout(() => {
        // Retourne à la page précédente, ou à l'accueil si indisponible
        if (window.history.length > 2) navigate(-1);
        else navigate("/");
      }, 1000);
    } catch (err) {
      setMsg({
        text:
          err?.response?.data?.message ||
          "Erreur lors de la mise à jour.",
        success: false
      });
    }
    setLoading(false);
  };

  if (!user) return (
    <>
      <Background />
      <Wrapper>
        <Card
          initial={{ opacity: 0, y: 38, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.63 }}
        >
          <Logo src={images.aodblanc} alt="logo" draggable={false} />
          <Loader
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <Msg>Chargement du profil…</Msg>
        </Card>
      </Wrapper>
    </>
  );

  return (
    <>
      <Background />
      <Wrapper>
        <Card
          initial={{ opacity: 0, y: 38, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.63 }}
        >
            {progress > 0 && (
    <ProgressBar
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
      transition={{ duration: 0.4, ease: "linear" }}
      style={{
        opacity: loading ? 1 : 0,
      }}
    />
  )}
          <Logo
            src={images.aodblanc}
            alt="logo"
            draggable={false}
            initial={{ opacity: 0, y: -16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
          />
          <Title
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.52, delay: 0.16 }}
          >Mon Profil</Title>
          <PhotoZone>
            <Avatar
              src={file ? URL.createObjectURL(file) : getPhotoUrl(user.photo)}
              alt="Photo de profil"
              whileHover={{ scale: 1.06, boxShadow: `0 4px 22px ${colors.skyBlue}30` }}
              transition={{ type: "spring", stiffness: 280, damping: 14 }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
            />
            <UploadBtn
              htmlFor="photo-upload"
              title="Changer la photo"
              whileHover={{ scale: 1.11, background: colors.bgSecondary }}
              transition={{ type: "spring", stiffness: 220, damping: 12 }}
            >
              <UploadCloud size={19} />
              <input
                id="photo-upload"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={handlePhoto}
              />
            </UploadBtn>
          </PhotoZone>
          <motion.form
            onSubmit={handleSave}
            autoComplete="off"
            style={{ width: "100%" }}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.59, delay: 0.24 }}
          >
            <FormGrid>
              {/* Nom */}
              <MaterialField
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.32 }}
              >
                <MaterialIcon>
                  <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="7" r="4" fill={colors.blueMid}/><rect x="4" y="14" width="12" height="5" rx="2.5" fill={colors.bgSecondary}/></svg>
                </MaterialIcon>
                <MaterialInput
                  name="name"
                  ref={nameRef}
                  value={form.name}
                  onChange={handleInput}
                  placeholder=" "
                  required
                  autoComplete="family-name"
                  whileFocus={{ boxShadow: `0 4px 22px ${colors.accent}26` }}
                />
                <MaterialLabel htmlFor="name">Nom</MaterialLabel>
              </MaterialField>
              {/* Prénom */}
              <MaterialField
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.36 }}
              >
                <MaterialIcon>
                  <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="7" r="4" fill={colors.skyBlue}/><rect x="4" y="14" width="12" height="5" rx="2.5" fill={colors.blueMid}/></svg>
                </MaterialIcon>
                <MaterialInput
                  name="prenom"
                  value={form.prenom}
                  onChange={handleInput}
                  placeholder=" "
                  required
                  autoComplete="given-name"
                  whileFocus={{ boxShadow: `0 4px 22px ${colors.accent}26` }}
                />
                <MaterialLabel htmlFor="prenom">Prénom</MaterialLabel>
              </MaterialField>
              {/* Email */}
              <MaterialField
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <MaterialIcon>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="3" stroke={colors.bgSecondary} strokeWidth="1.7"/><path d="M3 7l9 6 9-6" stroke={colors.blueMid} strokeWidth="1.7" fill="none"/></svg>
                </MaterialIcon>
                <MaterialInput
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInput}
                  placeholder=" "
                  required
                  disabled
                  autoComplete="email"
                />
                <MaterialLabel htmlFor="email">Adresse email</MaterialLabel>
              </MaterialField>
              {/* Téléphone */}
              <MaterialField
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.43 }}
              >
                <MaterialIcon>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="5" width="16" height="10" rx="4" stroke={colors.bgSecondary} strokeWidth="1.5"/><rect x="7" y="9" width="6" height="2.7" rx="1" fill={colors.skyBlue}/></svg>
                </MaterialIcon>
                <MaterialInput
                  name="tel"
                  value={form.tel}
                  onChange={handleInput}
                  placeholder=" "
                  autoComplete="tel"
                  whileFocus={{ boxShadow: `0 4px 22px ${colors.accent}24` }}
                />
                <MaterialLabel htmlFor="tel">Téléphone</MaterialLabel>
              </MaterialField>
              {/* Profession */}
              <MaterialField
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.46 }}
              >
                <MaterialIcon>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="4" y="5" width="12" height="10" rx="3" stroke={colors.blueMid} strokeWidth="1.4"/><rect x="7" y="8" width="6" height="5" rx="2.3" fill={colors.bgSecondary}/></svg>
                </MaterialIcon>
                <MaterialInput
                  name="profession"
                  value={form.profession}
                  onChange={handleInput}
                  placeholder=" "
                  whileFocus={{ boxShadow: `0 4px 22px ${colors.accent}24` }}
                />
                <MaterialLabel htmlFor="profession">Profession</MaterialLabel>
              </MaterialField>
            </FormGrid>
            <AnimatePresence>
              {msg.text && (
                <Msg
                  success={msg.success}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.34 }}
                >
                  {msg.text}
                </Msg>
              )}
            </AnimatePresence>
            <SaveBtn
              type="submit"
              whileHover={{ scale: 1.045 }}
              whileTap={{ scale: 0.99 }}
              disabled={loading}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.48 }}
            >
              {loading
                ? <Loader
                    key="loader"
                    initial={{ scale: 0.8, opacity: 0.7 }}
                    animate={{ scale: 1, opacity: 1, rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                  />
                : "Enregistrer"}
            </SaveBtn>
          </motion.form>
        </Card>
      </Wrapper>
    </>
  );
}
