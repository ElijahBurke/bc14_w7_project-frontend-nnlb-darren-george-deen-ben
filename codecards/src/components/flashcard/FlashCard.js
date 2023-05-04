import { useState, useEffect } from "react";
import cn from "classnames";
import "./styles.scss";

function FlashCard({ randomCard, flipToFront, setFlipToFront, randomCardClick }) {
  const [showBack, setShowBack] = useState(false);

  // ensure card is set to front on load
  useEffect(() => {
    if (flipToFront) {
      setShowBack(false)
      setFlipToFront(false)
    }
  }, [flipToFront, setFlipToFront])

  // toggle card facing state
  function handleClick() {
      setShowBack(!showBack);
  }

  console.log(randomCard)

  // JSX handling flippable card, see also 'styles.scss'
  return (
    <div data-testid="flashcard-component" className="flashcard-container">
      <div className="row">
        <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
          <div className="flip-card-outer" onClick={handleClick}>
            <div className={cn("flip-card-inner", { showBack })}>
              <div className="card front">
                <div className="card-body d-flex justify-content-center align-items-center">
                  <p className="card-text fs-2 fw-bold">{randomCard.question}</p>
                </div>
              </div>
              <div className="card back">
                <div className="card-body d-flex justify-content-center align-items-center">
                  <p className="card-text fs-2 fw-bold">{randomCard.answer}</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <button className="new-card-button" onClick={randomCardClick}>New Card</button>
    </div> 
  );
}

export default FlashCard;