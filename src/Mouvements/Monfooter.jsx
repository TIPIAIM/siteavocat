import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Monfooter = () => {
  return (
    <footer className="bg-gray-800 text-white font-sans">
      {/* Section principale */}
      <div className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* À propos */}
        <div>
          <h3 className="text-lg font-bold mb-4">À propos de nous</h3>
          <p className="text-sm leading-6">
            Nous sommes une entreprise dédiée à fournir des solutions IT
            innovantes et des services adaptés à vos besoins.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contactez-nous
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p className="text-sm">
            Email :{" "}
            <a href="mailto:info@company.com" className="hover:underline">
              info@company.com
            </a>
          </p>
          <p className="text-sm">Téléphone : +1 234 567 890</p>
          <p className="text-sm">Adresse : 123 Rue Principale, Ville, Pays</p>
        </div>

        {/* Restez connectés */}
        <div>
          <h3 className="text-lg font-bold mb-4">Restez connectés</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Section secondaire */}
      <div className="bg-gray-900 text-center py-4">
        <p className="text-sm">
          © 2024 Votre Entreprise. Tous droits réservés. |{" "}
          <Link to="/privacy" className="hover:underline">
            Politique de confidentialité
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Monfooter;
