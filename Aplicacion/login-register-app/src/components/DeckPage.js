import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DeckPage.css';

const DeckPage = ({ user }) => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [deck, setDeck] = useState([]);
  const [decks, setDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState('');
  const [loading, setLoading] = useState(true);
  const [leader, setLeader] = useState(null);
  const [deckName, setDeckName] = useState('');

  useEffect(() => {
    fetchCards();
    fetchUserDecks();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await axios.get('https://localhost:7042/api/Cards');
      setCards(response.data);
      setFilteredCards(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cards:', error);
      setLoading(false);
    }
  };

  const fetchUserDecks = async () => {
    try {
      const response = await axios.get(`https://localhost:7042/api/Decks/user/${user.id}`);
      setDecks(response.data);
    } catch (error) {
      console.error('Error fetching decks:', error);
    }
  };

  const fetchDeckCards = async (deckId) => {
    try {
      const response = await axios.get(`https://localhost:7042/api/Decks/${deckId}`);
      const fetchedDeck = response.data.cards || [];
      setDeck(fetchedDeck);
      const leaderCard = fetchedDeck.find(card => card.type === 'leader');
      setLeader(leaderCard || null);
    } catch (error) {
      console.error('Error fetching deck cards:', error);
    }
  };

  const addToDeck = (card) => {
    if (card.type === 'leader') {
      if (leader) {
        return;
      }
      setLeader(card);
    } else if (leader && !card.color.includes(leader.color)) {
      return;
    }

    const cardCount = deck.filter(c => c.id === card.id).length;
    if (deck.length >= 60 || cardCount >= 4) {
      return;
    }
    setDeck([...deck, card]);
  };

  const removeFromDeck = (index) => {
    const newDeck = [...deck];
    const removedCard = newDeck.splice(index, 1)[0];
    setDeck(newDeck);

    if (removedCard.type === 'leader') {
      setLeader(null);
    }
  };

  const filterCards = (color) => {
    if (color === 'All') {
      setFilteredCards(cards);
    } else {
      setFilteredCards(cards.filter(card => card.color.includes(color)));
    }
  };

  const handleSaveDeck = async () => {
    if (deck.length !== 60) {
      return;
    }

    const deckData = {
      id: 0,
      name: deckName,
      user_id: user.id,
      cards: deck
    };

    try {
      await axios.post('https://localhost:7042/api/Decks', deckData);
      console.log(deck)
      setDeck([]);
      setLeader(null);
      setDeckName('');
    } catch (error) {
      console.error('Error saving deck:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const cardGroups = deck.reduce((groups, card) => {
    const group = groups[card.id] || [];
    group.push(card);
    groups[card.id] = group;
    return groups;
  }, {});

  return (
    <div className="deck-page">
      <h2>Deck Management</h2>
      <select value={selectedDeck} onChange={(e) => {
        setSelectedDeck(e.target.value);
        fetchDeckCards(e.target.value);
      }}>
        <option value="">Select a deck</option>
        {decks.map(deck => (
          <option key={deck.id} value={deck.id}>{deck.name}</option>
        ))}
      </select>
      <div className="deck-container">
        <div className="cards-container">
          <h3>Available Cards</h3>
          <div className="filter-buttons">
            <button onClick={() => filterCards('All')}>All</button>
            <button onClick={() => filterCards('Red')}>Red</button>
            <button onClick={() => filterCards('Green')}>Green</button>
            <button onClick={() => filterCards('Blue')}>Blue</button>
            <button onClick={() => filterCards('Purple')}>Purple</button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {filteredCards.map(card => (
              <div
                key={card.id}
                className="card"
                style={{ backgroundImage: `url('./OP01/${card.id}.png')`, backgroundSize: 'cover' }}
                onClick={() => addToDeck(card)}
              >
              </div>
            ))}
          </div>
        </div>
          <div className="cards-container">
            <h3>Your Deck ({deck.length}/60)</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {Object.keys(cardGroups).map((cardId, index) => {
                const group = cardGroups[cardId];
                const card = group[0];
                const count = group.length;
                return (
                  <div
                    key={index}
                    className="deck-card"
                    onClick={() => removeFromDeck(deck.indexOf(card))}
                    style={{ backgroundImage: `url('./OP01/${card.id}.png')`, backgroundSize: 'cover' }}
                  >
                    {count > 1 && <div className="card-count">{count}</div>}
                  </div>
                );
              })}
            </div>
            {deck.length === 60 && (
            <div className="save-deck">
              <input
                type="text"
                placeholder="Deck Name"
                value={deckName}
                onChange={(e) => setDeckName(e.target.value)}
                required
              />
              <button onClick={handleSaveDeck}>Save Deck</button>
            </div>
          )}
          </div>
          
        </div>
    </div>
  );
};

export default DeckPage;
