import React, { useState } from 'react';
import AdminPage from './AdminPage';

const MainPage = ({ user, setUser }) => {
  const [showAdmin, setShowAdmin] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <div>
      <button onClick={() => alert('Jugar clicked')}>Jugar</button>
      <button onClick={() => alert('Deck clicked')}>Deck</button>
      {user.type === 'admin' && (
        <button onClick={() => setShowAdmin(!showAdmin)}>Administrador</button>
      )}
      <button onClick={handleLogout}>Log Out</button>
      {showAdmin && <AdminPage />}
    </div>
  );
};

export default MainPage;
