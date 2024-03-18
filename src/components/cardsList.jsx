import React from 'react'
import './cardsList.css'

export default function cardsList({ card, handleChoice, flipped, disabled, canClick }) {
  const click = () => {
    if (!disabled && canClick) {
      handleChoice(card)
    }
  }

  return (
    <div className='card'>
      <div className={flipped ? "flipped" : ""}  >
        <img className='front' src={card.src} alt="card front" />
        <img className='back' src="/img/cover.png" alt="card back" onClick={() => click(card)}/>
      </div>
    </div>
  )
}
