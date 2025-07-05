import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Check,
  Facebook,
  Twitter,
  Instagram,
  Scale,
  Shield,
  FileText,
  X,
} from "lucide-react";
import styled, { keyframes } from "styled-components";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";

// Points de rupture pour différents appareils
const breakpoints = {
  smallPhone: 375,
  phone: 480,
  tablet: 768,
  laptop: 1024,
  desktop: 1200,
  largeDesktop: 1440,
};

// Animation pour les modales
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); }
  to { transform: translateY(0); }
`;

const LegalLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (min-width: ${breakpoints.tablet}px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-top: 2rem;
  }

  button {
    color: #90e0ef;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.8rem;
    transition: color 0.3s ease;
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    white-space: nowrap;

    @media (min-width: ${breakpoints.tablet}px) {
      font-size: 0.9rem;
    }

    &:hover {
      color: #00b4d8;
      text-decoration: none;
    }

    svg {
      margin-right: 0.5rem;
      min-width: 16px;
    }
  }
`;

const CopyrightSection = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0, 180, 216, 0.2);
  color: #90e0ef;
  font-size: 0.8rem;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 0.9rem;
  }
`;

const BackToTop = styled.div`
  text-align: center;
  margin-top: 1.5rem;
`;

const FooterContainer = styled.footer`
  background-color: #1a365d;
  color: #e5e7eb;
  padding: 2rem 0;

  @media (min-width: ${breakpoints.tablet}px) {
    padding: 3rem 0;
  }
  @media (min-width: ${breakpoints.phone}px) {
    padding: 0 1.5rem;
  }
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${breakpoints.phone}px) {
    padding: 0 1.5rem;
  }

  @media (min-width: ${breakpoints.tablet}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media (min-width: ${breakpoints.laptop}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterSection = styled.div`
  padding: 0.5rem;
  margin-top: 3rem;
  @media (min-width: ${breakpoints.tablet}px) {
    padding: 1rem;
  }
  @media (max-width: 768px) {
    margin-left: 1rem;
    margin-top: 0.5rem;
  }
`;

const SectionTitle = styled.h3`
  color: #90e0ef;
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
  cursor: pointer;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }

  &:after {
    content: "";
    position: absolute;
    width: 50px;
    height: 3px;
    background-color: #0077b6;
    bottom: 0;
    left: 0;
    transition: all 0.3s ease;
 
    @media (min-width: ${breakpoints.tablet}px) {
      width: 20px;
      height: 4px;
       
    }
  }

  &:hover:after {
    width: 35%; /* La barre s'étend sur toute la largeur */
 background-color: #90e0ef;
    }
`;


const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.8rem;
  color: #e5e7eb;
  font-size: 0.8rem;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  svg {
    margin-right: 0.5rem;
    margin-top: 0.2rem;
    min-width: 18px;
    color: #90e0ef;
    flex-shrink: 0;
  }

  a {
    color: #e5e7eb;
    transition: color 0.3s ease;
    text-decoration: none;
    word-break: break-word;

    &:hover {
      color: #00b4d8;
    }
  }
`;

const ServiceItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.6rem;
  color: #e5e7eb;
  font-size: 0.8rem;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 0.9rem;
    margin-bottom: 0.8rem;
  }
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
  svg {
    margin-right: 0.5rem;
    color: #2ecc71;
    min-width: 18px;
    flex-shrink: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;

  @media (min-width: ${breakpoints.tablet}px) {
    gap: 1rem;
  }
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
  a {
    color: #e5e7eb;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: ${breakpoints.tablet}px) {
      width: 36px;
      height: 36px;
    }

    &:hover {
      color: #00b4d8;
      background: rgba(0, 180, 216, 0.2);
      transform: translateY(-3px);
    }
  }
`;

const MissionText = styled.p`
  // font-style: italic;
  color: #bdc3c7;
  margin-top: 1rem;
  line-height: 1.6;
  font-size: 0.8rem;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 0.9rem;
  }
`;

const BackToTopLink = styled.a`
  color: #90e0ef;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.8rem;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(144, 224, 239, 0.3);
  border-radius: 4px;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 0.9rem;
  }

  &:hover {
    color: #00b4d8;
    border-color: #00b4d8;
    background: rgba(0, 180, 216, 0.1);
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  animation: ${fadeIn} 0.3s ease-out;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: #1a365d;
  border-radius: 8px;
  width: 95%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 1.5rem;
  position: relative;
  border: 1px solid rgba(0, 180, 216, 0.3);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  animation: ${slideUp} 0.3s ease-out;

  @media (min-width: ${breakpoints.phone}px) {
    width: 90%;
    padding: 2rem;
  }
`;

const ModalTitle = styled.h3`
  color: #90e0ef;
  font-size: 1.3rem;
  margin-bottom: 1.2rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0, 180, 216, 0.3);
  display: flex;
  align-items: center;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  svg {
    margin-right: 10px;
  }
`;

const ModalText = styled.div`
  color: #e5e7eb;
  line-height: 1.7;
  font-size: 0.9rem;

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 1rem;
    line-height: 1.8;
  }

  p {
    margin-bottom: 1.2rem;

    @media (min-width: ${breakpoints.tablet}px) {
      margin-bottom: 1.5rem;
    }
  }

  ul {
    margin: 0.8rem 0;
    padding-left: 1.2rem;

    @media (min-width: ${breakpoints.tablet}px) {
      margin: 1rem 0;
      padding-left: 1.5rem;
    }
  }

  li {
    margin-bottom: 0.4rem;
    position: relative;

    @media (min-width: ${breakpoints.tablet}px) {
      margin-bottom: 0.5rem;
    }
  }

  li::before {
    content: "•";
    color: #00b4d8;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  .highlight {
    background-color: rgba(0, 180, 216, 0.1);
    border-left: 3px solid #00b4d8;
    padding: 0.8rem;
    margin: 1.2rem 0;

    @media (min-width: ${breakpoints.tablet}px) {
      padding: 1rem;
      margin: 1.5rem 0;
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  background: rgba(0, 180, 216, 0.1);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;

  @media (min-width: ${breakpoints.tablet}px) {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }

  &:hover {
    background: rgba(0, 180, 216, 0.3);
    transform: rotate(90deg);
  }

  svg {
    color: #90e0ef;
  }
`;
// Contenu des modales

// Contenu des modales
const legalContent = {
  mentions: {
    title: "Mentions légales",
    icon: <Scale size={20} />,
    content: (
      <>
        <p>
          <strong>Cabinet d'Avocats AOD AVOCATS</strong>
        </p>
        <p>Société civil Professionnelle d'Avocats</p>
        <p>Immatriculée au registre de commerce : GN.TCC.2022.B.14430</p>

        <div className="highlight">
          <p>
            <strong>Siège social : </strong>
          </p>
          <p>
            Minière Cité 2ème Etage, Immeuble Yansané, Commune de Dixinn,
            Conakry, République de Guinée
          </p>
        </div>

        <p>
          <strong>Directeur de la publication :</strong>
        </p>
        <p>Maître Amadou DIALLO, Avocat au Barreau de Guinée</p>

        <p>
          <strong>Hébergement :</strong>
        </p>
        <p>OVH SAS</p>
        <p>2 rue Kellermann - 59100 Roubaix - France</p>

        <p>
          <strong>Propriété intellectuelle :</strong>
        </p>
        <p>
          L'ensemble de ce site relève de la législation guinéenne et
          internationale sur le droit d'auteur et la propriété intellectuelle.
          Toute reproduction ou représentation totale ou partielle de ce site
          par quelque procédé que ce soit, sans autorisation expresse, est
          interdite et constituerait une contrefaçon sanctionnée par les
          articles 404 et suivants du Code de la Propriété Intellectuelle.
        </p>
      </>
    ),
  },
  confidentialite: {
    title: "Politique de confidentialité",
    icon: <Shield size={20} />,
    content: (
      <>
        <p>
          Le Cabinet AOD AVOCATS s'engage à protéger la confidentialité des
          données personnelles de ses clients et visiteurs conformément à la loi
          n°2019/19 du 30 décembre 2019 relative à la protection des données à
          caractère personnel en République de Guinée.
        </p>

        <div className="highlight">
          <p>
            <strong>Collecte des données :</strong>
          </p>
          <p>
            Nous collectons uniquement les données nécessaires à la fourniture
            de nos services juridiques :
          </p>
          <ul>
            <li>Nom, prénom, coordonnées professionnelles</li>
            <li>Informations relatives à votre demande juridique</li>
            <li>Données de navigation (cookies strictement nécessaires)</li>
          </ul>
        </div>

        <p>
          <strong>Finalités du traitement :</strong>
        </p>
        <p>Les données collectées sont utilisées pour :</p>
        <ul>
          <li>Répondre à vos demandes de consultation</li>
          <li>Fournir nos services juridiques</li>
          <li>Respecter nos obligations légales et déontologiques</li>
        </ul>

        <p>
          <strong>Durée de conservation :</strong>
        </p>
        <p>
          Les données sont conservées pendant la durée nécessaire à la
          réalisation des finalités pour lesquelles elles sont collectées et
          conformément aux obligations légales applicables (notamment 10 ans
          pour les documents comptables).
        </p>

        <div className="highlight">
          <p>
            <strong>Droits des personnes concernées :</strong>
          </p>
          <p>
            Conformément à la loi, vous disposez des droits d'accès, de
            rectification, de suppression et de limitation du traitement de vos
            données. Pour exercer ces droits, veuillez nous contacter à
            l'adresse mail du cabinet.
          </p>
        </div>
      </>
    ),
  },
  conditions: {
    title: "Conditions générales",
    icon: <FileText size={20} />,
    content: (
      <>
        <p>
          <strong>Article 1 - Objet</strong>
        </p>
        <p>
          Les présentes conditions générales régissent l'utilisation du site web
          et des services du Cabinet AOD AVOCATS.
        </p>

        <div className="highlight">
          <p>
            <strong>Article 2 - Consultation juridique</strong>
          </p>
          <p>
            Les informations présentes sur ce site ne constituent pas un conseil
            juridique. Une consultation formelle est nécessaire pour obtenir un
            avis juridique adapté à votre situation. Aucune relation
            avocat-client n'est créée par la simple consultation de ce site.
          </p>
        </div>

        <p>
          <strong>Article 3 - Responsabilité</strong>
        </p>
        <p>
          Le Cabinet décline toute responsabilité quant à l'utilisation qui
          pourrait être faite des informations présentes sur ce site. Les
          contenus sont fournis à titre informatif et peuvent ne pas refléter
          les évolutions les plus récentes de la jurisprudence ou de la
          législation guinéenne.
        </p>

        <p>
          <strong>Article 4 - Honoraires</strong>
        </p>
        <p>
          Nos honoraires sont fixés conformément au Règlement Intérieur de la
          Profession d'Avocat en Guinée. Un devis personnalisé est établi pour
          chaque dossier après analyse préalable. Les modalités de paiement sont
          convenues avec le client préalablement à toute prestation.
        </p>

        <div className="highlight">
          <p>
            <strong>Article 5 - Secret professionnel</strong>
          </p>

          <p>
            Conformément à la LOI N*L/2016/037/AN RELATIVE À LA CYBER-SECURITE
            ET LA PROTECTION DES DONNÉES À CARACTÈRE PERSONNEL EN RÉPUBLIQUE DE
            GUINÉE
          </p>
        </div>

        <p>
          <strong>Article 6 - Règlement des litiges</strong>
        </p>
        <p>
          En cas de litige, les parties s'engagent à rechercher une solution
          amiable avant toute action en justice. Tout litige relatif à
          l'interprétation ou à l'exécution des présentes conditions est soumis
          à la compétence exclusive des tribunaux de Conakry.
        </p>
      </>
    ),
  },
};

export default function AccueilFooter() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (contentKey) => {
    setModalContent(legalContent[contentKey]);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = "auto";
  };

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <FooterContainer>
      <FooterGrid>
        <FooterSection>
          <SectionTitle>Nos Services</SectionTitle>
          <ServiceItem>
            <Check size={18} />
            <span>Consultation juridique</span>
          </ServiceItem>
          <ServiceItem>
            <Check size={18} />
            <span>Représentation en justice</span>
          </ServiceItem>
          <ServiceItem>
            <Check size={18} />
            <span>Rédaction d'actes</span>
          </ServiceItem>
          <ServiceItem>
            <Check size={18} />
            <span>Conseil aux entreprises ...</span>
          </ServiceItem>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Suivez-nous</SectionTitle>
          <SocialLinks>
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </SocialLinks>
          <MissionText>Votre satisfaction est notre mission</MissionText>
        </FooterSection>

        <FooterSection>
          <SectionTitle>Engagement</SectionTitle>
          <MissionText>
            Nous nous engageons à fournir des services juridiques de qualité.
          </MissionText>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Contactez-nous</SectionTitle>
          <ContactItem>
            <MapPin size={18} />
            <div>
              SIEGE SOCIAL à la Minière Cité 2ème Etage,
              <br />
              Immeuble Yansané, Commune de Dixinn,
              <br />
              Conakry, République de Guinée
            </div>
          </ContactItem>
          <ContactItem>
            <Phone size={18} />
            <a href="tel:+224612858507">+224 612 858 507</a>
          </ContactItem>
          <ContactItem>
            <Mail size={18} />
            <a href="mailto:amadou.diallo@aod-avocats.com">
              amadou.diallo@aod-avocats.com
            </a>
          </ContactItem>
        </FooterSection>
      </FooterGrid>

      <LegalLinks>
        <button onClick={() => openModal("mentions")}>
          <Scale size={16} /> Mentions légales
        </button>
        <button onClick={() => openModal("confidentialite")}>
          <Shield size={16} /> Politique de confidentialité
        </button>
        <button onClick={() => openModal("conditions")}>
          <FileText size={16} /> Conditions générales
        </button>
      </LegalLinks>

      <CopyrightSection>
        © {new Date().getFullYear()} AOD AVOCATS - Tous droits réservés
      </CopyrightSection>

      <BackToTop>
        <BackToTopLink href="#top">
          Retour en haut
          <ArrowUp size={16} />
        </BackToTopLink>
      </BackToTop>

      <AnimatePresence>
        {modalContent && (
          <ModalOverlay onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeModal} aria-label="Fermer">
                <X size={20} />
              </CloseButton>
              <ModalTitle>
                {modalContent.icon}
                {modalContent.title}
              </ModalTitle>
              <ModalText>{modalContent.content}</ModalText>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </FooterContainer>
  );
}
