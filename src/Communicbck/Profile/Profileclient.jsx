import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import { X, UploadCloud } from "lucide-react";

const BASE_URL = import.meta.env.VITE_b || "";

const colors = {
  blueMarine: "#002B5B",
  greenDark: "#1A4D2E",
  goldenYellow: "#F2C94C",
  white: "#FFFFFF",
};

const Wrapper = styled.div`
  position: fixed;
  top: 52px;
  right: 58px;
  z-index: 1200;
`;

const AvatarBtn = styled.img`
  width: 66px; height: 66px; border-radius: 50%;
  object-fit: cover;
  border: 2px solid #1a4d2e;
  background: #fafbfc;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.10);
  transition: box-shadow 0.18s;
  &:hover { box-shadow: 0 4px 10px #f2c94c66; }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 56px;
  right: 0;
  background: #fff;
  min-width: 225px;
  border-radius: 14px;
  box-shadow: 0 12px 48px 0 #0002;
  padding: 1.2rem 1.1rem;
  display: ${({ open }) => (open ? "block" : "none")};
  animation: fadeIn 0.18s;
`;

const Name = styled.div`
  font-weight: 600; font-size: 1.10rem; color: #002b5b;
`;

const Email = styled.div`
  color: #757575; font-size: 0.97rem; margin-bottom: 1.1rem;
`;

const MenuLink = styled(Link)`
  display: block;
  padding: 0.7rem 0.6rem;
  color: #1a4d2e;
  text-decoration: none;
  border-radius: 7px;
  font-weight: 500;
  margin-bottom: 0.18rem;
  transition: background 0.14s;
  &:hover { background: #f2c94c33; color: #002b5b; }
`;

const ActionBtn = styled.button`
  width: 100%; padding: 0.7rem 0.6rem;
  background: #fff; border: none; border-radius: 7px;
  color: ${({ danger }) => (danger ? "#c53030" : "#1a4d2e")};
  font-weight: 600; cursor: pointer; text-align: left;
  margin-bottom: 0.18rem;
  transition: background 0.16s, color 0.16s;
  &:hover { background: ${({ danger }) => (danger ? "#ffe2e2" : "#F2C94C18")}; }
`;

// --- MODAL modern with upload icon ---
const ModalBg = styled.div`
  position: fixed; inset: 0;
  background: rgba(20,24,31,0.37);
  backdrop-filter: blur(5px);
  z-index: 2000;
  display: flex; justify-content: center; align-items: center;
`;

const modalShow = keyframes`
  from { transform: translateY(50px) scale(0.98); opacity: 0; }
  to { transform: translateY(0) scale(1); opacity: 1; }
`;

const ModalCard = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 1rem 1rem 1rem 1rem;
  max-width: 380px; width: 100%;
  animation: ${modalShow} 0.22s cubic-bezier(.22,1,.36,1);
  box-shadow: 0 16px 48px 0 #002b5b18;
  display: flex; flex-direction: column; align-items: stretch;
  position: relative;
`;


const FieldGroup = styled.div`
  width: 100%; margin-bottom: 1.25rem;
  display: flex; flex-direction: column; align-items: flex-start;
`;

// PHOTO UPLOAD zone (style Coursera)
const PhotoUploadWrapper = styled.div`
  display: flex; flex-direction: column; align-items: center;
  position: relative;
  margin-bottom: 1.3rem;
`;

const PhotoPreview = styled.img`
  width: 98px; height: 98px; object-fit: cover; border-radius: 50%;
  border: 2.3px solid #1a4d2e; background: #f4f4f4;
  transition: box-shadow 0.2s;
  box-shadow: 0 2px 18px #f2c94c11;
