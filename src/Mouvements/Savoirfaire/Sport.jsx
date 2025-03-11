import styled from "styled-components";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../Accueil/Footerr";
import SEO from "./Seoglobale";
 // Importation du composant SEO

// Styles
const BackgroundContainer = styled.section` /* Utilisation d'une balise sémantique */
  position: relative;
  min-height: 100vh;
  background-image: url("img/sport.avif");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
`;

const ContentContainer = styled.article` /* Utilisation d'une balise sémantique */
  position: relative;
  z-index: 10;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: white;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: #4ea8ff;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Paragraph = styled.p`
  font-size: 1.3rem;
  line-height: 2;
  margin-bottom: 2rem;
  max-width: 800px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    text-align: left;
    padding: 0rem 2.5rem;
  }
`;

const Divider = styled.div`
  height: 2px;
  width: 150px;
  background: #4ea8ff;
  margin: 2rem 0;
`;

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: #;
  border-radius: 50%;
  box-shadow: 0 4px 1px #63b3ed;
  color: ;
  margin-bottom: 2rem;
  transition: background-color 0.3s ease;
  max-width: 1200px; /* Largeur maximale du contenu */
  margin: 0 auto; /* Centrage horizontal */
  margin-top: 5rem; /* Ajout d'une marge supérieure pour espacer du haut */

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

export default function Sport() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className=" bg-blue-300">
      {/* Intégration du composant SEO */}
      <SEO
        title="Droit du Sport - Expertise Juridique pour les Athlètes et Clubs"
        description="Notre cabinet spécialisé en droit du sport vous accompagne dans la gestion des contrats, des transferts et des litiges. Protégez vos droits avec notre expertise."
        keywords="droit du sport, contrats sportifs, transferts, litiges sportifs, expertise juridique"
        url="https://aod-avocats.net/sport"
        image="https://aod-avocats.net/img/logoAODnoir.avif"
      />

      <BackgroundContainer>
        <Overlay />
        <BardeNavigationpublic />
        <ContentContainer>
          <BackButton to="/nosexpertises" data-aos="fade-right">
            <FaArrowLeft size={20} />
          </BackButton>
          <Title data-aos="fade-right">Le droit et sport ?</Title>
          <Divider data-aos="fade-down" />
          <Paragraph data-aos="fade-up">
            Notre cabinet est la solution idéale pour tous vos besoins
            juridiques dans le domaine du droit du sport. Nous comprenons que le
            monde sportif est complexe et nécessite une expertise pointue pour
            protéger les intérêts des athlètes, clubs, fédérations, et autres
            acteurs du secteur.
          </Paragraph>
          <Paragraph data-aos="fade-right">
            <strong data-aos="fade-down" className="text-sky-400">
              Expertise spécialisée :
            </strong>{" "}
            Notre équipe d’avocats est hautement qualifiée dans le domaine du
            droit du sport. Nous avons une connaissance approfondie des
            réglementations nationales et internationales, ainsi qu’une
            expérience pratique dans la résolution des litiges sportifs.
          </Paragraph>
          <Paragraph data-aos="fade-up">
            <strong data-aos="fade-down" className="text-sky-400">
              Accompagnement personnalisé :
            </strong>{" "}
            Nous offrons un service sur mesure pour répondre à vos besoins
            spécifiques, que ce soit pour la négociation de contrats, la gestion
            de transferts, ou encore la représentation en cas de contentieux.
          </Paragraph>
          <Paragraph data-aos="fade-down">
            <strong data-aos="fade-down" className="text-sky-400">
              Protection juridique complète :
            </strong>{" "}
            Nous veillons à ce que vos droits soient protégés à chaque étape, en
            vous apportant des solutions juridiques adaptées et en anticipant les
            éventuels problèmes pouvant survenir.
          </Paragraph>
          <Paragraph data-aos="fade-up">
            <strong data-aos="fade-down" className="text-sky-400">
              Engagement et réactivité :
            </strong>{" "}
            Notre priorité est votre satisfaction. Nous sommes disponibles à
            tout moment pour répondre à vos questions et agir rapidement afin de
            protéger vos intérêts, qu’il s’agisse de questions contractuelles,
            disciplinaires, ou liées au dopage.
          </Paragraph>
          <Paragraph data-aos="fade-down">
            En choisissant notre cabinet, vous optez pour un partenaire fiable et
            dévoué, prêt à défendre vos droits avec passion et professionnalisme.
            Nous mettons notre expertise au service de votre réussite dans le
            respect des normes juridiques et éthiques. Contactez-nous dès
            aujourd’hui pour bénéficier d’un accompagnement personnalisé.
          </Paragraph>
        </ContentContainer>
      </BackgroundContainer>
      <br/>
      <Footer />
    </div>
  );
}