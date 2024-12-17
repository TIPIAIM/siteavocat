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


      </Routes>
    </BrowserRouter>
  );
}

export default App;
