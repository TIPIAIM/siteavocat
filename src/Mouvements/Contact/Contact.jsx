//  /Contact/Contact.jsx
import { useEffect, memo, lazy, useState, Suspense } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck } from "lucide-react";
import { images } from "../../assets/images";
import AccesTerminalPage from "../màpping/AccesTerminalPage";
import { colors } from "../../Styles/colors";

const Headercontact = lazy(() => import("./Headercontact"));
const Footer = lazy(() => import("../Accueil/Footerr"));

const MemoHeader = memo(Headercontact);
const MemoFooter = memo(Footer);

export default function Contact() {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const validateForm = (event) => {
    const form = event.target;

    const name = (form.name.value || "").trim();
    const email = (form.email.value || "").trim();
    const message = (form.message.value || "").trim();

    const newErrors = {};

    // Nom : lettres + accents + espaces + ' -
    const nameOk = /^[a-zA-ZÀ-ÿ' -]{2,50}$/.test(name);
    if (!nameOk)
      newErrors.name =
        "Nom : 2 à 50 caractères (lettres, espaces, apostrophes, tirets).";

    // Email : validation simple mais réaliste
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
    if (!emailOk || email.length > 120)
      newErrors.email =
        "Veuillez entrer une adresse email valide (max 120 caractères).";

    // Message : longueur (on évite de brider l’utilisateur)
    if (message.length < 10 || message.length > 1200) {
      newErrors.message = "Message : entre 10 et 1200 caractères.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      event.preventDefault();
      return false;
    }

    setErrors({});
    return true;
  };

  return (
    <Page>
      <Helmet>
        <title>Contact — AOD AVOCATS</title>
        <meta
          name="description"
          content="Contactez AOD AVOCATS : conseil, contentieux, droit des affaires, droit pénal, droit minier. Formulaire, téléphone, email et localisation à Conakry."
        />
      </Helmet>

      <Suspense fallback={<div />}>
        <MemoHeader />
      </Suspense>

      <Main>
        {/* Section Formulaire */}
        <Section id="contact-form">
          <Container>
            <SectionHead data-aos="fade-up">
              <Kicker>
                <ShieldCheck size={16} />
                <span>Confidentialité & traitement prioritaire</span>
              </Kicker>

              <H2>Envoyez-nous un message</H2>
              <Lead>
                Décrivez brièvement votre situation. Nous vous orientons vers la
                démarche la plus adaptée et revenons vers vous dans les
                meilleurs délais.
              </Lead>
            </SectionHead>

            <CardGrid>
              {/* Visuel */}
              <VisualCard data-aos="fade-right" $img={images.keitaseul2}>
                <VisualOverlay />
                <VisualContent>
                  <VisualTitle>AOD AVOCATS</VisualTitle>
                  <VisualText>
                    Conseil, contentieux, conformité et accompagnement
                    stratégique. Une approche rigoureuse, orientée résultats.
                  </VisualText>

                  <MiniList>
                    <MiniItem as="a" href="mailto:contact@aod-avocats.com">
                      <Mail size={16} />
                      <span>contact@aod-avocats.com</span>
                    </MiniItem>

                    <MiniItem as="a" href="tel:+224622253536">
                      <Phone size={16} />
                      <span>+224 622 25 35 36</span>
                    </MiniItem>

                    <MiniItem
                      as="button"
                      type="button"
                      onClick={() =>
                        document
                          .getElementById("contact-map")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      <MapPin size={16} />
                      <span>Localisation — Conakry</span>
                    </MiniItem>

                    <MiniItem as="div">
                      <Clock size={16} />
                      <span>Lun–Ven : 08:00–18:00</span>
                    </MiniItem>
                  </MiniList>
                </VisualContent>
              </VisualCard>

              {/* Formulaire */}
              <FormCard data-aos="fade-left">
                <FormTitle>Contact</FormTitle>
                <FormSubtitle>
                  Remplissez les informations ci-dessous. Nous vous répondrons
                  dès que possible.
                </FormSubtitle>

                <Form
                  action={import.meta.env.VITE_fo}
                  method="POST"
                  onSubmit={validateForm}
                  noValidate
                >
                  <Row2>
                    <Field>
                      <Label htmlFor="name">Nom</Label>
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Votre nom"
                        aria-invalid={Boolean(errors.name)}
                      />
                      {errors.name ? (
                        <Error role="alert">{errors.name}</Error>
                      ) : null}
                    </Field>

                    <Field>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Votre email"
                        aria-invalid={Boolean(errors.email)}
                      />
                      {errors.email ? (
                        <Error role="alert">{errors.email}</Error>
                      ) : null}
                    </Field>
                  </Row2>

                  <Field>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows="6"
                      placeholder="Expliquez votre besoin (contexte, objectif, urgence éventuelle)…"
                      aria-invalid={Boolean(errors.message)}
                    />
                    {errors.message ? (
                      <Error role="alert">{errors.message}</Error>
                    ) : null}
                  </Field>

                  <Actions>
                    <Primary type="submit">
                      <Send size={18} />
                      Envoyer
                    </Primary>

                    <Ghost
                      as="a"
                      href="tel:+224622253536"
                      title="Appeler le cabinet"
                    >
                      <Phone size={18} />
                      Appeler (+622 253 536) 
                    </Ghost>
                    <Ghost
                      as="a"
                      href="tel:+224625292599"
                      title="Appeler le cabinet"
                    >
                      <Phone size={18} />
                      Appeler
                    </Ghost>
                    <Ghost
                      as="a"
                      href="mailto:contact.info@aod-avocats.net"
                      title="Envoyer un email"
                    >
                      <Mail size={18} />
                      Email
                    </Ghost>
                  </Actions>
                  <FinePrint>
                    Vos informations sont utilisées uniquement pour répondre à
                    votre demande.
                  </FinePrint>
                </Form>
              </FormCard>
            </CardGrid>
          </Container>
        </Section>

        {/* Section Map (intégration propre) */}
        <Section id="contact-map">
          <Container>
            <SectionHead data-aos="fade-up">
              <H2>Localisation du cabinet</H2>
              <Lead>
                Consultez la carte et lancez l’itinéraire. Vous pouvez aussi
                activer “Me localiser” pour démarrer depuis votre position.
              </Lead>
            </SectionHead>

            <MapSurface data-aos="fade-up">
              <AccesTerminalPage />
            </MapSurface>
          </Container>
        </Section>
      </Main>

      <FooterWrap>
        <Suspense fallback={<div />}>
          <MemoFooter />
        </Suspense>
      </FooterWrap>
    </Page>
  );
}

/* =========================
   STYLES
========================= */

const Page = styled.div`
  min-height: 100vh;
  background: radial-gradient(
      1200px 520px at 15% 10%,
      rgba(135, 206, 235, 0.14),
      transparent 60%
    ),
    radial-gradient(
      900px 520px at 85% 0%,
      rgba(242, 201, 76, 0.1),
      transparent 60%
    ),
    linear-gradient(
      180deg,
      ${colors.blueMarine} 0%,
      ${colors.bgDark} 65%,
      ${colors.bgDark} 100%
    );
  color: ${colors.white};
`;

const Main = styled.main`
  position: relative;
`;

const Section = styled.section`
  padding: 56px 0;

  @media (max-width: 768px) {
    padding: 42px 0;
  }
`;

const Container = styled.div`
  width: min(1200px, calc(100% - 32px));
  margin: 0 auto;
`;

const SectionHead = styled.div`
  margin-bottom: 16px;
`;

const Kicker = styled.div`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(16, 18, 36, 0.4);
  backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.9);
  font-size: 13px;

  svg {
    color: ${colors.skyBlue};
  }
`;

const H2 = styled.h2`
  margin: 12px 0 0;
  font-size: clamp(22px, 3vw, 30px);
  letter-spacing: -0.02em;
  font-weight: 900;
`;

const Lead = styled.p`
  margin: 10px 0 0;
  max-width: 78ch;
  color: rgba(255, 255, 255, 0.84);
  font-size: 14.5px;
  line-height: 1.7;
`;

const CardGrid = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: 14px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const VisualCard = styled.div`
  position: relative;
  border-radius: 12px 0 12px 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background-image: url(${(p) => p.$img});
  background-size: cover;
  background-position: center;
  min-height: 520px;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.45);

  @media (max-width: 980px) {
    min-height: 360px;
  }
`;

const VisualOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(
      900px 420px at 15% 10%,
      rgba(135, 206, 235, 0.2),
      transparent 60%
    ),
    radial-gradient(
      900px 420px at 85% 10%,
      rgba(242, 201, 76, 0.14),
      transparent 60%
    ),
    linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(16, 18, 36, 0.78) 55%,
      rgba(16, 42, 67, 0.92) 100%
    );
`;

const VisualContent = styled.div`
  position: absolute;
  inset: 0;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 12px;
`;

const VisualTitle = styled.div`
  font-weight: 900;
  font-size: 18px;
  letter-spacing: 0.02em;
`;

const VisualText = styled.div`
  color: rgba(255, 255, 255, 0.85);
  font-size: 13.8px;
  line-height: 1.6;
  max-width: 54ch;
`;

const MiniList = styled.div`
  display: grid;
  gap: 10px;
  margin-top: 6px;
`;

const MiniItem = styled.div`
  height: 42px;
  padding: 0 12px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(16, 18, 36, 0.4);
  backdrop-filter: blur(10px);
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.12s ease, background 0.12s ease;

  svg {
    color: ${colors.skyBlue};
  }
  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.07);
  }
