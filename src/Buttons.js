import React, {Component} from 'react';
import ButtonsRow from './ButtonsRow'
import './Buttons.css'
import './ButtonsRow.css'

class Buttons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: [
                ['7', '8', '9', '/'],
                ['4', '5', '6', '*'],
                ['1', '2', '3', '-'],
                ['c', '0', '=', '+']
            ]
        }
    }

    render() {
        return (
            <div className = 'Buttons'>
                {
                    this.state.rows.map((row, index) => <ButtonsRow buttonsTexts = {row}></ButtonsRow>)
                }
            </div>
        );
    }
}

export default Buttons;