import React, { Component } from 'react';
import './Button.css'

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'text': props.children
        }
    }
    render() { 
        return (
            <button className = 'Button' align = 'center'>{this.state.text}</button>
        );
    }
}
 
export default Button;