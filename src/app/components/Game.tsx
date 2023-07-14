import React, { useState } from 'react' 
import Board from './Board'

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0)
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

function handlePlay(nextSquares: Array<any>) {
  const updatedHistory = [...history.slice(0, currentMove + 1), nextSquares];
  setHistory(updatedHistory);
  setCurrentMove(updatedHistory.length - 1);
}

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moveButtons = history.map((_, move) => (
    <li key={move}>
      <button 
        className="bg-gray-300 text-black px-2 rounded-sm mb-2 hover:bg-gray-400"
        onClick={jumpTo.bind(null, move)}
      >
        {move > 0 ? 'Go to move #' + move : 'Go to game start'}
      </button>
    </li>
  ))  
  
  return (
    <div className='flex gap-14'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className='game-info'>
        <ol>{moveButtons}</ol>
      </div>
    </div>
  )
}

export default Game