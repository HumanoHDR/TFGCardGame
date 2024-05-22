import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './Juego/Board';

const GamePage = ({ user, setView }) => {
  const [decks, setDecks] = useState([]);
  const [selectedDeck1, setSelectedDeck1] = useState('');
  const [selectedDeck2, setSelectedDeck2] = useState('');
  const [startGame, setStartGame] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUserDecks();
  }, []);

  const fetchUserDecks = async () => {
    try {
      const response = await axios.get(`https://localhost:7042/api/Decks/user/${user.id}`);
      setDecks(response.data);
    } catch (error) {
      console.error('Error fetching decks:', error);
    }
  };

  const handleStartGame = () => {
    if (selectedDeck1 && selectedDeck2) {
      setStartGame(true);
    }
  };

  return (
    <div>
      <h2>Juego</h2>
      {startGame ? (
        <Board deck1Id={selectedDeck1} deck2Id={selectedDeck2} />
      ) : (
        <>
          <select value={selectedDeck1} onChange={(e) => setSelectedDeck1(e.target.value)}>
            <option value="">Seleccionar mazo jugador 1</option>
            {decks.map(deck => (
              <option key={deck.id} value={deck.id}>{deck.name}</option>
            ))}
          </select>
          <select value={selectedDeck2} onChange={(e) => setSelectedDeck2(e.target.value)}>
            <option value="">Seleccionar mazo jugador 2</option>
            {decks.map(deck => (
              <option key={deck.id} value={deck.id}>{deck.name}</option>
            ))}
          </select>
          <button onClick={handleStartGame} disabled={loading}>
            {loading ? 'Cargando...' : 'Jugar en Local'}
          </button>
          <button onClick={() => alert('Jugar Online')}>Jugar Online</button>
          <button onClick={() => setView('menu')}>Volver al menú</button>
        </>
      )}
    </div>
  );
};

export default GamePage;