`;

const FormCard = styled.div`
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(16, 18, 36, 0.55);
  backdrop-filter: blur(10px);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
  padding: 18px;
`;

const FormTitle = styled.div`
  font-size: 18px;
  font-weight: 900;
  letter-spacing: -0.02em;
`;

const FormSubtitle = styled.div`
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 13.8px;
  line-height: 1.6;
`;

const Form = styled.form`
  margin-top: 14px;
  display: grid;
  gap: 14px;
`;

const Row2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: grid;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.78);
`;

const baseInput = `
  width: 100%;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(16,18,36,0.35);
  color: ${colors.white};
  padding: 12px 12px;
  outline: none;
  transition: box-shadow .15s ease, border-color .15s ease, transform .15s ease;

  &::placeholder { color: rgba(255,255,255,0.55); }

  &:focus {
    border-color: rgba(135,206,235,0.35);
    box-shadow: 0 0 0 4px rgba(135,206,235,0.16);
  }
`;

const Input = styled.input`
  ${baseInput}
`;

const Textarea = styled.textarea`
  ${baseInput}
  resize: vertical;
  min-height: 140px;
`;

const Error = styled.div`
  font-size: 12.5px;
  color: #ffb4b4;
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.28);
  border-radius: 12px 0 12px 0;
  padding: 10px 10px;
`;

const Actions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 4px;
`;

const Primary = styled.button`
  height: 46px;
  padding: 0 14px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(135, 206, 235, 0.22);
  background: linear-gradient(
    135deg,
    ${colors.blueMarine},
    ${colors.bgSecondary}
  );
  color: ${colors.white};
  font-weight: 900;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 22px 60px rgba(0, 0, 0, 0.45);
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(135, 206, 235, 0.18),
      0 22px 60px rgba(0, 0, 0, 0.45);
  }
`;

const Ghost = styled.a`
  height: 46px;
  padding: 0 14px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.92);
  font-weight: 900;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.09);
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(135, 206, 235, 0.16);
  }
`;

const FinePrint = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.4;
`;

const MapSurface = styled.div`
  margin-top: 14px;
  border-radius: 12px 0 12px 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
`;

const FooterWrap = styled.div`
  margin-top: 32px;
`;
