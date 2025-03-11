import { lazy } from "react";

const Accueil = lazy(() => import("./Accueilpourapropos"));
const Accueilpourapropos = lazy(() =>
  import("../Navigatpublic/BardeNavigationPublic")
);
export default function Headerapropos() {

  return (
    <header style={{ backgroundColor: "rgba(15, 23, 42, 1)" }}>
      <Accueil /> <Accueilpourapropos />
    </header>
  );
}
