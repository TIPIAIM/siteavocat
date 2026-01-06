// src/pages/EquipeCabinetPage.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Users,
  Search,
  Filter,
  X,
  Scale,
  BriefcaseBusiness,
  Languages,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { images } from "../../assets/images";
import bdoul from "../../assets/bdoul.jpeg";
import Fatoumata from "../../assets/keit.jpg";
import pol from "../../assets/pol.jpeg";

// IMPORTANT : ton fichier exporte "export const colors = {...}"
import { colors } from "../../Styles/colors";
import Footer from "../Accueil/Footerr";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";

// ✅ SEO (Helmet)
import SEO from "../../DynmikSeo2026";

/* =========================================================
   DONNÉES (EXEMPLE) — remplace par l’équipe AOD-Avocats
   IMPORTANT : on ajoute "slug" pour /equipe-cabinet/:slug
========================================================= */
const TEAM_MEMBERS = [
  {
    id: "m-1",
    slug: "me-amadou-oury-diallo",
    fullName: "Amadou Oury Diallo",
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
    id: "m-2",
    slug: "abdoulaye-bangoura",
    fullName: "Abdoulaye Bangoura",
    role: "Juriste",
    title: "Juriste-Conseil",
    practiceAreas: ["Veille juridique", "Rédaction", "Conformité"],
    languages: ["Français"],
    location: "Hamdalllaye /Conakry ",
    email: "contact@aod-avocats.com",
    phone: "+224  621 40 12 13 ",
    photoUrl: images.mbangou,
    bioShort:
      " Abdoulaye BANGOUTRA est juriste collaborateur  au sein du cabinet AOD AVOCATS. Titulaire d'une Maîtrise en Droit  de l'Université Général Lansana CONTE de Sonfonia, Conakry. il poursuit actuellement un Master en droit des affaires et du Contentieux. Il a exercé en qualité de Juriste Interne  au sein du Cabinet  KLG de 2012 à 2022. il a été également été membre de la Commission Electorale de la Fédération Guinéenne de Football.",
    bioLong:
      "Abdoulaye BANGOUTRA est juriste collaborateur  au sein du cabinet AOD AVOCATS. Titulaire d'une Maîtrise en Droit  de l'Université Général Lansana CONTE de Sonfonia, Conakry. il poursuit actuellement un Master en droit des affaires et du Contentieux. Il a exercé en qualité de Juriste Interne  au sein du Cabinet  KLG de 2012 à 2022. il a été également été membre de la Commission Electorale de la Fédération Guinéenne de Football. ",
    highlights: ["Veille & notes", "Qualité documentaire", "Conformité"],
    credentials: [
      "Licence — Droit public (’université de général lansana conte)",
      " Master en droit des affaires et du contentieux en cours",
    ],
  },
  {
    id: "m-3",
    slug: "paul-asterix-lamah",
    fullName: "Paul Astérix LAMAH",
    role: "Juriste",
    title: "Juriste conseil",
    practiceAreas: ["Droit des affaires ", "Contentieux", "Droit Minier et énergie "],
    languages: ["Français", "Anglais(intermédiaire)"],
    location: "Conakry",
    email: " paul.lamah5815@icloud.com",
    phone: "+224 620 32 26 20 ",
    photoUrl: pol, // images.moe0311
    bioShort:
      "Paul Astérix LAMAH est collaborateur au sein du cabinet AOD AVOCATS, où il exerce en qualité de juriste avec une orientation affirmée vers le droit des affaires et les enjeux juridiques contemporains de l’entreprise. Il a récemment assisté une multinationale du secteur de l’énergie dans une restructuration sociale d’envergure, et contribué avec succès à la conclusion d’une transaction stratégique pour une compagnie minière, portant sur un enjeu financier de 2 millions de dollars, en collaboration avec la marine marchande et les autorités minières. ",
    bioLong:
      "Paul Astérix LAMAH est collaborateur au sein du cabinet AOD AVOCATS, où il exerce en qualité de juriste avec une orientation affirmée vers le droit des affaires et les enjeux juridiques contemporains de l’entreprise.Titulaire d’une Licence en droit des affaires et d’un Master en droit privé fondamental de l’Université Général Lansana Conté, il poursuit actuellement la finalisation de son parcours académique à travers un mémoire portant sur « La fusion des sociétés commerciales », illustrant son intérêt pour les mécanismes juridiques de transformation et de croissance des sociétés. Il assiste, en conseil, aussi bien les particuliers que les opérateurs économiques dans la création et la structuration de sociétés, les restructurations, ainsi que la gouvernance d’entreprise. Il intervient également dans le cadre des contentieux civils et commerciaux, incluant les procédures de recouvrement de créances. Sensible aux enjeux sociaux et environnementaux, Paul accompagne par ailleurs les entreprises dans les domaines du droit minier, du droit immobilier, du droit maritime, du droit social, ainsi que sur les questions de Responsabilité Sociétale des Entreprises (RSE), d’environnement et de contenu local, qui constituent le cœur de son engagement professionnel.",
    highlights: [" Négociations ", "rédaction"],
    credentials: [" Licence en droit des affaires , Master 2 "],
  },
  {
    id: "m-4",
    slug: "abdoulaye-keita",
    fullName: "Abdoulaye Keita",
    role: "Juriste",
    title: "Juriste-Conseil",
    practiceAreas: [
      "Aanalyse juridique",
      "Procédure pénale",
      "Suivi méthodique des procédures",
      "Relation client",
    ],
    languages: ["Français", "Anglais(débutant)"],
    location: "Conakry",
    email: "contact@aod-avocats.com",
    phone: "+224 621 10 02 84",
    photoUrl: bdoul, //images.abdoulayeavoc
    bioShort:
      "Abdoulaye KEITA est juriste-conseil au sein du cabinet AOD AVOCATS, où il est chargé du traitement des dossiers relevant du droit pénal. Il intervient à toutes les étapes de la procédure pénale, tant au stade précontentieux que contentieux, en appui aux avocats du cabinet, avec pour priorité la protection des droits et intérêts des clients.",
    bioLong:
      "Abdoulaye KEITA Juriste-Conseil – Chargé des affaires pénales Cabinet AOD AVOCATS Abdoulaye KEITA est juriste-conseil au sein du cabinet AOD AVOCATS, où il est chargé du traitement des affaires pénales. Il intervient à toutes les étapes de la procédure pénale, tant au stade précontentieux que contentieux, en appui à l’avocat du cabinet, en veillant à la protection des droits et intérêts des clients. Titulaire d’une Licence en droit privé, spécialisation carrière judiciaire à l’université Général Lansana CONTE de Sonfonia-Conakry, il est actuellement auditeur en Master de droit privé fondamental dans la même Université. Sa formation universitaire, alliée à une pratique soutenue en cabinet, lui permet d’aborder les dossiers pénaux avec méthode, rigueur et sens stratégique.Au sein du cabinet, il participe notamment à l’analyse juridique des infractions et des faits poursuivis, à la préparation, le suivi et la coordination des procédures pénales (enquêtes, instructions et audiences), la rédaction de notes juridiques, plaintes, dénonciations et mémoires pénaux, l’assistance juridique des clients impliqués dans des procédures pénales, le suivi des dossiers devant les juridictions répressives compétentes. Son champ d’intervention couvre aussi bien les infractions de droit commun que les infractions économiques et financières, avec un intérêt particulier pour les questions liées au blanchiment de capitaux, aux atteintes au patrimoine et aux infractions commises dans le cadre des activités professionnelles. Reconnu pour sa discrétion, sa discipline professionnelle et sa capacité d’analyse, Abdoulaye KEITA inscrit son action dans une démarche de défense rigoureuse et éthique des droits des clients, dans le strict respect des règles de procédure pénale et des exigences déontologiques du cabinet. ",
    highlights: [
      "Droit pénal",
      "Contentieux pénal",
      "Infractions économiques et -",
      "financière",
      "Cybersécurité",
      "Cybercriminalité ",
      "Suivi des procédures répressives",
    ],
    credentials: [
      "Licence en droit privé — Master de droit privé fondamental(en start) à l’université Général Lansana CONTE de Sonfonia-Conakry,",
    ],
  },
  {
    id: "m-5",
    slug: "kadiatou-camara",
    fullName: "Kadiatou Camara",
    role: "Stagiaire Juriste",
    title: "Juriste-Conseil",
    practiceAreas: [
      "Droit pénal",
      "Droit foncier et domaniale",
      "droit patrimonial de la famille",
      "Droit des sûretés",
    ],
    languages: ["Français", "Anglais (niveau intermédiaire)"],
    location: "Conakry",
    email: " Kadiatou.camara224@icloud.com ",
    phone: "+224 625 70 18 20",
    photoUrl: images.keitaseul2,
    bioShort: "",
    bioLong: "",
    highlights: [
      "Analyse juridique et orientation",
      "Accueil & relation client",
      "Coordination",
      "Confidentialité",
    ],
    credentials: ["Diplômée en droit spécialisation carrières judiciaires"],
  },
  {
    id: "m-6",
    slug: "fatoumata-keita",
    fullName: "Fatoumata Keita",
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
    id: "m-7",
    slug: "naromba-keita",
    fullName: "Naromba Keita",
    role: "Secretaire",
    title: "Secretaire",
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

/* =========================================================
   UTILS
========================================================= */
function uniqueFromArrayOfArrays(arrays) {
  const set = new Set();
  arrays.flat().forEach((v) => set.add(v));
  return ["Tous", ...Array.from(set)];
}

function initialsFromName(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const a = parts[0]?.[0] || "";
  const b = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (a + b).toUpperCase();
}

// slugify robuste (accents, espaces, ponctuation)
function slugify(input = "") {
  return String(input)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

/* =========================================================
   COMPONENT
========================================================= */
export default function EquipeCabinetPage() {
  const reduceMotion = useReducedMotion();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("Tous");
  const [areaFilter, setAreaFilter] = useState("Tous");

  const [selected, setSelected] = useState(null);
  const dialogRef = useRef(null);

  const roles = useMemo(
    () => uniqueFromArrayOfArrays(TEAM_MEMBERS.map((m) => [m.role])),
    []
  );
  const areas = useMemo(
    () => uniqueFromArrayOfArrays(TEAM_MEMBERS.map((m) => m.practiceAreas || [])),
    []
  );

  // ✅ SEO
  const seoCanonicalUrl = "https://www.aod-avocats.com/equipe-cabinet";
  const seoTitle =
    "Notre Équipe | AOD AVOCATS — Cabinet d’avocats à Conakry (Guinée)";
  const seoDescription =
    "Découvrez l’équipe AOD AVOCATS : avocats et juristes à Conakry (Guinée). Conseil, contentieux, droit des affaires, contrats, droit pénal, droit minier, conformité et accompagnement stratégique.";

  const seoKeywords = useMemo(() => {
    const googleIntent = [
      "avocat",
      "cabinet avocat",
      "cabinet d’avocats",
      "cabinet d'avocats",
      "meilleur avocat",
      "meilleurs avocats",
      "avocat recommandé",
      "avocat expérimenté",
      "avocat proche",
      "avocat près de moi",
      "cabinet avocat près de moi",
      "avocat contact",
      "avocat téléphone",
      "consultation avocat",
      "rendez-vous avocat",
      "honoraires avocat",
      "prise de rendez-vous avocat",
      "avocat entreprise",
      "avocat société",
      "avocat litige",
      "avocat contentieux",
      "avocat contrats",
    ];

    const local = [
      "Conakry",
      "Guinée",
      "République de Guinée",
      "cabinet d’avocats à Conakry",
      "cabinet d'avocats à Conakry",
      "cabinet d’avocats en Guinée",
      "cabinet d'avocats en Guinée",
      "avocat Conakry",
      "avocat en Guinée",
      "meilleur avocat Conakry",
      "meilleur avocat Guinée",
      "cabinet avocat Conakry",
      "cabinet avocat Guinée",
      "avocat Conakry contact",
      "avocat Conakry téléphone",
      "consultation avocat Conakry",
      "rendez-vous avocat Conakry",
    ];

    const brand = [
      "AOD AVOCATS",
      "AOD Avocats",
      "AOD-Avocats",
      "aod-avocats",
      "www.aod-avocats.com",
      "aod-avocats.com",
    ];

    const practice = [
      "droit des affaires",
      "avocat droit des affaires",
      "droit commercial",
      "droit des sociétés",
      "contentieux civil",
      "contentieux commercial",
      "recouvrement de créances",
      "rédaction de contrats",
      "audit contractuel",
      "conformité",
      "risques et conformité",
      "droit pénal",
      "procédure pénale",
      "contentieux pénal",
      "infractions économiques et financières",
      "blanchiment de capitaux",
      "cybersécurité",
      "cybercriminalité",
      "droit minier",
      "droit de l’énergie",
      "droit immobilier",
      "droit foncier",
      "droit social",
      "droit du travail",
      "RSE",
      "environnement",
      "contenu local",
      "droit maritime",
    ];

    const names = TEAM_MEMBERS.map((m) => m.fullName).filter(Boolean);
    const rolesK = Array.from(new Set(TEAM_MEMBERS.map((m) => m.role).filter(Boolean)));
    const areasK = Array.from(
      new Set(
        TEAM_MEMBERS.flatMap((m) =>
          (m.practiceAreas || []).map((a) => String(a).trim())
        ).filter(Boolean)
      )
    );

    const all = [
      ...brand,
      ...local,
      ...googleIntent,
      ...practice,
      ...rolesK,
      ...areasK,
      ...names,
    ]
      .map((s) => String(s).trim())
      .filter(Boolean);

    return Array.from(new Set(all)).join(", ");
  }, []);

  const seoOgImage = useMemo(() => {
    const first = TEAM_MEMBERS.find(
      (m) => typeof m.photoUrl === "string" && m.photoUrl.trim()
    )?.photoUrl;
    return first || undefined;
  }, []);

  const seoSchema = useMemo(() => {
    const employees = TEAM_MEMBERS.map((m) => ({
      "@type": "Person",
      name: m.fullName,
      jobTitle: m.title || m.role,
      url: `https://www.aod-avocats.com/equipe-cabinet/${m.slug || slugify(m.fullName)}`,
      email: m.email ? `mailto:${String(m.email).trim()}` : undefined,
      telephone: m.phone ? String(m.phone).trim() : undefined,
      address: m.location
        ? {
            "@type": "PostalAddress",
            addressLocality: String(m.location).trim(),
            addressCountry: "GN",
          }
        : undefined,
    }));

    return [
      {
        "@context": "https://schema.org",
        "@type": "LegalService",
        name: "AOD AVOCATS",
        url: seoCanonicalUrl,
        description: seoDescription,
        areaServed: [
          { "@type": "City", name: "Conakry" },
          { "@type": "Country", name: "Guinée" },
        ],
        email: "mailto:contact@aod-avocats.com",
        image: seoOgImage,
        employee: employees,
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: seoTitle,
        url: seoCanonicalUrl,
        description: seoDescription,
        isPartOf: { "@type": "WebSite", name: "AOD AVOCATS", url: "https://www.aod-avocats.com/" },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Accueil",
            item: "https://www.aod-avocats.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Notre Équipe",
            item: seoCanonicalUrl,
          },
        ],
      },
    ];
  }, [seoOgImage]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return TEAM_MEMBERS.filter((m) => {
      const matchesQuery =
        !q ||
        m.fullName.toLowerCase().includes(q) ||
        (m.title || "").toLowerCase().includes(q) ||
        (m.role || "").toLowerCase().includes(q) ||
        (m.bioShort || "").toLowerCase().includes(q) ||
        (m.practiceAreas || []).some((a) => a.toLowerCase().includes(q));

      const matchesRole = roleFilter === "Tous" || m.role === roleFilter;
      const matchesArea =
        areaFilter === "Tous" || (m.practiceAreas || []).includes(areaFilter);

      return matchesQuery && matchesRole && matchesArea;
    });
  }, [query, roleFilter, areaFilter]);

  const clearFilters = () => {
    setQuery("");
    setRoleFilter("Tous");
    setAreaFilter("Tous");
  };

  // Fermer modal avec ESC
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Focus sur le dialog à l’ouverture
  useEffect(() => {
    if (selected && dialogRef.current) dialogRef.current.focus();
  }, [selected]);

  return (
    <Page>
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonicalUrl={seoCanonicalUrl}
        ogImage={seoOgImage}
        ogType="website"
        siteName="AOD AVOCATS"
        schema={seoSchema}
      />

      <div className="mt-20">
        <BardeNavigationpublic />
      </div>

      <BackdropGlow aria-hidden="true" />

      <Shell>
        <Hero
          as={motion.section}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeroTop>
            <HeroBadge>
              <Scale size={16} />
              <span>Cabinet d’avocats</span>
            </HeroBadge>
            <HeroTitle>
              Notre Équipe
              <AccentDot aria-hidden="true" />
            </HeroTitle>
            <HeroSubtitle>
              Une équipe structurée, orientée résultats, avec une exigence
              constante de confidentialité, rigueur et qualité d’exécution.
            </HeroSubtitle>
          </HeroTop>
        </Hero>

        <Toolbar
          as={motion.section}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={reduceMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06 }}
        >
          <ToolbarRow>
            <SearchWrap>
              <Search size={18} />
              <SearchInput
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un membre, un rôle, un domaine…"
                aria-label="Rechercher un membre"
              />
              {query ? (
                <IconButton
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Effacer la recherche"
                >
                  <X size={18} />
                </IconButton>
              ) : null}
            </SearchWrap>

            <SelectWrap aria-label="Filtrer par rôle">
              <Filter size={18} />
              <Select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </Select>
            </SelectWrap>

            <SelectWrap aria-label="Filtrer par domaine">
              <BriefcaseBusiness size={18} />
              <Select
                value={areaFilter}
                onChange={(e) => setAreaFilter(e.target.value)}
              >
                {areas.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </Select>
            </SelectWrap>

            <ClearButton type="button" onClick={clearFilters}>
              Réinitialiser
            </ClearButton>
          </ToolbarRow>

          <ToolbarMeta>
            <MetaPill>
              <span>Résultats</span>
              <strong>{filtered.length}</strong>
            </MetaPill>
            <MetaHint>
              Survole une photo pour lire un extrait. Clique sur “Voir le profil”
              pour ouvrir la page du profil.
            </MetaHint>
          </ToolbarMeta>
        </Toolbar>

        {filtered.length === 0 ? (
          <Empty
            as={motion.section}
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            animate={reduceMotion ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <EmptyIcon>
              <Users size={22} />
            </EmptyIcon>
            <EmptyTitle>Aucun profil ne correspond aux filtres</EmptyTitle>
            <EmptyText>
              Ajuste la recherche, ou réinitialise les filtres pour afficher
              l’ensemble des membres.
            </EmptyText>
            <EmptyAction type="button" onClick={clearFilters}>
              Réinitialiser
            </EmptyAction>
          </Empty>
        ) : (
          <Grid
            as={motion.section}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? false : { opacity: 1 }}
            transition={{ duration: 0.35 }}
          >
            {filtered.map((m, idx) => {
              const memberSlug = m.slug || slugify(m.fullName);

              return (
                <MemberCard
                  key={m.id}
                  as={motion.article}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={reduceMotion ? false : { opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: Math.min(idx * 0.04, 0.18),
                  }}
                  onClick={() => setSelected(m)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") setSelected(m);
                  }}
                  aria-label={`Ouvrir la fiche de ${m.fullName}`}
                >
                  <PhotoFrame aria-hidden="false">
                    {m.photoUrl ? (
                      <PhotoImg src={m.photoUrl} alt={m.fullName} className="photoImg" />
                    ) : (
                      <PhotoFallback>{initialsFromName(m.fullName)}</PhotoFallback>
                    )}

                    <PhotoOverlay aria-hidden="true">
                      <OverlayTop>
                        <OverlayRole>{m.role}</OverlayRole>
                        <OverlayChip>
                          <MapPin size={14} />
                          <span>{m.location || "—"}</span>
                        </OverlayChip>
                      </OverlayTop>

                      <OverlayBio>{m.bioShort}</OverlayBio>

                      <OverlayBottom>
                        <OverlayMini>
                          <Languages size={14} />
                          <span>{(m.languages || []).join(", ") || "—"}</span>
                        </OverlayMini>

                        {/* ✅ Remplace “Apropos” par “Voir le profil” et navigue vers /equipe-cabinet/:slug */}
                        <OverlayCTAButton
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            navigate(`/equipe-cabinet/${memberSlug}`);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              e.stopPropagation();
                              navigate(`/equipe-cabinet/${memberSlug}`);
                            }
                          }}
                          aria-label={`Voir le profil de ${m.fullName}`}
                        >
                          <span>Voir le profil</span>
                          <ArrowUpRight size={18} />
                        </OverlayCTAButton>
                      </OverlayBottom>
                    </PhotoOverlay>

                    <PhotoSheen aria-hidden="true" className="photoSheen" />
                  </PhotoFrame>

                  <CardContent>
                    <NameRow>
                      <Name>{m.fullName}</Name>
                      <TitlePill>{m.title}</TitlePill>
                    </NameRow>

                    <TagsRow>
                      {(m.practiceAreas || []).slice(0, 3).map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                      {(m.practiceAreas || []).length > 3 ? (
                        <TagMuted>+{(m.practiceAreas || []).length - 3}</TagMuted>
                      ) : null}
                    </TagsRow>
                  </CardContent>
                </MemberCard>
              );
            })}
          </Grid>
        )}
      </Shell>

      {/* MODAL — BIO (optionnel, tu peux le garder) */}
      <AnimatePresence>
        {selected ? (
          <Overlay
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduceMotion ? 0.01 : 0.18 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setSelected(null);
            }}
            aria-hidden={false}
          >
            <Dialog
              as={motion.div}
              role="dialog"
              aria-modal="true"
              aria-label={`Biographie complète de ${selected.fullName}`}
              ref={dialogRef}
              tabIndex={-1}
              initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
              animate={reduceMotion ? false : { opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.22 }}
            >
              <DialogTop>
                <DialogIdentity>
                  <DialogAvatar>
                    {selected.photoUrl ? (
                      <DialogAvatarImg src={selected.photoUrl} alt={selected.fullName} />
                    ) : (
                      <DialogAvatarFallback>
                        {initialsFromName(selected.fullName)}
                      </DialogAvatarFallback>
                    )}
                  </DialogAvatar>

                  <div>
                    <DialogName>{selected.fullName}</DialogName>
                    <DialogSub>
                      <DialogPill>{selected.role}</DialogPill>
                      <span>{selected.title}</span>
                    </DialogSub>
                  </div>
                </DialogIdentity>

                <IconButton
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Fermer la biographie"
                >
                  <X size={20} />
                </IconButton>
              </DialogTop>

              <DialogGrid>
                <DialogSection>
                  <SectionTitle>À propos</SectionTitle>
                  <Paragraph>{selected.bioLong}</Paragraph>
                </DialogSection>

                <Side>
                  <SideCard>
                    <SideTitle>Domaines</SideTitle>
                    <SideTags>
                      {(selected.practiceAreas || []).map((t) => (
                        <SideTag key={t}>{t}</SideTag>
                      ))}
                    </SideTags>
                  </SideCard>

                  <SideCard>
                    <SideTitle>Points forts</SideTitle>
                    <List>
                      {(selected.highlights || []).map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </List>
                  </SideCard>

                  <SideCard>
                    <SideTitle>Langues</SideTitle>
                    <Inline>
                      <Languages size={16} />
                      <span>{(selected.languages || []).join(", ") || "—"}</span>
                    </Inline>
                  </SideCard>

                  <SideCard>
                    <SideTitle>Coordonnées</SideTitle>
                    <ContactLine>
                      <Mail size={16} />
                      <a href={`mailto:${String(selected.email || "").trim()}`}>
                        {String(selected.email || "").trim()}
                      </a>
                    </ContactLine>
                    <ContactLine>
                      <Phone size={16} />
                      <a href={`tel:${String(selected.phone || "").replace(/\s+/g, "")}`}>
                        {String(selected.phone || "").trim()}
                      </a>
                    </ContactLine>
                    <ContactLine>
                      <MapPin size={16} />
                      <span>{selected.location || "—"}</span>
                    </ContactLine>
                  </SideCard>

                  {(selected.credentials || []).length ? (
                    <SideCard>
                      <SideTitle>Parcours & certifications</SideTitle>
                      <List>
                        {selected.credentials.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </List>
                    </SideCard>
                  ) : null}
                </Side>
              </DialogGrid>

              <DialogFooter>
                {/* ✅ Bouton profil aussi dans le modal */}
                <PrimaryButton
                  type="button"
                  onClick={() => {
                    const s = selected.slug || slugify(selected.fullName);
                    setSelected(null);
                    navigate(`/equipe-cabinet/${s}`);
                  }}
                >
                  Voir le profil
                </PrimaryButton>

                <SecondaryButton type="button" onClick={() => setSelected(null)}>
                  Fermer
                </SecondaryButton>
              </DialogFooter>
            </Dialog>
          </Overlay>
        ) : null}
      </AnimatePresence>

      <div className="mt-40">
        <Footer />
      </div>
    </Page>
  );
}

