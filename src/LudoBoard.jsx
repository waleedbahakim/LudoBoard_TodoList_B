import React, { useState } from 'react';

export const LudoBoard = () => {
  const [blueMoves, setBlueMoves] = useState(1);
  const [greenMoves, setGreenMoves] = useState(1);
  const [yellowMoves, setYellowMoves] = useState(1);
  const [redMoves, setRedMoves] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const handleHeartClick = () => {
    setIsLiked(!isLiked);
  };

  const handleAddMove = (color) => {
    if (color === 'blue') {
      if (blueMoves >= 10) {
        alert('Blue player has reached 10 moves and cannot add more.');
        return;
      }
      setBlueMoves(blueMoves + 1);
    } else if (color === 'green') {
      if (greenMoves >= 10) {
        alert('Green player has reached 10 moves and cannot add more.');
        return;
      }
      setGreenMoves(greenMoves + 1);
    } else if (color === 'yellow') {
      if (yellowMoves >= 10) {
        alert('Yellow player has reached 10 moves and cannot add more.');
        return;
      }
      setYellowMoves(yellowMoves + 1);
    } else if (color === 'red') {
      if (redMoves >= 10) {
        alert('Red player has reached 10 moves and cannot add more.');
        return;
      }
      setRedMoves(redMoves + 1);
    }
  };

  return (
    <div className="text-center m-5">
      <h1 className="mb-4">
        Welcome to LudoBoard{' '}
        <span onClick={handleHeartClick} style={{ color: 'red', cursor: 'pointer' }}>
          {isLiked ? <i className="far fa-heart"></i> : <i className="fas fa-heart"></i>}
        </span>
      </h1>

      {/* Ludo Board Layout */}
      <div className="container">
        <div className="row mb-3">
          {/* Blue Moves */}
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <h3>Blue Moves: {blueMoves}</h3>
            <button
              className="btn btn-primary my-2"
              onClick={() => handleAddMove('blue')}
              disabled={blueMoves >= 10}
            >
              +1
            </button>
          </div>

          {/* Green Moves */}
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <h3>Green Moves: {greenMoves}</h3>
            <button
              className="btn btn-success my-2"
              onClick={() => handleAddMove('green')}
              disabled={greenMoves >= 10}
            >
              +1
            </button>
          </div>
        </div>

        <div className="row">
          {/* Yellow Moves */}
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <h3>Yellow Moves: {yellowMoves}</h3>
            <button
              className="btn btn-warning my-2"
              onClick={() => handleAddMove('yellow')}
              disabled={yellowMoves >= 10}
            >
              +1
            </button>
          </div>

          {/* Red Moves */}
          <div className="col-6 d-flex flex-column justify-content-center align-items-center">
            <h3>Red Moves: {redMoves}</h3>
            <button
              className="btn btn-danger my-2"
              onClick={() => handleAddMove('red')}
              disabled={redMoves >= 10}
            >
              +1
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
