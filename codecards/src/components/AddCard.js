import React from 'react';

const AddCard = ({ question, answer, handleInputChange, handleAddClick }) => {
  return (
    <div data-testid="addcard-component" className="addCardContainer">
      <input className='questionText' type='text' name="questionInput" placeholder='Enter question here' value={question} onChange={handleInputChange}></input>
      <input className='answerText' type='text' name="answerInput" placeholder='Enter answer here' value={answer} onChange={handleInputChange}></input>
      <button className='addCard' onClick={handleAddClick}>Add to Deck</button>
    </div>
  )
}

export default AddCard;