import styled from "styled-components";
import { motion } from "framer-motion"; // Framer Motion pour des animations avancées
import AOS from "aos";
import "aos/dist/aos.css";

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
    background: rgba(0, 0, 250, 0.1); /* Couleur noire avec transparence */
    z-index: 1;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1300px;
  margin: 0 auto;
  padding: rem;
  background: rgba(255, 255, 255, 0.2); /* Couleur blanche avec transparence */
  border-radius: 0px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  padding: 1.5rem;
  border-left: 4px solid #2c5282;
  background: rgba(0, 255, 255, 0.2); /* Couleur blanche avec transparence */

  font-weight: bold;
  color: black;

  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 1rem;
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
  background-color: rgba(237, 242, 247, 0.8); /* Couleur avec transparence */
  border-radius: 8px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateX(5px);
  }
  @media (max-width: 768px) {
    flex: none;
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  max-width: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 1rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
    height: 100%;
    background-color: #2c5282;
  }
  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #4a5568;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: justify;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const List = styled.ul`
  list-style: none;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ListItem = styled(motion.li)`
  font-size: 1.125rem;
  color: #4a5568;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  &:before {
    content: "✔";
    color: #2c5282;
    font-size: 1.5rem;
  }
`;

const ExternalLink = styled.a`
  color: #3182ce;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Travail2 = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <PageWrapper>
      <ContentContainer>
        <Title data-aos="fade-up">
          Le Droit du Travail
        </Title>


        <Section data-aos="fade-up" data-aos-delay="900">
          <Subtitle>2. Le Droit du Travail</Subtitle>
          <Paragraph>
            Le droit du travail est la branche du droit qui régit les relations
            entre employeurs et employés. Il vise à équilibrer les rapports de
            pouvoir entre les deux parties en protégeant les droits des salariés
            tout en permettant aux employeurs d'exercer leur activité.
          </Paragraph>
          <Paragraph>
            <strong>
              Les principaux domaines du droit du travail incluent :
            </strong>
          </Paragraph>
          <List>
            <ListItem>
              Le contrat de travail : il encadre les obligations de l'employeur
              et de l'employé, les modalités de rupture du contrat, etc.
            </ListItem>
            <ListItem>
              Les conditions de travail : cela inclut la durée du travail, la
              sécurité sur le lieu de travail, le respect des normes d’hygiène,
              et l’égalité professionnelle.
            </ListItem>
            <ListItem>
              Les congés et les pauses : le droit du travail garantit un certain
              nombre de congés (congé payé, congé maternité, congé paternité,
              etc.) et le respect des périodes de repos.
            </ListItem>
            <ListItem>
              Les syndicats et la représentation du personnel : il protège la
              liberté syndicale et garantit le droit de grève.
            </ListItem>
            <ListItem>
              La négociation collective : les conventions collectives permettent
              de définir des droits supplémentaires ou spécifiques aux employés
              d'un secteur donné.
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
              indemnisation par l’intermédiaire de l’assurance chômage, qui fait
              partie du système de sécurité sociale, mais les conditions d’accès
              à ces indemnités sont encadrées par le droit du travail.
            </ListItem>
          </List>
        </Section>

        <Section data-aos="fade-up" data-aos-delay="1500">
          <Subtitle>En somme</Subtitle>
          <Paragraph>
            En résumé, la sécurité sociale et le droit du travail sont deux
            éléments essentiels du système de protection sociale. Tandis que la
            sécurité sociale protège les travailleurs contre les risques
            sociaux, le droit du travail garantit des conditions de travail
            justes et équitables. Les deux sont complémentaires et assurent la
            sécurité, la stabilité et le bien-être des travailleurs dans la
            société.
          </Paragraph>
        </Section>
      </ContentContainer>
    </PageWrapper>
  );
};

export default Travail2;
