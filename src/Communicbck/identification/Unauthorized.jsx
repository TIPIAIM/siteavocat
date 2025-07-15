import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styles avec styled-components
const UnauthorizedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
  padding: 2rem;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #dc3545;
  margin-bottom: 1rem;
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  color: #343a40;
  margin-bottom: 1rem;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`;

const ActionButton = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 1rem;

  &:hover {
    transform: translateY(-2px);
  }
`;

const GoBackButton = styled(ActionButton)`
  background-color: #6c757d;
  color: white;

  &:hover {
    background-color: #5a6268;
  }
`;

const GoHomeButton = styled(ActionButton)`
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0069d9;
  }
`;

const LoginButton = styled(ActionButton)`
  background-color: #28a745;
  color: white;

  &:hover {
    background-color: #218838;
  }
`;

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <UnauthorizedContainer>
      {/* Code d'erreur HTTP */}
      <ErrorCode>403</ErrorCode>
      
      {/* Titre de l'erreur */}
      <ErrorTitle>Accès Refusé</ErrorTitle>
      
      {/* Message explicatif */}
      <ErrorMessage>
        Vous n'avez pas les autorisations nécessaires pour accéder à cette page.
        Veuillez vous connecter avec un compte ayant les droits appropriés ou
        retourner à la page d'accueil.
      </ErrorMessage>

      {/* Groupe de boutons d'action */}
      <ButtonGroup>
        {/* Bouton pour retourner à la page précédente */}
        <GoBackButton onClick={() => navigate(-1)}>
          Retour
        </GoBackButton>
        
        {/* Bouton pour aller à la page d'accueil */}
        <GoHomeButton onClick={() => navigate('/')}>
          Page d'Accueil
        </GoHomeButton>
        
        {/* Bouton pour se connecter (si l'utilisateur n'est pas authentifié) */}
        <LoginButton onClick={() => navigate('/seconnecter')}>
          Se Connecter
        </LoginButton>
      </ButtonGroup>
    </UnauthorizedContainer>
  );
};

export default Unauthorized;