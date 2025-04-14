import { lazy } from "react";

const Accueil = lazy(() => import("./Accueilpourcontact"));

const Hederdesutre = lazy(() => import("./Hederdesutre"));
export default function Headercontact() {
  return (
    <header style={{ backgroundColor: "rgba(15, 23, 42, 1)" }}>
      <Hederdesutre />
      <Accueil />
    </header>
  );
}
