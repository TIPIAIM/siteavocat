// src/components/maps/TerminalAccessMap.jsx
import React, { useEffect, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { colors } from "../Styles/colors"; // Importation nommée

// ---------- Helpers palette (fallbacks si une clé n'existe pas) ----------
const c = (key, fallback) => (colors && colors[key] ? colors[key] : fallback);

const glow = keyframes`
  0%, 100% { transform: translate3d(0, 0, 0); opacity: 0.55; }
  50% { transform: translate3d(10px, -12px, 0); opacity: 0.85; }
`;

const shimmer = keyframes`
  0% { background-position: -300px 0; }
  100% { background-position: 300px 0; }
`;

// Distance "vol d'oiseau"
function haversineKm(lat1, lon1, lat2, lon2) {
  const toRad = (v) => (v * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

export default function TerminalAccessMap({
  // ✅ Defaults tribunal Dixinn
  title = "Cabinet AOD AVOCATS",
  subtitle = "Consultez la localisation et lancez l'itinéraire en un clic.",
  destination = { lat: 9.568699, lng: -13.659456 },
  address = "Minière - Dixinn, Conakry",
  phone = "+224 612 858 507",
  hours = "Lun-Ven : 08:00-17:00",

  // ✅ Iframe Google Maps (ton embed)
  embedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3114.93339206208!2d-13.683571626191588!3d9.53887099054423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd14493cbfdad%3A0xefc7927d5fd5e1dc!2sTPI%20de%20Dixinn!5e1!3m2!1sfr!2s!4v1765889356348!5m2!1sfr!2s",

  defaultTravelMode = "driving", // driving | walking
  showDistance = true,
}) {
  const reduceMotion = useReducedMotion();

  const [travelMode, setTravelMode] = useState(defaultTravelMode);
  const [userPos, setUserPos] = useState(null);
  const [geoError, setGeoError] = useState("");
  const [locating, setLocating] = useState(false);

  const [frameLoaded, setFrameLoaded] = useState(false);
  const [toast, setToast] = useState(null); // { type: "ok"|"error"|"info", msg: string }

  // Auto-dismiss toast
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1800);
    return () => clearTimeout(t);
  }, [toast]);

  const straightDistanceKm = useMemo(() => {
    if (!showDistance || !userPos) return null;
    const km = haversineKm(userPos.lat, userPos.lng, destination.lat, destination.lng);
    return Number.isFinite(km) ? km : null;
  }, [showDistance, userPos, destination.lat, destination.lng]);
 
  const buildDirectionsUrl = (withOrigin = true) => {
    const base = "https://www.google.com/maps/dir/?api=1";
    const dest = `${destination.lat},${destination.lng}`;
    const origin = userPos ? `${userPos.lat},${userPos.lng}` : "";
    const mode = travelMode === "walking" ? "walking" : "driving";

    return (
      base +
      `&destination=${encodeURIComponent(dest)}` +
      (withOrigin && origin ? `&origin=${encodeURIComponent(origin)}` : "") +
      `&travelmode=${encodeURIComponent(mode)}`
    );
  };

  const openDirections = () => {
    window.open(buildDirectionsUrl(true), "_blank", "noopener,noreferrer");
  };

  const openOnMaps = () => {
    // Ouverture simple via coordonnées
    const base = "https://www.google.com/maps/search/?api=1";
    const query = `${destination.lat},${destination.lng}`;
    window.open(`${base}&query=${encodeURIComponent(query)}`, "_blank", "noopener,noreferrer");
  };

  const safeCopy = async (text, okMsg = "Copié") => {
    try {
      await navigator.clipboard.writeText(text);
      setToast({ type: "ok", msg: okMsg });
      return true;
    } catch {
      setToast({ type: "error", msg: "Copie impossible sur ce navigateur." });
      return false;
    }
  };

  const copyAddress = () => safeCopy(address, "Adresse copiée.");
  const copyCoords = () => safeCopy(`${destination.lat}, ${destination.lng}`, "Coordonnées copiées.");
  const copyDirectionsLink = () => safeCopy(buildDirectionsUrl(true), "Lien d'itinéraire copié.");
  const copyEmbedSrc = () => safeCopy(embedSrc, "Lien iframe copié.");

  const locateMe = () => {
    if (!navigator.geolocation) {
      setGeoError("La géolocalisation n'est pas supportée sur ce navigateur.");
      setToast({ type: "error", msg: "Géolocalisation non supportée." });
      return;
    }

    setGeoError("");
    setLocating(true);

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserPos({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setLocating(false);
        setToast({ type: "ok", msg: "Position détectée." });
      },
      () => {
        setGeoError("Impossible d'obtenir votre position. Autorisez la localisation puis réessayez.");
        setLocating(false);
        setToast({ type: "error", msg: "Localisation refusée ou indisponible." });
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 30000 }
    );
  };

  return (
    <Shell>
      <BgGlow aria-hidden="true" />

      <Header
        as={motion.div}
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={reduceMotion ? false : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <H1>{title}</H1>
        <P>{subtitle}</P>
      </Header>

      <Grid>
        <MapCard
          as={motion.section}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          aria-label="Carte Google Maps"
        >
          <MapTopBar>
            <ModeGroup aria-label="Mode de déplacement">
              <ModeBtn
                type="button"
                aria-pressed={travelMode === "driving"}
                onClick={() => setTravelMode("driving")}
              >
                Voiture
              </ModeBtn>
              <ModeBtn
                type="button"
                aria-pressed={travelMode === "walking"}
                onClick={() => setTravelMode("walking")}
              >
                Marche
              </ModeBtn>
            </ModeGroup>

            <BarActions>
              <TopBtn type="button" onClick={openDirections} title="Ouvrir l'itinéraire">
                Itinéraire
              </TopBtn>
              <TopBtn type="button" onClick={openOnMaps} title="Ouvrir dans Google Maps">
                Ouvrir Maps
              </TopBtn>
            </BarActions>
          </MapTopBar>

          <FrameWrap>
            {!frameLoaded && <Skeleton aria-hidden="true" />}
            <GMapFrame
              title={title}
              src={embedSrc}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setFrameLoaded(true)}
            />
            <FrameOverlay>
              <OverlayChip>{frameLoaded ? "Carte prête" : "Chargement..."}</OverlayChip>
              {showDistance && straightDistanceKm != null && (
                <OverlayChip title="Distance à vol d'oiseau (approx.)">
                  ≈ {straightDistanceKm.toFixed(straightDistanceKm < 10 ? 2 : 1)} km
                </OverlayChip>
              )}
            </FrameOverlay>
          </FrameWrap>

          <MapFooter>
            <FooterLeft>
              <Chip>{userPos ? "Position: activée" : "Position: non activée"}</Chip>
              <Chip>
                Dest: {destination.lat}, {destination.lng}
              </Chip>
            </FooterLeft>

            <FooterRight>
              <SmallAction type="button" onClick={locateMe} disabled={locating}>
                {locating ? "Localisation..." : "Me localiser"}
              </SmallAction>
            </FooterRight>
          </MapFooter>
        </MapCard>

        <SideCard
          as={motion.aside}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          aria-label="Informations d'accès"
        >
          <CardTitle>Informations</CardTitle>

          <InfoRow>
            <Label>Adresse</Label>
            <Value>{address}</Value>
          </InfoRow>

          <InfoRow>
            <Label>Coordonnées</Label>
            <Value>
              {destination.lat}, {destination.lng}
            </Value>
          </InfoRow>

          <InfoRow>
            <Label>Téléphone</Label>
            <Value>{phone}</Value>
          </InfoRow>

          <InfoRow>
            <Label>Horaires</Label>
            <Value>{hours}</Value>
          </InfoRow>

          {geoError && <Alert role="alert">{geoError}</Alert>}

          <Actions>
            <Btn type="button" onClick={locateMe} disabled={locating}>
              {locating ? "Localisation..." : "Me localiser"}
            </Btn>

            <BtnPrimary type="button" onClick={openDirections}>
              Itinéraire
            </BtnPrimary>

            <BtnGhost type="button" onClick={openOnMaps}>
              Ouvrir sur Google Maps
            </BtnGhost>

            <BtnGhost type="button" onClick={copyAddress}>
              Copier l'adresse
            </BtnGhost>

            <BtnGhost type="button" onClick={copyCoords}>
              Copier les coordonnées
            </BtnGhost>

            <BtnGhost type="button" onClick={copyDirectionsLink}>
              Copier le lien d'itinéraire
            </BtnGhost>

            <BtnGhost type="button" onClick={copyEmbedSrc} title="Copie l'URL embed (src de l'iframe)">
              Copier le lien iframe
            </BtnGhost>
          </Actions>

          <Hint>
            Conseil : autorise "Me localiser" pour que l'itinéraire s'ouvre depuis ta position.
          </Hint>
        </SideCard>
      </Grid>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <ToastWrap
            as={motion.div}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reduceMotion ? false : { opacity: 1, y: 0 }}
            exit={reduceMotion ? false : { opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            role="status"
            aria-live="polite"
          >
            <ToastBox $type={toast.type}>{toast.msg}</ToastBox>
          </ToastWrap>
        )}
      </AnimatePresence>
    </Shell>
  );
}

