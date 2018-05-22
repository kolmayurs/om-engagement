import React, { Component } from 'react';
import './App.css';
import gold_design from './img/gold_design1.png';
import gold_design1 from './img/gold_design.png';
import og_img from './img/eng.png';
import Peacock from './Peacock'; 
import google_map from './img/google-maps.png';
class App extends Component {
  render() {
    return (
      <div className="App">
      	<div className="img_design"><img src={gold_design} alt="Engagement" /><img src={og_img} className="og_img" alt="og_img" /></div>
      	<div className="invite-text">YOU ARE CORDIALLY INVITED <br />TO CELEBRATE THE ENGAGEMENT OF</div>
      	<div className="names-box">
      	<div className="names"><span className="big_name">O</span>MKANT <br /> TO <br /><span className="big_name">A</span>RCHANA</div>
        <div className="date">SUNDAY, JUNE 3<sup>RD</sup>, 12<sup>PM</sup></div>
        <div className="address">AT Raibai Niwas, <br />Above Dr. Sangani Hospital, <br />Ambedkar Chowk, Mohone, Ambivali, <br />Taluka Kalyan, District Thane, <br />Pin Code: 421102</div>
        <div className="map"><a href="https://www.google.com/maps/place/19%C2%B015'50.2%22N+73%C2%B010'24.1%22E/@19.263797,73.1737944,19.25z/data=!4m5!3m4!1s0x0:0x0!8m2!3d19.2639444!4d73.1733611" target="_blank"><img src={google_map} alt="Google Map" /></a></div>
      	<div className="img_design"><img src={gold_design1} alt="Engagement" /></div>
        </div>
      	<Peacock />
      </div>
    );
  }
}

export default App;
