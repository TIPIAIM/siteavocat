import { Routes, Route, BrowserRouter } from "react-router-dom";
import Contact from "./Mouvements/Contact/Contact";
import Apropos from "./Mouvements/Apropos/Apropos";
import Articles from "./Mouvements/Article/Article";
import Affaires from "./Mouvements/Article/Affaires";
import Securite from "./Mouvements/Article/Securite";
import Penal from "./Mouvements/Article/Penal";
import Fiscalite from "./Mouvements/Article/Fiscalite";
import Minier from "./Mouvements/Article/MinierEnviron";
import Famille from "./Mouvements/Article/Famille";
import Nosexpertise from "./Mouvements/Savoirfaire/Nos-Domaines";
import Fiscalitee from "./Mouvements/Savoirfaire/Fiscalitee";
import MinierEnvironn from "./Mouvements/Savoirfaire/MinierEnvironn";
import Securitee from "./Mouvements/Savoirfaire/Securitee";
import Travail from "./Mouvements/Savoirfaire/Travaill";
import Penall from "./Mouvements/Savoirfaire/Penall";
import Sport from "./Mouvements/Savoirfaire/Sport";
import Arbitrage from "./Mouvements/Savoirfaire/Arbitrage";
import Contentieux from "./Mouvements/Savoirfaire/Savoir-faire/Contentieux";
import AuditJuridique from "./Mouvements/Savoirfaire/Savoir-faire/Auditjurique";
import Conseiljuri from "./Mouvements/Savoirfaire/Savoir-faire/Conseiljuri";
import Assistance from "./Mouvements/Savoirfaire/Savoir-faire/Assistance";
import Accueil from "./Mouvements/Accueil/Accueil";
import GlobalStyle from "./Styles/Globalstylehelve";
import StructuredData from "./Donnestructure";
import Contact2 from "./Mouvements/Contact2/Contact2";
import ContactList from "./Mouvements/Contact2/Listecontact";
import ElementList from "./Mouvements/Contact2/Listeapi";
import Adminfils from "./Mouvements/AClient/Adminfils";
import AjouterClient from "./Mouvements/Administrateur/GestionClient/AjouterClient";
import ListeClients from "./Mouvements/Administrateur/GestionClient/AjoutClientRecupL";
import MiseajourAjoutclientRecup from "./Mouvements/Administrateur/GestionClient/AjoutclientReMiAj";
import Gclient from "./Mouvements/Administrateur/GestionClient/Gclient";

import Famillee from "./Mouvements/Savoirfaire/Famillee";
import Affairee from "./Mouvements/Savoirfaire/Affairee";
import Petitecrandeux from "./Mouvements/Erreur/Erreur";
import Assistant from "./Mouvements/Assistant/Assistant";
import FloatingButton from "./Mouvements/Assistant/assistboutom";
import MonQRCode from "./MonQRCode";
import Register from "./Communicbck/identification/Register";
import VerifyEmail from "./Communicbck/identification/VerifyEmail";
import LoginForm from "./Communicbck/identification/LoginForm";
import LogoutButton from "./Communicbck/identification/Deconne";
import AdminSecurityMonitor from "./Communicbck/identification/AdminSecurityMonitor";
import Adminmere from "./Mouvements/AClient/Adminmere";
import ProtectedRoute from "./Communicbck/identification/ProtectedRoute ";
import LoginFormclient from "./Communicbck/identification/LoginFormclient";
import Profiledmin from "./Communicbck/Profile/Profiledmin";
function Lesroutes() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <StructuredData />
      <FloatingButton />
      <Routes>
        <Route index element={<Accueil />} />
        <Route path="*" element={<Petitecrandeux />} />
        {/**pge d'erreur */}
        {/** Hor 
   <Route path="/Broullons" element={<Broullons/>} />*/}
        <Route path="/assist" element={<FloatingButton />} />

        <Route path="/assistance" element={<Assistant />} />

        {/**donnee prisent dns le serveur  suprimer pres */}
        <Route path="/elementList" element={<ElementList />} />
        {/**donnee des commentires public reçu */}
        <Route path="/contact2" element={<Contact2 />} />
        <Route path="/listec" element={<ContactList />} />

        <Route path="/accueil" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/affaire" element={<Affaires />} />
        {/**pour les rticles */}
        <Route path="/securite" element={<Securite />} />
        <Route path="/penal" element={<Penal />} />
        <Route path="/fiscalite" element={<Fiscalite />} />
        <Route path="/minier" element={<Minier />} />
        <Route path="/famille" element={<Famille />} />

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

        {/**admin */}
        <Route path="/gestclient" element={<Gclient />} />
        <Route path="/comptecl" element={<AjouterClient />} />
        <Route path="/listeCl" element={<ListeClients />} />
        <Route
          path="/miseajourAclientRecup/:id"
          element={<MiseajourAjoutclientRecup />}
        />

        <Route path="/adminfils" element={<Adminfils />} />
        <Route path="/gestion" element={<Adminmere />} />

        {/**page  visiteur TIPTAMcode adminmere */}
        <Route path="/monQRCode" element={<MonQRCode />} />

        <Route path="/register" element={<Register />} />
        <Route path="/confimation-mail" element={<VerifyEmail />} />
        <Route path="/seconnecter" element={<LoginForm />} />
        <Route path="/seconnectercl" element={<LoginFormclient />} />

        <Route path="/Profiledmin" element={<Profiledmin />} />
        {/*  <Route path="/sessionsecur" element={<AdminSecurityMonitor />} />
         */}
        <Route path="/LogoutButton" element={<LogoutButton />} />
        <Route
          path="/sessionsecur"
          element={
            <ProtectedRoute>
              <AdminSecurityMonitor />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Lesroutes;
