import React, { Component } from 'react';
import Layout from '../layout/layout'
import ControlPanel from '../control-panel/control-panel'
import Robot from '../../lib/Robot.js'
import TableTop from '../../lib/TableTop.js'
import { scenarioThree } from '../../input-data/data-sets'
import './style.css'

export default class RoboDrop extends Component {

    constructor(props) {
        super(props)

        //I apologise for the RoboCop references - i couldnt resist... https://en.wikipedia.org/wiki/RoboCop
        this.murphy = null

        this.state = {
            input: scenarioThree,
            output: '',
            error: false,
            errorMessage: ''
        }

    }

    componentDidMount(){
        let Detroit = new TableTop(5, 5)
       
        if(Detroit.errorMessage){
            this.setState({error: true, errorMessage: Detroit.errorMessage})
        }else{
            this.murphy = new Robot(Detroit)           
        }
    }

    sendInstructions = (instructions) => {

        let output = this.murphy.parseInput(instructions)
        this.setState({output: output})

    }

    render() {

        const { input, output, error, errorMessage} = this.state

        return (
            <div className="App">
                <h1>RoboDrop</h1>
                <Layout
                    lower={<ControlPanel input={input} sendInstructions={this.sendInstructions} error={error} errorMessage={errorMessage} />}
                    output={<div>{output}</div>}
                />
            </div>
        )
    }
}