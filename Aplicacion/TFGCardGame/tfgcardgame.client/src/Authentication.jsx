import React, { useState, useEffect } from 'react';
import LoginForm from './Login'; // Asegúrate de importar el componente LoginForm

const Authentication = ({ onLogin, onLogout }) => {
    return (
        <div>
            <button onClick={onLogout}>Logout</button>
            <button onClick={() => console.log('Go to login')}>Login</button>
            <button onClick={() => console.log('Go to register')}>Register</button>
            <LoginForm onLogin={onLogin} />
        </div>
    );
};

export default Authentication;