/* =========================================================
   STYLES — Palette AOD-Avocats + Photo Overlay “mask”
========================================================= */
const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50%{ background-position: 100% 50%; }
  100%{ background-position: 0% 50%; }
`;

const floatSoft = keyframes`
  0%, 100% { transform: translateY(0px); opacity: 0.9; }
  50% { transform: translateY(-10px); opacity: 1; }
`;

const sheenMove = keyframes`
  0% { transform: translateX(-70%) rotate(18deg); opacity: 0; }
  12% { opacity: 0.25; }
  45% { opacity: 0.08; }
  100% { transform: translateX(140%) rotate(18deg); opacity: 0; }
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
  width: min(1400px, calc(100% - 40px));
  margin: 0 auto;
  padding: 32px 0 56px;
`;

const Glass = styled.div`
  background: linear-gradient(
    180deg,
    rgba(16, 18, 36, 0.62) 40%,
    rgba(16, 18, 36, 0.46) 60%
  );
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(10px);
  border-radius: 12px 0 12px 0;
`;

/* HERO */
const Hero = styled(Glass)`
  padding: 28px 26px;
  margin-bottom: 16px;
`;

const HeroTop = styled.div`
  display: grid;
  gap: 10px;
`;

const HeroBadge = styled.div`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 10px;
  border-radius: 8px 0 8px;
  border: 1px solid rgba(242, 201, 76, 0.22);
  background: ${colors.blueDarkSky}20;
  color: ${colors.white};
  font-size: 13px;
