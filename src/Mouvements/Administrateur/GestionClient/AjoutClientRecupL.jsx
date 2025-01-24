import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Footer from "../../Accueil/Footerr";
import { Link } from "react-router-dom";
import { ImPencil2 } from "react-icons/im";
import { MdAutoDelete } from "react-icons/md";
import { CloseButton } from "react-bootstrap";
const Container = styled.div`
  padding: 2rem;
  background-color: #f9fafb;
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
  margin: 1rem auto;
  border-collapse: collapse;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  padding: 1rem;
  text-align: left;
  background: #1e3a8a;
  color: #ffffff;
  font-size: 0.9rem; /* Taille réduite */
`;

const Td = styled.td`
  padding: 0.8rem;
  border-top: 1px solid #e5e7eb;
  text-align: left;
  color: #374151;
  font-size: 0.85rem; /* Taille réduite */
`;

const Button = styled.button`
  padding: 0.3rem 0.5rem; /* Augmentation des dimensions pour plus de confort */
  margin: 0 0.3rem;
  border: none;
  border-radius: 8px; /* Coins arrondis pour un design plus moderne */
  font-size: 1rem;
  font-weight: ; /* Texte plus visible */
  cursor: pointer;
  color: #ffffff;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(1.2); /* Légère réduction pour simuler un clic */
  }

  &.edit {
    background-color: #2563eb;
    box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);

    &:hover {
      background-color: #1e3a8a;
      box-shadow: 0 4px 8px rgba(30, 58, 138, 0.3); /* Effet de survol plus visible */
    }
  }

  &.delete {
    background-color: #dc2626;
    box-shadow: 2px 2px 2px rgba(220, 38, 38, 1);

    &:hover {
      background-color: #b91c1c;
      box-shadow: 0 4px 8px rgba(185, 28, 28, 0.3); /* Effet de survol plus visible */
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
  gap: 0.1rem; /* Espacement entre les boutons */
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin: 1rem 1rem;
  padding: 0.2rem;
  font-size: 0.6rem; /* Taille de police augmentée pour une meilleure lisibilité */
  font-weight: bold; /* Texte en gras */
  color: #ffffff;
  background-color: #;
  text-decoration: none;
  border-radius: 12px; /* Coins plus arrondis */
  box-shadow: 0 4px 6px rgba(243, 5, 37, 1); /* Légère ombre pour un effet de relief */
  transition: background-color 0.3s ease, transform 0.2s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: rgba(
      243,
      5,
      37,
      0.98
    ); /* Couleur plus foncée au survol */
    transform: translateY(-5px); /* Effet de soulèvement */
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); /* Ombre plus prononcée */
  }

  &:active {
    transform: translateY(); /* Retour à l'état initial lors du clic */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Réduction de l'ombre */
  }
`;

export default function ListeClients() {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredClients, setFilteredClients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:2025/FClientl") //local
      .get(" https://avocatdusiteback.onrender.com/FClientl") //en ligne
      .then((response) => {
        const sortedClients = response.data.sort(
          (a, b) => new Date(b.dateajout) - new Date(a.dateajout)
        );
        setClients(sortedClients);
        setFilteredClients(sortedClients);
      })
      .catch((error) =>
        console.error("Erreur lors de la récupération :", error)
      );
  }, []);

  useEffect(() => {
    const filtered = clients.filter((client) =>
      client.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredClients(filtered);
  }, [search, clients]);

  const handleDelete = (clientId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce client ?")) {
      axios
        .delete(`http://localhost:2025/deleteCl/${clientId}`)
        .then(() => {
          setClients(clients.filter((client) => client._id !== clientId));
        })
        .catch((error) =>
          console.error("Erreur lors de la suppression :", error)
        );
    }
  };

  return (
    <div>
      <BackLink to="/gestclient">
        <CloseButton />
      </BackLink>
      <Container className=" mt-20" data-aos="fade-down">
        <SearchInput
          type="text"
          placeholder="Rechercher par ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TotalCount>
          Nombre total d`enregistrements : {filteredClients.length}
        </TotalCount>
        <Table>
          <thead>
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
      <div className=" mt-40" data-aos="fade-down">
        <Footer />
      </div>
    </div>
  );
}
