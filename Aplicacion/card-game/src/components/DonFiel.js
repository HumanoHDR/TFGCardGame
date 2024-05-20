// src/components/DonFiel.js
import React from 'react';
import './DonFiel.css';

const DonFiel = ({ dons }) => {
  return (
    <div className="don-fiel">
      {dons.map((don, index) => (
        <div key={index} className={`don ${don.activo ? '' : 'inactive'}`}>
          {don.name}
        </div>
      ))}
    </div>
  );
};

export default DonFiel;