`;

const HeroTitle = styled.h1`
  margin: 0;
  font-size: clamp(26px, 3.2vw, 40px);
  line-height: 1.12;
  letter-spacing: -0.02em;
  background: linear-gradient(
    90deg,
    ${colors.blueDarkSky} 50%,
    ${colors.goldenYellow}50 30%,
    ${colors.white} 20%
  );
  font-weight: 800;
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${gradientShift} 4s ease infinite;
`;

const AccentDot = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-left: 10px;
  border-radius: 999px;
  background: ${colors.white};
  box-shadow: 0 0 0 6px rgba(242, 201, 76, 0.12);
`;

const HeroSubtitle = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 14px;
  line-height: 1.55;
  max-width: 68ch;
`;

/* TOOLBAR */
const Toolbar = styled(Glass)`
  padding: 14px 14px;
  margin-bottom: 14px;
`;

const ToolbarRow = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 0.55fr 0.75fr auto;
  gap: 10px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const SearchWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(16, 18, 36, 0.35);
  padding: 10px 10px;

  svg {
    color: rgba(255, 255, 255, 0.75);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: ${colors.white};
  font-size: 14px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.55);
  }
`;

const SelectWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(16, 18, 36, 0.35);
  padding: 10px 10px;

  svg {
    color: rgba(255, 255, 255, 0.75);
  }
