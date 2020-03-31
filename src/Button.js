import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'text': props.children
        }
    }
    render() { 
        return (
            <button>{this.state.text}</button>
        );
    }
}
 
export default Button;