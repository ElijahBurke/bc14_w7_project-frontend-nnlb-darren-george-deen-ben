import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import deck from './Deck';


describe("App", () => {
  test('renders App without errors', () => {
    render(<App />);
  });

  test("renders the header component", () => {
    render(<App />);
    const header = screen.getByTestId('header-component');
    expect(header).toBeInTheDocument();
  });

  test("renders the revising component", () => {
    render(<App />);
    const revising = screen.getByTestId("revising-component");
    expect(revising).toBeInTheDocument();
  });

  test("renders the addcard component", () => {
    render(<App />);
    const addcard = screen.getByTestId("addcard-component");
    expect(addcard).toBeInTheDocument();
  });

  test("renders the footer component", () => {
    render(<App />);
    const footer = screen.getByTestId("footer-component");
    expect(footer).toBeInTheDocument();
  });
});