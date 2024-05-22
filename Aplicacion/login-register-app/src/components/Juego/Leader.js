import React from 'react';
import './Leader.css';

const Leader = ({ leader, onClick }) => {
  if (!leader) {
    return null; // No renderizar nada si el líder es null
  }
  return (
    <div className={`leader-card ${!leader.activo ? 'inactive' : ''}`} onClick={onClick}>
      <div className="leader-name">{leader.name}</div>
      <div className="leader-stats">
        <div className="stat">Poder: {leader.power}</div>
        <div className="stat">Vida: {leader.vida}</div>
      </div>
    </div>
  );
};

export default Leader;
