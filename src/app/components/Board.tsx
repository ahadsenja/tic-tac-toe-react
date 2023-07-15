'use client'
import React from 'react'
import Square from './Square'
import { BoardIface } from "../interface/GameIface";

function Board({ xIsNext, squares, onPlay }: BoardIface) {
  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O";  
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner is: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  }

  return (
    <div>
      TODO: Need to be improved, so this code will be more efficient and readable
      <div>{status}</div>
      <div className='board-row'>
       <Square value={squares[0]} onSquareClicked={() => handleClick(0)} />
       <Square value={squares[1]} onSquareClicked={() => handleClick(1)} />
       <Square value={squares[2]} onSquareClicked={() => handleClick(2)} />
      </div>
      <div className='board-row'>
       <Square value={squares[3]} onSquareClicked={() => handleClick(3)} />
       <Square value={squares[4]} onSquareClicked={() => handleClick(4)} />
       <Square value={squares[5]} onSquareClicked={() => handleClick(5)} />
      </div>
      <div className='board-row'>
       <Square value={squares[6]} onSquareClicked={() => handleClick(6)} />
       <Square value={squares[7]} onSquareClicked={() => handleClick(7)} />
       <Square value={squares[8]} onSquareClicked={() => handleClick(8)} />
      </div>
    </div>
  )
}

export default Board