import React, { useState } from 'react';
import './MainPage.css';
import AdminPage from './AdminPage';
import DeckPage from './DeckPage';
import GamePage from './GamePage';

const MainPage = ({ user, setUser }) => {
  const [view, setView] = useState('menu');

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const renderContent = () => {
    switch (view) {
      case 'game':
        return <GamePage user={user} setView={setView} />;
      case 'deck':
        return <DeckPage user={user} />;
      case 'admin':
        return <AdminPage />;
      default:
        return (
          <div className="button-container">
            <button className="main-button" onClick={() => setView('game')}>Juego</button>
            <button className="main-button" onClick={() => setView('deck')}>Deck</button>
            {user.type === 'admin' && (
              <button className="main-button admin-button" onClick={() => setView('admin')}>Administrador</button>
            )}
            <button className="main-button logout-button" onClick={handleLogout}>Log Out</button>
          </div>
        );
    }
  };

  return (
    <div className={view === 'game' ? '' : 'main-page'}>
      {view !== 'game' && (
        <div className="main-container">
          {view !== 'menu' && (
            <button className="main-button" onClick={() => setView('menu')}>Volver al menú</button>
          )}
          {view === 'menu' && (
            <h1 className="main-header">Bienvenido a Bordo</h1>
          )}
          {renderContent()}
        </div>
      )}
      {view === 'game' && renderContent()}
    </div>
  );
};

export default MainPage;
