// src/pages/Accueil/Footerr.jsx
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Check,
  Facebook,
  Instagram,
  Scale,
  Shield,
  FileText,
  X,
} from "lucide-react";
import { colors } from "../../Styles/colors"; // ✅ IMPORTANT: import nommé

// Breakpoints
const bp = {
  phone: 480,
  tablet: 768,
  laptop: 1024,
};

const glowShift = keyframes`
  0%, 100% { transform: translate3d(0,0,0); opacity: .55; }
  50% { transform: translate3d(14px,-10px,0); opacity: .85; }
`;

const shimmer = keyframes`
  0% { background-position: -220px 0; }
  100% { background-position: 220px 0; }
`;

export default function Footerr() {
  const [modalKey, setModalKey] = useState(null);
  const dialogRef = useRef(null);

  const legalContent = useMemo(
    () => ({
      mentions: {
        title: "Mentions légales",
        icon: <Scale size={20} />,
        content: (
          <>
            <p>
              <strong>Cabinet d'Avocats AOD AVOCATS</strong>
            </p>
            <p>Société civile Professionnelle d'Avocats</p>
            <p>Immatriculée au registre de commerce : GN.TCC.2022.B.14430</p>

            <Highlight>
              <p>
                <strong>Siège social :</strong>
              </p>
              <p>
                Minière Cité 2ème Etage, Immeuble Yansané, Commune de Dixinn,
                Conakry, République de Guinée
              </p>
            </Highlight>

            <p>
              <strong>Directeur de la publication :</strong>
            </p>
            <p>Maître Amadou DIALLO, Avocat au Barreau de Guinée</p>

            <p>
              <strong>Hébergement :</strong>
            </p>
            <p>OVH SAS</p>
            <p>2 rue Kellermann - 59100 Roubaix - France</p>

            <p>
              <strong>Propriété intellectuelle :</strong>
            </p>
            <p>
              Toute reproduction totale ou partielle, sans autorisation expresse,
              est interdite et constituerait une contrefaçon.
            </p>
          </>
        ),
      },

      confidentialite: {
        title: "Politique de confidentialité",
        icon: <Shield size={20} />,
        content: (
          <>
            <p>
              Le Cabinet AOD AVOCATS protège vos données conformément à la loi :
              LOI N*L/2016/037/AN relative à la cybersécurité et à la protection
              des données à caractère personnel en République de Guinée.
            </p>

            <Highlight>
              <p>
                <strong>Collecte :</strong>
              </p>
              <ul>
                <li>Nom, prénom, coordonnées professionnelles</li>
                <li>Informations relatives à votre demande juridique</li>
                <li>Données de navigation (cookies strictement nécessaires)</li>
              </ul>
            </Highlight>

            <p>
              <strong>Finalités :</strong>
            </p>
            <ul>
              <li>Répondre à vos demandes</li>
              <li>Fournir nos services</li>
              <li>Respecter nos obligations légales et déontologiques</li>
            </ul>
          </>
        ),
      },

      conditions: {
        title: "Conditions générales",
        icon: <FileText size={20} />,
        content: (
          <>
            <p>
              <strong>Article 1 - Objet</strong>
            </p>
            <p>
              Les présentes conditions régissent l'utilisation du site et des
              services du Cabinet AOD AVOCATS.
            </p>

            <Highlight>
              <p>
                <strong>Article 2 - Consultation</strong>
              </p>
              <p>
                Les informations du site ne constituent pas un conseil juridique.
                Une consultation formelle est nécessaire. Aucune relation
                avocat-client n’est créée par la simple consultation du site.
              </p>
            </Highlight>

            <p>
              <strong>Litiges</strong>
            </p>
            <p>
              Les parties privilégient une solution amiable avant toute action.
              Compétence : tribunaux de Conakry.
            </p>
          </>
        ),
      },
    }),
    []
  );

  const openModal = useCallback((key) => {
    setModalKey(key);
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setModalKey(null);
    document.body.style.overflow = "auto";
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeModal]);

  useEffect(() => {
    if (!modalKey) return;
    const t = setTimeout(() => dialogRef.current?.focus?.(), 50);
    return () => clearTimeout(t);
  }, [modalKey]);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const current = modalKey ? legalContent[modalKey] : null;

  return (
    <FooterContainer>
      <TopLine aria-hidden="true" />
      <BgGlow aria-hidden="true" />

      <Inner>
        <Grid>
          {/* Brand */}
          <Card>
            <BrandRow>
              <BrandName>AOD AVOCATS</BrandName>
              <BrandTag>Cabinet d’avocats</BrandTag>
            </BrandRow>

            <BrandText>
              Conseil, contentieux et accompagnement stratégique. Une pratique
              fondée sur la rigueur, la confidentialité et la performance.
            </BrandText>

            <Social>
              {/* Remplace les # par tes vrais liens */}
              <IconLink href="#" aria-label="Facebook" target="_blank" rel="noreferrer">
                <Facebook size={18} />
              </IconLink>
              <IconLink href="#" aria-label="Instagram" target="_blank" rel="noreferrer">
                <Instagram size={18} />
              </IconLink>
              <IconLink href="#" aria-label="X (Twitter)" target="_blank" rel="noreferrer">
                <X size={18} />
              </IconLink>
            </Social>

            <MiniHint>Votre satisfaction est notre mission.</MiniHint>
          </Card>

          {/* Services */}
          <Card>
            <Title>Nos services</Title>
            <List>
              <Row>
                <Check size={18} />
                <span>Consultation juridique</span>
              </Row>
              <Row>
                <Check size={18} />
                <span>Représentation en justice</span>
              </Row>
              <Row>
                <Check size={18} />
                <span>Rédaction d’actes</span>
              </Row>
              <Row>
                <Check size={18} />
                <span>Conseil aux entreprises</span>
              </Row>
            </List>
          </Card>

          {/* Engagement */}
          <Card>
            <Title>Engagement</Title>
            <Text>
              Nous nous engageons à délivrer un service juridique de haut niveau,
              en respectant le secret professionnel et les exigences de conformité.
            </Text>

            <Pills>
              <Pill>Confidentialité</Pill>
              <Pill>Rigueur</Pill>
              <Pill>Disponibilité</Pill>
              <Pill>Clarté</Pill>
            </Pills>
          </Card>

          {/* Contact */}
          <Card>
            <Title>Contact</Title>

            <ContactLine>
              <MapPin size={18} />
              <div>
                <strong>Siège social</strong>
                <br />
                Minière Cité 2ème Etage, Immeuble Yansané,
                <br />
                Commune de Dixinn, Conakry, République de Guinée
              </div>
            </ContactLine>

            <ContactLine>
              <Phone size={18} />
              <a href="tel:+224622253536">+224 622 253 536</a>
            </ContactLine>

            <ContactLine>
              <Mail size={18} />
              <EmailStack>
                <a href="mailto:amadou.diallo@aod-avocats.com">
                  amadou.diallo@aod-avocats.com
                </a>
                <a href="mailto:aodialloavocat@gmail.com">aodialloavocat@gmail.com</a>
              </EmailStack>
            </ContactLine>

            <TopBtn type="button" onClick={goTop}>
              Retour en haut <ArrowUp size={16} />
            </TopBtn>
          </Card>
        </Grid>

        <Divider />

        <LegalBar>
          <LegalBtn type="button" onClick={() => openModal("mentions")}>
            <Scale size={16} /> Mentions légales
          </LegalBtn>
          <LegalBtn type="button" onClick={() => openModal("confidentialite")}>
            <Shield size={16} /> Politique de confidentialité
          </LegalBtn>
          <LegalBtn type="button" onClick={() => openModal("conditions")}>
            <FileText size={16} /> Conditions générales
          </LegalBtn>
        </LegalBar>

        <Copyright>
          © {new Date().getFullYear()} AOD AVOCATS — Tous droits réservés
        </Copyright>
      </Inner>

      {/* Modal */}
      <AnimatePresence>
        {current && (
          <Overlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <Dialog
              as={motion.div}
              role="dialog"
              aria-modal="true"
              tabIndex={-1}
              ref={dialogRef}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 14, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Close type="button" onClick={closeModal} aria-label="Fermer">
                <X size={18} />
              </Close>

              <DialogTitle>
                {current.icon}
                {current.title}
              </DialogTitle>

              <DialogBody>{current.content}</DialogBody>
            </Dialog>
          </Overlay>
        )}
      </AnimatePresence>
    </FooterContainer>
  );
}

