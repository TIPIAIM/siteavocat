import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Accueilfooter() {
  return (
    <div className="">
      <footer className="bg-[rgba(10,34,64)] text-gray-300 py-6 sm:py-8 border-t border-gray-800">
        <section className="bg-[rgba(10,34,64)] text-white py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <h2
              style={{ fontFamily: "Georgia, serif" }}
              className="text-2xl sm:text-3xl font-serif font-bold text-center mb-12 sm:mb-16"
            >
              Contactez-nous
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex items-center gap-4 text-left sm:text-center">
                <Phone className="w-8 h-8" style={{ color: "#90e0ef" }} />
                <div>
                  <div className="font-semibold" style={{ color: "#90e0ef" }}>
                    Téléphone
                  </div>
                  <div
                    style={{ fontFamily: "Roboto Slab,serif" }}
                    className="text-gray-300"
                  >
                    +00 224 622 253 536
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-left sm:text-center">
                <Mail className="w-8 h-8" style={{ color: "#90e0ef" }} />
                <div>
                  <div
                    style={{ fontFamily: "Roboto Slab,serif" }}
                    className="font-semibold"
                    style={{ color: "#90e0ef" }}
                  >
                    Email
                  </div>
                  <Link
                    style={{ fontFamily: "Roboto Slab,serif" }}
                    to="mailto: amadou.diallo@aod-avocats.com"
                    className="no-underline text-gray-300"
                  >
                    amadou.diallo@aod-avocats.com
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-4 text-left sm:text-center">
                <MapPin className="w-8 h-8" style={{ color: "#90e0ef" }} />
                <div>
                  <div
                    style={{ fontFamily: "Roboto Slab,serif" }}
                    className="font-semibold"
                    style={{ color: "#90e0ef" }}
                  >
                    Adresse
                  </div>
                  <div
                    style={{ fontFamily: "Roboto Slab,serif" }}
                    className="text-gray-300"
                  >
                    Immeuble Yansané, Commune de Dixinn, Conakry
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          style={{ fontFamily: "Roboto Slab,serif" }}
          className="container mx-auto px-4 text-center sm:text-left"
        >
          <p>© 2024 AOD AVOCATS SCPA. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
