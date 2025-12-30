// src/pages/Contact/Headercontact.jsx
import React, { useEffect, useMemo, useState, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MapPin, Mail, Phone, ArrowDown, Compass } from "lucide-react";
import { images } from "../../assets/images";
import { colors } from "../../Styles/colors";

const fade = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const floatSoft = keyframes`
  0%, 100% { transform: translate3d(0,0,0); opacity: .65; }
  50% { transform: translate3d(12px,-10px,0); opacity: .95; }
`;

export default function Headercontact() {
  const reduceMotion = useReducedMotion();

  const slides = useMemo(
    () => [

       images.envir,
      images.travaiil,
      images.jurid1,
      images.conf,
   
    ],
    []
  );

  const messages = useMemo(
    () => [
      "Une question juridique ? Parlons-en.",
      "Besoin d’un conseil clair et rapide ?",
      "Confidentialité, rigueur, accompagnement.",
      "Nous vous répondons dans les meilleurs délais.",
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const [msgIdx, setMsgIdx] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const t = setInterval(() => setIdx((p) => (p + 1) % slides.length), 5200);
    return () => clearInterval(t);
  }, [slides.length, reduceMotion]);

  useEffect(() => {
    const t = setInterval(() => setMsgIdx((p) => (p + 1) % messages.length), 3200);
    return () => clearInterval(t);
  }, [messages.length]);

  const scrollToId = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <Hero>
      {/* Background slideshow */}
      <BgWrap aria-hidden="true">
        <AnimatePresence mode="wait">
          <BgSlide
            key={idx}
            $img={slides[idx]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.8, ease: "easeOut" }}
          />
        </AnimatePresence>

        <BgOverlay />
        <GlowA />
        <GlowB />
      </BgWrap>

      <Shell>
        <TopPill
          as={motion.div}
          initial={reduceMotion ? false : { opacity: 0, y: -10 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Compass size={16} />
          <span>Contact & prise de rendez-vous</span>
        </TopPill>

        <Title
          as={motion.h1}
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          Contactez <Gradient>Nous</Gradient>
          <Dot aria-hidden="true" />
        </Title>

        <Sub
          as={motion.p}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Nous privilégions une réponse claire, structurée et confidentielle. Décrivez brièvement
          votre besoin : nous vous orientons vers la meilleure démarche.
        </Sub>

        <RotatingLine
          as={motion.div}
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? false : { opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.18 }}
        >
          <AnimatePresence mode="wait">
            <Line
              key={msgIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.35 }}
            >
              {messages[msgIdx]}
            </Line>
          </AnimatePresence>
        </RotatingLine>

        <Actions
          as={motion.div}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
        >
          <PrimaryBtn type="button" onClick={() => scrollToId("contact-form")}>
            Aller au formulaire
            <ArrowDown size={18} />
          </PrimaryBtn>

          <GhostBtn type="button" onClick={() => scrollToId("contact-map")}>
            Voir la localisation
            <MapPin size={18} />
          </GhostBtn>
        </Actions>

        <MiniInfo
          as={motion.div}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
        >
          <InfoChip as="a" href="mailto:contact@aod-avocats.com" title="Envoyer un email">
            <Mail size={16} />
            <span>contact@aod-avocats.com</span>
          </InfoChip>

          <InfoChip as="a" href="tel:+224622253536" title="Appeler le cabinet">
            <Phone size={16} />
            <span>+224 622 25 35 36</span>
          </InfoChip>

          <InfoChip as="button" type="button" onClick={() => scrollToId("contact-map")} title="Voir l’adresse">
            <MapPin size={16} />
            <span>AOD AVOCATS — Conakry</span>
          </InfoChip>
        </MiniInfo>
      </Shell>
    </Hero>
  );
}

/* =========================
   STYLES
========================= */

const Hero = styled.section`
  position: relative;
  min-height: clamp(520px, 72vh, 820px);
  display: grid;
  place-items: center;
  overflow: hidden;
  color: ${colors.white};
  padding: 110px 16px 56px;
`;

const BgWrap = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
`;

const BgSlide = styled(motion.div)`
  position: absolute;
  inset: 0;
  background-image: url(${(p) => p.$img});
  background-size: cover;
  background-position: center;
  filter: saturate(1.03) contrast(1.05);
  transform: scale(1.04);
  animation: ${fade} 0.8s ease;
