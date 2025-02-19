import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation du CSS pour AOS
import Footer from "../Accueil/Footerr";

// Initialisation de AOS
AOS.init({
  duration: 1000,
  once: false,
});

// Styles
const BackgroundContainer = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: url("/img/logoAODnoir.avif") center/cover no-repeat;
  background-attachment: fixed;
  color: #fff;

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

const ContentWrapper = styled.article`
  max-width: 900px;
  margin: 2rem auto;
  padding: 4rem;
  background-color: rgba(0, 0, 0, 0.9);

  @media (max-width: 1024px) {
    padding: 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 0px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #00b4d8;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: #90e0ef;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 1rem 1.2rem;
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #caf0f8;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.5rem 1.2rem;
    padding-left: 2rem;
  }
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    padding: 1rem 2rem;
  }
  @media (max-width: 480px) {
    margin-left: 1rem;
  }
`;

const ListItem = styled.li`
  font-size: 1.1rem;
  color: #caf0f8;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const OverlayTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
`;

const OverlayBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0%;
  background: #00b4d8;
`;

const Minier2 = () => {
  useEffect(() => {
    AOS.refresh(); // Rafraîchir AOS après le rendu
  }, []);

  return (
    <div>
      <BackgroundContainer>
        <ContentWrapper>
          <OverlayTop />
          <OverlayBottom />
          <Title data-aos="fade-up">Le lien</Title>
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
          <Title data-aos="fade-up">Les Litiges</Title>
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
            <Subtitle>1. Les Différents Types de Litiges Miniers</Subtitle>
            <Paragraph>
              Les entreprises minières peuvent être confrontées à des litiges
              concernant :
            </Paragraph>
            <List>
              <ListItem>Extraction illégale de ressources</ListItem>
              <ListItem>Violation des contrats d`exploitation</ListItem>
              <ListItem>Non-respect des permis d`exploitation minière</ListItem>
              <ListItem>
                Dommages environnementaux causés par les activités minières
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
        </ContentWrapper>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default Minier2;
