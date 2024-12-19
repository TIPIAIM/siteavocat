//import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BardeNavigation from "./Mouvements/Accueil/BardeNavigation";
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
import Affairee from "./Mouvements/Savoirfaire/Affairee";
import Famillee from "./Mouvements/Savoirfaire/Famillee";
import Fiscalitee from "./Mouvements/Savoirfaire/Fiscalitee";
import MinierEnvironn from "./Mouvements/Savoirfaire/MinierEnvironn";
import Securitee from "./Mouvements/Savoirfaire/Securitee";
import Travail from "./Mouvements/Savoirfaire/Travaill";
import Penall from "./Mouvements/Savoirfaire/Penall";
import Sport from "./Mouvements/Savoirfaire/Sport";
import Arbitrage from "./Mouvements/Savoirfaire/Arbitrage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<BardeNavigation />} />
        {/** <Route path="*" element={<Orror />} />
      pour */}
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article" element={<Articles />} />
        <Route path="/affaire" element={<Affaires />} />
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

      </Routes>
    </BrowserRouter>
  );
}

export default App;
