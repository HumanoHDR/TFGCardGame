import React, { useState, useRef } from 'react';
import Card from './Card';
import './Hand.css';

const Hand = ({ hand, playCard, isActive }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const handRef = useRef(null);

  const handleCardClick = (card) => {
    if (isActive) {
      setSelectedCard(card);
    }
  };

  const handlePlayCard = () => {
    playCard(selectedCard);
    setSelectedCard(null);
  };

  const scrollHand = (direction) => {
    if (direction === 'left') {
      handRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    } else {
      handRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  // Agrupar cartas por id
  const groupedHand = hand.reduce((acc, card) => {
    const found = acc.find(item => item.card.id === card.id);
    if (found) {
      found.count += 1;
    } else {
      acc.push({ card, count: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="hand-container">
      <button className="scroll-button left" onClick={() => scrollHand('left')}>{"<"}</button>
      <div className="hand" ref={handRef}>
        {groupedHand.map(({ card, count }) => (
          <div key={card.id} className={`card-wrapper ${selectedCard === card ? 'selected' : ''}`} onClick={() => handleCardClick(card)}>
            <Card card={card} />
            {count > 1 && <div className="card-count">{count}</div>}
            {selectedCard === card && (
              <button className="play-button" onClick={handlePlayCard}>Jugar</button>
            )}
          </div>
        ))}
      </div>
      <button className="scroll-button right" onClick={() => scrollHand('right')}>{">"}</button>
    </div>
  );
};

export default Hand;