/* =========================
   STYLES (100% palette)
========================= */

const FooterContainer = styled.footer`
  position: relative;
  overflow: hidden;
  padding: 48px 0 26px;
  color: ${colors.white};
  background:
    radial-gradient(1000px 420px at 12% 0%, rgba(135, 206, 235, 0.12), transparent 60%),
    radial-gradient(900px 420px at 85% 0%, rgba(242, 201, 76, 0.10), transparent 62%),
    linear-gradient(180deg, ${colors.blueMarine} 0%, ${colors.bgDark} 60%, ${colors.bgDark} 100%);
`;

const TopLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(114, 164, 189, 0.35),
    rgba(242, 201, 76, 0.22),
    transparent
  );
`;

const BgGlow = styled.div`
  position: absolute;
  inset: -40px;
  pointer-events: none;
  background:
    radial-gradient(520px 320px at 15% 10%, rgba(114, 164, 189, 0.16), transparent 62%),
    radial-gradient(520px 320px at 90% 20%, rgba(242, 201, 76, 0.12), transparent 64%);
  filter: blur(10px);
  animation: ${glowShift} 8s ease-in-out infinite;
`;

const Inner = styled.div`
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: ${bp.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }

  @media (min-width: ${bp.laptop}px) {
    grid-template-columns: 1.2fr 1fr 1fr 1.2fr;
    gap: 18px;
  }
