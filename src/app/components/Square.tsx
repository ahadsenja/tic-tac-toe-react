'use client'
import React from 'react'
import { SquareIface } from "../interface/GameIface";

function Square({ value, onSquareClicked }: SquareIface) {
  return <button className='square' onClick={onSquareClicked}>{value}</button>
}

export default Square