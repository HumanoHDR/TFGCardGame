import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPage.css';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [cards, setCards] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', email: '', password: '', type: '' });
  const [newCard, setNewCard] = useState({ id: '', name: '', type: '', rarity: '', cost: 0, power: 0, color: '', attribute: '' });
  const [editingUser, setEditingUser] = useState(null);
  const [editingCard, setEditingCard] = useState(null);
  const [view, setView] = useState('users'); // Para alternar entre usuarios y cartas

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

  useEffect(() => {
    fetchUsers();
    fetchCards();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://localhost:7042/api/user');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const fetchCards = async () => {
    try {
      const response = await axios.get('https://localhost:7042/api/Cards');
      setCards(response.data);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  // CRUD Usuarios
  const handleCreateUser = async () => {
    try {
      // Verifica que los campos no estén vacíos
      if (!newUser.username || !newUser.email || !newUser.password || !newUser.type) {
        alert("Todos los campos son obligatorios");
        return;
      }
      const response = await axios.post('https://localhost:7042/api/user', newUser);
      setUsers([...users, response.data]);
      setNewUser({ username: '', email: '', password: '', type: '' });
    } catch (error) {
      console.error('Error creating user:', error);
      alert("Error al crear el usuario");
    }
  };

  const handleUpdateUser = async (userId) => {
    try {
      const { username, email, type } = editingUser;
      // Verifica que los campos no estén vacíos
      if (!username || !email || !type) {
        alert("Todos los campos son obligatorios");
        return;
      }
      const response = await axios.put(`https://localhost:7042/api/user/${userId}`, { username, email, type });
      setUsers(users.map(user => (user.id === userId ? response.data : user)));
      setEditingUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
      alert("Error al actualizar el usuario");
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`https://localhost:7042/api/user/${userId}`);
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
      alert("Error al eliminar el usuario");
    }
  };

  // CRUD Cartas
  const handleCreateCard = async () => {
    try {
      const response = await axios.post('https://localhost:7042/api/Cards', newCard);
      setCards([...cards, response.data]);
      setNewCard({ id: '', name: '', type: '', rarity: '', cost: 0, power: 0, color: '', attribute: '' });
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  const handleUpdateCard = async (cardId) => {
    try {
      const response = await axios.put(`https://localhost:7042/api/Cards/${cardId}`, editingCard);
      setCards(cards.map(card => (card.id === cardId ? response.data : card)));
      setEditingCard(null);
    } catch (error) {
      console.error('Error updating card:', error);
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      await axios.delete(`https://localhost:7042/api/Cards/${cardId}`);
      setCards(cards.filter(card => card.id !== cardId));
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  const filteredCards = cards.filter(card => 
    card.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    card.id.toString().includes(searchTerm)
  );

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const currentCards = filteredCards.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleChangePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="admin-page">
      <h2>Administrar</h2>
      <div className="view-buttons">
        <button onClick={() => setView('users')}>Gestionar Usuarios</button>
        <button onClick={() => setView('cards')}>Gestionar Cartas</button>
      </div>

      {view === 'users' && (
        <div className="users-view">
          <h3>Usuarios</h3>
          <div className="user-form">
            <h3>Crear Nuevo Usuario</h3>
            <input
              type="text"
              placeholder="Nombre de Usuario"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            />
            <input
              type="email"
              placeholder="Correo Electrónico"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />
            <input
              type="text"
              placeholder="Tipo"
              value={newUser.type}
              onChange={(e) => setNewUser({ ...newUser, type: e.target.value })}
            />
            <button onClick={handleCreateUser}>Crear Usuario</button>
          </div>

          <div className="users-list">
            <h3>Lista de Usuarios</h3>
            {users.map(user => (
              <div key={user.id} className="user-item">
                {editingUser && editingUser.id === user.id ? (
                  <div>
                    <input
                      type="text"
                      value={editingUser.username}
                      onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })}
                    />
                    <input
                      type="email"
                      value={editingUser.email}
                      onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                    />
                    <input
                      type="text"
                      value={editingUser.type}
                      onChange={(e) => setEditingUser({ ...editingUser, type: e.target.value })}
                    />
                    <button onClick={() => handleUpdateUser(user.id)}>Guardar</button>
                    <button onClick={() => setEditingUser(null)}>Cancelar</button>
                  </div>
                ) : (
                  <div>
                    <div><strong>{user.username}</strong> ({user.email}) - Tipo: {user.type}</div>
                    <button onClick={() => setEditingUser(user)}>Editar</button>
                    <button onClick={() => handleDeleteUser(user.id)}>Eliminar</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {view === 'cards' && (
        <div className="cards-view">
          <h3>Cartas</h3>
          <div className="card-form">
            <h3>Crear Nueva Carta</h3>
            <input
              type="text"
              placeholder="ID"
              value={newCard.id}
              onChange={(e) => setNewCard({ ...newCard, id: e.target.value })}
            />
            <input
              type="text"
              placeholder="Nombre"
              value={newCard.name}
              onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Tipo"
              value={newCard.type}
              onChange={(e) => setNewCard({ ...newCard, type: e.target.value })}
            />
            <input
              type="text"
              placeholder="Rareza"
              value={newCard.rarity}
              onChange={(e) => setNewCard({ ...newCard, rarity: e.target.value })}
            />
            <input
              type="number"
              placeholder="Coste"
              value={newCard.cost}
              onChange={(e) => setNewCard({ ...newCard, cost: parseInt(e.target.value) })}
            />
            <input
              type="number"
              placeholder="Poder"
              value={newCard.power}
              onChange={(e) => setNewCard({ ...newCard, power: parseInt(e.target.value) })}
            />
            <input
              type="text"
              placeholder="Color"
              value={newCard.color}
              onChange={(e) => setNewCard({ ...newCard, color: e.target.value })}
            />
            <input
              type="text"
              placeholder="Atributo"
              value={newCard.attribute}
              onChange={(e) => setNewCard({ ...newCard, attribute: e.target.value })}
            />
            <button onClick={handleCreateCard}>Crear Carta</button>
          </div>

          <div className="card-search">
            <input
              type="text"
              placeholder="Buscar por nombre o ID"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Resetear a la primera página al hacer una nueva búsqueda
              }}
            />
          </div>
          <div className="pagination">
            <button disabled={currentPage === 1} onClick={() => handleChangePage(currentPage - 1)}>Anterior</button>
            <span>Página {currentPage} de {totalPages}</span>
            <button disabled={currentPage === totalPages} onClick={() => handleChangePage(currentPage + 1)}>Siguiente</button>
          </div>
          <div className="cards-list">
            <h3>Lista de Cartas</h3>
            {currentCards.map(card => (
              <div key={card.id} className="card-item">
                {editingCard && editingCard.id === card.id ? (
                  <div>
                    <input
                      type="text"
                      value={editingCard.id}
                      onChange={(e) => setEditingCard({ ...editingCard, id: e.target.value })}
                    />
                    <input
                      type="text"
                      value={editingCard.name}
                      onChange={(e) => setEditingCard({ ...editingCard, name: e.target.value })}
                    />
                    <input
                      type="text"
                      value={editingCard.type}
                      onChange={(e) => setEditingCard({ ...editingCard, type: e.target.value })}
                    />
                    <input
                      type="text"
                      value={editingCard.rarity}
                      onChange={(e) => setEditingCard({ ...editingCard, rarity: e.target.value })}
                    />
                    <input
                      type="number"
                      value={editingCard.cost}
                      onChange={(e) => setEditingCard({ ...editingCard, cost: parseInt(e.target.value) })}
                    />
                    <input
                      type="number"
                      value={editingCard.power}
                      onChange={(e) => setEditingCard({ ...editingCard, power: parseInt(e.target.value) })}
                    />
                    <input
                      type="text"
                      value={editingCard.color}
                      onChange={(e) => setEditingCard({ ...editingCard, color: e.target.value })}
                    />
                    <input
                      type="text"
                      value={editingCard.attribute}
                      onChange={(e) => setEditingCard({ ...editingCard, attribute: e.target.value })}
                    />
                    <button onClick={() => handleUpdateCard(card.id)}>Guardar</button>
                    <button onClick={() => setEditingCard(null)}>Cancelar</button>
                  </div>
                ) : (
                  <div>
                    <div><strong>{card.name}</strong> ({card.type}) - Rareza: {card.rarity}, Coste: {card.cost}, Poder: {card.power}, Color: {card.color}, Atributo: {card.attribute}</div>
                    <button onClick={() => setEditingCard(card)}>Editar</button>
                    <button onClick={() => handleDeleteCard(card.id)}>Eliminar</button>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="newEnd">
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
