import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation du CSS pour AOS
import Footer from "../Accueil/Footerr";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

AOS.init(); // Initialisation de AOS dans le composant
// Conteneur principal avec fond fixe
const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url("/img/logoAODnoir.avif") center/cover no-repeat;
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
  background-color: rgba(0, 0, 0, 0.7); /* Fond semi-transparent */
  border-radius: px;
  box-shadow: 0 0px 0px #90e0ef;
  backdrop-filter: blur(8px); /* Flou pour un effet moderne */

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
  font-size: 2.5rem;
  font-weight: 700;
  color: #00b4d8;
  text-align: center;
  margin-bottom: 2rem;

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
    padding-left: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-top: 2rem;
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
    margin: 0.5rem;
  }
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  color: #caf0f8;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin: 0.5rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;

  background: rgba(0, 0, 0, 0.9);
`;
const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #;
  border-radius: 50%;
  box-shadow: 1px 1px 5px #90e0ef;
  color: ;
  margin-bottom: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e2e8f0;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
  }
`;

const OverlayBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background: #00b4d8; /* Fond noir semi-transparent */
`;
const Minier = () => {
  return (
    <div className="">
      <BackgroundContainer>
        <BardeNavigationpublic />
        <Overlay />
        <OverlayBottom />
        <ContentWrapper>
          <BackButton to="/article" data-aos="fade-right">
            <FaArrowLeft size={20} />
          </BackButton>
          <Title data-aos="fade-up">Droit Minier et Environnemental</Title>
          <section data-aos="fade-up" data-aos-delay="300">
            <Paragraph>
              Le droit minier et le droit de l`environnement sont étroitement
              liés, car les activités minières ont souvent des impacts
              significatifs sur l`environnement. Une réforme du code minier vise
              à mieux intégrer les considérations environnementales dans les
              procédures d`octroi de titres miniers et à renforcer l`évaluation
              des impacts écologiques des projets miniers.
            </Paragraph>
            <Paragraph>
              Pour approfondir ce sujet, consultez ces articles :
              <a
                href="https://www.vie-publique.fr/rapport/32093-droit-minier-et-droit-de-lenvironnement"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3182ce", textDecoration: "none" }}
              >
                Vie Publique
              </a>
              {" et "}
              <a
                href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046554631/2023-07-01"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3182ce", textDecoration: "none" }}
              >
                Légifrance
              </a>
              .
            </Paragraph>
          </section>
        </ContentWrapper>
        <ContentWrapper>
          <OverlayBottom />
          <Title data-aos="fade-up" className=" mb-4">
            Les Litiges Miniers et Environnementaux
          </Title>
          <section data-aos="fade-up" data-aos-delay="300">
            <Paragraph>
              Les litiges miniers et environnementaux sont souvent complexes et
              nécessitent une attention particulière pour minimiser les risques
              juridiques et protéger l`environnement. Dans ce contexte, il est
              essentiel de prendre en compte plusieurs aspects légaux et
              environnementaux qui peuvent affecter les entreprises opérant dans
              le secteur minier.
            </Paragraph>
            <Paragraph>
              Nos objectifs sont de fournir des conseils juridiques stratégiques
              afin d`aider les entreprises à :
            </Paragraph>
            <List>
              <ListItem>
                Gérer les conflits liés à l`extraction minière et à l`impact
                environnemental.
              </ListItem>
              <ListItem>
                Conformité avec les régulations locales et internationales
                concernant l`exploitation des ressources naturelles.
              </ListItem>
              <ListItem>
                Minimiser les risques d`amendes et de sanctions pour non-respect
                des normes environnementales.
              </ListItem>
              <ListItem>
                Trouver des solutions amiables avant de se lancer dans des
                procédures judiciaires.
              </ListItem>
              <ListItem>
                Préserver leur réputation tout en respectant les normes
                environnementales.
              </ListItem>
            </List>
          </section>
          <section data-aos="fade-up" data-aos-delay="500">
            <Subtitle>1. Les Différents Types de Litiges Miners</Subtitle>
            <Paragraph>
              Les entreprises minières peuvent être confrontées à des litiges
              concernant :
            </Paragraph>
            <List>
              <ListItem>Extraction illégale de ressources</ListItem>
              <ListItem>Violation des contrats d`exploitation</ListItem>
              <ListItem>Non-respect des permis d`exploitation minière</ListItem>
              <ListItem>
                Domages environnementaux causés par les activités minières
              </ListItem>
            </List>
          </section>
          <section data-aos="fade-up" data-aos-delay="700">
            <Subtitle>2. Les Risques Juridiques Associés</Subtitle>
            <Paragraph>
              Ces litiges peuvent entraîner des conséquences juridiques graves,
              notamment des amendes, des arrêts d`activités, ou des poursuites
              judiciaires.
            </Paragraph>
          </section>
          <section data-aos="fade-up" data-aos-delay="900">
            <Subtitle>3. Les Stratégies de Défense et de Résolution</Subtitle>
            <Paragraph>
              Il est essentiel d`évaluer les risques juridiques et de chercher à
              résoudre les conflits de manière stratégique, en privilégiant la
              médiation ou les solutions amiables.
            </Paragraph>
          </section>
        </ContentWrapper>{" "}
      </BackgroundContainer>

      <Footer />
    </div>
  );
};

export default Minier;
