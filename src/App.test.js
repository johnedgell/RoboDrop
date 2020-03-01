import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';


let container, getByText = null

beforeEach(() => {
    return { container, getByText } = render(<App />);
  });


test('Renders the page with the correct title', () => {
  const titleElement = getByText(/RoboDrop/i);
  expect(titleElement).toBeInTheDocument();
});

test('Processes the commands and returns the right result', () => {
  const button = container.querySelector('button')
  fireEvent.click(getByText('Send Commands'))
  const resultText = getByText(/3,3,NORTH/i);
  expect(resultText).toBeInTheDocument();
});
