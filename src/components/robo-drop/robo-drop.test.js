import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RoboDrop from './robo-drop'
import { scenarioOne, scenarioTwo, scenarioThree, scenarioFour } from '../../input-data/data-sets'

describe('Robo-drop',  () => {
    
    let container, getByText = null
    var ref = React.createRef() 

    beforeEach(() => {
        return { container, getByText } = render(<RoboDrop ref={ref} />);
    });

    it(' Renders the page with the correct title', () => {
        const titleElement = getByText(/RoboDrop/i);
        expect(titleElement).toBeInTheDocument();
    });

    it(' Processes the scenarioOne and displays 0,1,NORTH', () => {

        ref.current.sendInstructions(scenarioOne)
        const resultText = getByText(/0,1,NORTH/i);
        expect(resultText).toBeInTheDocument();

    });

    it(' Processes the scenarioTwo and displays 0,1,NORTH', () => {

        ref.current.sendInstructions(scenarioTwo)
        const resultText = getByText(/PLACE 1,2,EAST/i);
        expect(resultText).toBeInTheDocument();

    });

    it(' Processes the scenarioThree and displays 0,1,NORTH', () => {

        ref.current.sendInstructions(scenarioThree)
        const resultText = getByText(/3,3,NORTH/i);
        expect(resultText).toBeInTheDocument();

    });

    it(' Processes the scenarioFour and displays 0,1,NORTH', () => {

        ref.current.sendInstructions(scenarioThree)
        const resultText = getByText(/PLACE 1,2,EAST/i);
        expect(resultText).toBeInTheDocument();

    });

})