/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useState } from "react";



function App() {

  const [data, setData] = useState({
    name: "",
    main: { temp: 0, feels_like: 0, humidity: 0 },
    wind: { speed: 0 },
    weather: [{ description: "" }],
  })
  const [location, setLocation] = useState('')
  const [error, setError] = useState(null);


  const apiKey = "40d9fba210a419441a91bb44246691fa"
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`




  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
    ;
      })
      .catch((error) => {
        setError("Location not found. Please try again.");
      });
      }
    }

  




    return (
      <div className="app bg-blue-200 p-4 rounded-lg shadow-lg h-screen">
        <div className="search">
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
          />
        </div>
        <div className="container flex items-center space-x-4">
          <div className="top">
            <div className="location text-2xl font-bold">
              <p>{data.name}</p>
            </div>
            <div className="temp">
              <h1 className="bold text-3xl font-semibold">{data.main.temp} C
              </h1>
              <p>{data.weather[0].description}</p>
            </div>
          </div>
          <div className="bottom text-gray-600">
            <div className="feels ">
              <p className="bold"> Feels Like: {data.main.feels_like}°C</p>
            </div>
            <div className="humidity">
              <p className="bold text-gray-600">Humidity: {data.main.humidity}%</p>
            </div>
            <div className="wind text-gray-600 ">
              <p className="bold">Wind Speed: {data.wind.speed}MPH</p>
            </div>
          </div>
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    );
}

export default App;
