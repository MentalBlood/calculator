import React from 'react';
import './Display.css'

function Display(props) {
    return (
        <div className = 'displayDiv'>
            <input className = 'Display' onChange = {event => {console.log('change')}} value = {props.text}/>
        </div>
    );
}
 
export default Display;