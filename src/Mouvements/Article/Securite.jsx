import styled from "styled-components";
import { motion } from "framer-motion"; // Framer Motion pour des animations avancées
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Accueil/Footerr";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

AOS.init();

const PageWrapper = styled.div`
  position: relative;
  background-image: url("/img/logoAODnoir.png"); /* Remplacez par votre image de fond */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem rem;

  /* Masque semi-transparent */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8); /* Couleur noire avec transparence */
    z-index: 1;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1290px;
  margin: 0 auto;

  padding: rem;
  background: rgba(0, 0, 0, 0.2); /* Couleur blanche avec transparence */
  border-radius: 0px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  font-family: "Georgia", serif;

  font-size: 2.5rem;
  padding: 1.5rem;
  border-left: 4px solid #2c5282;
  background: #; /* Couleur blanche avec transparence */

  font-weight: bold;
  color: #00b4d8;

  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 1.4rem;
    text-align: center;
  }
`;

const Section = styled(motion.section)`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  gap: 2rem;
  padding: 1.5rem;
  border-left: 4px solid #2c5282;
  background-color: rgba(0, 0, 0, 0.7); /* Couleur avec transparence */
  border-radius: 8px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateX(5px);
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 1.75rem; /* Taille de police ajustée pour les petits écrans */
    padding-left: 0.75rem; /* Espacement réduit pour harmoniser */
    text-align: left; /* Alignement du texte à gauche */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Réduction supplémentaire pour très petits écrans */
    padding-left: 0.5rem; /* Espacement optimisé */
    text-align: left; /* Alignement du texte à gauche */
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 0%;
  object-fit: cover;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(20, 20, 20, 0.9);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-family: "Georgia", serif;
  font-weight: 600;
  color: #00b4d8;
  margin-bottom: 1rem;
  text-align: left; /* Alignement du texte à gauche */
  position: relative;
  padding-left: 1rem; /* Ajout d'espacement pour compenser le pseudo-élément */

  &::before {
    content: "";
    position: absolute;
    left: 0; /* Ajusté pour suivre l'alignement gauche */
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 100%;
    background-color: #2c5282;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem; /* Taille de police ajustée pour les petits écrans */
    padding-left: 0.75rem; /* Espacement réduit pour harmoniser */
    text-align: left; /* Alignement du texte à gauche */
  }

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Réduction supplémentaire pour très petits écrans */
    padding-left: 0.5rem; /* Espacement optimisé */
    text-align: left; /* Alignement du texte à gauche */
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  color: white;

  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    font-size: 1.75rem; /* Taille de police ajustée pour les petits écrans */
    padding-left: 0.75rem; /* Espacement réduit pour harmoniser */
    text-align: left; /* Alignement du texte à gauche */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Réduction supplémentaire pour très petits écrans */
    padding-left: 0.5rem; /* Espacement optimisé */
    text-align: left; /* Alignement du texte à gauche */
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
  font-family: "Georgia", serif;

  @media (max-width: 768px) {
    font-size: 1.75rem; /* Taille de police ajustée pour les petits écrans */
    padding-left: 0.75rem; /* Espacement réduit pour harmoniser */
    text-align: left; /* Alignement du texte à gauche */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Réduction supplémentaire pour très petits écrans */
    padding-left: 0.5rem; /* Espacement optimisé */
    text-align: left; /* Alignement du texte à gauche */
  }
`;

const ListItem = styled(motion.li)`
  font-size: 1.125rem;
  font-family: "Georgia", serif;

  color: white;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  &:before {
    content: "✔ ";
    color: #2c5282;
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem; /* Taille de police ajustée pour les petits écrans */
    padding-left: 0.75rem; /* Espacement réduit pour harmoniser */
    text-align: left; /* Alignement du texte à gauche */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Réduction supplémentaire pour très petits écrans */
    padding-left: 0.5rem; /* Espacement optimisé */
    text-align: left; /* Alignement du texte à gauche */
  }
`;

const ExternalLink = styled.a`
  color: #3182ce;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ;
  border-radius: 20px; /* Coins arrondis */
  padding: 0.5rem; /* Espacement interne */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.9); /* Ombre légère */
  animation: pulse 1.9s infinite; /* Animation pulsation */
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  /* Style au survol */
  &:hover {
    transform: scale(1.1); /* Légère mise en avant */
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* Ombre plus forte */
  }

  /* Focus clavier pour accessibilité */
  &:focus {
    outline: 1px solid #3182ce; /* Bordure de focus */
    outline-offset: 2px;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      box-shadow: 0 4px 6px rgba(255, 250, 250, 0.9);
    }
    50% {
      transform: scale(1.05);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.9);
    }
  }
`;

