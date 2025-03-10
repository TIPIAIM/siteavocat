import { useEffect, memo } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

import { lazy } from "react";

const Accueil = lazy(() => import("./Headercontact"));
const Footer = lazy(() => import("../Accueil/Footerr"));
// Styled Components
const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  padding: 30px;
  margin: 0.5rem;
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
  padding: 40px;
  background:rgba(15, 23, 42, 1);

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
    padding: 10px;
  }
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #00b4d8;
  border-radius: 5px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #00b4d8;
  border-radius: 5px;
  outline: none;
  resize: none;

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
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0077b6;
  }
`;

// Memoized Components
const MemoizedBardeNavigationpublic = memo(Accueil);
const MemoizedFooter = memo(Footer);

// Main Component
export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ fontFamily: "Helvetica, Arial, sans-serif" }}>
      <Helmet>
        <title>Contactez-nous - Cabinet AOD-AVOCATS</title>
        <meta
          name="description"
          content="Contactez le Cabinet AOD-AVOCATS pour toutes vos questions, commentaires ou préoccupations. Nous sommes là pour vous aider."
        />
      </Helmet>
      <head />
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
      <div className=" mt-40">
        <MemoizedFooter />
      </div>
    </div>
  );
}
