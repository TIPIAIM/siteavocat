import { lazy } from "react";

const Hederdesutre = lazy(() => import("./Hederdesutre"));
export default function Headerapropos() {
  return (
    <header style={{ backgroundColor: "rgba(15, 23, 42, 1)" }}>
      <Hederdesutre />
    </header>
  );
}
