import { useEffect, useState } from "react";
import axios from "axios";
import aodblanc from "./../../assets/Image/aodblanc.avif"; // Exemple de vidéo

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get("http://localhost:2025/listecontact", {
          timeout: 5000,
        });
        setContacts(response.data);
        setFilteredContacts(response.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des contacts :", err);
        setError(
          "Impossible de charger les contacts. Veuillez réessayer plus tard."
        );
      }
    };

    fetchContacts();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    setFilteredContacts(
      contacts.filter(
        (contact) =>
          contact.nom.toLowerCase().includes(value) ||
          contact.email.toLowerCase().includes(value) ||
          contact.message.toLowerCase().includes(value)
      )
    );
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer ce contact ?")) {
      return;
    }
    try {
      await axios.delete(`http://localhost:2025/contact/${id}`);
      setContacts((prev) => prev.filter((contact) => contact._id !== id));
      setFilteredContacts((prev) =>
        prev.filter((contact) => contact._id !== id)
      );
    } catch (err) {
      console.error("Erreur lors de la suppression du contact :", err);
      alert("Impossible de supprimer ce contact. Veuillez réessayer.");
    }
  };

  const handleEdit = (id) => {
    alert(`Modifier le contact avec l'ID : ${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* En-tête avec le logo */}
        <div className="flex items-center mb-6">
          <img
            src={aodblanc} // Remplacez par le chemin de votre logo
            alt="Logo"
            className="w-12 h-12 mr-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">
            Gestion des Contacts
          </h1>
        </div>

        {/* Barre de recherche */}
        <div className="mb-6 flex justify-end">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Rechercher..."
            className="w-64 p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error ? (
          <div className="text-red-600 font-semibold">{error}</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse rounded-lg overflow-hidden shadow">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold">Nom</th>
                  <th className="px-6 py-3 text-left font-semibold">Email</th>
                  <th className="px-6 py-3 text-left font-semibold">Message</th>
                  <th className="px-6 py-3 text-center font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredContacts.length > 0 ? (
                  filteredContacts.map((contact, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                      } hover:bg-gray-200`}
                    >
                      <td className="px-6 py-3 text-gray-800">{contact.nom}</td>
                      <td className="px-6 py-3 text-gray-800">
                        {contact.email}
                      </td>
                      <td className="px-6 py-3 text-gray-800">
                        {contact.message}
                      </td>
                      <td className="px-6 py-3 text-center">
                        <div className="flex justify-center space-x-2">
                          <button
                            onClick={() => handleEdit(contact._id)}
                            className="bg-blue-500 text-white px-3 py-1 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          >
                            Modifier
                          </button>
                          <button
                            onClick={() => handleDelete(contact._id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                          >
                            Supprimer
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      Aucun contact trouvé.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
