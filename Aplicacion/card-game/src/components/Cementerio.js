// src/components/Cementerio.js
import React from 'react';
import Card from './Card';
import './Cementerio.css';

const Cementerio = ({ cementerio }) => {
  const lastCard = cementerio[cementerio.length - 1];
  return (
    <div className="cementerio">
      {lastCard && (
        <div className="card-wrapper">
          <Card card={lastCard} />
        </div>
      )}
    </div>
  );
};

export default Cementerio;
