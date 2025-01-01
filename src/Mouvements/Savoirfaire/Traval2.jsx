import styled from "styled-components";
import { motion } from "framer-motion"; // Framer Motion pour des animations avancées
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const PageWrapper = styled.div`
  position: relative;
  background-image: url("/img/logoAODnoir.avif"); /* Remplacez par votre image de fond */
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
  z-index: 10;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.3rem;
  padding: 1.5rem;
  border-left: 4px solid #e2e8f0;

   font-size: 2.5rem;
  font-weight: bold;
  color: #4ea8ff;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
const Section = styled(motion.section)`
  display: flex;
  align-items: left;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  gap: 2rem;
  padding: 1.5rem;
  border-right: 1px solid #0077b6;
  background-color: rgba(0, 0, 0, 0.); /* Couleur avec transparence */
  border-radius: 1px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #00b4d8;
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
  color: #caf0f8;
  line-height: 1.8;
  margin-bottom: 0.5rem;
  text-align: left;
  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6rem;
    text-align: left; /* Alignement du texte à gauche */
    padding: 2rem;
  }
  @media (max-width: 1024px) {
    font-size : 1rem;
    line-height: 1.7rem;
    text-align: left;
  justify-content: left;


  }
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1rem;
    text-align: left;

  @media (max-width: 768px) {
    margin : 0.5rem;
  }
`;

const ListItem = styled(motion.li)`
  font-size: 1.125rem;
  color: #90e0ef;
  
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  &:before {
    content: "✔";
    color: #caf0f8;
    font-size: 1.2rem;
  }
      @media (max-width: 768px) {
    font-size: 1rem;
     margin : 0.5rem;
  }
`;


const Travail2 = () => {
  

  return (
    <PageWrapper>
      <ContentContainer
      
      >
        <Title data-aos="fade-up">Le Droit</Title>

        <Section data-aos="fade-up" data-aos-delay="900">
          <Subtitle>-. Le Droit du Travail</Subtitle>
          <Paragraph>
            Le droit du travail est la branche du droit qui régit les relations
            entre employeurs et employés. Il vise à équilibrer les rapports de
            pouvoir entre les deux parties en protégeant les droits des salariés
            tout en permettant aux employeurs d’exercer leur activité.
          </Paragraph>
          <Paragraph>
            <strong>
              Les principaux domaines du droit du travail incluent :
            </strong>
          </Paragraph>
          <List>
            <ListItem>
              Le contrat de travail : il encadre les obligations de l’employeur
              et de l’employé, les modalités de rupture du contrat, etc.
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
              d`un secteur donné.
            </ListItem>
          </List>
        </Section>

        <Section data-aos="fade-up" data-aos-delay="1200">
          <Subtitle>
            -. Interaction entre la Sécurité Sociale et le Droit du Travail
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
