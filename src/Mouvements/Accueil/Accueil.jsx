import { Award, ChevronRight, Scale, Shield, Users } from "lucide-react";
import Accueilfooter from "./Accueilfooter";
import Horaire from "./Horaire";
import Nosservicess from "./Nosservicess";
import { Link } from "react-router-dom";
import BardeNavigationpublic from "../Navigatpublic/BardeNavigationPublic";
import SEO from "../../DynamicSeo";
import Image7 from "../../assets/Image/maitre7.avif";
export default function Accueil() {
  return (
    <div
      className=""
      style={{ fontFamily: "Helvetica55Roman, Arial, sans-serif" }}
    >
      <SEO
        title="AOD AVOCATS SCPA : Cabinet d'avocats - Expertise juridique et services personnalisés"
        description="Notre cabinet 
        d'avocats offre des services
         juridiques d'excellence grâce à une
          équipe d'avocats expérimentés. Nous
           combinons expertise juridique,
            conseils personnalisés et 
            solutions juridiques adaptées pour
             répondre à vos besoins. Faites
              confiance à notre approche 
              professionnelle pour vos 
              dossiers juridiques et 
              gratuitement d'une assistance 
              juridique sur mesure."
        keywords="Cabinet d'avocats,
Services juridiques,
Avocats expérimentés,
Expertise juridique,
Approche personnalisée,
Excellence juridique,
Assistance juridique,
Conseils juridiques,
Dossiers juridiques,
Équipe d'avocats,
Solutions juridiques adaptées"
      />
      {/* Hero Section */}
      <header className="relative h-[400px] sm:h-[600px] overflow-hidden">
        <BardeNavigationpublic />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80"
          alt="Cabinet d'avocats"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col text-center sm:text-left max-w-screen-md">
          <h1
            className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6"
            style={{ color: "#90e0ef" }}
          >
            Cabinet AOD-AVOCATS-SCPA
          </h1>
          <p
            className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-lg mx-auto sm:mx-0"
            style={{ color: "#90e0ef" }}
          >
            Engagement personnel pour vous défendre et protéger
          </p>
          <Link
            to="/contact"
            className="bg-[rgba(10,34,64,0.9)] no-underline animate-pulse hover:bg-[rgba(0,119,182,1)] px-6 sm:px-8 py-2 sm:py-3 rounded-md inline-flex items-center w-fit mx-auto sm:mx-0"
            style={{ color: "#90e0ef" }}
          >
            Consultation
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 sm:mb-16">
            Domaines d’expertise ...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Scale,
                title: "Droit des Affaires",
                desc: "Conseil juridique pour entreprises et entrepreneurs",
              },
              {
                icon: Shield,
                title: "Droit Civil",
                desc: "Protection des droits et intérêts personnels",
              },
              {
                icon: Users,
                title: "Droit de la Famille",
                desc: "Accompagnement dans les affaires familiales",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon
                  style={{ color: "#0077b6" }}
                  className="w-10 sm:w-12 h-10 sm:h-12 text-blue-950 mb-3"
                />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Nosservicess />

      {/* About Section */}
      <section className="py-12 sm:py-20">
        <div className="container mx-auto px-4 max-w-screen-lg">
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            <div className="flex-1">
              <h2 className="text-2xl  text-center sm:text-3xl text-blue-950 font-bold mb-4 sm:mb-6">
                Notre Cabinet
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4 pl-5 sm:mb-6">
                Notre cabinet d’avocats s’engage à fournir des services
                juridiques d’excellence à nos clients. Notre équipe d’avocats
                expérimentés combine expertise juridique et approche
                personnalisée pour chaque dossier.
              </p>

              <div className="flex flex-wrap pl-5 gap-6">
                <div>
                  <Award
                    className="w-10 sm:w-12 h-10 sm:h-12 mb-2"
                    style={{ color: "#0077b6" }}
                  />
                  <div className="font-bold text-lg sm:text-2xl">6+</div>
                  <div
                    className="text-gray-600 text-sm"
                    style={{ fontFamily: "Georgia, serif" }}
                  >
                    Années d’expérience
                  </div>
                </div>
                <div>
                  <Users
                    className="w-10 sm:w-12 h-10 sm:h-12 mb-2"
                    style={{ color: "#0077b6" }}
                  />
                  <div className="font-bold text-lg sm:text-2xl">100+</div>
                  <div className="text-gray-600 text-sm">
                    Clients satisfaits
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img
                src={Image7}
                alt="Notre équipe"
                className="rounded-lg shadow-xl mb-6  w-full"
              />
            </div>
          </div>
        </div>
        <Horaire />
      </section>

      <Accueilfooter />
    </div>
  );
}
