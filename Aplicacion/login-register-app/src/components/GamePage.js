import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Board from './Juego/Board';

const GamePage = ({ user, setView }) => {
  const [decks, setDecks] = useState([]);
  const [selectedDeck1, setSelectedDeck1] = useState('');
  const [selectedDeck2, setSelectedDeck2] = useState('');
  const [player1Deck, setPlayer1Deck] = useState([]);
  const [player2Deck, setPlayer2Deck] = useState([]);
  const [player1Leader, setPlayer1Leader] = useState(null);
  const [player2Leader, setPlayer2Leader] = useState(null);
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

  const fetchDeckCards = async (deckId, setDeck, setLeader) => {
    try {
      const response = await axios.get(`https://localhost:7042/api/Decks/${deckId}`);
      const cards = response.data.cards || [];
      setDeck(cards);
      const leader = cards.find(card => card.type === 'leader');
      if (leader) setLeader(leader);
    } catch (error) {
      console.error('Error fetching deck cards:', error);
    }
  };

  const handleStartGame = async () => {
    if (selectedDeck1 && selectedDeck2) {
      setLoading(true);
      await fetchDeckCards(selectedDeck1, setPlayer1Deck, setPlayer1Leader);
      await fetchDeckCards(selectedDeck2, setPlayer2Deck, setPlayer2Leader);
      setStartGame(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Juego</h2>
      {startGame ? (
        <Board player1Deck={player1Deck} player2Deck={player2Deck} player1Leader={player1Leader} player2Leader={player2Leader} />
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
