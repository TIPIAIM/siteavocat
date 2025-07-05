import { motion } from "framer-motion";
import {
  Award,
  ChevronRight,
  Gavel,
  Receipt,
  Scale,
  Users,
} from "lucide-react";
import { lazy, memo, Suspense } from "react";
import { Link } from "react-router-dom";
import SEO from "../../DynamicSeo";
import "aos/dist/aos.css";
import { images } from '../../assets/images'// Import des images depuis le fichier images.js
const Accueilfooter = lazy(() => import("./Accueilfooter"));
const Horaire = lazy(() => import("./Horaire"));
const Nosservicess = lazy(() => import("./Nosservicess"));
const BardeNavigationpublic = lazy(() =>
  import("../Navigatpublic/BardeNavigationPublic")
);
const SocialLinks = lazy(() => import("../Lienlateral/SocialLinks"));

// Mémorisation des composants
const MemoizedAccueilfooter = memo(Accueilfooter);
const MemoizedHoraire = memo(Horaire);
const MemoizedNosservicess = memo(Nosservicess);
const MemoizedBardeNavigationpublic = memo(BardeNavigationpublic);
const MemoizedSocialLinks = memo(SocialLinks);

export default function Accueil() {
  return (
    <div style={{ fontFamily: "Helvetica55Roman, Arial, sans-serif" }}>
      <SEO
        title="AOD AVOCATS - Expertise juridique - services personnalisés - Cabinet d'avocats"
        description="Notre cabinet offre des services juridiques d'excellence grâce à une équipe
         d'avocats expérimentés Nous combinons expertise juridique, conseils personnalisés et 
         solutions juridiques adaptées pour répondre à vos besoins."
        keywords="Cabinet d'avocats,avocat,avocats,aod, aod avocat,aod-avocat,aod avocats,
        aod-avocats, Services juridiques, Avocats expérimentés, Expertise juridique, Approche personnalisée,
         Excellence juridique, Assistance juridique, Conseils juridiques, Dossiers juridiques, Équipe d'avocats, 
         Solutions juridiques adaptées"
      />

      {/* Hero Section */}
      <header className="relative h-[400px] sm:h-[600px] overflow-hidden">
        <Suspense fallback={<div>Loading...</div>}>
          <MemoizedBardeNavigationpublic />
        </Suspense>

        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/50 z-20" />

        {/* Image de fond */}
        <motion.img
          src={images.photoAccueil}
          alt="Cabinet d'avocats"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Contenu centré */}
        <motion.div
          className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center"
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1
            className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6"
            style={{ color: "#90e0ef" }}
          >
            CABINET AOD AVOCATS
          </h1>
          <p
            className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-lg mx-auto"
            style={{ color: "#90e0ef" }}
          >
            S’Engage à protéger vos droits et intérêts
          </p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="bg-[rgba(10,34,64,0.9)] no-underline animate-pulse hover:bg-[rgba(0,119,182,1)] px-6 sm:px-8 py-2 sm:py-3 rounded-md inline-flex items-center w-fit"
              style={{ color: "#90e0ef" }}
            >
              Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </motion.div>
      </header>

      {/* Services Section */}
      <section className="py-12 mt-20 sm:py-20 bg-gray-50">
        <motion.div
          className="container mx-auto px-4 max-w-screen-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-2xl text-cyan-950 sm:text-3xl font-bold text-center mb-12 sm:mb-16">
            Domaines d’expertise ....
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Scale,
                title: "Droit des Affaires",
                desc: "Conseil juridique pour entreprises et entrepreneurs",
                link: "/affairee",
              },
              {
                icon: Gavel,
                title: "Droit Civil",
                desc: "Protection des droits et intérêts personnels",
                link: "/travail",
              },
              {
                icon: Receipt,
                title: "Droit Fiscal",
                desc: "Encadrement des règles fiscales, des obligations des contribuables et des relations avec l'administration fiscale.",
                link: "/fiscalitee",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  animate={{
                    x: [0, 20, 10], // Déplace l'icône à droite puis revient
                  }}
                  transition={{
                    duration: 2, // Durée totale de l'animation
                    repeat: 4, // Répète l'animation 4 fois
                    repeatType: "reverse", // Inverse l'animation à chaque répétition
                    ease: "easeInOut", // Transition fluide
                  }}
                >
                  <service.icon
                    className="w-10 sm:w-12 h-10 sm:h-12 mb-3"
                    style={{ color: "#023e8a " }}
                  />
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  <a
                    data-aos="fade-down"
                    className="no-underline"
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {service.title}
                  </a>
                </h3>
                <p
                  data-aos="zoom-in"
                  className="text-gray-600 text-sm sm:text-base"
                >
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="mt-20">
        <Suspense fallback={<div>Loading...</div>}>
          <MemoizedNosservicess />
        </Suspense>
      </div>

      {/* About Section */}
      <section className="py-12 sm:py-20 mt-20">
        <motion.div
          className="container mx-auto px-4 max-w-screen-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            <div className="flex-1">
              <h2 className="text-2xl text-cyan-950 text-center sm:text-3xl font-bold mb-4 sm:mb-6">
                Notre Cabinet
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 pl-5">
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
                  <div className="text-gray-600 text-sm">
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
            <motion.div
              className="flex-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={images.maitre7}
                alt="Notre équipe"
                className="shadow-xl mb-6 w-full"
              />
            </motion.div>
          </div>
        </motion.div>
        <div className="mt-40">
          <Suspense fallback={<div>TIPTAMCode...</div>}>
            <MemoizedHoraire />
          </Suspense>
        </div>
      </section>

      {/* Social Links */}
      <motion.section
        className="py-12 sm:py-20 bg-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 max-w-screen-lg flex flex-col items-center sm:flex-row justify-center gap-6 sm:gap-12">
          <Suspense fallback={<div>Loading...</div>}>
            <MemoizedSocialLinks />
          </Suspense>
        </div>
      </motion.section>

      <Suspense fallback={<div>TIPTAMCode...</div>}>
        <MemoizedAccueilfooter />
      </Suspense>
    </div>
  );
}
