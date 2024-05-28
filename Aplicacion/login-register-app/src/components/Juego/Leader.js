// src/components/Leader.js
import React from 'react';
import './Leader.css';

const Leader = ({ leader, onClick }) => {
  if (!leader) {
    return null;
  }
  const backgroundImage = `url(./OP01/${leader.id}.png)`; // Usando la id del líder

  return (
    <div className={`leader-card ${!leader.activo ? 'inactive' : ''}`} onClick={onClick} style={{ backgroundImage: backgroundImage }}>
      <div className="leader-stats">
        <div className="stat">Vidas: {leader.vida}</div>
      </div>
    </div>
  );
};

export default Leader;
