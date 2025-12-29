// src/pages/EquipeCabinetProfilePage.jsx
import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { motion, useReducedMotion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, Languages, BriefcaseBusiness, BadgeCheck } from "lucide-react";

import { images } from "../../assets/images";
import bdoul from "../../assets/bdoul.jpeg";
import Fatoumata from "../../assets/keit.jpg";
import pol from "../../assets/pol.jpeg";

import { colors } from "../../Styles/colors";
import Footer from "../Accueil/Footerr";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import SEO from "../../DynmikSeo2026";

/* =========================================================
   DATA (doit matcher la liste)
========================================================= */
const TEAM_MEMBERS = [
  {
    id: "aod-1",
    slug: "me-amadou-oury-diallo",
    fullName: "Me Amadou Oury Diallo",
    role: "Avocat",
    title: "Avocat au Barreau",
    practiceAreas: ["Droit des affaires", "Contentieux", "Contrats", "..."],
    languages: ["Français"],
    location: "Conakry",
    email: "contact@aod-avocats.com",
    phone: "+224 6XX XX XX XX",
    photoUrl: images.maitre3,
    bioShort: " ",
    bioLong: " ",
    highlights: [
      "Stratégie contentieuse et référés",
      "Audit & sécurisation contractuelle",
      "Gestion des risques et conformité",
    ],
    credentials: [
      "Master — Droit des affaires",
      "Certificat — Techniques de plaidoirie",
    ],
  },
  {
    id: "aod-2",
    slug: "abdoulaye-bangoura",
    fullName: "M. Abdoulaye Bangoura",
    role: "Juriste",
    title: "Juriste-Conseil",
    practiceAreas: ["Veille juridique", "Rédaction", "Conformité"],
    languages: ["Français"],
    location: "Hamdalllaye /Conakry ",
    email: "contact@aod-avocats.com",
    phone: "+224 621 40 12 13",
    photoUrl: images.mbangou,
    bioShort:
      "Abdoulaye BANGOUTRA est juriste collaborateur au sein du cabinet AOD AVOCATS.",
    bioLong:
      "Abdoulaye BANGOUTRA est juriste collaborateur au sein du cabinet AOD AVOCATS. Titulaire d'une Maîtrise en Droit de l'Université Général Lansana CONTE de Sonfonia, Conakry. Il poursuit actuellement un Master en droit des affaires et du Contentieux. Il a exercé en qualité de Juriste Interne au sein du Cabinet KLG de 2012 à 2022. Il a été également membre de la Commission Electorale de la Fédération Guinéenne de Football.",
    highlights: ["Veille & notes", "Qualité documentaire", "Conformité"],
    credentials: [
      "Licence — Droit public (Université Général Lansana Conté)",
      "Master en droit des affaires et du contentieux (en cours)",
    ],
  },
  {
    id: "aod-3",
    slug: "paul-asterix-lamah",
    fullName: "M. Paul Astérix LAMAH",
    role: "Juriste",
    title: "Juriste-Conseil",
    practiceAreas: ["Droit des affaires", "Contentieux", "Droit minier & énergie"],
    languages: ["Français", "Anglais (intermédiaire)"],
    location: "Conakry",
    email: "paul.lamah5815@icloud.com",
    phone: "+224 620 32 26 20",
    photoUrl: pol,
    bioShort:
      "Juriste orienté droit des affaires et enjeux contemporains de l’entreprise.",
    bioLong:
      "Paul Astérix LAMAH est collaborateur au sein du cabinet AOD AVOCATS, où il exerce en qualité de juriste avec une orientation affirmée vers le droit des affaires et les enjeux juridiques contemporains de l’entreprise. Il intervient en conseil et en contentieux (création/structuration de sociétés, gouvernance, recouvrement). Il accompagne également sur le droit minier, l’immobilier, le maritime, le social, et les sujets RSE/environnement/contenu local.",
    highlights: ["Négociations", "Rédaction", "Structuration juridique"],
    credentials: ["Licence en droit des affaires", "Master 2 (parcours droit privé)"],
  },
  {
    id: "aod-4",
    slug: "abdoulaye-keita",
    fullName: "M. Abdoulaye Keita",
    role: "Juriste",
    title: "Juriste-Conseil",
    practiceAreas: [
      "Analyse juridique",
      "Procédure pénale",
      "Suivi des procédures",
      "Relation client",
    ],
    languages: ["Français", "Anglais (débutant)"],
    location: "Conakry",
    email: "contact@aod-avocats.com",
    phone: "+224 621 10 02 84",
    photoUrl: bdoul,
    bioShort: "Juriste-conseil chargé des dossiers de droit pénal.",
    bioLong:
      "Abdoulaye KEITA est juriste-conseil au sein du cabinet AOD AVOCATS, chargé du traitement des affaires pénales. Il intervient à toutes les étapes (précontentieux et contentieux), en appui aux avocats du cabinet, avec pour priorité la protection des droits et intérêts des clients.",
    highlights: [
      "Droit pénal & contentieux pénal",
      "Infractions économiques et financières",
      "Cybersécurité & cybercriminalité",
      "Suivi des procédures répressives",
    ],
    credentials: [
      "Licence en droit privé",
      "Master de droit privé fondamental (en cours) — Université Général Lansana Conté",
    ],
  },
  {
    id: "aod-5",
    slug: "kadiatou-camara",
    fullName: "M. Kadiatou Camara",
    role: "Stagiaire Juriste",
    title: "Juriste-Conseil",
    practiceAreas: [
      "Droit pénal",
      "Droit foncier & domanial",
      "Droit patrimonial de la famille",
      "Droit des sûretés",
    ],
    languages: ["Français", "Anglais (niveau intermédiaire)"],
    location: "Conakry",
    email: "kadiatou.camara224@icloud.com",
    phone: "+224 625 70 18 20",
    photoUrl: images.keitaseul2,
    bioShort: "",
    bioLong: "",
    highlights: ["Analyse & orientation", "Accueil & relation client", "Confidentialité"],
    credentials: ["Diplômée en droit — spécialisation carrières judiciaires"],
  },
  {
    id: "aod-6",
    slug: "fatoumata-keita",
    fullName: "M. Fatoumata Keita",
    role: "Juriste",
    title: "Juriste-Conseil",
    practiceAreas: ["Accueil", "Organisation", "Relation client"],
    languages: ["Français"],
    location: "Conakry",
    email: "contact@aod-avocats.com",
    phone: "+224 6XX XX XX XX",
    photoUrl: Fatoumata,
    bioShort: " ",
    bioLong: " ",
    highlights: ["Accueil & relation client", "Coordination", "Confidentialité"],
    credentials: ["Formation — Administration"],
  },
  {
    id: "aod-7",
    slug: "naromba-keita",
    fullName: "Naromba Keita",
    role: "Secrétaire",
    title: "Secrétaire",
    practiceAreas: ["Accueil", "Organisation", "Relation client"],
    languages: ["Français"],
    location: "Conakry",
    email: "contact@aod-avocats.com",
    phone: "+224 6XX XX XX XX",
    photoUrl: images.naroumb,
    bioShort: " ",
    bioLong: " ",
    highlights: ["Accueil & relation client", "Coordination", "Confidentialité"],
    credentials: ["Formation — Administration"],
  },
];