// ---------------- styled-components ----------------
const Shell = styled.section`
  position: relative;
  padding: 18px 16px 24px;
  color: ${c("white", "#FFF")};
  background: radial-gradient(1200px 520px at 10% 0%, rgba(72, 101, 129, 0.25), transparent 60%),
    radial-gradient(900px 480px at 90% 20%, rgba(28, 63, 110, 0.25), transparent 55%),
    ${c("bgDark", "#102A43")};
  overflow: hidden;
`;

const BgGlow = styled.div`
  position: absolute;
  inset: -40px;
  pointer-events: none;
  background: radial-gradient(500px 300px at 15% 20%, ${c("accent", "#F2C94C")}20, transparent 60%),
    radial-gradient(520px 320px at 85% 10%, ${c("blueMarine", "#002B5B")}30, transparent 62%);
  filter: blur(10px);
  animation: ${glow} 8s ease-in-out infinite;
`;

const Header = styled.div`
  position: relative;
  max-width: 1180px;
  margin: 0 auto 14px;
`;

const H1 = styled.h2`
  margin: 0 0 6px;
  font-size: 18px;
  letter-spacing: 0.2px;
  color: ${c("white", "#FFF")};
`;

const P = styled.p`
  margin: 0;
  opacity: 0.85;
  font-size: 13.5px;
  color: ${c("skyBlue", "#87CEEB")};
`;