`;

const UploadButton = styled.label`
  position: absolute;
  bottom: -8px;
  right: -12px;
  background: ${colors.goldenYellow};
  border-radius: 50%;
  box-shadow: 0 4px 14px #f2c94c22;
  padding: 0.55rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 2px solid #fff;
  transition: background 0.16s, box-shadow 0.13s;
  &:hover { background: #ffe89e; }
  svg { color: ${colors.greenDark}; }
`;

const Input = styled.input`
  width: 100%; padding: 0.62rem; border-radius: 5px;
  border: 1px solid #e6e8ec; font-size: 1.01rem;
  background: #fafbfc; margin-top: 0.13rem; transition: border 0.18s;
  &:focus { outline: none; border-color: #F2C94C; background: #fcfbe7; }
`;
const Label = styled.label`
  font-weight: 600;
  color: #1a4d2e;
`;

const SaveBtn = styled.button`
  background: linear-gradient(90deg, #1a4d2e 70%, #F2C94C 100%);
  color: #fff; padding: 0.8rem 1.1rem; border: none;
  border-radius:5px; font-weight: bold; font-size: 1.06rem;
  cursor: pointer; width: 100%; margin-top: 0.3rem;
  box-shadow: 0 2px 16px #002b5b11;
  transition: background 0.18s;
  &:hover { background: linear-gradient(90deg, #002b5b 70%, #e0bd3b 100%); }
`;

const ErrorMsg = styled.div` color: #c53030; margin: 0.13rem 0; font-size: 0.97rem; `;
const SuccessMsg = styled.div` color: #1a4d2e; margin: 0.22rem 0 1rem 0; font-weight: 600; font-size: 1rem; `;

// --- Logic ---
function getPhotoUrl(photo) {
  if (!photo) return "/default-avatar.png";
  if (photo.startsWith("http")) return photo;
  return BASE_URL + photo;
}

const AvatarProfileButton = () => {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editValues, setEditValues] = useState({});
  const [editFile, setEditFile] = useState(null);
  const [msg, setMsg] = useState({ error: "", success: "" });
  const dropdownRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    axios.get(BASE_URL + "/api/me", { withCredentials: true })
      .then(res => { setUser(res.data); setEditValues(res.data); })
      .catch(() => setUser(null));
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (edit && inputRef.current) inputRef.current.focus();
  }, [edit]);

  const handleEditChange = e => {
    setEditValues({ ...editValues, [e.target.name]: e.target.value });
    setMsg({ error: "", success: "" });
  };
  const handleEditPhoto = e => {
    setEditFile(e.target.files[0]);
    setMsg({ error: "", success: "" });
  };

  const handleSave = async e => {
    e.preventDefault();
    setMsg({ error: "", success: "" });
    const formData = new FormData();
    Object.keys(editValues).forEach(key => {
      if (key !== "photo") formData.append(key, editValues[key] || "");
    });
    if (editFile) formData.append("photo", editFile);

    try {
      const res = await axios.put(BASE_URL + "/api/me", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUser(res.data);
      setEditValues(res.data);
      setEditFile(null);
      setMsg({ error: "", success: "Profil mis à jour !" });
      setTimeout(() => setEdit(false), 1400);
    } catch {
      setMsg({ error: "Erreur lors de la mise à jour", success: "" });
    }
  };

  if (!user) return null;

  return (
    <Wrapper ref={dropdownRef}>
      <AvatarBtn
        src={getPhotoUrl(user.photo)}
        alt="avatar"
        onClick={() => setOpen(v => !v)}
        title={user.nom || user.name || user.email}
      />
      <Dropdown open={open}>
        <Name>{user.nom || user.name || "-"}</Name>
        <Email>{user.email}</Email>
        <ActionBtn onClick={() => { setEdit(true); setOpen(false); }}>Modifier mon profil</ActionBtn>
        <MenuLink to="/voir-mes-demandes">Mes demandes</MenuLink>
       
      </Dropdown>
      {edit && (
        <ModalBg>
          <ModalCard>

           <h4 style={{ color: "#002b5b", margin: "0 0 20px 0", fontWeight: 700, textAlign: "center" }}>
              Mon profil
            </h4>
            {msg.success && <SuccessMsg>{msg.success}</SuccessMsg>}
            {msg.error && <ErrorMsg>{msg.error}</ErrorMsg>}
            <form onSubmit={handleSave} style={{ width: "100%" }}>
              <FieldGroup>
                <PhotoUploadWrapper>
                  <PhotoPreview
                    src={editFile ? URL.createObjectURL(editFile) : getPhotoUrl(editValues.photo)}
                    alt="Photo"
                  />
                  <UploadButton htmlFor="photo-input" title="Changer la photo">
                    <UploadCloud size={22} />
                    <input
                      id="photo-input"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleEditPhoto}
                    />
                  </UploadButton>
                </PhotoUploadWrapper>

              </FieldGroup>
              
              <FieldGroup>
                <Label>Nom :</Label>
                <Input
                  ref={inputRef}
                  name="name"
                  autoComplete="name"
                  value={editValues.name || ""}
                  onChange={handleEditChange}
                  placeholder="Votre nom complet"
                />
              </FieldGroup>
              <FieldGroup>
                <Label>Email :</Label>
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={editValues.email || ""}
                  onChange={handleEditChange}
                  placeholder="adresse@email.com"
                />
              </FieldGroup>
              <SaveBtn type="submit">Enregistrer</SaveBtn>
              <ActionBtn type="button" onClick={() => setEdit(false)} style={{ marginTop: 16, background: "#f8f8f8", color: "#002b5b" }}>
                Annuler
              </ActionBtn>
            </form>
          </ModalCard>
        </ModalBg>
      )}
    </Wrapper>
  );
};

export default AvatarProfileButton;
