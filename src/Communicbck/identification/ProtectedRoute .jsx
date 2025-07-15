
// ProtectedRoute.jsx
{/*
import  { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // Si l'utilisateur n'est PAS authentifié, on le redirige vers la page de connexion
  if (!isAuthenticated) {
    return <Navigate to="/seconnecter" />;
  }

  // Si l'utilisateur est authentifié, on affiche les enfants
  return children;
};

export default ProtectedRoute;
*/}


// ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading || isAuthenticated === null) {
    // UX: tu peux afficher un loader/spinner ici
    return <div style={{ textAlign: "center", marginTop: 40 }}>Vérification de la session...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/seconnecter" replace />;
  }

  return children;
};

export default ProtectedRoute;