`;

const Select = styled.select`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: ${colors.white};
  font-size: 14px;
  appearance: none;

  option {
    color: #0b1220;
  }
`;

const ClearButton = styled.button`
  height: 44px;
  border-radius: 10px 0 10px 0;
  border: 1px solid rgba(242, 201, 76, 0.08);
  background: ${colors.bgDark};
  color: ${colors.white};
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 12px 30px rgba(242, 201, 76, 0.12);
    background: rgba(242, 201, 76, 0.14);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(135, 206, 235, 0.18);
  }
`;

const ToolbarMeta = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  @media (max-width: 980px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MetaPill = styled.div`
  display: inline-flex;
  align-items: baseline;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 8px 0 8px 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  font-size: 13px;

  strong {
    color: ${colors.skyBlue};
    font-weight: 800;
  }
`;

const MetaHint = styled.div`
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.7);
`;

const IconButton = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.06);
  color: ${colors.white};
  border-radius: 12px 0 12px 0;
  padding: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, background 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.09);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(135, 206, 235, 0.18);
  }
`;

/* GRID / CARD */
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const MemberCard = styled(Glass)`
  padding: 12px;
  cursor: pointer;
  outline: none;
  transition: transform 0.18s ease, box-shadow 0.18s ease,
    border-color 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(135, 206, 235, 0.28);
    box-shadow: 0 26px 80px rgba(0, 0, 0, 0.5);
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px rgba(135, 206, 235, 0.2),
      0 26px 80px rgba(0, 0, 0, 0.5);
  }

  &:hover .photoOverlay,
  &:focus-visible .photoOverlay {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }

  &:hover .photoImg,
  &:focus-visible .photoImg {
    transform: scale(1.06);
    filter: saturate(1.02) contrast(1.05);
  }

  &:hover .photoSheen,
  &:focus-visible .photoSheen {
    animation: ${sheenMove} 1.2s ease forwards;
  }
`;

