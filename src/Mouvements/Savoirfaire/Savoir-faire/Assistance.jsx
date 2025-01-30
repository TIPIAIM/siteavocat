import styled from "styled-components";
import { useEffect } from "react";
import BardeNavigationpublic from "../../Navigatpublic/BardeNavigationPublic";
import Footer from "../../Accueil/Footerr";
import EVOL from "./../../../assets/Image/EVOL.avif";
import logoAODnoir from "./../../../assets/Image/logoAODnoir.avif";
import commercial from "../../../assets/Image/commercial.avif";
import MOE_0400 from "../../../assets/Image/MOE_0400.avif";
import jurid from "../../../assets/Image/jurid.avif";
import AOS from "aos";
import "aos/dist/aos.css";

const BackgroundContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("img/confience.avif");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: black;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 2rem 1rem;
    text-align: center;
    margin: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #90e0ef;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }
`;

const ParagraphWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0rem;
  max-width: 1000px;
  gap: 2rem;
  border-radius: 0px;
  padding: 1.5rem;
  background: rgba(10, 34, 64, 0.9);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 0rem;
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ParagraphImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 5%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    border-radius: 0%;
    width: 400px;
    height: 250px;
    margin-bottom: 1rem;
    text-align: center;
  }
  @media (max-width: 1024px) {
    width: 400px;
    height: 200px;
    margin: 0 auto;
  }
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.8rem;
  text-align: justify;
  color: #e0e0e0;

  @media (max-width: 480px) {
    font-size: 1rem;
    line-height: 1.6rem;
    text-align: left;
    padding: 2rem;
  }
  @media (max-width: 1024px) {
    font-size: 1.1rem;
    line-height: 1.7rem;
    text-align: left;
    justify-content: left;
    padding: 30px;
  }
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
  background: rgba(250, 250, 250, 0.8);
  margin-top: 4rem;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    background: rgba(250, 250, 250, 0.3);
  }
  @media (max-width: 1024px) {
    max-width: 250px;
  }
`;

const Divider = styled.div`
  height: 3px;
  width: 200px;
  background: #4ea8ff;
  margin: 2rem 0;
`;

export default function AuditJuridique() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation
      once: false, // Animation déclenchée une seule fois
    });
  }, []);

  return (
    <div>
      <BackgroundContainer>
        <Overlay />
        <BardeNavigationpublic />
        <ContentContainer
          style={{ fontFamily: "Helvetica55Roman, Arial, sans-serif" }}
        >
          <Title data-aos="fade-down">Assistance juridique</Title>
          <Divider />
          <ParagraphWrapper data-aos="fade-right">
            <Paragraph>
              <strong style={{ color: "#90e0ef" }}>
                Une expertise reconnue dans le domaine juridique :
              </strong>
              Notre équipe regroupe des avocats et juristes expérimentés,
              spécialisés en droit civil, commercial, fiscal, du travail, et
              administratif. Nous avons l’expérience et les compétences
              nécessaires pour résoudre vos problématiques juridiques, quelles
              qu’elles soient. Nous mettons à votre disposition un
              accompagnement sur mesure pour chaque situation.
            </Paragraph>
            <ParagraphImage src={commercial} alt="Analyse" />
          </ParagraphWrapper>
          <ParagraphWrapper data-aos="fade-left">
            <Paragraph>
              <strong style={{ color: "#90e0ef" }}>
                Accompagnement dans la régulation :
              </strong>
              Nous vous assistons dans vos démarches administratives et
              réglementaires pour garantir la conformité de vos activités avec
              les lois en vigueur. Cela inclut l’élaboration des documents
              requis, la représentation auprès des autorités compétentes, et le
              suivi des modifications législatives.
            </Paragraph>
            <ParagraphImage src={EVOL} alt="Régulation" />
          </ParagraphWrapper>
          <ParagraphWrapper data-aos="fade-right">
            <Paragraph>
              <strong style={{ color: "#90e0ef" }}>
                Consultations personnalisées :
              </strong>
              Nos experts sont à votre écoute pour vous fournir des solutions
              adaptées à vos besoins spécifiques, que ce soit pour des conseils,
              des analyses ou des recommandations stratégiques. Nous abordons
              chaque cas avec une attention particulière pour offrir un service
              réellement personnalisé.
            </Paragraph>
            <ParagraphImage src={MOE_0400} alt="Consultation" />
          </ParagraphWrapper>
          <ParagraphWrapper data-aos="fade-left">
            <Paragraph>
              <strong style={{ color: "#90e0ef" }}>
                Formations spécialisées :
              </strong>
              Nous proposons des programmes de formation adaptés pour vous aider
              à mieux comprendre et gérer les aspects juridiques de vos projets.
              Ces formations couvrent des sujets variés allant de la gestion des
              contrats à la prévention des litiges.
            </Paragraph>
            <ParagraphImage src={jurid} alt="Formation" />
          </ParagraphWrapper>
          <ParagraphWrapper data-aos="fade-right">
            <Paragraph>
              <strong style={{ color: "#90e0ef" }}>
                Protection juridique :
              </strong>
              Nous vous offrons une assistance pour anticiper et gérer les
              litiges, en assurant une protection efficace de vos droits. Notre
              approche proactive vise à réduire les risques légaux et à
              sécuriser vos intérêts sur le long terme.
            </Paragraph>
          </ParagraphWrapper>
          <ImageContainer>
            <Image
              src={logoAODnoir}
              alt="Analyse juridique"
              data-aos="zoom-in"
            />
          </ImageContainer>
        </ContentContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
}
