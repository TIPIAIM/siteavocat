// src/pages/terminal/AccesTerminalPage.jsx 9.537, -13.678
import React from "react";
import TerminalAccessMap from "./TerminalAccessMap";
 
export default function Mapfinale() {
  return (
    <div style={{ padding: 0 }}>
      <TerminalAccessMap
        title="Terminal de Dixinn"
        subtitle="Cliquez sur Itinéraire pour lancer la navigation."
        destination={{ lat: 9.537, lng: -13.678 }} // <-- Mets les vraies coordonnées
        address="Conakry, Dixinn  Tribunal de Première Instance de Dixinn"
        phone="+224 624 13 55 50"
        hours="Lun–Sam : 08:00–18:00"
        zoom={15}
      />
    </div>
  );
}
