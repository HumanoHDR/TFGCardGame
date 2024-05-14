import React from 'react';
import { Link } from 'react-router-dom';
import './MainView.css'; // Aseg�rate de que los estilos est�n correctos

function MainView() {
    return (
        <div className="main-container">
            <button className="main-button">
                <Link to="/jugar">Jugar</Link>
            </button>
            <button className="main-button">
                <Link to="/decks">Decks</Link>
            </button>
            <button className="main-button">
                <Link to="/logoff">Log Off</Link>
            </button>
        </div>
    );
}

export default MainView;