function initialsFromName(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const a = parts[0]?.[0] || "";
  const b = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (a + b).toUpperCase();
}

export default function EquipeCabinetProfilePage() {
  const reduceMotion = useReducedMotion();
  const { slug } = useParams();

  const member = useMemo(() => TEAM_MEMBERS.find((m) => m.slug === slug), [slug]);

  const SITE_URL = "https://www.aod-avocats.com";
  const LIST_PATH = "/equipe-cabinet";
  const canonicalUrl = `${SITE_URL}${LIST_PATH}/${slug || ""}`;

  // Si slug invalide : page propre + noindex
  if (!member) {
    return (
      <Page>
        <SEO
          title="Profil introuvable | AOD AVOCATS"
          description="Le profil demandé est introuvable. Consultez la page équipe AOD AVOCATS."
          canonicalUrl={canonicalUrl}
          noIndex
          ogType="website"
          siteName="AOD AVOCATS"
          ogLocale="fr_GN"
          lang="fr"
        />

        <div className="mt-20">
          <BardeNavigationpublic />
        </div>

        <Shell>
          <GlassCard>
            <h1>Profil introuvable</h1>
            <p>Le lien semble incorrect. Retournez vers la page équipe.</p>
            <BackLink to={LIST_PATH}>
              <ArrowLeft size={18} />
              Retour à l’équipe
            </BackLink>
          </GlassCard>
        </Shell>

        <div className="mt-40">
          <Footer />
        </div>
      </Page>
    );
  }

  const name = member.fullName?.trim();
  const jobTitle = (member.title || member.role || "Avocat").trim();
  const location = (member.location || "Conakry").trim();
  const areas = (member.practiceAreas || []).map((a) => String(a).trim()).filter(Boolean);
  const languages = (member.languages || []).map((l) => String(l).trim()).filter(Boolean);

  const seoTitle = `${name} | ${jobTitle} à ${location} | AOD AVOCATS`;
  const seoDescription = `Découvrez ${name}, ${jobTitle} du cabinet AOD AVOCATS à ${location}. Domaines : ${areas.slice(0, 6).join(", ") || "—"}. Contact et prise de rendez-vous.`;

  const seoKeywords = useMemo(() => {
    const base = [
      "AOD AVOCATS",
      "cabinet d’avocats",
      "cabinet d’avocats à Conakry",
      "avocat Conakry",
      "avocat Guinée",
      "meilleur avocat",
      "avocat recommandé",
      "avocat bien noté",
      "consultation avocat",
      "rendez-vous avocat",
      "conseil juridique",
    ];

    const localCombos = areas.flatMap((a) => [
      `avocat ${a} Conakry`,
      `avocat ${a} Guinée`,
      `${a} Conakry`,
      `${a} Guinée`,
    ]);

    const all = [
      ...base,
      name,
      jobTitle,
      location,
      ...areas,
      ...languages,
      ...localCombos,
    ]
      .map((s) => String(s).trim())
      .filter(Boolean);

    return Array.from(new Set(all)).join(", ");
  }, [name, jobTitle, location, areas, languages]);

  const ogImage = typeof member.photoUrl === "string" && member.photoUrl.trim() ? member.photoUrl : undefined;

  const schema = useMemo(() => {
    // Breadcrumb schema + Person + LegalService
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Accueil",
              item: `${SITE_URL}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Notre équipe",
              item: `${SITE_URL}${LIST_PATH}`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: name,
              item: canonicalUrl,
            },
          ],
        },
        {
          "@type": "LegalService",
          "@id": `${SITE_URL}#legalservice`,
          name: "AOD AVOCATS",
          url: `${SITE_URL}/`,
          areaServed: "Conakry, Guinée",
        },
        {
          "@type": "Person",
          "@id": `${canonicalUrl}#person`,
          name: name,
          jobTitle: jobTitle,
          url: canonicalUrl,
          image: ogImage,
          worksFor: { "@id": `${SITE_URL}#legalservice` },
          email: member.email ? `mailto:${String(member.email).trim()}` : undefined,
          telephone: member.phone ? String(member.phone).trim() : undefined,
          knowsAbout: areas.length ? areas : undefined,
          address: {
            "@type": "PostalAddress",
            addressLocality: location,
            addressCountry: "GN",
          },
        },
      ],
    };
  }, [canonicalUrl, name, jobTitle, ogImage, areas, location]);

  return (
    <Page>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        ogType="profile"
        siteName="AOD AVOCATS"
        ogLocale="fr_GN"
        lang="fr"
        imageAlt={`${name} — ${jobTitle} | AOD AVOCATS`}
        schema={schema}
      />

      <div className="mt-20">
        <BardeNavigationpublic />
      </div>

      <BackdropGlow aria-hidden="true" />

      <Shell>
        <TopBar
          as={motion.div}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <BackLink to={LIST_PATH}>
            <ArrowLeft size={18} />
            Retour à l’équipe
          </BackLink>
        </TopBar>

        <HeaderCard
          as={motion.section}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeaderGrid>
            <AvatarWrap>
              {member.photoUrl ? (
                <AvatarImg src={member.photoUrl} alt={name} />
              ) : (
                <AvatarFallback>{initialsFromName(name)}</AvatarFallback>
              )}
            </AvatarWrap>

            <HeaderInfo>
              <H1>{name}</H1>
              <Subline>
                <Pill>{member.role}</Pill>
                <span>{jobTitle}</span>
              </Subline>

              <MetaRow>
                <MetaItem>
                  <MapPin size={16} />
                  <span>{location}</span>
                </MetaItem>
                <MetaItem>
                  <Languages size={16} />
                  <span>{languages.join(", ") || "—"}</span>
                </MetaItem>
              </MetaRow>

              <ContactRow>
                {member.email ? (
                  <ContactBtn href={`mailto:${String(member.email).trim()}`}>
                    <Mail size={16} />
                    Email
                  </ContactBtn>
                ) : null}
                {member.phone ? (
                  <ContactBtn href={`tel:${String(member.phone).trim()}`}>
                    <Phone size={16} />
                    Appeler
                  </ContactBtn>
                ) : null}
              </ContactRow>
            </HeaderInfo>
          </HeaderGrid>
        </HeaderCard>

        <Grid>
          <MainCard
            as={motion.section}
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={reduceMotion ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <SectionTitle>À propos</SectionTitle>
            <Text>{member.bioLong || member.bioShort || "—"}</Text>
          </MainCard>

          <Side>
            <SideCard>
              <SideTitle>
                <BriefcaseBusiness size={16} />
                Domaines
              </SideTitle>
              <Chips>
                {(areas.length ? areas : ["—"]).map((a) => (
                  <Chip key={a}>{a}</Chip>
                ))}
              </Chips>
            </SideCard>

            <SideCard>
              <SideTitle>
                <BadgeCheck size={16} />
                Points forts
              </SideTitle>
              <Ul>
                {(member.highlights || []).length ? (
                  member.highlights.map((h) => <li key={h}>{h}</li>)
                ) : (
                  <li>—</li>
                )}
              </Ul>
            </SideCard>

            <SideCard>
              <SideTitle>
                <BadgeCheck size={16} />
                Parcours & certifications
              </SideTitle>
              <Ul>
                {(member.credentials || []).length ? (
                  member.credentials.map((c) => <li key={c}>{c}</li>)
                ) : (
                  <li>—</li>
                )}
              </Ul>
            </SideCard>
          </Side>
        </Grid>
      </Shell>

      <div className="mt-40">
        <Footer />
      </div>
    </Page>
  );
}

