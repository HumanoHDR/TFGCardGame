// src/components/Card.js
import React from 'react';
import './Card.css';

const Card = ({ card }) => {
  if (!card) {
    return null; // No renderizar nada si la carta es null
  }
  
  return (
    <div className="card">
      <div className="card-cost">{card.coste}</div>
      <div className="card-power">{card.poder}</div>
      <p>{card.name}</p>
    </div>
  );
};

export default Card;
