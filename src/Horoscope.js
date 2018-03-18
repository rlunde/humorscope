import React, { Component } from 'react';
import './App.css';
import Prediction from "./Prediction";
let signs = ["Aries", "Taurus", "Gemini", "Cancer", 
  "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", 
  "Capricorn", "Aquarius", "Pisces"];
let predictions = [];

class Horoscope extends Component {

  render() {
    for (let s in signs) {
      // debugger;
      predictions.push(<Prediction user="default" day="today" key={signs[s]} name={signs[s].toLowerCase()} />);
    }
    return (
      <div className="Horoscope">
        <table><tbody>
            {predictions}
        </tbody></table>
      </div>
    );
  }
}

export default Horoscope;