const Securite = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div>
      <PageWrapper>
        {" "}
        <BardeNavigationpublic />
        <ContentContainer>
          <StyledLink to="/article">
            <FaArrowLeft size={20} />
          </StyledLink>
          <Title data-aos="fade-up">
            La Sécurité Sociale et le Droit du Travail
          </Title>

          <Section data-aos="fade-up" data-aos-delay="300">
            <Image src="/img/sttis.webp" alt="Illustration" />
            <TextContainer>
              <Paragraph>
                Découvrez en détail comment la sécurité sociale et le droit du
                travail interagissent pour garantir le bien-être des
                travailleurs. Pour plus d’informations, consultez{" "}
                <ExternalLink
                  href="https://journals.openedition.org/rdctss/"
                  target="_blank"
                >
                  Info externe +
                </ExternalLink>
                .
              </Paragraph>
            </TextContainer>
          </Section>

          <Section data-aos="fade-up" data-aos-delay="600">
            <Subtitle>1. La Sécurité Sociale</Subtitle>
            <Paragraph>
              La sécurité sociale est un système public qui vise à protéger les
              individus contre certains risques sociaux, tels que la maladie,
              les accidents du travail, la vieillesse, la famille et le chômage.
              Elle est financée par des cotisations sociales payées par les
              employeurs et les employés.
            </Paragraph>
            <Paragraph>
              <strong>Principaux risques couverts :</strong>
            </Paragraph>
            <List>
              <ListItem>
                Maladie : remboursements des soins médicaux, hospitalisation,
                etc.
              </ListItem>
              <ListItem>
                Accidents du travail et maladies professionnelles : compensation
                des accidents survenus dans le cadre professionnel ou des
                maladies liées au travail.
              </ListItem>
              <ListItem>
                Retraite : le système de pensions pour garantir un revenu après
                la fin de la vie professionnelle.
              </ListItem>
              <ListItem>
                Chômage : allocations versées aux travailleurs en recherche
                d’emploi.
              </ListItem>
              <ListItem>
                Famille : prestations pour les familles avec enfants, comme les
                allocations familiales.
              </ListItem>
            </List>
          </Section>

          <Section data-aos="fade-up" data-aos-delay="900">
            <Subtitle>2. Le Droit du Travail</Subtitle>
            <Paragraph>
              Le droit du travail est la branche du droit qui régit les
              relations entre employeurs et employés. Il vise à équilibrer les
              rapports de pouvoir entre les deux parties en protégeant les
              droits des salariés tout en permettant aux employeurs d’exercer
              leur activité.
            </Paragraph>
            <Paragraph>
              <strong>
                Les principaux domaines du droit du travail incluent :
              </strong>
            </Paragraph>
            <List>
              <ListItem>
                Le contrat de travail : il encadre les obligations de
                l’employeur et de l’employé, les modalités de rupture du
                contrat, etc.
              </ListItem>
              <ListItem>
                Les conditions de travail : cela inclut la durée du travail, la
                sécurité sur le lieu de travail, le respect des normes
                d’hygiène, et l’égalité professionnelle.
              </ListItem>
              <ListItem>
                Les congés et les pauses : le droit du travail garantit un
                certain nombre de congés (congé payé, congé maternité, congé
                paternité, etc.) et le respect des périodes de repos.
              </ListItem>
              <ListItem>
                Les syndicats et la représentation du personnel : il protège la
                liberté syndicale et garantit le droit de grève.
              </ListItem>
              <ListItem>
                La négociation collective : les conventions collectives
                permettent de définir des droits supplémentaires ou spécifiques
                aux employés d’un secteur donné.
              </ListItem>
            </List>
          </Section>

          <Section data-aos="fade-up" data-aos-delay="1200">
            <Subtitle>
              3. Interaction entre la Sécurité Sociale et le Droit du Travail
            </Subtitle>
            <Paragraph>
              Les deux domaines sont intimement liés et interagissent de manière
              complexe :
            </Paragraph>
            <List>
              <ListItem>
                Protection des salariés : La sécurité sociale protège les
                travailleurs contre les risques sociaux (maladie, accidents du
                travail, chômage), tandis que le droit du travail assure des
                conditions de travail justes et sécurisées.
              </ListItem>
              <ListItem>
                Accidents du travail : Le droit du travail définit les règles de
                sécurité à suivre pour éviter les accidents, tandis que la
                sécurité sociale intervient pour couvrir les frais médicaux et
                verser des indemnités en cas d’accident.
              </ListItem>
              <ListItem>
                Chômage : Les salariés perdant leur emploi bénéficient d’une
                indemnisation par l’intermédiaire de l’assurance chômage, qui
                fait partie du système de sécurité sociale, mais les conditions
                d’accès à ces indemnités sont encadrées par le droit du travail.
              </ListItem>
            </List>
          </Section>

          <Section data-aos="fade-up" data-aos-delay="1500">
            <Subtitle>En somme</Subtitle>
            <Paragraph>
              En résumé, la sécurité sociale et le droit du travail sont deux
              éléments essentiels du système de protection sociale. Tandis que
              la sécurité sociale protège les travailleurs contre les risques
              sociaux, le droit du travail garantit des conditions de travail
              justes et équitables. Les deux sont complémentaires et assurent la
              sécurité, la stabilité et le bien-être des travailleurs dans la
              société.
            </Paragraph>
          </Section>
        </ContentContainer>
      </PageWrapper>{" "}
      <Footer />
    </div>
  );
};

export default Securite;