`;

const BgOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    radial-gradient(1100px 520px at 15% 10%, rgba(135,206,235,0.02), transparent 58%),
    radial-gradient(900px 520px at 85% 15%, rgba(242,201,76,0.01), transparent 60%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(16, 42, 67, 0.28) 45%, ${colors.bgDark} 98%);
`;

const GlowA = styled.div`
  position: absolute;
  inset: -80px;
  background: radial-gradient(540px 320px at 20% 30%, rgba(135,206,235,0.20), transparent 60%);
  filter: blur(12px);
  animation: ${floatSoft} 9s ease-in-out infinite;
  pointer-events: none;
`;

const GlowB = styled.div`
  position: absolute;
  inset: -80px;
  background: radial-gradient(580px 360px at 80% 20%, rgba(242,201,76,0.16), transparent 62%);
  filter: blur(12px);
  animation: ${floatSoft} 10.5s ease-in-out infinite;
  pointer-events: none;
`;

const Shell = styled.div`
  position: relative;
  z-index: 2;
  width: min(980px, 100%);
  text-align: center;
`;

const TopPill = styled.div`
  width: fit-content;
  margin: 0 auto 14px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(16,18,36,0.42);
  backdrop-filter: blur(10px);
  font-size: 13px;
  color: rgba(255,255,255,0.90);

  svg { color: ${colors.skyBlue}; }
`;

const Title = styled(motion.h1)`
  margin: 0;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.08;
  font-size: clamp(32px, 5vw, 56px);
  text-shadow: 0 20px 60px rgba(0,0,0,0.55);
`;

const Gradient = styled.span`
  background: linear-gradient(90deg, ${colors.skyBlue}, ${colors.goldenYellow});
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Dot = styled.span`
  display: inline-block;
  width: 9px;
  height: 9px;
  margin-left: 10px;
  border-radius: 999px;
  background: ${colors.white};
  box-shadow: 0 0 0 7px rgba(242,201,76,0.12);
`;

const Sub = styled(motion.p)`
  margin: 14px auto 0;
  max-width: 70ch;
  font-size: 14.5px;
  line-height: 1.65;
  color: rgba(255,255,255,0.86);
`;

const RotatingLine = styled(motion.div)`
  margin: 18px auto 0;
  width: min(680px, 100%);
  padding: 12px 14px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(16,18,36,0.42);
  backdrop-filter: blur(10px);
`;

const Line = styled(motion.div)`
  font-size: 14px;
  color: rgba(255,255,255,0.92);
`;

const Actions = styled(motion.div)`
  margin-top: 18px;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryBtn = styled.button`
  height: 46px;
  padding: 0 14px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(135,206,235,0.22);
  background: linear-gradient(135deg, ${colors.blueMarine}, ${colors.bgSecondary});
  color: ${colors.white};
  font-weight: 900;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 18px 48px rgba(0,0,0,0.35);
  transition: transform .15s ease, box-shadow .15s ease;

  &:hover { transform: translateY(-1px); box-shadow: 0 22px 60px rgba(0,0,0,0.45); }
  &:focus-visible { outline: none; box-shadow: 0 0 0 4px rgba(135,206,235,0.18), 0 22px 60px rgba(0,0,0,0.45); }
`;

const GhostBtn = styled.button`
  height: 46px;
  padding: 0 14px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(242,201,76,0.18);
  background: rgba(16,18,36,0.35);
  color: rgba(255,255,255,0.92);
  font-weight: 900;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  backdrop-filter: blur(10px);
  transition: transform .15s ease, background .15s ease;

  &:hover { transform: translateY(-1px); background: rgba(242,201,76,0.10); }
  &:focus-visible { outline: none; box-shadow: 0 0 0 4px rgba(242,201,76,0.14); }
`;

const MiniInfo = styled(motion.div)`
  margin-top: 18px;
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
`;

const InfoChip = styled.div`
  height: 40px;
  padding: 0 12px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(16,18,36,0.40);
  backdrop-filter: blur(10px);
  color: rgba(255,255,255,0.90);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: transform .12s ease, background .12s ease;

  svg { color: ${colors.skyBlue}; }
  &:hover { transform: translateY(-1px); background: rgba(255,255,255,0.07); }
  &:focus-visible { outline: none; box-shadow: 0 0 0 4px rgba(135,206,235,0.16); }
`;