`;

const Card = styled.div`
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: linear-gradient(
    180deg,
    rgba(16, 42, 67, 0.55),
    rgba(23, 25, 43, 0.35)
  );
  backdrop-filter: blur(10px);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
  padding: 16px;
`;

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const BrandName = styled.div`
  font-weight: 900;
  letter-spacing: 0.02em;
  font-size: 16px;
`;

const BrandTag = styled.div`
  font-size: 12px;
  padding: 7px 10px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(242, 201, 76, 0.22);
  background: rgba(242, 201, 76, 0.10);
  color: rgba(255, 255, 255, 0.92);
`;

const BrandText = styled.p`
  margin: 12px 0 0;
  color: rgba(255, 255, 255, 0.84);
  font-size: 13.5px;
  line-height: 1.65;
  max-width: 62ch;
`;

const Social = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 14px;
`;

const IconLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 12px 0 12px 0;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.92);
  transition: transform 0.15s ease, background 0.15s ease, border-color 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(135, 206, 235, 0.10);
    border-color: rgba(135, 206, 235, 0.28);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(135, 206, 235, 0.18);
  }
`;

const MiniHint = styled.div`
  margin-top: 10px;
  color: rgba(255, 255, 255, 0.74);
  font-size: 12.5px;
`;

const Title = styled.h3`
  margin: 0 0 12px;
  font-weight: 900;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.95);
  padding-bottom: 10px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 54px;
    height: 3px;
    border-radius: 999px;
    background: linear-gradient(90deg, ${colors.skyBlue}, ${colors.accent});
    opacity: 0.85;
  }
`;

const List = styled.div`
  display: grid;
  gap: 10px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.86);

  svg {
    color: ${colors.success};
    flex-shrink: 0;
  }
`;

const Text = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 13.5px;
  line-height: 1.7;
`;

const Pills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

const Pill = styled.span`
  font-size: 12px;
  padding: 7px 10px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.88);
`;

const ContactLine = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  margin-bottom: 10px;
  color: rgba(255, 255, 255, 0.86);
  font-size: 13.5px;
  line-height: 1.6;

  svg {
    margin-top: 2px;
    color: ${colors.skyBlue};
    flex-shrink: 0;
  }

  a {
    color: rgba(255, 255, 255, 0.90);
    text-decoration: none;
    transition: color 0.15s ease;

    &:hover {
      color: ${colors.skyBlue};
    }
  }
`;

const EmailStack = styled.div`
  display: grid;
  gap: 6px;
`;

const TopBtn = styled.button`
  margin-top: 10px;
  height: 42px;
  padding: 0 12px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(114, 164, 189, 0.28);
  background: linear-gradient(135deg, ${colors.blueMarine}, ${colors.bgSecondary});
  color: ${colors.white};
  font-weight: 900;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 16px 44px rgba(0, 0, 0, 0.32);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.40);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(135, 206, 235, 0.16),
      0 20px 60px rgba(0, 0, 0, 0.40);
  }
`;

const Divider = styled.div`
  margin: 18px 0 14px;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.12),
    transparent
  );
`;

const LegalBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const LegalBtn = styled.button`
  height: 40px;
  padding: 0 12px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(23, 25, 43, 0.35);
  color: rgba(255, 255, 255, 0.92);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.12s ease, background 0.12s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.07);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(135, 206, 235, 0.14);
  }
`;

const Copyright = styled.div`
  margin-top: 14px;
  text-align: center;
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.72);
`;

/* Modal */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: grid;
  place-items: center;
  padding: 14px;
  background: rgba(0, 0, 0, 0.78);
  backdrop-filter: blur(6px);
`;

const Dialog = styled.div`
  width: min(860px, 100%);
  max-height: 88vh;
  overflow: auto;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(16, 42, 67, 0.92);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.55);
  padding: 18px;
  position: relative;

  &:focus {
    outline: none;
  }
`;

const Close = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 38px;
  height: 38px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.92);
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: transform 0.12s ease, background 0.12s ease;

  &:hover {
    transform: rotate(6deg);
    background: rgba(135, 206, 235, 0.10);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(135, 206, 235, 0.16);
  }
`;

const DialogTitle = styled.h3`
  margin: 0 0 12px;
  padding-right: 48px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.95);

  svg {
    color: ${colors.skyBlue};
  }
`;

const DialogBody = styled.div`
  color: rgba(255, 255, 255, 0.86);
  line-height: 1.8;
  font-size: 13.8px;

  p {
    margin: 0 0 12px;
  }

  ul {
    margin: 10px 0 12px;
    padding-left: 18px;
  }

  li {
    margin: 0 0 6px;
  }

  strong {
    color: rgba(255, 255, 255, 0.94);
  }
`;

const Highlight = styled.div`
  margin: 12px 0 14px;
  padding: 12px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(135, 206, 235, 0.18);
  background: rgba(135, 206, 235, 0.08);
`;
