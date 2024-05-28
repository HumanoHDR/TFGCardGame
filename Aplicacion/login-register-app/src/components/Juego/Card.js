// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  if (!card) {
    return null;
  }
  const backgroundImage = `url(/OP01/${card.id}.png)`;

  return (
    <div className="card" style={{ backgroundImage }}>
      <div className="card-cost">{card.cost}</div>
      <div className="card-power">{card.power}</div>
      <p>{card.name}</p>
    </div>
  );
};

export default Card;
