import {
  Phone,
  Mail,
  MapPin,
  HomeIcon,
  PersonStanding,
  LampDesk,
  MapPinHouse,
} from "lucide-react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Styles avec Styled Components
const FooterContainer = styled.footer`
  background-color: rgba(10, 34, 64, 1);
  color: #e5e7eb;
  padding: 3rem 0;
  border-top: 1px solid rgba(0, 180, 216, 0.1);
`;

const ContactSection = styled.section`
  background-color: rgba(10, 34, 64, 1);
  color: white;
  padding: 2rem 0;
`;

const ContactTitle = styled.h2`
  color: #90e0ef;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5rem;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ContactCard = styled.div`
  background-color: rgba(0, 0, 6, 0.1);
  padding: 1.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 180, 216, 0.1);
  }
`;

const IconWrapper = styled.div`
  color: #90e0ef;
  margin-bottom: 1rem;
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

const ContactText = styled.div`
  color: #e5e7eb;
  text-align: center;
  font-size: 0.9rem;

  @media (min-width: 640px) {
    text-align: center;
  }

  &:hover svg {
    color: #00b4d8; // Changez cette couleur selon vos préférences
  }
`;

const CopyrightSection = styled.div`
  border-top: 1px solid rgba(0, 180, 216, 0.1);
  padding-top: 1rem;
  text-align: center;
  color: rgba(0, 180, 216, 0.7);
  font-size: 0.875rem;
`;

export default function AccueilFooter() {
  return (
    <FooterContainer>
      <ContactSection>
        <div className="container mx-auto px-4">
          <ContactTitle>Contactez-nous</ContactTitle>
          <ContactGrid>
            {/* Adresse */}
            <ContactCard>
              <IconWrapper>
                <MapPinHouse className="w-6 h-6 mx-auto sm:mx-0" />
              </IconWrapper>
              <ContactText>
                <div>
                  <MapPin className="inline-block w-4 h-4 mr-2" />
                  SIEGE SOCIAL à la Minière Cité 2ème Etage, Immeuble Yansané,
                  derrière la station totale de Commandaya, à côté de la SONAP,
                  Commune de Dixinn, Conakry, République de Guinée
                </div>
              </ContactText>
            </ContactCard>

            {/* Téléphone */}
            <ContactCard>
              <IconWrapper>
                <Phone className="w-6 h-6 mx-auto sm:mx-0" />
              </IconWrapper>
              <ContactText>
                <a className="hover:text-[#90e0ef] no-underline text-gray-300" href="tel:+224625292599">
                  <HomeIcon className="  inline-block w-4 h-4 mr-2" />: +224 625
                  292 599
                </a>
                <a href="tel:+224612858506" className="hover:text-[#90e0ef] text-gray-300 block mt-2 no-underline">
                  <PersonStanding className=" inline-block w-4 h-4 mr-2" />: +224
                  612 858 506
                </a>
                <a href="tel:+224612858507" className=" hover:text-[#90e0ef] text-gray-300 block mt-2 no-underline">
                  <LampDesk className="inline-block w-4 h-4 mr-2" />: +224 612
                  858 507
                </a>
              </ContactText>
            </ContactCard>

            {/* Email */}
            <ContactCard>
              <IconWrapper>
                <Mail className="w-6 h-6 mx-auto sm:mx-0" />
              </IconWrapper>
              <ContactText>
                <Link
                  to="mailto:amadou.diallo@aod-avocats.com"
                  className="no-underline text-gray-300 hover:text-[#90e0ef] transition-colors"
                >
                  <Mail className="inline-block w-4 h-4 mr-2" />
                  amadou.diallo@aod-avocats.com
                </Link>
              </ContactText>
            </ContactCard>
          </ContactGrid>
        </div>
      </ContactSection>

      {/* Section Droits d'auteur */}
      <CopyrightSection>
        <div className="container mx-auto px-4">
          © 2025 AOD AVOCATS . Tous droits réservés.
        </div>
      </CopyrightSection>
    </FooterContainer>
  );
}
