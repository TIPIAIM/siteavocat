import styled from "styled-components";
import { images } from "../../assets/images"; // Importation des images

// Conteneur principal avec une image de fond fixe
const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh; /* Couverture totale de l'écran */
 // background: url("/img/MOE_0384.avif") center/cover no-repeat;
    background-image: url(${images.moe0384});
  
  background-attachment: fixed; /* Fixe l'image lors du défilement */

  /* Media queries pour assurer la responsivité */
  @media (max-width: 768px) {
    height: auto; /* Permet au contenu de s'adapter à la taille */
    background-attachment: scroll; /* Evite les problèmes de performance sur mobile */
  }
`;

const OverlayTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: rgba(20, 250, 250, 0.5); /* Couleur noire semi-transparente */
`;

const OverlayBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: rgba(100, 20, 250, 0.5); /* Couleur orange semi-transparente */
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  z-index: 2;
  max-width: 90%;
  background: rgba(0, 0, 0, 0.6); /* Légère ombre pour le texte */
  padding: 2rem;
  border-radius: 2px;
  box-sizing: border-box; /* Garantit que le padding ne dépasse pas le conteneur */

  @media (max-width: 768px) {
    padding: 1.5rem; /* Réduction des marges pour mobile */
  }
  @media (max-width: 480px) {
    padding: 1rem; /* Ajustement pour petits écrans */
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem; /* Taille réduite pour tablette */
  }
  @media (max-width: 480px) {
    font-size: 1.8rem; /* Taille réduite pour mobile */
  }
`;

const Paragraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 1.1rem; /* Texte légèrement réduit */
  }
  @media (max-width: 480px) {
    font-size: 1rem; /* Ajustement pour mobile */
  }
`;

const List = styled.ul`
  margin-top: 1rem;
  text-align: left;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.8rem;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem; /* Réduction pour tablette */
    }
    @media (max-width: 480px) {
      font-size: 0.9rem; /* Taille plus petite pour mobile */
    }
  }
`;

const Fiscal2 = () => {
  return (
    <BackgroundContainer>
      {/* Superpositions de couleur */}
      <OverlayTop />
      <OverlayBottom />
      <Content>
        {/* Titre principal */}
        <Title></Title>

        {/* Texte principal */}
        <Paragraph></Paragraph>

        {/* Liste des points */}
        <List></List>
      </Content>
    </BackgroundContainer>
  );
};

export default Fiscal2;
