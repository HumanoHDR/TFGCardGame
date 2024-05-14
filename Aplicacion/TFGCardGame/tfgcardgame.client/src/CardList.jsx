import { useState, useEffect } from 'react';
import Card from './Card';
import './CardList.module.css';

function CardList() {
    const [cards, setCards] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5261/api/onefancard')
            .then(response => response.json())
            .then(data => setCards(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const toggleFilter = color => {
        if (filter.includes(color)) {
            setFilter(filter.filter(f => f !== color));
        } else {
            setFilter([...filter, color]);
        }
    };

    const filteredCards = cards.filter(card => filter.length === 0 || filter.includes(card.color));

    return (
        <div>
            <div className="filters">
                    {['Red', 'Green', 'Blue', 'Purple', 'Black', 'Yellow'].map(color => (
                    <button key={color} onClick={() => toggleFilter(color)} className={filter.includes(color) ? 'active' : ''}>
                            {color}
                    </button>
                ))}
            </div>
            <div className="card-container">
            {filteredCards.map(card => (
                <Card key={card.id} id={card.id} />
            ))}
        </div>
        </div >
    );
}

export default CardList;
