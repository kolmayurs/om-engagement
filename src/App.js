import React, { Component } from 'react';
import './App.css';
import gold_design from './img/gold_design.png';
import Peacock from './Peacock'; 
class App extends Component {
  render() {
    return (
      <div className="App">
      	<img src={gold_design} alt="Engagement" />
      	<div className="invite-text">YOU ARE CORDIALLY INVITED <br />TO CELEBRATE THE ENGAGEMENT OF</div>
      	<div className="names-box">
      	<div className="names"><span className="big_name">O</span>MKANT <br /> TO <br /><span className="big_name">A</span>RCHANA</div>
      	</div>
      	<Peacock />

      </div>
    );
  }
}

export default App;
