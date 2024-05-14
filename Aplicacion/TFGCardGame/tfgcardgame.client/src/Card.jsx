import React from 'react';

function Card({ id }) {
    const imagePath = `cards/OP01/${id}.png`;
    const esUltimaLetraA = (id) => {
        return id.slice(-1).toUpperCase() === 'A';
    };

    return (
        <div>{esUltimaLetraA(id) ? (
            ""
        ) : (
            <img src={imagePath} alt={`Card ${id}`} />
        )}
            
        </div>
    );
}

export default Card;
