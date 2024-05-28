// src/components/Field.js
import React from 'react';
import Card from './Card';
import './Field.css';

const Field = ({ field, attackCard, isActive, selectedAttacker, onSelectAttacker, isOpponent, addDonsToCard }) => {
  const handleCardClick = (card) => {
    if (isActive && !selectedAttacker && !isOpponent && card.activo) {
      onSelectAttacker(card);
    } else if (isActive && !isOpponent) {
      addDonsToCard(card);
    }
  };

  return (
    <div className="field">
      {field.map((card) => (
        <div
          key={card.id}
          className={`card-wrapper ${selectedAttacker === card ? 'selected' : ''} ${!card.activo ? 'inactive' : ''}`}
          onClick={() => handleCardClick(card)}
        >
          <Card card={card} />
          {isOpponent && selectedAttacker && !card.activo && (
            <button className="attack-here-button" onClick={() => attackCard(card)}>Atacar aquí</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Field;

