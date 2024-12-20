import { Phone, Mail, MapPin } from "lucide-react";
export default function Accueilfooter() {
  return (
    <div className=" bg-white">
      <footer className="bg-gray-900 text-gray-400 py-6 sm:py-8 border-t border-gray-800">
        <section className="bg-gray-900 text-white py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16">
              Contactez-nous
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex items-center gap-4">
                <Phone className="w-8 h-8 text-amber-600" />
                <div>
                  <div className="font-semibold">Téléphone</div>
                  <div className="text-gray-300">+33 1 23 45 67 89</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-8 h-8 text-amber-600" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-300">
                    contact@martin-associes.fr
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-8 h-8 text-amber-600" />
                <div>
                  <div className="font-semibold">Adresse</div>
                  <div className="text-gray-300">
                    123 Avenue des Champs-Élysées, Paris
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 text-center">
          <p>© 2024 AOD AVOCATS SCPA. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
