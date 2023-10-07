/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";


function App() {


    const url = 'https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=40d9fba210a419441a91bb44246691fa'

  return(
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            Lagos
          </div>
          <div className="temp">
            <h1>60</h1>
          </div>
          <div className="description">

          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