const Grid = styled.div`
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.6fr 1fr;
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const MapCard = styled.div`
  border-radius: 12px 0 12px 0;
  border: 1px solid ${c("bgSecondary", "rgba(72, 101, 129, 0.5)")};
  background: linear-gradient(
    180deg,
    ${c("overlay", "#17192b")}80,
    ${c("overlayAlpha", "#101224B3")}
  );
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
  overflow: hidden;
`;

const MapTopBar = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid ${c("bgSecondary", "rgba(72, 101, 129, 0.3)")};
  background: linear-gradient(180deg, ${c("blueMarine", "#002B5B")}40, transparent);
`;

const ModeGroup = styled.div`
  display: inline-flex;
  border: 1px solid ${c("bgSecondary", "rgba(72, 101, 129, 0.4)")};
  border-radius: 12px 0 12px 0;
  overflow: hidden;
`;

const ModeBtn = styled.button`
  border: none;
  cursor: pointer;
  padding: 8px 10px;
  font-size: 12.5px;
  color: ${c("white", "#FFF")};
  background: ${c("blueMarine", "#002B5B")}30;
  transition: transform 0.12s ease, opacity 0.12s ease, background 0.12s ease;

  &[aria-pressed="true"] {
    background: ${c("blueMarine", "#002B5B")}60;
    color: ${c("accent", "#F2C94C")};
  }

  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0px); opacity: 0.95; }
`;

const BarActions = styled.div`
  display: inline-flex;
  gap: 8px;
`;

const TopBtn = styled.button`
  border-radius: 12px 0 12px 0;
  padding: 8px 10px;
  font-size: 12.5px;
  cursor: pointer;
  border: 1px solid ${c("bgSecondary", "rgba(72, 101, 129, 0.4)")};
  background: transparent;
  color: ${c("white", "#FFF")};
  transition: transform .12s ease, opacity .12s ease;

  &:hover { 
    transform: translateY(-1px); 
    background: ${c("blueMarine", "#002B5B")}20;
  }
  &:active { transform: translateY(0px); opacity: 0.95; }
`;

const FrameWrap = styled.div`
  position: relative;
  width: 100%;
  height: 420px;

  @media (max-width: 980px) {
    height: 360px;
  }
`;

const Skeleton = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    ${c("blueMarine", "#002B5B")}40 0%,
    ${c("bgSecondary", "rgba(72, 101, 129, 0.2)")} 40%,
    ${c("blueMarine", "#002B5B")}40 80%
  );
  background-size: 600px 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
`;

const GMapFrame = styled.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const FrameOverlay = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  pointer-events: none;
`;