const PhotoFrame = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px 0 8px 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  height: 400px;

  @media (max-width: 980px) {
    height: 400px;
  }
`;

const PhotoImg = styled.img.attrs({
  loading: "lazy",
  decoding: "async",
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transform: scale(1);
  transition: transform 0.45s ease, filter 0.45s ease;
  will-change: transform;
`;

const PhotoFallback = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 26px;
  letter-spacing: 0.06em;
  color: ${colors.white};
  background: linear-gradient(
    135deg,
    rgba(135, 206, 235, 0.3),
    rgba(242, 201, 76, 0.18)
  );
`;

const PhotoOverlay = styled.div.attrs({ className: "photoOverlay" })`
  position: absolute;
  inset: 0;
  padding: 14px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 10px;

  background: linear-gradient(
      180deg,
      rgba(16, 18, 36, 0.55) 0%,
      rgba(16, 18, 36, 0.78) 45%,
      rgba(16, 18, 36, 0.92) 100%
    ),
    radial-gradient(
      600px 240px at 20% 10%,
      rgba(135, 206, 235, 0.18),
      transparent 55%
    ),
    radial-gradient(
      520px 240px at 80% 35%,
      rgba(242, 201, 76, 0.12),
      transparent 58%
    );
  backdrop-filter: blur(6px);

  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.22s ease, transform 0.22s ease;
  pointer-events: none;

  @media (hover: none) {
    display: none;
  }