/* =========================================================
   STYLES — cohérents avec ta page équipe
========================================================= */
const floatSoft = keyframes`
  0%, 100% { transform: translateY(0px); opacity: 0.9; }
  50% { transform: translateY(-10px); opacity: 1; }
`;

const Page = styled.div`
  position: relative;
  min-height: 100vh;
  color: ${colors.white};
  background: radial-gradient(
      1200px 600px at 15% 10%,
      rgba(135, 206, 235, 0.18),
      transparent 55%
    ),
    radial-gradient(
      900px 500px at 85% 0%,
      rgba(242, 201, 76, 0.16),
      transparent 55%
    ),
    linear-gradient(
      180deg,
      ${colors.blueMarine} 0%,
      ${colors.bgDark} 60%,
      ${colors.bgDark} 100%
    );
  overflow: hidden;
`;

const BackdropGlow = styled.div`
  position: absolute;
  inset: -120px;
  background: radial-gradient(
      600px 380px at 20% 20%,
      rgba(140, 189, 214, 0.2),
      transparent 60%
    ),
    radial-gradient(
      520px 360px at 80% 30%,
      rgba(72, 101, 129, 0.4),
      transparent 55%
    ),
    radial-gradient(
      580px 420px at 50% 95%,
      rgba(242, 201, 76, 0.1),
      transparent 65%
    );
  filter: blur(6px);
  pointer-events: none;
  animation: ${floatSoft} 10s ease-in-out infinite;
`;