const OverlayChip = styled.span`
  pointer-events: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  padding: 6px 8px;
  border-radius: 12px 0 12px 0;
  border: 1px solid ${c("bgSecondary", "rgba(72, 101, 129, 0.4)")};
  background: ${c("blueMarine", "#002B5B")}40;
  color: ${c("white", "#FFF")};
  backdrop-filter: blur(8px);
  opacity: 0.92;
`;

const MapFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px;
  border-top: 1px solid ${c("bgSecondary", "rgba(72, 101, 129, 0.3)")};
  background: linear-gradient(0deg, ${c("blueMarine", "#002B5B")}30, transparent);
`;

const FooterLeft = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const FooterRight = styled.div`
  display: flex;
  gap: 8px;
`;

const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  padding: 6px 8px;
  border-radius: 12px 0 12px 0;
  border: 1px solid ${c("bgSecondary", "rgba(72, 101, 129, 0.4)")};
  background: ${c("blueMarine", "#002B5B")}30;
  color: ${c("white", "#FFF")};
  opacity: 0.9;
`;

const SmallAction = styled.button`
  border-radius: 12px 0 12px 0;
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid ${c("bgSecondary", "rgba(72, 101, 129, 0.4)")};
  background: linear-gradient(135deg, ${c("greenDark", "#1A4D2E")}, ${c("blueMarine", "#002B5B")});
  color: ${c("white", "#FFFFFF")};
  transition: transform .12s ease, opacity .12s ease;

  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0px); opacity: 0.95; }
  &:disabled { opacity: 0.65; cursor: not-allowed; transform: none; }
`;

const SideCard = styled.div`
  border-radius: 12px 0 12px 0;
  border: 1px solid ${c("bgSecondary", "rgba(72, 101, 129, 0.4)")};
  background: linear-gradient(
    180deg,
    ${c("overlay", "#17192b")}80,
    ${c("overlayAlpha", "#101224B3")}
  );
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
  padding: 14px;
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 14px;
  color: ${c("white", "#FFF")};
`;

const InfoRow = styled.div`
  margin-bottom: 10px;
`;

const Label = styled.div`
  font-size: 12px;
  opacity: 0.75;
  margin-bottom: 4px;
  color: ${c("blueDarkSky", "#8CBDD6")};
`;

const Value = styled.div`
  font-size: 13.5px;
  line-height: 1.25rem;
  color: ${c("white", "#FFF")};
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 12px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const baseBtn = `
  border-radius: 12px 0 12px 0;
  padding: 10px 10px;
  font-size: 13px;
  cursor: pointer;
  border: 1px solid ${c("bgSecondary", "rgba(72, 101, 129, 0.4)")};
  transition: transform .15s ease, box-shadow .15s ease, opacity .15s ease;
  user-select: none;

  &:hover { transform: translateY(-1px); }
  &:active { transform: translateY(0px); opacity: 0.95; }
  &:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
`;

const Btn = styled.button`
  ${baseBtn}
  background: ${c("blueMarine", "#002B5B")}40;
  color: ${c("white", "#FFF")};
`;

const BtnPrimary = styled.button`
  ${baseBtn}
  background: linear-gradient(135deg, ${c("greenDark", "#1A4D2E")}, ${c("blueMarine", "#002B5B")});
  color: ${c("white", "#FFFFFF")};
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.35);
`;

const BtnGhost = styled.button`
  ${baseBtn}
  background: transparent;
  color: ${c("white", "#FFF")};
  
  &:hover {
    background: ${c("blueMarine", "#002B5B")}20;
  }
`;

const Alert = styled.div`
  margin-top: 10px;
  padding: 10px 10px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(239, 68, 68, 0.55);
  background: ${c("blueMarine", "#002B5B")}30;
  font-size: 12.5px;
  color: ${c("white", "#FFF")};
`;

const Hint = styled.p`
  margin: 12px 0 0;
  font-size: 12px;
  opacity: 0.75;
  line-height: 1.15rem;
  color: ${c("blueMid", "#72A4BD")};
`;

const ToastWrap = styled.div`
  position: fixed;
  left: 16px;
  right: 16px;
  bottom: 16px;
  z-index: 9999;
  display: flex;
  justify-content: center;
  pointer-events: none;
`;

const ToastBox = styled.div`
  pointer-events: auto;
  max-width: 520px;
  width: fit-content;
  padding: 10px 12px;
  border-radius: 12px 0 12px 0;
  font-size: 13px;
  border: 1px solid
  
  background: ${c("blueMarine", "#002B5B")}50;
  color: ${c("white", "#FFF")};
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.35);
`;