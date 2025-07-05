import { useState, useEffect, lazy } from "react";
import axios from "axios";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { ImPencil2 } from "react-icons/im";
import { MdAutoDelete } from "react-icons/md";
import { CloseButton } from "react-bootstrap";
const Footer = lazy(() => import("../../Accueil/Footerr"));

const Container = styled.div`
  padding: 1rem;
 
  min-height: 100vh;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #f9fafb;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.4);
  }
`;

const Table = styled.table`
  width: 100%;
  
  margin-bottom: 8rem;
  margin-top: 4rem;
  border-collapse: collapse;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  padding: 1rem;
  text-align: left;
  background: #1e3a8a;
  color: #ffffff;
  font-size: 0.9rem;
`;

const Td = styled.td`
  padding: 0.8rem;
  border-top: 1px solid #e5e7eb;
  text-align: left;
  color: #374151;
  font-size: 0.85rem;
`;

const Button = styled.button`
  padding: 0.3rem 0.5rem;
  margin: 0 0.3rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  color: #ffffff;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(1.2);
  }

  &.edit {
    background-color: #2563eb;

    &:hover {
      background-color: #1e3a8a;
    }
  }

  &.delete {
    background-color: #dc2626;

    &:hover {
      background-color: #b91c1c;
    }
  }
`;

const TotalCount = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #2563eb;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.1rem;
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin: 0.5rem;
  padding: 0.5rem;
  font-size: 0.6rem;
  font-weight: bold;
  color: #ffffff;
  margin-top: 2rem;
   margin-bottom: 5rem;
  margin-left: 0.1rem;
  background-color: #023e8a;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0px 1px 1px rgba(243, 5, 37, 0.6);
  transition: all 0.3s ease;

  &:hover {
    background-color: #00b4d8;
    color: #caf0f8;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;


export default function ListeClients() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredClients, setFilteredClients] = useState([]);

  const aodb = import.meta.env.VITE_b;

  const fetchClients = async () => {
    try {
      const response = await axios.get(`${aodb}/FClientl`);
      const sortedClients = response.data.sort(
        (a, b) => new Date(b.dateajout) - new Date(a.dateajout)
      );
      setClients(sortedClients);
      setFilteredClients(sortedClients);
    } catch (error) {
      console.error("Erreur lors de la récupération :", error);
      toast.error("Erreur lors du chargement des clients !");
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  useEffect(() => {
    const filtered = clients.filter((client) => {
      return Object.values(client).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase())
      );
    });
    setFilteredClients(filtered);
  }, [search, clients]);

  const handleDelete = async (clientId) => {
    try {
      await axios.delete(`${aodb}/deleteCl/${clientId}`);
      toast.success("Client supprimé avec succès !");
      fetchClients(); // Actualiser les données après suppression
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      toast.error(
        "Erreur : impossible de supprimer le client. Vérifiez votre connexion ou contactez l'administrateur."
      );
    }
  };

  return (
    <div className=" bg-black/5" >
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
        progressClassName="custom-progress-bar"
        closeButtonClassName="custom-close-button"
      />
      <style>
        {`
       .custom-toast {
  background: #caf0f8 !important; /* Bleu foncé */
  color: #03045e !important; /* Blanc */
  border-radius: 1px !important; /* Coins arrondis */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.9) !important; /* Ombre */
  padding: 4px !important; /* Marges internes */
}

.custom-toast-body {
  font-size: 1rem !important; /* Taille de texte */
  font-weight: bold !important; /* Texte en gras */
  color: #03045e !important; /* Couleur du texte */
}

.custom-progress-bar {
  background: linear-gradient(90deg, #03045e, #03045e) !important; /* Dégradé */
  height: 4px !important; /* Hauteur */
}

.custom-close-button {
  color: #03045e !important; /* Couleur par défaut */
  background: transparent !important; /* Fond transparent */
  border: none !important; /* Pas de bordure */
}

.custom-close-button:hover {
  color: #03045e !important; /* Rouge clair au survol */
}

        `}
      </style>
      <Container>
        <BackLink to="/gestclient">
          <CloseButton />
        </BackLink>
        <SearchInput
          type="text"
          className=" "
          placeholder="Rechercher par ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TotalCount>Enregistrements : {filteredClients.length}</TotalCount>
        <Table>
          <thead className="text-center">
            <tr>
              <Th>Identifiants</Th>
              <Th>Noms</Th>
              <Th>Adresses</Th>
              <Th>Date</Th>
              <Th>Téléphones</Th>
              <Th>Natures d`affaire</Th>
              <Th>Avocat</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr key={client._id}>
                <Td>{client._id}</Td>
                <Td>{client.name}</Td>
                <Td>{client.adresse}</Td>
                <Td>{new Date(client.dateajout).toLocaleDateString()}</Td>
                <Td>{client.numero}</Td>
                <Td>{client.naturedaffaire}</Td>
                <Td>{client.avocat}</Td>
                <Td>
                  <ButtonGroup>
                    <Link
                      to={`/miseajourAclientRecup/${client._id}`}
                      className="text-yellow-400 edit hover:text-yellow-800"
                    >
                      <ImPencil2 />
                    </Link>
                    <Button
                      className="delete"
                      onClick={() => handleDelete(client._id)}
                    >
                      <MdAutoDelete />
                    </Button>
                  </ButtonGroup>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <Footer />
    </div>
  );
}
