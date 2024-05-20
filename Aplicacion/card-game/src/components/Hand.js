// src/components/Hand.js
import React, { useState } from 'react';
import Card from './Card';
import './Hand.css';

const Hand = ({ hand, playCard, isActive }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    if (isActive) {
      setSelectedCard(card);
    }
  };

  const handlePlayCard = () => {
    playCard(selectedCard);
    setSelectedCard(null);
  };

  return (
    <div className="hand">
      {hand.map((card) => (
        <div key={card.id} className={`card-wrapper ${selectedCard === card ? 'selected' : ''}`}>
          <div onClick={() => handleCardClick(card)}>
            <Card card={card} />
          </div>
          {selectedCard === card && (
            <button className="play-button" onClick={handlePlayCard}>Jugar</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Hand;