const Shell = styled.div`
  position: relative;
  width: min(1200px, calc(100% - 40px));
  margin: 0 auto;
  padding: 32px 0 56px;
`;

const GlassCard = styled.div`
  background: linear-gradient(
    180deg,
    rgba(16, 18, 36, 0.62) 40%,
    rgba(16, 18, 36, 0.46) 60%
  );
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 18px;
`;

const TopBar = styled.div`
  margin-bottom: 12px;
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: ${colors.skyBlue};
  font-weight: 900;
  padding: 10px 12px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(135, 206, 235, 0.22);
  background: rgba(135, 206, 235, 0.08);

  &:hover {
    background: rgba(135, 206, 235, 0.12);
  }
`;

const HeaderCard = styled(GlassCard)`
  padding: 18px;
`;

const HeaderGrid = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr;
  gap: 14px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`;

const AvatarWrap = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 12px 0 12px 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.04);

  @media (max-width: 820px) {
    width: 120px;
    height: 120px;
  }
`;

const AvatarImg = styled.img.attrs({ loading: "lazy", decoding: "async" })`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const AvatarFallback = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 28px;
  letter-spacing: 0.06em;
  color: ${colors.white};
  background: linear-gradient(
    135deg,
    rgba(135, 206, 235, 0.3),
    rgba(242, 201, 76, 0.18)
  );
`;

