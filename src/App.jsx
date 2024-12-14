//import './App.css'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import BardeNavigation from "./Mouvements/Accueil/BardeNavigation";
import Contact from "./Mouvements/Contact/Contact";
import Apropos from './Mouvements/Apropos/Apropos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<BardeNavigation />} />
        {/** <Route path="*" element={<Orror />} />
      pour */}
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
