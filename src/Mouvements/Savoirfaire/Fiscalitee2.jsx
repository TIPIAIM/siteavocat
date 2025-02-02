import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation du CSS pour AOS
import Footer from "../Accueil/Footerr";

// Initialisation de AOS
AOS.init({
  duration: 1000, // Durée des animations
  once: false, // Les animations ne se déclenchent qu'une fois
});

// Variables CSS pour les couleurs et espacements
const colors = {
  primary: "#00b4d8",
  secondary: "#90e0ef",
  background: "#1a1a1a",
  text: "#caf0f8",
};

// Conteneur principal avec fond fixe
const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url("img/logoAODnoir.avif");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: ${colors.text};

  @media (max-width: 768px) {
    background-attachment: scroll;
     padding: 0rem 0.2rem;
  }
`;

// Overlay pour assombrir l'arrière-plan
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(250, 250, 250, 0.); /* Fond noir semi-transparent */
`;

// Conteneur du contenu
const ContentWrapper = styled.main`
  position: relative;
  z-index: 10;
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.9); /* Fond semi-transparent */
  border-radius: 10px;
  backdrop-filter: blur(3px); /* Effet de flou moderne */

  @media (max-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

// Titre principal
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${colors.primary};
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 0rem 1rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

// Sous-titres
const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${colors.secondary};
  margin-top: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0 1rem;
  }
`;

// Paragraphe avec espacement et lisibilité
const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${colors.text};
  margin-bottom: 1.5rem;
 

  @media (max-width: 768px) {
    font-size: 1.1rem;
    line-height: 1.6;
    padding: 0rem 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.5;
    padding: 0 1rem;
  }
`;

// Liste stylisée
const List = styled.ul`
  list-style-type: disc;
  padding-left: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding-left: 2rem;
    
  }
`;

const ListItem = styled.li`
  font-size: 1.1rem;
  color: ${colors.primary};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
     padding: 0rem 1rem;
  }
`;

const Fiscalitee2 = () => {
  useEffect(() => {
    AOS.refresh(); // Rafraîchir AOS lors du rendu du composant
  }, []);

  return (
    <div>
      {/* Optimisation SEO */}
      <title data-aos="fade-up">L’Impact de la Fiscalité - Cabinet AOD</title>
      <meta
        name="description"
        content="Découvrez l'impact de la fiscalité sur les entreprises et les stratégies pour optimiser votre fiscalité avec le Cabinet AOD."
      />
      <meta
        name="keywords"
        content="fiscalité, impôts, optimisation fiscale, cabinet AOD, aod avocat, stratégie fiscale"
      />
      <BackgroundContainer>
        <Overlay />
        <ContentWrapper>
          <Title data-aos="fade-up">L’impact de la Fiscalité</Title>
          <article data-aos="fade-up" data-aos-delay="300">
            <Paragraph>
              La fiscalité joue un rôle crucial dans le fonctionnement des
              entreprises, influençant leur rentabilité, leur compétitivité, et
              leur capacité d’innovation. Pour approfondir ce sujet, consultez
              ces articles :
              <a
                href="https://dgi.gov.gn/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: colors.primary, textDecoration: "none" }}
              >
                ici
              </a>{" "}
              et{" "}
              <a
                href="https://www.govserv.org/GN/Conakry/1074407922579444/Direction-G%C3%A9n%C3%A9rale-des-Imp%C3%B4ts-de-la-R%C3%A9publique-de-Guin%C3%A9e"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: colors.primary, textDecoration: "none" }}
              >
                là
              </a>
              .
            </Paragraph>
            <Paragraph>
              Nos objectifs sont de fournir des conseils juridiques précis et
              efficaces dans le cadre fiscal afin d’aider les entreprises à :
            </Paragraph>
            <List>
              <ListItem>
                Optimiser leur fiscalité tout en restant conformes à la loi.
              </ListItem>
              <ListItem>
                Gérer efficacement les audits fiscaux et les litiges.
              </ListItem>
              <ListItem>
                Éviter les pénalités grâce à une gestion proactive des
                obligations fiscales.
              </ListItem>
              <ListItem>
                Profiter des avantages fiscaux tels que les crédits d’impôt pour
                la recherche et l’innovation.
              </ListItem>
              <ListItem>
                Élaborer des stratégies fiscales alignées avec leurs objectifs
                commerciaux.
              </ListItem>
            </List>
          </article>
          <section data-aos="fade-up" data-aos-delay="500">
            <Subtitle>1. Les Types d’Impôts</Subtitle>
            <Paragraph>
              Les entreprises doivent s’acquitter de divers types d’impôts,
              notamment :
            </Paragraph>
            <List>
              <ListItem>Impôt sur les sociétés</ListItem>
              <ListItem>Taxe sur la valeur ajoutée (TVA)</ListItem>
              <ListItem>Taxe foncière</ListItem>
              <ListItem>Contributions sociales</ListItem>
            </List>
          </section>
          <section data-aos="fade-up" data-aos-delay="700">
            <Subtitle>2. Les Défis de la Fiscalité</Subtitle>
            <Paragraph>
              Une fiscalité complexe peut entraîner des coûts de conformité
              élevés pour les entreprises et limiter leur compétitivité.
            </Paragraph>
          </section>
          <section data-aos="fade-up" data-aos-delay="900">
            <Subtitle>3. Impact sur l’Innovation</Subtitle>
            <Paragraph>
              Une fiscalité incitative, comme les crédits d’impôt pour la
              recherche, peut encourager l’innovation et stimuler la croissance
              économique.
            </Paragraph>
          </section>
        </ContentWrapper>
      </BackgroundContainer>{" "}
      <Footer />
    </div>
  );
};

export default Fiscalitee2;
