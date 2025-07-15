import { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import GlobalStyle from "./Styles/Globalstylehelve";
import StructuredData from "./Donnestructure";
import FloatingButton from "./Mouvements/Assistant/assistboutom";

// --- Lazy loading pour chaque page lourde (pro) ---
const Accueil = lazy(() => import("./Mouvements/Accueil/Accueil"));
const Petitecrandeux = lazy(() => import("./Mouvements/Erreur/Erreur"));
const Contact = lazy(() => import("./Mouvements/Contact/Contact"));
const Apropos = lazy(() => import("./Mouvements/Apropos/Apropos"));
const Articles = lazy(() => import("./Mouvements/Article/Article"));
const Affaires = lazy(() => import("./Mouvements/Article/Affaires"));
const Securite = lazy(() => import("./Mouvements/Article/Securite"));
const Penal = lazy(() => import("./Mouvements/Article/Penal"));
const Fiscalite = lazy(() => import("./Mouvements/Article/Fiscalite"));
const Minier = lazy(() => import("./Mouvements/Article/MinierEnviron"));
const Famille = lazy(() => import("./Mouvements/Article/Famille"));
const Nosexpertise = lazy(() => import("./Mouvements/Savoirfaire/Nos-Domaines"));
const Fiscalitee = lazy(() => import("./Mouvements/Savoirfaire/Fiscalitee"));
const MinierEnvironn = lazy(() => import("./Mouvements/Savoirfaire/MinierEnvironn"));
const Securitee = lazy(() => import("./Mouvements/Savoirfaire/Securitee"));
const Travail = lazy(() => import("./Mouvements/Savoirfaire/Travaill"));
const Penall = lazy(() => import("./Mouvements/Savoirfaire/Penall"));
const Sport = lazy(() => import("./Mouvements/Savoirfaire/Sport"));
const Arbitrage = lazy(() => import("./Mouvements/Savoirfaire/Arbitrage"));
const Contentieux = lazy(() => import("./Mouvements/Savoirfaire/Savoir-faire/Contentieux"));
const AuditJuridique = lazy(() => import("./Mouvements/Savoirfaire/Savoir-faire/Auditjurique"));
const Conseiljuri = lazy(() => import("./Mouvements/Savoirfaire/Savoir-faire/Conseiljuri"));
const Assistance = lazy(() => import("./Mouvements/Savoirfaire/Savoir-faire/Assistance"));
const Contact2 = lazy(() => import("./Mouvements/Contact2/Contact2"));
const ContactList = lazy(() => import("./Mouvements/Contact2/Listecontact"));
const ElementList = lazy(() => import("./Mouvements/Contact2/Listeapi"));
const Adminfils = lazy(() => import("./Mouvements/AClient/Adminfils"));
const AjouterClient = lazy(() => import("./Mouvements/Administrateur/GestionClient/AjouterClient"));
const ListeClients = lazy(() => import("./Mouvements/Administrateur/GestionClient/AjoutClientRecupL"));
const MiseajourAjoutclientRecup = lazy(() => import("./Mouvements/Administrateur/GestionClient/AjoutclientReMiAj"));
const Gclient = lazy(() => import("./Mouvements/Administrateur/GestionClient/Gclient"));
const Famillee = lazy(() => import("./Mouvements/Savoirfaire/Famillee"));
const Affairee = lazy(() => import("./Mouvements/Savoirfaire/Affairee"));
const Assistant = lazy(() => import("./Mouvements/Assistant/Assistant"));
const MonQRCode = lazy(() => import("./MonQRCode"));
const Register = lazy(() => import("./Communicbck/identification/Register"));
const VerifyEmail = lazy(() => import("./Communicbck/identification/VerifyEmail"));
const LoginForm = lazy(() => import("./Communicbck/identification/LoginForm"));
const LogoutButton = lazy(() => import("./Communicbck/identification/Deconne"));
const AdminSecurityMonitor = lazy(() => import("./Communicbck/identification/AdminSecurityMonitor"));
const Adminmere = lazy(() => import("./Mouvements/AClient/Adminmere"));
const ProtectedRoute = lazy(() => import("./Communicbck/identification/ProtectedRoute "));
const LoginFormclient = lazy(() => import("./Communicbck/identification/LoginFormclient"));
const Profiledmin = lazy(() => import("./Communicbck/Profile/Profiledmin"));

// --- Fallback pro ---
const LoaderFallback = () => (
  <div style={{
    minHeight: "60vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.3rem",
    color: "#194289",
    fontWeight: "bold"
  }}>
    Chargement...
  </div>
);

function Lesroutes() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <StructuredData />
      <FloatingButton />
      <Suspense fallback={<LoaderFallback />}>
        <Routes>
          <Route index element={<Accueil />} />
          <Route path="*" element={<Petitecrandeux />} />

          {/* Erreur & util */}
          <Route path="/assist" element={<FloatingButton />} />
          <Route path="/assistance" element={<Assistant />} />

          {/* Données serveur */}
          <Route path="/elementList" element={<ElementList />} />
          <Route path="/contact2" element={<Contact2 />} />
          <Route path="/listec" element={<ContactList />} />

          {/* Pages classiques */}
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/article" element={<Articles />} />
          <Route path="/affaire" element={<Affaires />} />
          <Route path="/securite" element={<Securite />} />
          <Route path="/penal" element={<Penal />} />
          <Route path="/fiscalite" element={<Fiscalite />} />
          <Route path="/minier" element={<Minier />} />
          <Route path="/famille" element={<Famille />} />

          {/* Savoir-faire / expertise */}
          <Route path="/nosexpertises" element={<Nosexpertise />} />
          <Route path="/affairee" element={<Affairee />} />
          <Route path="/famillee" element={<Famillee />} />
          <Route path="/fiscalitee" element={<Fiscalitee />} />
          <Route path="/minierr" element={<MinierEnvironn />} />
          <Route path="/securitee" element={<Securitee />} />
          <Route path="/travail" element={<Travail />} />
          <Route path="/penall" element={<Penall />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/arbitrage" element={<Arbitrage />} />
          <Route path="/contentieux" element={<Contentieux />} />
          <Route path="/audit" element={<AuditJuridique />} />
          <Route path="/conseil" element={<Conseiljuri />} />
          <Route path="/asistance" element={<Assistance />} />

          {/* Admin */}
          <Route path="/gestclient" element={<Gclient />} />
          <Route path="/comptecl" element={<AjouterClient />} />
          <Route path="/listeCl" element={<ListeClients />} />
          <Route
            path="/miseajourAclientRecup/:id"
            element={<MiseajourAjoutclientRecup />}
          />
          <Route path="/adminfils" element={<Adminfils />} />
          <Route path="/gestion" element={<Adminmere />} />
          <Route path="/monQRCode" element={<MonQRCode />} />

          {/* Auth & profil */}
          <Route path="/register" element={<Register />} />
          <Route path="/confimation-mail" element={<VerifyEmail />} />
          <Route path="/seconnecter" element={<LoginForm />} />
          <Route path="/seconnectercl" element={<LoginFormclient />} />
          <Route path="/Profiledmin" element={<Profiledmin />} />

          <Route
            path="/LogoutButton"
            element={
              <ProtectedRoute>
                <LogoutButton />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sessionsecur"
            element={
              <ProtectedRoute>
                <AdminSecurityMonitor />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default Lesroutes;
