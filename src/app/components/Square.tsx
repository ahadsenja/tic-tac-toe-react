import React from 'react'

function Square({value, onSquareClick}) {
  return (
    <button className='border w-10 h-10' onClick={onSquareClick}>X</button>
  )
}

export default Square