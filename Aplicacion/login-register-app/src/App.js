import React, { useState, useEffect } from 'react';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      {user ? <MainPage user={user} setUser={setUser} /> : <LoginPage setUser={setUser} />}
    </div>
  );
};

export default App;
