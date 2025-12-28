import { useEffect, memo, lazy, useState } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import { images } from "../../assets/images";
import Mapfinale from "../../màpping/Màpfinàl";

const Accueil = lazy(() => import("./Headercontact"));
const Footer = lazy(() => import("../Accueil/Footerr"));

// Styled Components
const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  padding: 60px;
  margin: 0.5rem;
  margin-top: 3rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
`;

const ImageSection = styled.div`
  flex: 1;
 // background-image: url("img/keitaseul2.avif");
    background-image: url(${images.keitaseul2});
  
  background-size: cover;
  background-position: center;
  min-height: 400px;

  @media (max-width: 768px) {
    min-height: 250px;
    margin-bottom: 0px;
  }
`;

const FormSection = styled.div`
  flex: 1;
  padding: 20px;
  background: rgba(15, 23, 42, 1);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px;
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
  margin: 20px;
  text-align: left;
  margin-left: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
    padding: 2px;
    margin: 2px;
    margin-left: 0.6rem;
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: px #00b4d8;
  border-radius: 1px;
  outline: none;
  box-shadow: 0 4px 0px #00b4d8;

  &:focus {
    border-color: #007bff;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #00b4d8;
  border-radius: 1px;
  outline: none;
  resize: none;
  box-shadow: 0 4px 0px #00b4d8;
  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 12px;
  font-size: 1rem;
  color: #00b4d8;
  background-color: #0a223f;
  border: none;
  border-radius: 1px;
  cursor: pointer;
  box-shadow: 0 4px 0px #00b4d8;
  &:hover {
    background-color: #0077b6;
  }
`;

const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 0.9rem;
`;

// Memoized Components
const MemoizedBardeNavigationpublic = memo(Accueil);
const MemoizedFooter = memo(Footer);

// Main Component
export default function Contact() {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Validation côté client
  const validateForm = (event) => {
    const form = event.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    const newErrors = {};

    if (!name || name.length < 2 || name.length > 50) {
      newErrors.name = "Le nom doit contenir entre 2 et 50 caractères.";
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!email || !emailPattern.test(email) || email.length > 100) {
      newErrors.email =
        "Veuillez entrer une adresse email Gmail valide (max 100 caractères).";
    }

    const messagePattern = /^[a-zA-Z\s]*$/;
    if (
      !message ||
      message.length < 10 ||
      message.length > 500 ||
      !messagePattern.test(message)
    ) {
      newErrors.message =
        "Le message doit contenir entre 10 et 500 caractères et ne doit contenir que des lettres de l'alphabet.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      event.preventDefault();
      return false;
    }

    setErrors({});
    return true;
  };

  return (
    <div style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
      <Helmet>
        <title>Contactez-nous - Cabinet AOD-AVOCATS</title>
        <meta
          name="description"
          content="Contactez le Cabinet AOD-AVOCATS pour toutes vos questions, commentaires ou préoccupations. Nous sommes là pour vous aider."
        />
      </Helmet>
      <MemoizedBardeNavigationpublic />
      <ContactContainer>
        <ImageSection data-aos="fade-right" />
        <FormSection data-aos="fade-down">
          <Title data-aos="fade-right">Contactez-nous</Title>
          <Description>
            Si vous avez des questions, des commentaires ou des préoccupations,
            n’hésitez pas à nous contacter en utilisant le formulaire
            ci-dessous. Nous ferons de notre mieux pour répondre à votre demande
            dans les plus brefs délais. Votre satisfaction est notre priorité
            absolue, et nous apprécions tous les commentaires que vous pourriez
            avoir sur notre cabinet et nos services. Merci de votre confiance
            et nous avons hâte de discuter avec vous bientôt.
          </Description>
          <Form
            action={import.meta.env.VITE_fo}
            method="POST"
            onSubmit={validateForm}
          >
            <Input
              type="text"
              name="name"
              placeholder="Votre nom"
              required
              pattern="[A-Za-z\s]{1,}"
              title="Le nom ne doit contenir que des lettres et des espaces."
              maxLength="50"
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            <Input
              type="email"
              name="email"
              placeholder="Votre email"
              required
              maxLength="100"
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            <Textarea
              name="message"
              rows="5"
              placeholder="Votre message"
              required
              maxLength="500"
            />
            {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
            <Button type="submit">Envoyer</Button>
          </Form>
        </FormSection>
        <Mapfinale/>
        
      </ContactContainer>
      <div className="mt-40">
        <MemoizedFooter />
      </div>
    </div>
  );
}
