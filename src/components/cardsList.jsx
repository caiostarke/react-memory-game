import React from 'react'

export default function cardsList({ card, handleChoice }) {
  return (
    <div>
        { card.turned &&  <img className='front' src={card.src} alt="card front" /> }
        { !card.turned && <img className='back' src="/img/cover.png" alt="card back" onClick={() => handleChoice(card)}/> }
    </div>
  )
}