`;

const OverlayTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const OverlayRole = styled.div`
  font-size: 12px;
  font-weight: 900;
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(242, 201, 76, 0.24);
  background: rgba(242, 201, 76, 0.1);
  color: ${colors.blueDarkSky};
`;

const OverlayChip = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.86);
  padding: 7px 10px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.06);

  svg {
    color: ${colors.blueDarkSky};
  }
`;

const OverlayBio = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 13.6px;
  line-height: 1.55;

  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;

  position: relative;
  padding-left: 12px;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 2px;
    bottom: 2px;
    width: 3px;
    border-radius: 999px;
    background: linear-gradient(
      180deg,
      ${colors.skyBlue},
      ${colors.goldenYellow}
    );
    opacity: 0.95;
  }
`;

const OverlayBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const OverlayMini = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.84);

  svg {
    color: ${colors.skyBlue};
  }
`;

// ✅ CTA cliquable (button) pour navigation
const OverlayCTAButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 900;
  color: ${colors.skyBlue};
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid rgba(135, 206, 235, 0.22);
  background: rgba(135, 206, 235, 0.1);
  cursor: pointer;

  &:hover {
    background: rgba(135, 206, 235, 0.14);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(135, 206, 235, 0.18);
  }
`;

const PhotoSheen = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0;

  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.96) 45%,
    rgba(255, 255, 255, 0.91) 55%,
    transparent 100%
  );
  width: 60%;
  transform: translateX(-70%) rotate(18deg);
`;

