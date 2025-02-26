import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import BardeNavigationpublic from "../../Navigatpublic/BardeNavigationPublic";
import Footer from "../../Accueil/Footerr";
import logoAODnoir from "./../../../assets/Image/logoAODnoir.avif";

// Container principal avec fond d'image et dégradé pour la lisibilité
const Container = styled.section`
  /* Utilisation d'une balise sémantique */
  background: url("img/confience.avif") no-repeat center center/cover;
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
  position: relative;
  min-height: 100vh;
  background-attachment: fixed;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9); /* Ombre pour améliorer la lisibilité */
  }
`;

const Title = styled.h1`
  /* Utilisation de h1 pour le titre principal (SEO) */
  font-size: 2.5rem;
  font-weight: bold;
  color: #90e0ef;
  margin-bottom: 3rem;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  z-index: 10;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const PointsList = styled.article`
  /* Utilisation d'une balise sémantique */
  max-width: 800px;
  text-align: left;
  z-index: 10;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
  @media (max-width: 1024px) {
    gap: 0.5rem;
  }
`;

const Image = styled.img`
  width: 100%;
  max-width: 200px;
  background: #fff; /* Suppression de la transparence (remplacé par un fond blanc) */
  margin-top: 4rem;
  border-radius: 1px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  image-rendering: crisp-edges; /* Améliore la netteté de l'image */
  backface-visibility: hidden; /* Améliore la performance et la netteté */
  @media (max-width: 1024px) {
    max-width: 250px;
  }
`;

const Point = styled.div`
  margin-bottom: 1.8rem;
  font-size: 1.3rem;
  line-height: 1.8;
  color: #cf0f8;
  padding-left: 2rem;
  position: relative;

  &::before {
    content: "✔";
    color: #90e0ef;
    position: absolute;
    left: 0;
    font-size: 1.5rem;
    top: 0;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    text-align: left;
  }
`;

const Divider = styled.div`
  height: 3px; /* Hauteur du diviseur */
  width: 500px; /* Largeur du diviseur */
  background: #4ea8ff; /* Couleur du diviseur */
  margin: 2rem 0; /* Marge externe */

  @media (max-width: 768px) {
    width: 200px; /* Largeur réduite pour les petits écrans */
  }
`;

const Conseiljuri = () => {
  // Dynamisation du titre de la page pour le SEO
  useEffect(() => {
    document.title =
      "Conseils Juridiques - Expertise et Accompagnement sur Mesure";
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div>
      {/* Balise meta pour le SEO */}
      <meta
        name="description"
        content="Obtenez des conseils juridiques professionnels et personnalisés. Notre équipe d'experts vous accompagne dans tous vos projets juridiques."
      />
      <meta
        name="keywords"
        content="conseils juridiques, avocats, expertise juridique, accompagnement juridique"
      />
      <meta name="alpha ousmane" content="TIPTAMCode" />

      <Container style={{ fontFamily: "Helvetica55Roman, Arial, sans-serif" }}>
        <BardeNavigationpublic />
        <Title data-aos="fade-down">Conseils juridiques ?</Title>
        <Divider />
        <PointsList>
          <Point data-aos="fade-up">
            <strong style={{ color: "#90e0ef" }}>
              Expertise et expérience reconnue :
            </strong>
            Notre équipe de juristes et d'avocats est spécialisée dans de
            nombreux domaines du droit, vous offrant des solutions adaptées à
            vos besoins. Nous nous engageons à vous fournir des conseils de
            haute qualité.
          </Point>
          <Point data-aos="fade-up">
            <strong style={{ color: "#90e0ef" }}>
              Approche proactive et stratégique :
            </strong>{" "}
            Nous anticipons les défis et élaborons des stratégies adaptées pour
            minimiser les risques et maximiser vos chances de succès. Cela
            inclut une analyse approfondie de vos besoins spécifiques.
          </Point>
          <Point data-aos="zoom-up">
            <strong style={{ color: "#90e0ef" }}>
              Engagement envers vos intérêts :
            </strong>{" "}
            Nous défendons vos droits avec rigueur et professionnalisme, en vous
            apportant les meilleures solutions possibles. Votre satisfaction est
            au cœur de nos priorités.
          </Point>
          <Point>
            <strong style={{ color: "#90e0ef" }}>
              Communication claire et transparente :
            </strong>{" "}
            Nous vous tenons informé à chaque étape du processus, garantissant
            une collaboration efficace et une totale compréhension de votre
            dossier. Une information précise est notre priorité.
          </Point>
          <Point>
            <strong style={{ color: "#90e0ef" }}>Résultats probants :</strong>{" "}
            Notre expérience dans la résolution de contentieux complexes nous
            permet d'obtenir des résultats concrets et satisfaisants pour nos
            clients. Nous avons à cœur de vous apporter des solutions concrètes.
          </Point>
          <Point>
            <strong style={{ color: "#90e0ef" }}>
              Discrétion et confidentialité :
            </strong>{" "}
            Votre confiance est primordiale. Nous garantissons la protection de
            vos informations et la confidentialité totale de vos dossiers, avec
            un respect absolu de vos droits.
          </Point>
          <Point>
            <strong style={{ color: "#90e0ef" }}>
              Accompagnement sur mesure :
            </strong>{" "}
            Nous traitons chaque dossier avec soin et attention, vous offrant
            des conseils adaptés à votre situation spécifique, quel que soit le
            degré de complexité.
          </Point>
          <Point>
            <strong style={{ color: "#90e0ef" }}>
              Accessibilité et réactivité :
            </strong>{" "}
            Nous répondons rapidement à vos questions et préoccupations, en
            veillant à vous apporter un service de qualité à tout moment. Votre
            satisfaction est notre priorité.
          </Point>
        </PointsList>
        <ImageContainer>
          <Image src={logoAODnoir} alt="Logo AOD - Expertise Juridique" />
        </ImageContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default Conseiljuri;
