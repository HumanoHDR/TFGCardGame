import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hand from './Hand';
import Leader from './Leader';
import DonFiel from './DonFiel';
import Field from './Field';
import Cementerio from './Cementerio';
import { generateDon, deactivateDons, shuffleDeck } from '../../utils';
import './Board.css';

const Board = ({ deck1Id, deck2Id, setView }) => {
  const [player1Deck, setPlayer1Deck] = useState([]);
  const [player2Deck, setPlayer2Deck] = useState([]);
  const [player1Hand, setPlayer1Hand] = useState([]);
  const [player2Hand, setPlayer2Hand] = useState([]);
  const [player1Dons, setPlayer1Dons] = useState([]);
  const [player2Dons, setPlayer2Dons] = useState([]);
  const [player1Field, setPlayer1Field] = useState([]);
  const [player2Field, setPlayer2Field] = useState([]);
  const [player1Cementerio, setPlayer1Cementerio] = useState([]);
  const [player2Cementerio, setPlayer2Cementerio] = useState([]);
  const [player1Leader, setPlayer1Leader] = useState(null);
  const [player2Leader, setPlayer2Leader] = useState(null);
  const [turn, setTurn] = useState(1);
  const [selectedAttacker, setSelectedAttacker] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState('');

  // Guardar estado en localStorage
  const saveGameState = () => {
    const gameState = {
      player1Deck,
      player2Deck,
      player1Hand,
      player2Hand,
      player1Dons,
      player2Dons,
      player1Field,
      player2Field,
      player1Cementerio,
      player2Cementerio,
      player1Leader,
      player2Leader,
      turn,
      selectedAttacker
    };
    localStorage.setItem('gameState', JSON.stringify(gameState));
  };

  // Restaurar estado desde localStorage
  useEffect(() => {
    const savedGameState = localStorage.getItem('gameState');
    if (savedGameState) {
      const {
        player1Deck,
        player2Deck,
        player1Hand,
        player2Hand,
        player1Dons,
        player2Dons,
        player1Field,
        player2Field,
        player1Cementerio,
        player2Cementerio,
        player1Leader,
        player2Leader,
        turn,
        selectedAttacker
      } = JSON.parse(savedGameState);

      setPlayer1Deck(player1Deck);
      setPlayer2Deck(player2Deck);
      setPlayer1Hand(player1Hand);
      setPlayer2Hand(player2Hand);
      setPlayer1Dons(player1Dons);
      setPlayer2Dons(player2Dons);
      setPlayer1Field(player1Field);
      setPlayer2Field(player2Field);
      setPlayer1Cementerio(player1Cementerio);
      setPlayer2Cementerio(player2Cementerio);
      setPlayer1Leader(player1Leader);
      setPlayer2Leader(player2Leader);
      setTurn(turn);
      setSelectedAttacker(selectedAttacker);
    } else {
      const fetchGameData = async () => {
        try {
          const deck1Response = await axios.get(`https://localhost:7042/api/Decks/${deck1Id}`);
          const deck2Response = await axios.get(`https://localhost:7042/api/Decks/${deck2Id}`);

          const deck1 = shuffleDeck(deck1Response.data.cards || []);
          const deck2 = shuffleDeck(deck2Response.data.cards || []);

          const leader1 = deck1.find(card => card.type === 'leader');
          const leader2 = deck2.find(card => card.type === 'leader');

          setPlayer1Deck(deck1.filter(card => card.type !== 'leader'));
          setPlayer2Deck(deck2.filter(card => card.type !== 'leader'));
          setPlayer1Leader({ ...leader1, vida: 5 });
          setPlayer2Leader({ ...leader2, vida: 5 });
          setPlayer1Hand(deck1.splice(0, 5));
          setPlayer2Hand(deck2.splice(0, 5));
          setPlayer1Dons([generateDon()]);
        } catch (error) {
          console.error('Error fetching game data:', error);
        }
      };

      fetchGameData();
    }
  }, [deck1Id, deck2Id]);

  const endTurn = () => {
    setTurn(turn + 1);

    if (turn % 2 !== 0) {
      setPlayer2Dons((prevDons) => prevDons.map((don) => ({ ...don, activo: true })));
      setPlayer2Field((prevField) => prevField.map((card) => ({ ...card, activo: true })));
      setPlayer2Leader((prevLeader) => ({ ...prevLeader, activo: turn !== 1 }));
    } else {
      setPlayer1Dons((prevDons) => prevDons.map((don) => ({ ...don, activo: true })));
      setPlayer1Field((prevField) => prevField.map((card) => ({ ...card, activo: true })));
      setPlayer1Leader((prevLeader) => ({ ...prevLeader, activo: turn !== 2 }));
    }

    if (turn === 1) {
      setPlayer2Dons((prevDons) => [generateDon(), generateDon(), ...prevDons].slice(0, 10));
    } else if (turn % 2 !== 0) {
      setPlayer2Hand((prevHand) => [player2Deck.pop(), ...prevHand]);
      setPlayer2Dons((prevDons) => [generateDon(), generateDon(), ...prevDons].slice(0, 10));
    } else {
      setPlayer1Hand((prevHand) => [player1Deck.pop(), ...prevHand]);
      setPlayer1Dons((prevDons) => [generateDon(), generateDon(), ...prevDons].slice(0, 10));
    }
    setSelectedAttacker(null);
    saveGameState();
  };

  const playCard = (card) => {
    if (turn % 2 !== 0) {
      if (player1Dons.filter((don) => don.activo).length >= card.cost) {
        setPlayer1Hand((prevHand) => prevHand.filter((c) => c !== card));
        setPlayer1Field((prevField) => [...prevField, { ...card, activo: false, uniqueId: `${card.id}-${Math.random()}` }]);
        setPlayer1Dons((prevDons) => deactivateDons(prevDons, card.cost));
      }
    } else {
      if (player2Dons.filter((don) => don.activo).length >= card.cost) {
        setPlayer2Hand((prevHand) => prevHand.filter((c) => c !== card));
        setPlayer2Field((prevField) => [...prevField, { ...card, activo: false, uniqueId: `${card.id}-${Math.random()}` }]);
        setPlayer2Dons((prevDons) => deactivateDons(prevDons, card.cost));
      }
    }
    saveGameState();
  };

  const attackCard = (defender) => {
    if (selectedAttacker) {
      const attacker = { ...selectedAttacker, activo: false };
  
      if (defender.type === 'leader') {
        if (attacker.power >= defender.power) {
          if (turn % 2 !== 0) {
            setPlayer2Leader((prevLeader) => {
              const newVida = prevLeader.vida - 1;
              if (newVida <= 0) {
                setGameOver(true);
                setWinner('Jugador 1');
                localStorage.removeItem('gameState'); // Limpiar el estado guardado
              }
              return { ...prevLeader, vida: newVida };
            });
          } else {
            setPlayer1Leader((prevLeader) => {
              const newVida = prevLeader.vida - 1;
              if (newVida <= 0) {
                setGameOver(true);
                setWinner('Jugador 2');
                localStorage.removeItem('gameState'); // Limpiar el estado guardado
              }
              return { ...prevLeader, vida: newVida };
            });
          }
        }
      } else {
        if (attacker.power >= defender.power) {
          if (turn % 2 !== 0) {
            setPlayer2Field((prevField) => prevField.filter((c) => c.uniqueId !== defender.uniqueId));
            setPlayer2Cementerio((prevCementerio) => [...prevCementerio, defender]);
          } else {
            setPlayer1Field((prevField) => prevField.filter((c) => c.uniqueId !== defender.uniqueId));
            setPlayer1Cementerio((prevCementerio) => [...prevCementerio, defender]);
          }
        }
      }
  
      if (turn % 2 !== 0) {
        setPlayer1Field((prevField) => prevField.map((c) => (c.uniqueId === attacker.uniqueId ? attacker : c)));
      } else {
        setPlayer2Field((prevField) => prevField.map((c) => (c.uniqueId === attacker.uniqueId ? attacker : c)));
      }
  
      setSelectedAttacker(null);
      saveGameState(); // Guardar el estado después de un ataque
    }
  };

  const handleFieldCardClick = (card) => {
    if (card.activo) {
      setSelectedAttacker(card);
    }
  };

  const handleLeaderClick = (leader) => {
    if (leader.activo && selectedAttacker) {
      attackCard(leader);
    }
  };
  

  const handleReturnToMenu = () => {
    localStorage.removeItem('gameState');
    setView('menu');
  };

  const handleEndGame = () => {
    if (turn % 2 !== 0) {
      setWinner('Jugador 2');
    } else {
      setWinner('Jugador 1');
    }
    setGameOver(true);
    localStorage.removeItem('gameState'); // Limpiar el estado guardado
  };

  if (gameOver) {
    return ( handleReturnToMenu);
  }

  return (
    <div className="board">
      <div className="player player2">
        <Hand hand={player2Hand} playCard={playCard} isActive={turn % 2 === 0} />
        <div className="don-container">
          <DonFiel dons={player2Dons} />
        </div>
        <Field
          field={player2Field}
          attackCard={attackCard}
          isActive={turn % 2 === 0}
          selectedAttacker={selectedAttacker}
          onSelectAttacker={handleFieldCardClick}
          isOpponent={turn % 2 !== 0}
        />
        <div onClick={() => handleLeaderClick(player2Leader)}>
          <Leader leader={player2Leader} />
        </div>
        <Cementerio cementerio={player2Cementerio} />
      </div>
      <div className="actions">
        <div>Turno: {turn}</div>
        <div>{`Turno de: ${turn % 2 !== 0 ? 'Jugador 1' : 'Jugador 2'}`}</div>
        <button onClick={endTurn}>Terminar turno</button>
        <button onClick={handleEndGame}>Terminar partida</button>
      </div>
      <div className="player player1">
        <Field
          field={player1Field}
          attackCard={attackCard}
          isActive={turn % 2 !== 0}
          selectedAttacker={selectedAttacker}
          onSelectAttacker={handleFieldCardClick}
          isOpponent={turn % 2 === 0}
        />
        <div className="don-container">
          <DonFiel dons={player1Dons} />
        </div>
        <Hand hand={player1Hand} playCard={playCard} isActive={turn % 2 !== 0} />
        <div onClick={() => handleLeaderClick(player1Leader)}>
          <Leader leader={player1Leader} />
        </div>
        <Cementerio cementerio={player1Cementerio} />
      </div>
    </div>
  );
};

export default Board;
