import React from 'react';
import { render, rerender, fireEvent } from '@testing-library/react';

import ControlPanel from './control-panel';
import { scenarioThree, scenarioOne } from '../../input-data/data-sets'

//input, sendInstructions
const sendInstructions = jest.fn();
const defaultProps = {
  input: scenarioThree,
  sendInstructions: sendInstructions,
  error: false,
  errorMessage: ''
}

const errorProps = {
  input: scenarioThree,
  sendInstructions: sendInstructions,
  error: true,
  errorMessage: 'ERROR MESSAGE'
}


let container, getByText = null

beforeEach(() => {
  return { container, getByText } = render(<ControlPanel {...defaultProps} />);
});

afterEach(() => {
  sendInstructions.mockClear();
});

describe('Robo-drop', () => {
  it(' should call the sendInstructions function when the Send Commands button is clicked ', () => {

    
    fireEvent.click(getByText('Send Commands'))
    expect(sendInstructions).toHaveBeenCalledWith(scenarioThree);

  })

  it(' Processes the commands and returns the right result', () => {

    const textArea = container.querySelector('TextArea')

    fireEvent.change(textArea, { target: { value: scenarioOne } })
    fireEvent.click(getByText('Send Commands'))

    expect(sendInstructions).toHaveBeenCalledWith(scenarioOne);

  })

  it(' Display an error messsage when an error is set', () => {

    const { getByText } = render(<ControlPanel {...errorProps} />)
    const errorText = getByText(/ERROR MESSAGE/i);
    expect(errorText).toBeInTheDocument();

  })
})

