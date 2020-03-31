import React, { Component } from 'react';

class Display extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        }
    }
    render() { 
        return (
            <input type = 'text' size = '8'></input>
        );
    }
}
 
export default Display;