import React, { Component } from 'react';
import './App.css';
import Prediction from "./Prediction";

let signs = [{ name: "Aries", dates: "Mar 21-Apr 19" },
{ name: "Taurus", dates: "Apr 20-May 20" },
{ name: "Gemini", dates: "May 21-Jun 20" },
{ name: "Cancer", dates: "Jun 21-Jul 22" },
{ name: "Leo", dates: "Jul 23-Aug 22" },
{ name: "Virgo", dates: "Aug 23-Sep 22" },
{ name: "Libra", dates: "Sep 23-Oct 22" },
{ name: "Scorpio", dates: "Oct 23-Nov 21" },
{ name: "Sagittarius", dates: "Nov 22-Dec 21" },
{ name: "Capricorn", dates: "Dec 22-Jan 19" },
{ name: "Aquarius", dates: "Jan 20-Feb 18" },
{ name: "Pisces", dates: "Feb 19-Mar 20" }];

let predictions = [];

class Horoscope extends Component {

  render() {
    for (let s in signs) {
      // debugger;
      predictions.push(<Prediction user="default" day="today" key={signs[s].name}
        name={signs[s].name} when={signs[s].dates} />);
    }
    return (
      <div className="Horoscope">
        <table className="HoroscopeTable"><tbody>
          {predictions}
        </tbody></table>
      </div>
    );
  }
}

export default Horoscope;
