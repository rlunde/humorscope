import React from 'react';
import './App.css';

function Prediction(props) {
    return (
        <div className="horoscopeRow">
            <div className="sign">
                <div className="zodiacPic" id={props.name.toLowerCase()} />
                <div className="zodiacName">{props.name}</div>
                <div className="zodiacDates">{props.when}</div>
            </div>
            <div className="prediction">{props.prediction}</div>
        </div>
    );
}

export default Prediction;
