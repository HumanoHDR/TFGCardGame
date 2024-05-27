// src/components/Card.js
import React from 'react';
import './Card.css';


const Card = ({ card }) => {
  if (!card) {
    return null;
  }
  //const backgound = './OP01/' + card.id + '.png' style={{ backgroundImage: `url(${backgound})`}}
  return (
    <div className="card">
      <div className="card-cost">{card.cost}</div>
      <div className="card-power">{card.power}</div>
      <p>{card.name}</p>
    </div>
  );
};

export default Card;