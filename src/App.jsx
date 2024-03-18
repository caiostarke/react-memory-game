import { useState } from 'react';
import './App.css';
import CardsList from './components/cardsList';

const cardImages = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
]

function App() {

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  // Shuffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map( (card) => ( {...card, id: Math.random(), turned: false, match: false } ))
    
    console.log(shuffledCards);
    setCards(shuffledCards);
    setTurns(0);
  }    

  const handleChoice = (card) => {
    
  }


  return (
    <div className="App">
      <h1> Hello Magic Memorry Game ;))</h1>
      <button onClick={shuffleCards}>New Game ;))</button>

      <div className='card-grid'>
        {cards.map(card => <CardsList card={card} handleChoice={handleChoice} key={card.id}/> )}
      </div>


    </div>
  );
}

export default App;
