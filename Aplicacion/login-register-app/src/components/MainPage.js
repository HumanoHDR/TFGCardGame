import React, { useState } from 'react';
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
          <div>
            <button onClick={() => setView('game')}>Juego</button>
            <button onClick={() => setView('deck')}>Deck</button>
            {user.type === 'admin' && (
              <button onClick={() => setView('admin')}>Administrador</button>
            )}
            <button onClick={handleLogout}>Log Out</button>
          </div>
        );
    }
  };

  return (
    <div>
      {view !== 'menu' && (
        <button onClick={() => setView('menu')}>Volver al menú</button>
      )}
      {renderContent()}
    </div>
  );
};

export default MainPage;
