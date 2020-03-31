import React, {Component} from 'react';
import ButtonsRow from './ButtonsRow'

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
            <div className='Buttons'>
                <table align = 'left'>
                    {
                        this.state.rows.map((row, index) => <tr><ButtonsRow buttonsTexts = {row}></ButtonsRow></tr>)
                    }
                </table>
            </div>
        );
    }
}

export default Buttons;