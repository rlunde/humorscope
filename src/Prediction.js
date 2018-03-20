import React from 'react';
import './App.css';

function Prediction(props) {
    return (
        <tr className="Prediction">
            <td>
                <div id={props.name.toLowerCase()} className="zodiacpic">                
                </div>
                <div className="sign">
                {props.name}<br/>{props.when}
                </div>
            </td>
            <td></td>
        </tr>
    );
}

export default Prediction;
