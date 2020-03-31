import React, {Component} from 'react';
import ButtonsRow from './ButtonsRow'
import './Buttons.css'
import './ButtonsRow.css'

class Buttons extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: props.rows,
            anyButtonClickHandler: props.anyButtonClickHandler
        }
    }

    render() {
        return (
            <div className = 'Buttons'>
                {
                    this.state.rows.map((row, index) => <ButtonsRow anyButtonClickHandler = {this.state.anyButtonClickHandler} key = {index} buttonsTexts = {row}></ButtonsRow>)
                }
            </div>
        );
    }
}

export default Buttons;