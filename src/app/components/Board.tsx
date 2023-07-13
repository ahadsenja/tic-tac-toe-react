import React from 'react'
import Square from './Square'

function Board() {
  const handleClick = () => {
    console.log("You clicked me!")
  }
  
  return (
    <div>
      <div>
        <Square value={0} onSquareClick={handleClick} />
        <Square value={0} onSquareClick={handleClick} />
        <Square value={0} onSquareClick={handleClick} />
      </div>

      <div>
        <Square value={0} onSquareClick={handleClick} />
        <Square value={0} onSquareClick={handleClick} />
        <Square value={0} onSquareClick={handleClick} />
      </div>

      <div>
        <Square value={0} onSquareClick={handleClick} />  
        <Square value={0} onSquareClick={handleClick} />
        <Square value={0} onSquareClick={handleClick} />
      </div>
    </div>
  )
}

export default Board