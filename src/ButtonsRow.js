import React, { Component } from 'react';
import Button from './Button';
import './Button.css'
import './ButtonsRow.css'

class ButtonsRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsTexts: props.buttonsTexts,
            anyButtonClickHandler: props.anyButtonClickHandler
        }
    }
    render() { 
        return (
            <div className = 'ButtonsRow'>
                {
                    this.state.buttonsTexts.map((buttonText, index) => <Button clickHandler = {this.state.anyButtonClickHandler} key = {index}>{buttonText}</Button>)
                }
            </div>
        );
    }
}
 
export default ButtonsRow;