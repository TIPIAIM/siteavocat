import { useEffect, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Accueil/Footerr";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import { Link } from "react-router-dom";
import { ChevronsLeftRight } from "lucide-react";
import LazyLoad from "react-lazyload";
import photoaccueil from "../../assets/Image/photo-accueil.avif";

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(to bottom, #, #, #);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  background-image: url("img/keitaseul2.avif");
  background-size: cover;
  background-position: center;
  min-height: 400px;

  @media (max-width: 768px) {
    min-height: 250px;
    margin-bottom: 20px;
  }
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: #1e293b;
  border-radius: 0px;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #00b4d8;
  margin-bottom: 15px;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #caf0f8;
  margin-bottom: 20px;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
    padding: 20px;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
    padding: 20px;
    text-align: center;
  }
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid 00b4d;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0);

  &:focus {
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FooterWrapper = styled.div`
  margin-top: 60px;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid 00b4d8;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
  resize: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0.2);

  &:focus {
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 10px;
  }
`;

const Button = styled.button`
  padding: 12px;
  font-size: 1rem;
  color: #00b4d8;
  background-color: #0a223f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 20px;
  }
`;
const Placeholder = styled.div`
  background-color: #00b4d8;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #023e8a;
`;

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => setImageLoaded(true);
  const handleImageError = () => setImageError(true);
  return (
    <div style={{ fontFamily: "Helvetica55Roman, Arial, sans-serif" }}>
      <header className="relative h-[400px] sm:h-[400px] mb-20 overflow-hidden">
        <BardeNavigationpublic />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <LazyLoad
          height={400}
          offset={100} // Décalage pour charger avant que l'image ne soit visible
          debounce={300} // Optimisation du défilement
          once // Charge une seule fois
        >
          {!imageLoaded && !imageError && (
            <Placeholder>TIPTAIM Cabinet AOD-AVOCATS-SCPA</Placeholder>
          )}
          {!imageError ? (
            <img
              src={photoaccueil}
              alt="Cabinet d'avocats"
              className="absolute inset-0 w-full h-full object-cover"
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={imageLoaded ? { display: "block" } : { display: "none" }}
            />
          ) : (
            <Placeholder>Image non disponible</Placeholder>
          )}
        </LazyLoad>
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col text-center sm:text-left max-w-screen-md">
          <h1
            className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6"
            style={{ color: "#90e0ef" }}
          >
            Cabinet AOD-AVOCATS-SCPA
          </h1>
          <Link
            to="/accueil"
            className="bg-[rgba(10,34,64,0.9)] no-underline animate-pulse hover:bg-[rgba(0,119,182,1)] px-6 sm:px-8 py-2 sm:py-3 rounded-md inline-flex items-center w-fit mx-auto sm:mx-0"
            style={{ color: "#00b4d8" }}
          >
            Retourner
            <ChevronsLeftRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </header>

      <ContactContainer className="mb-7">
        <ImageSection data-aos="fade-right" />

        <FormSection data-aos="fade-down">
          <Title>Contactez-nous</Title>
          <Description>
            Si vous avez des questions, des commentaires ou des préoccupations,
            n’hésitez pas à nous contacter en utilisant le formulaire
            ci-dessous. Nous ferons de notre mieux pour répondre à votre demande
            dans les plus brefs délais. Votre satisfaction est notre priorité
            absolue, et nous apprécions tous les commentaires que vous pourriez
            avoir sur notre entreprise et nos services. Merci de votre confiance
            et nous avons hâte de discuter avec vous bientôt.
          </Description>
          <Form action="https://getform.io/f/bnllyvmb" method="POST">
            <Input type="text" name="name" placeholder="Votre nom" required />
            <Input
              type="email"
              name="email"
              placeholder="Votre email"
              required
            />
            <Textarea
              name="message"
              rows="5"
              placeholder="Votre message"
              required
            />
            <Button type="submit">Envoyer</Button>
          </Form>
        </FormSection>
      </ContactContainer>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </div>
  );
}
