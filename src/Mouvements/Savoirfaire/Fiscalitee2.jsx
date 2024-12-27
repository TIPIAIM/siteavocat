import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation du CSS pour AOS
import Footer from "../Accueil/Footerr";

AOS.init(); // Initialisation de AOS dans le composant

// Conteneur principal avec fond fixe
const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url("/img/logoODnoir.png") center/cover no-repeat;
  background-attachment: fixed;
  background-size: cover;
  color: #fff;

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

// Conteneur du contenu
const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  padding: 4rem;
  background-color: rgba(0, 0, 0, 0.0); /* Fond semi-transparent */
  border-radius: px;
  box-shadow: 0 0px 0px #90e0ef;
  backdrop-filter: blur(0px); /* Flou pour un effet moderne */

  @media (max-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 2rem;
  }
`;

// Titre principal
const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #00b4d8;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

// Sous-titres
const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #90e0ef;
  

  @media (max-width: 1024px) {
    font-size: 1.8rem;
    padding-left : 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
     margin-top : 2rem;
  }
`;

// Paragraphe avec espacement et lisibilité
const Paragraph = styled.p`

  color: #caf0f8;

  font-size: 1.3rem;
  line-height: 1.8;

  max-width: 800px;
  text-align: left;

    @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6rem;
    text-align: left; /* Alignement du texte à gauche */
    margin : 2rem;
  }
  @media (max-width: 1024px) {
    font-size : 1.1rem;
    line-height: 1.7rem;
    text-align: left;
  justify-content: left;

`;

// Liste stylisée
const List = styled.ul`
  list-style-type: disc;
  padding-left: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin : 0.5rem;
  }
`;

const ListItem = styled.li`
  font-size: 1.2rem;
    color: #00b4d8;

 
  @media (max-width: 768px) {
    font-size: 1rem;
     margin : 0.5rem;
  }
`;



const OverlayTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Fond noir semi-transparent */
`;

const OverlayBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background: rgba(0, 0, 0, 0.6); /* Fond noir semi-transparent */
`;

const Fiscalitee2 = () => {
  return (
    <div>
     <OverlayTop />
      <BackgroundContainer>
        {" "}
        <ContentWrapper>
          <OverlayBottom />
        
          <Title data-aos="fade-up">
            L’Impact de la Fiscalité
          </Title>
          <section data-aos="fade-up" data-aos-delay="300">
            <Paragraph>
              La fiscalité joue un rôle crucial dans le fonctionnement des
              entreprises, influençant leur rentabilité, leur compétitivité, et
              leur capacité d’innovation. Pour approfondir ce sujet, consultez
              ces articles :
              <a
                href="https://dgi.gov.gn/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3182ce", textDecoration: "none" }}
              >
                ici
              </a>{" "}
              et{" "}
              <a
                href="https://www.govserv.org/GN/Conakry/1074407922579444/Direction-G%C3%A9n%C3%A9rale-des-Imp%C3%B4ts-de-la-R%C3%A9publique-de-Guin%C3%A9e"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3182ce", textDecoration: "none" }}
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
              <ListItem>Optimiser leur fiscalité tout en restant conformes à la loi.</ListItem>
              <ListItem>Gérer efficacement les audits fiscaux et les litiges.</ListItem>
              <ListItem>Éviter les pénalités grâce à une gestion proactive des obligations fiscales.</ListItem>
              <ListItem>Profiter des avantages fiscaux tels que les crédits d’impôt pour la recherche et l’innovation.</ListItem>
              <ListItem>Élaborer des stratégies fiscales alignées avec leurs objectifs commerciaux.</ListItem>
            </List>
          </section>
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
        
        </ContentWrapper><Footer />
      </BackgroundContainer>
      
      
    </div>
  );
};

export default Fiscalitee2;
