import React, { Component } from 'react';
import Button from './Button';

class ButtonsRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonsTexts: props.buttonsTexts
        }
    }
    render() { 
        return (
            <tr>
                {
                    this.state.buttonsTexts.map((buttonText, index) => <td><Button>{buttonText}</Button></td>)
                }
            </tr>
        );
    }
}
 
export default ButtonsRow;