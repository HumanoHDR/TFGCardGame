// src/components/DonFiel.js
import React from 'react';
import './DonFiel.css';

const DonFiel = ({ dons }) => {
  const backgroundImage = `URL('./Don/don.png')`
  return (
    <div className="don-fiel">
      {dons.map((don, index) => (
        <div key={index} className={`don ${don.activo ? '' : 'inactive'}`} style={{backgroundImage}}>
        </div>
      ))}
    </div>
  );
};

export default DonFiel;
