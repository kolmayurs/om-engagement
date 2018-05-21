import React, { Component } from 'react';
import './App.css';
import gold_design from './img/gold_design.png';
import og_img from './img/eng.png';
import Peacock from './Peacock'; 
class App extends Component {
  render() {
    return (
      <div className="App">
      	<div className="img_design"><img src={gold_design} alt="Engagement" /><img src={og_img} className="og_img" alt="og_img" /></div>
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
