// src/pages/terminal/AccesTerminalPage.jsx
import React from "react";

// ✅ Ajuste l'import selon ton projet :
// - si TerminalAccessMap est dans src/components/maps/
import TerminalAccessMap from "./TerminalAccessMap";

export default function AccesTerminalPage() {
  return (
    <div style={{ padding: 0 }}>
      <TerminalAccessMap
        title="AOD AVOCATS"
        subtitle="Cliquez sur Itinéraire pour lancer la navigation vers le cabinet."
        destination={{ lat: 9.56859049940726, lng: -13.660062530509633 }}
        address="AOD AVOCATS, Conakry"
        phone="+224 624 13 55 50"
        hours="Lun–Ven : 08:00–18:00"
        embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d778.6653665558894!2d-13.660062530509633!3d9.56859049940726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf1cd78f8870d4b5%3A0x76b48c4973d94356!2sAOD%20AVOCATS!5e1!3m2!1sfr!2s!4v1767099576023!5m2!1sfr!2s"
      />
    </div>
  );
}
