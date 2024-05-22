// src/utils.js

export const generateDeck = () => {
  const deck = [];
  for (let i = 1; i <= 60; i++) {
    deck.push({
      id: i,
      name: `Carta ${i}`,
      poder: Math.floor(Math.random() * 11),
      coste: Math.floor(Math.random() * 11),
      activo: true,
    });
  }
  return deck;
};

export const generateLeader = () => {
  return { id: 0, name: 'Líder', poder: 5, coste: 0, vida: 5, activo: false };
};

export const generateDon = () => {
  return { id: `don-${Math.random()}`, name: 'Don', activo: true };
};

export const shuffleDeck = (deck) => {
  return deck.sort(() => Math.random() - 0.5);
};

export const deactivateDons = (dons, cost) => {
  let count = 0;
  return dons.map((don) => {
    if (count < cost && don.activo) {
      count++;
      return { ...don, activo: false };
    }
    return don;
  });
};
