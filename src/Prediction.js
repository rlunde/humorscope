import React from 'react';
import './App.css';

function Prediction(props) {
    return (
      <tr className="Prediction">
                <td><div id={props.name} className="zodiacpic"/></td>
                <td></td>
      </tr>
    );
  }

export default Prediction;
