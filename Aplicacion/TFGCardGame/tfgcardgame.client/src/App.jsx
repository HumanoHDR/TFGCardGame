import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainView from './MainView';
import CardList from './CardList';
import Authentication from './Authentication';
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const isLogged = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(isLogged);
    }, []);

    const handleLogin = () => {
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };
    return (
        <Router>
            <div className="App">
                
                <Routes>
                    <Route path="/decks" element={<CardList />} />
                    <Route path="/" element={<MainView />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App