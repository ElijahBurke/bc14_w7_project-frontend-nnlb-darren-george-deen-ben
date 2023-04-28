import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Revising from './components/Revising';
import AddCard from './components/AddCard';
import deck from './Deck';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [randomCard, setRandomCard] = useState(deck[0])
  const [flipToFront, setFlipToFront] = useState(true)
  
  const [userDeck, setUserDeck] = useState([...deck]);
  const [question, setQuestion] = useState(""); //text value of the question input
  const [answer, setAnswer] = useState(""); //text value of the answer input

  const randomCardClick = () => {
    const randomIndex = Math.floor(Math.random() * userDeck.length);
    setTimeout(() => {
      setRandomCard(userDeck[randomIndex])
    }, 300)
    setFlipToFront(true)
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "questionInput") {
      setQuestion(value);
    } else if (name === "answerInput") {
      setAnswer(value);
    }
  }

  const handleAddClick = () => {
    const newCard = { question, answer };
    setUserDeck(prevState => [...prevState, newCard]);
    
    setQuestion("");
    setAnswer("");
  }
  
  console.log(deck)

  return (
    <div id="app-body" className="App">
      <Header />
      
      <Revising 
        randomCard={randomCard} 
        flipToFront={flipToFront} 
        setFlipToFront={setFlipToFront}
        randomCardClick={randomCardClick}
      />
      <AddCard 
      question={question}
      answer={answer}
      handleInputChange={handleInputChange} 
      handleAddClick={handleAddClick}
      />
      
      <Footer />

    </div>
  );
}

export default App;

/* DAY 3 PLAN
- Create revising section
 */
