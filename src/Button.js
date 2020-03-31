import React, { Component } from 'react';
import './Button.css'

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'text': props.children,
            clickHandler: props.clickHandler
        }

        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.state.clickHandler(this.state.text)
    }

    render() { 
        return (
            <button onClick = {this.onClick} className = 'Button zoomIn'>{this.state.text}</button>
        );
    }
}
 
export default Button;