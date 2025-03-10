import { lazy } from "react";

const Accueil = lazy(() => import("./Accueilpourcontact"));
const Accueilpourservice = lazy(() =>
  import("../Navigatpublic/BardeNavigationPublic")
);
export default function Headercontact() {
  Accueilpourservice;
  return (
    <header style={{ backgroundColor: "rgba(15, 23, 42, 1)" }}>
      <Accueil /> <Accueilpourservice />
    </header>
  );
}
