// src/components/Board.js
import React, { useState, useEffect } from 'react';
import Hand from './Hand';
import Leader from './Leader';
import DonFiel from './DonFiel';
import Field from './Field';
import Cementerio from './Cementerio';
import { generateDeck, generateLeader, generateDon, shuffleDeck, deactivateDons } from '../utils';


const Board = () => {
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
  const [selectedDons, setSelectedDons] = useState([]);

  useEffect(() => {
    const deck1 = shuffleDeck(generateDeck());
    const deck2 = shuffleDeck(generateDeck());
    setPlayer1Deck(deck1);
    setPlayer2Deck(deck2);
    setPlayer1Leader(generateLeader());
    setPlayer2Leader(generateLeader());
    setPlayer1Hand(deck1.splice(0, 5));
    setPlayer2Hand(deck2.splice(0, 5));
    setPlayer1Dons([generateDon()]);
  }, []);


  const endTurn = () => {
    setTurn(turn + 1);

    // Reactivar los dones y las cartas al comienzo del turno del siguiente jugador
    if (turn % 2 !== 0) {
      setPlayer2Dons((prevDons) => prevDons.map((don) => ({ ...don, activo: true })));
      setPlayer2Field((prevField) => prevField.map((card) => ({ ...card, activo: true })));
      setPlayer2Leader((prevLeader) => ({ ...prevLeader, activo: turn !== 1 })); // Activar líder si no es el primer turno
    } else {
      setPlayer1Dons((prevDons) => prevDons.map((don) => ({ ...don, activo: true })));
      setPlayer1Field((prevField) => prevField.map((card) => ({ ...card, activo: true })));
      setPlayer1Leader((prevLeader) => ({ ...prevLeader, activo: turn !== 2 })); // Activar líder si no es el primer turno
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
    setSelectedAttacker(null); // Deseleccionar la carta atacante al final del turno
  };

  const playCard = (card) => {
    if (turn % 2 !== 0) {
      // Turno del jugador 1
      if (player1Dons.filter((don) => don.activo).length >= card.coste) {
        setPlayer1Hand((prevHand) => prevHand.filter((c) => c !== card));
        setPlayer1Field((prevField) => [...prevField, { ...card, activo: false }]);
        setPlayer1Dons((prevDons) => deactivateDons(prevDons, card.coste));
      }
    } else {
      // Turno del jugador 2
      if (player2Dons.filter((don) => don.activo).length >= card.coste) {
        setPlayer2Hand((prevHand) => prevHand.filter((c) => c !== card));
        setPlayer2Field((prevField) => [...prevField, { ...card, activo: false }]);
        setPlayer2Dons((prevDons) => deactivateDons(prevDons, card.coste));
      }
    }
  };

  const attackCard = (defender) => {
    if (selectedAttacker) {
      const attacker = { ...selectedAttacker, activo: false };
      if (defender.id === 0) { // Ataque al líder
        if (selectedAttacker.poder >= defender.poder) {
          if (turn % 2 !== 0) {
            // Turno del jugador 1
            setPlayer2Leader((prevLeader) => ({ ...prevLeader, vida: prevLeader.vida - 1 }));
          } else {
            // Turno del jugador 2
            setPlayer1Leader((prevLeader) => ({ ...prevLeader, vida: prevLeader.vida - 1 }));
          }
        }
      } else {
        // Ataque a una carta
        if (selectedAttacker.poder >= defender.poder) {
          if (turn % 2 !== 0) {
            // Turno del jugador 1
            setPlayer2Field((prevField) => prevField.filter((c) => c !== defender));
            setPlayer2Cementerio((prevCementerio) => [...prevCementerio, defender]);
          } else {
            // Turno del jugador 2
            setPlayer1Field((prevField) => prevField.filter((c) => c !== defender));
            setPlayer1Cementerio((prevCementerio) => [...prevCementerio, defender]);
          }
        }
      }
      // Actualizar el estado de la carta atacante
      if (turn % 2 !== 0) {
        setPlayer1Field((prevField) => prevField.map((c) => (c.id === attacker.id ? attacker : c)));
        if (attacker.id === 0) setPlayer1Leader(attacker); // Actualizar el estado del líder atacante
      } else {
        setPlayer2Field((prevField) => prevField.map((c) => (c.id === attacker.id ? attacker : c)));
        if (attacker.id === 0) setPlayer2Leader(attacker); // Actualizar el estado del líder atacante
      }
      // Deseleccionar la carta atacante después del ataque
      setSelectedAttacker(null);
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

  return (
    <div className="board">
      <div className="player player2">
        
        <Hand hand={player2Hand} playCard={playCard} isActive={turn % 2 === 0} />
        <DonFiel dons={player2Dons} />
        <Field
          field={player2Field}
          attackCard={attackCard}
          isActive={turn % 2 === 0}
          selectedAttacker={selectedAttacker}
          onSelectAttacker={handleFieldCardClick}
          isOpponent={turn % 2 !== 0} // Ahora isOpponent será verdadero cuando sea el turno del jugador 1
        />
        <div onClick={() => handleLeaderClick(player2Leader)}>
          <Leader leader={player2Leader} />
        </div>
        <Cementerio cementerio={player2Cementerio} />
      </div>
      <div className="actions">
        <button onClick={endTurn}>Terminar turno</button>
        <div>Turno: {turn}</div>
      </div>
      <div className="player player1">
        <Field
          field={player1Field}
          attackCard={attackCard}
          isActive={turn % 2 !== 0}
          selectedAttacker={selectedAttacker}
          onSelectAttacker={handleFieldCardClick}
          isOpponent={turn % 2 === 0} // Ahora isOpponent será verdadero cuando sea el turno del jugador 2
        />
        <DonFiel dons={player1Dons} />
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
