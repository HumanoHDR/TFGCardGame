import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MainView from './MainView';
import CardList from './CardList'; // Aseg�rate de que el componente de lista de cartas est� correctamente importado

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/decks" element={<CardList />} />
                    <Route path="/" element={<MainView />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
