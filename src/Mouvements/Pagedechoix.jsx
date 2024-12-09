import MachineaecrirepourAvoc from "./Machineaecrirepouravoc";
import "./pagedechoix.css";
import feuillevid from "../assets/Video/feuillevid.mp4";

export default function Pagedechoix() {
  return (
    <div className={`min-h-screen flex flex-col`}>
      <header className="bg-gray-900 text-white py-2 px-2 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
           Maitre portable          
        </div>
      </header>

      <main className="relative flex-1 flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={feuillevid} type="video/mp4" />
        </video>
        <div className="relative z-10 text-center">
          {/* L'Affichage du texte avec changement de couleur */}
          <div className="text-4xl font-bold ">
            <MachineaecrirepourAvoc />
          </div>
        </div>
      </main>

      <footer className="bg-gray-950 text-white py-3 px-3">
        <div className="container mx-auto text-center"></div>
      </footer>
    </div>
  );
}
