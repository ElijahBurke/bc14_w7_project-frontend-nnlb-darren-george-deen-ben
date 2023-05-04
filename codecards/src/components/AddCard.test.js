import { render, screen, fireEvent } from "@testing-library/react";
import AddCard from './components/AddCard';
import deck from '../Deck';

// test intended to test the input and add functionality.
test('adds a new card to the deck', () => {
  render(<AddCard />);

  //target text boxes and button
  const questionInput = screen.getByPlaceholderText('Enter question here');
  const answerInput = screen.getByPlaceholderText('Enter answer here');
  const addButton = screen.getByText('Add to Deck');

  // input test data and click
  fireEvent.change(questionInput, { target: { value: 'Test Question' } });
  fireEvent.change(answerInput, { target: { value: 'Test Answer' } });
  fireEvent.click(addButton);
  console.log(deck);

  expect(deck).toContain({ question: 'Test Question', answer: 'Test Answer' });
  //expect(screen.getByText({ question: 'What is JavaScript used for?', answer: 'Creating interactive web pages and applications.' })).toBeInTheDocument();
  // expect(screen.getByText('Paris')).toBeInTheDocument();
});