const CardContent = styled.div`
  padding: 12px 4px 4px;
`;

const NameRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
`;

const Name = styled.h3`
  margin: 0;
  font-size: 15.6px;
  letter-spacing: -0.01em;
`;

const TitlePill = styled.div`
  font-size: 12px;
  padding: 6px 8px;
  border-radius: 8px 0 8px 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.84);
  white-space: nowrap;
`;

const TagsRow = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Tag = styled.div`
  font-size: 11.5px;
  padding: 6px 8px;
  border-radius: 8px 0 9px 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.82);
`;

const TagMuted = styled(Tag)`
  color: rgba(255, 255, 255, 0.7);
`;

/* EMPTY STATE */
const Empty = styled(Glass)`
  padding: 22px;
  text-align: center;
`;

const EmptyIcon = styled.div`
  width: 46px;
  height: 46px;
  margin: 0 auto 10px;
  border-radius: 10px 0 10px 0;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  color: ${colors.skyBlue};
`;

const EmptyTitle = styled.h3`
  margin: 0;
  font-size: 16px;
`;

const EmptyText = styled.p`
  margin: 8px 0 0;
  color: rgba(255, 255, 255, 0.78);
  font-size: 13.5px;
  line-height: 1.55;
`;

const EmptyAction = styled.button`
  margin-top: 14px;
  height: 42px;
  padding: 0 14px;
  border-radius: 10px 0 10px 0;
  border: 1px solid rgba(135, 206, 235, 0.22);
  background: rgba(135, 206, 235, 0.1);
  color: ${colors.skyBlue};
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background: rgba(135, 206, 235, 0.14);
  }
