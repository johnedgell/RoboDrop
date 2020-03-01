import React, { Component } from 'react';
import Layout from '../layout/layout'
import ControlPanel from '../control-panel/control-panel'
import Robot from '../objects/Robot.js'
import TableTop from '../objects/TableTop.js'
import { scenarioThree } from '../../input-data/data-sets'
import './style.css'

export default class RoboDrop extends Component {

    constructor(props) {
        super(props)

        //I apologise for the RoboCop references - i couldnt resist...
        let Detroit = new TableTop(5, 5)
        this.murphy = new Robot(Detroit)
        this.state = {
            input: scenarioThree,
            output: ''
        }

    }

    sendInstructions = (instructions) => {

        let output = this.murphy.parseInput(instructions)
        this.setState({output: output})

    }

    render() {

        const { input, output } = this.state

        return (
            <div className="App">
                <Layout
                    lower={<ControlPanel input={input} sendInstructions={this.sendInstructions} />}
                    output={<div>{output}</div>}
                />
            </div>
        )
    }
}