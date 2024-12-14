import { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Accueil/Footerr";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  padding: 20px;
  background: linear-gradient(to, #0488b2, #0f172a, #000);

  @media (max-width: 768px) {
    flex-direction: column; /* Passer en colonne sur les petits écrans */
    padding: 10px;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  background-image: url("/img/keitaseul2.jpg");
  background-size: cover;
  background-position: center;
  min-height: 400px;
  border-radius: 1px;
  box-shadow: 0 4px 6px rgba(1, 100, 100, 0.75);

  @media (max-width: 768px) {
    min-height: 250px; /* Réduire la hauteur sur petits écrans */
  }
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: #aaaaa;
  box-shadow: 0 4px 6px rgba(1, 100, 100, 0.75);
  border-radius: 1px;

  @media (max-width: 768px) {
    padding: 20px; /* Réduire le padding sur petits écrans */
  }
`;

const Title = styled.h1`
  font-size: 2.3rem;
  font-family: "Times New Roman", serif;
  color: #0488b2;
  margin-bottom: 10px;
  font-weight: bold;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8);

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Réduire la taille de police sur petits écrans */
  }
`;
const Description = styled.p`
  font-size: 1.02rem;
  font-family: "Times New Roman", serif;
  color: #0f172a;
  margin-bottom: 20px;
  text-align: flex; /* Alignement à droite */

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Optionnel : ajuster la taille pour les petits écrans */
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px; /* Réduire l'espacement sur petits écrans */
  }
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(1, 100, 100, 0.75);

  &:focus {
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Réduire la taille de police sur petits écrans */
  }
`;

const FooterWrapper = styled.div`
  margin-top: 60px;

  @media (max-width: 768px) {
    margin-top: 30px; /* Ajuster l'espace pour les petits écrans */
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease;
  resize: none;
  box-shadow: 0 4px 6px rgba(1, 100, 100, 0.75);

  &:focus {
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Réduire la taille de police sur petits écrans */
  }
`;

const Button = styled.button`
  padding: 12px;
  font-size: 1rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Réduire la taille de police sur petits écrans */
    padding: 10px; /* Réduire le padding sur petits écrans */
  }
`;
export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div>
      <BardeNavigationpublic />
      <ContactContainer className=" mb-7">
        <ImageSection data-aos="fade-right" />
        <FormSection data-aos="fade-left">
          <Title>Contactez-nous</Title>
          <Description>
            Si vous avez des questions, des commentaires ou des préoccupations,
            n’hésitez pas à nous contacter en utilisant le formulaire
            ci-dessous. Nous ferons de notre mieux pour répondre à votre demande
            dans les plus brefs délais. Votre satisfaction est notre priorité
            absolue, et nous apprécions tous les commentaires que vous pourriez
            avoir sur notre entreprise et nos services. Merci de votre confiance
            et nous avons hâte de discuter avec vous bientôt.{" "}
          </Description>
          <Form
            action="https://getform.io/f/bnllyvmb" // Remplacez par l'URL fournie
            method="POST"
          >
            <Input
              type="text"
              name="name" // Obligatoire pour Getform
              placeholder="Votre nom"
              required
            />
            <Input
              type="email"
              name="email" // Obligatoire pour Getform
              placeholder="Votre email"
              required
            />
            <Textarea
              name="message" // Obligatoire pour Getform
              rows="5"
              placeholder="Votre message"
              required
            />
            <Button type="submit">Envoyer</Button>
          </Form>
        </FormSection>
      </ContactContainer>{" "}
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </div>
  );
}
