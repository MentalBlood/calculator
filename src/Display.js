import React, { Component } from 'react';
import './Display.css'

class Display extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        }
    }
    render() { 
        return (
            <input className = 'Display' type = 'text' size = '8'></input>
        );
    }
}
 
export default Display;