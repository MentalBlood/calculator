import React, { Component } from 'react';
import Buttons from './Buttons';
import Display from './Display'
import './App.css'

function operator(func) {
    return {
        type: 'operator',
        func: func
    }
}

function digit() {
    return {
        type: 'digit'
    }
}

function calculator() {
    return {
        type: 'calculator'
    }
}

function cleaner() {
    return {
        type: 'cleaner'
    }
}

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonsData: {
                '0': digit(), '1': digit(), '2': digit(), '3': digit(), '4': digit(), '5': digit(), '6': digit(), '7': digit(), '8': digit(), '9': digit(), 
                '/': operator((a, b) => a / b),
                '*': operator((a, b) => a * b),
                '-': operator((a, b) => a - b),
                '+': operator((a, b) => a + b),
                '=': calculator(),
                'c': cleaner()
            },
            buttonsRows: [
                ['7', '8', '9', '/'],
                ['4', '5', '6', '*'],
                ['1', '2', '3', '-'],
                ['c', '0', '=', '+']
            ],
            currentOperand: 0,
            typingSecondOperand: false,
            currentOperator: (a, b) => a ? a : b,
            displayedText: ''
        }

        this.anyButtonClickHandler = this.anyButtonClickHandler.bind(this)
    }

    calculate() {
        this.setState(state => {
            let a = parseFloat(this.state.currentOperand, 10)
            let b = parseFloat(this.state.displayedText, 10)
            let result = this.state.currentOperator(a, b).toString()
            let resultSliced = result.slice(0, Math.min(result.length, 10))
            return {displayedText: resultSliced, typingSecondOperand: false, currentOperand: resultSliced, currentOperator: (a, b) => a}
        })
    }

    cleanDisplay() {
        this.setState(state => ({currentOperand: '', currentOperator: (a, b) => a, displayedText: ''}))
    }

    anyButtonClickHandler(text) {
        let buttonData = this.state.buttonsData[text]
        if (buttonData.type === 'digit') {
            if (this.state.displayedText.length < 10)
                this.setState(state => ({displayedText: state.displayedText + text}))
        }
        else if (buttonData.type === 'operator') {
            //this.calculate()
            this.setState(state => ({currentOperand: state.displayedText, currentOperator: buttonData.func, displayedText: '', typingSecondOperand: true}))
        }
        else if (buttonData.type === 'calculator')
            this.calculate()
        else if (buttonData.type === 'cleaner')
            this.cleanDisplay()
    }

    render() { 
        return (
            <div className = 'App'>
                <Display text = {this.state.displayedText}/>
                <Buttons anyButtonClickHandler = {this.anyButtonClickHandler} rows = {this.state.buttonsRows}></Buttons>
            </div>
        );
    }
}
 
export default App;