`;

/* MODAL Biographie */
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${colors.overlayAlpha};
  display: grid;
  place-items: center;
  padding: 18px;
  z-index: 60;
`;

const Dialog = styled(Glass)`
  width: min(980px, 100%);
  max-height: min(80vh, 720px);
  overflow: auto;
  outline: none;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.12);
    border-radius: 999px;
  }
`;

const DialogTop = styled.div`
  padding: 16px 16px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

const DialogIdentity = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const DialogAvatar = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 12px 0 12px 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
`;

const DialogAvatarImg = styled.img.attrs({
  loading: "lazy",
  decoding: "async",
})`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const DialogAvatarFallback = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  font-weight: 900;
  letter-spacing: 0.06em;
  color: ${colors.white};
  background: linear-gradient(
    135deg,
    rgba(135, 206, 235, 0.3),
    rgba(242, 201, 76, 0.18)
  );
`;

const DialogName = styled.div`
  font-weight: 900;
  letter-spacing: -0.02em;
  font-size: 16px;
`;

const DialogSub = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
`;

const DialogPill = styled.div`
  font-size: 12px;
  padding: 6px 8px;
  border-radius: 999px;
  border: 1px solid rgba(242, 201, 76, 0.22);
  background: rgba(242, 201, 76, 0.08);
  color: ${colors.skyBlue};
`;

const DialogGrid = styled.div`
  padding: 16px;
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  gap: 12px;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`;

const DialogSection = styled.div`
  padding: 14px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
`;

const SectionTitle = styled.div`
  font-weight: 900;
  font-size: 13px;
  color: ${colors.skyBlue};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
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

const SideCard = styled.div`
  padding: 14px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
`;

const SideTitle = styled.div`
  font-weight: 900;
  font-size: 12.5px;
  color: ${colors.skyBlue};
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const SideTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const SideTag = styled.div`
  font-size: 11.5px;
  padding: 6px 8px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(16, 18, 36, 0.22);
  color: rgba(255, 255, 255, 0.82);
`;

const List = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 13.5px;
  line-height: 1.6;

  li {
    margin: 6px 0;
  }
`;

const Inline = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 13.5px;

  svg {
    color: ${colors.blueDarkSky};
  }
`;

const ContactLine = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 13.5px;
  margin: 8px 0;

  svg {
    color: ${colors.blueDarkSky};
  }

  a {
    color: ${colors.skyBlue};
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const DialogFooter = styled.div`
  padding: 14px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const PrimaryButton = styled.button`
  height: 42px;
  padding: 0 14px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(135, 206, 235, 0.22);
  background: rgba(135, 206, 235, 0.12);
  color: ${colors.skyBlue};
  font-weight: 900;
  cursor: pointer;

  &:hover {
    background: rgba(135, 206, 235, 0.16);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(135, 206, 235, 0.18);
  }
`;

const SecondaryButton = styled.button`
  height: 42px;
  padding: 0 14px;
  border-radius: 12px 0 12px 0;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.06);
  color: ${colors.white};
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.09);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(135, 206, 235, 0.18);
  }
`;