const HeaderInfo = styled.div`
  display: grid;
  gap: 10px;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: clamp(22px, 2.2vw, 32px);
  letter-spacing: -0.02em;
`;

const Subline = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  color: rgba(255, 255, 255, 0.8);
`;

const Pill = styled.div`
  font-size: 12px;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(242, 201, 76, 0.22);
  background: rgba(242, 201, 76, 0.08);
  color: ${colors.skyBlue};
  font-weight: 900;
`;

const MetaRow = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.84);

  svg {
    color: ${colors.blueDarkSky};
  }
`;

const ContactRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

const ContactBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 40px;
  padding: 0 12px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(135, 206, 235, 0.22);
  background: rgba(135, 206, 235, 0.08);
  color: ${colors.skyBlue};
  text-decoration: none;
  font-weight: 900;

  &:hover {
    background: rgba(135, 206, 235, 0.12);
  }
`;

const Grid = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 12px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const MainCard = styled(GlassCard)``;

const SectionTitle = styled.div`
  font-weight: 900;
  font-size: 13px;
  color: ${colors.skyBlue};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Text = styled.p`
  margin: 0;
  white-space: pre-line;
  color: rgba(255, 255, 255, 0.84);
  font-size: 13.5px;
  line-height: 1.65;
`;

const Side = styled.div`
  display: grid;
  gap: 12px;
`;

const SideCard = styled(GlassCard)``;

const SideTitle = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-weight: 900;
  font-size: 12.5px;
  color: ${colors.skyBlue};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-bottom: 10px;

  svg {
    color: ${colors.blueDarkSky};
  }
`;

const Chips = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.div`
  font-size: 12px;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(16, 18, 36, 0.22);
  color: rgba(255, 255, 255, 0.86);
`;

const Ul = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: rgba(255, 255, 255, 0.84);
  font-size: 13.5px;
  line-height: 1.6;

  li {
    margin: 6px 0;
  }
`;
