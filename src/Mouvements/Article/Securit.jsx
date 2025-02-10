import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css"; // Importation du CSS pour AOS
import securitesocial from "./../../assets/Image/securitesocial.avif";

// Initialisation de AOS
AOS.init({
  duration: 1000,
  once: false,
});

// Styles
const PageWrapper = styled.section`
  position: relative;
  background-image: url("/img/logoAODnoir.avif");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  /* Masque semi-transparent */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }

  @media (max-width: 768px) {
    background-attachment: scroll;
  }
`;

const ContentContainer = styled.article`
  position: relative;
  max-width: 900px;
  z-index: 10;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4ea8ff;
  margin-bottom: 2rem;
  padding: 1.5rem;
  border-left: 4px solid #e2e8f0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  gap: 2rem;
  padding: 1.5rem;
  border-right: 1px solid #0077b6;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    flex: none;
  }
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  max-width: 600px;
  box-shadow: 0 4px 1px #0077b6;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
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

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  color: #caf0f8;
  line-height: 1.8;
  margin-bottom: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 1rem;
  text-align: left;
`;

const ListItem = styled.li`
  font-size: 1.125rem;
  color: #90e0ef;
  margin-bottom: 0.5rem;

  &::before {
    content: "✔";
    color: #caf0f8;
    font-size: 1.2rem;
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ExternalLink = styled.a`
  color: #90e0ef;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Securit = () => {
  return (
    <PageWrapper>
      <ContentContainer>
        <Title data-aos="fade-down">
          La Sécurité Sociale et le Droit du Travail
        </Title>

        <Section data-aos="fade-up" data-aos-delay="300">
          <Image
            src={securitesocial}
            alt="Illustration de la sécurité sociale et du droit du travail"
          />
          <TextContainer>
            <Paragraph>
              La sécurité sociale et le droit du travail sont les piliers de
              votre protection en tant que travailleur. Découvrez comment ces
              deux domaines interagissent pour garantir votre bien-être et vos
              droits. Pour en savoir plus, consultez{" "}
              <ExternalLink
                href="https://journals.openedition.org/rdctss/"
                target="_blank"
                rel="noopener noreferrer"
              >
                notre ressource externe
              </ExternalLink>
              .
            </Paragraph>
          </TextContainer>
        </Section>

        <Section>
          <Subtitle>1. La Sécurité Sociale : Votre Bouclier Protéteur</Subtitle>
          <Paragraph>
            La sécurité sociale est bien plus qu’un simple système de
            protection. C’est votre garantie contre les aléas de la vie :
            maladie, accidents, retraite, chômage, et bien plus encore. Financée
            par les cotisations des employeurs et des employés, elle est le
            fondement de votre sécurité financière et sociale.
          </Paragraph>
          <Paragraph>
            <strong>Ce que la sécurité sociale couvre pour vous :</strong>
          </Paragraph>
          <List>
            <ListItem>
              <strong>Maladie</strong> : Remboursement des soins médicaux,
              hospitalisation, et prise en charge des traitements.
            </ListItem>
            <ListItem>
              <strong>Accidents du travail</strong> : Compensation en cas
              d’accident ou de maladie professionnelle.
            </ListItem>
            <ListItem>
              <strong>Retraite</strong> : Un revenu garanti pour vos années de
              labeur.
            </ListItem>
            <ListItem>
              <strong>Chômage</strong> : Un filet de sécurité pour les périodes
              de transition professionnelle.
            </ListItem>
            <ListItem>
              <strong>Famille</strong> : Soutien financier pour les familles,
              comme les allocations familiales.
            </ListItem>
          </List>
        </Section>

        <Section>
          <Subtitle>
            2. Le Droit du Travail : Vos Droits, Votre Pouvoir
          </Subtitle>
          <Paragraph>
            Le droit du travail est votre allié pour des conditions de travail
            justes et équitables. Il encadre les relations entre employeurs et
            employés, protège vos droits et garantit votre sécurité au
            quotidien.
          </Paragraph>
          <Paragraph>
            <strong>Les domaines clés du droit du travail :</strong>
          </Paragraph>
          <List>
            <ListItem>
              <strong>Contrat de travail</strong> : Les règles qui régissent
              votre emploi, de l’embauche à la rupture.
            </ListItem>
            <ListItem>
              <strong>Conditions de travail</strong> : Durée du travail,
              sécurité, hygiène, et égalité professionnelle.
            </ListItem>
            <ListItem>
              <strong>Congés et pauses</strong> : Vos droits aux congés payés,
              maternité, paternité, et repos.
            </ListItem>
            <ListItem>
              <strong>Syndicats et représentation</strong> : La liberté
              syndicale et le droit de grève.
            </ListItem>
            <ListItem>
              <strong>Négociation collective</strong> : Des conventions pour des
              droits supplémentaires.
            </ListItem>
          </List>
        </Section>

        <Section>
          <Subtitle>
            3. Une Alliance Puissante : Sécurité Sociale et Droit du Travail
          </Subtitle>
          <Paragraph>
            La sécurité sociale et le droit du travail travaillent main dans la
            main pour vous protéger. Ensemble, ils forment un système complet
            qui assure votre bien-être et votre stabilité.
          </Paragraph>
          <List>
            <ListItem>
              <strong>Protection des salariés</strong> : La sécurité sociale
              couvre les risques, tandis que le droit du travail garantit des
              conditions de travail sûres.
            </ListItem>
            <ListItem>
              <strong>Accidents du travail</strong> : Des règles strictes pour
              prévenir les accidents et une prise en charge complète en cas
              d’incident.
            </ListItem>
            <ListItem>
              <strong>Chômage</strong> : Une indemnisation encadrée pour vous
              soutenir pendant vos recherches.
            </ListItem>
          </List>
        </Section>

        <Section>
          <Subtitle>En Résumé : Votre Sécurité, Notre Priorité</Subtitle>
          <Paragraph>
            La sécurité sociale et le droit du travail sont les fondements de
            votre protection en tant que travailleur. Ils assurent votre
            sécurité financière, vos droits, et votre bien-être. En comprenant
            ces systèmes, vous pouvez mieux défendre vos intérêts et vivre une
            carrière sereine.
          </Paragraph>
        </Section>
      </ContentContainer>
    </PageWrapper>
  );
};

export default Securit;
