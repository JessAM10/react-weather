import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    console.log(response.data);
    setWeather({
      ready: true,
      cityName: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form>
            <div className="row">
              <div className="col-6">
                <input
                  className="search"
                  type="search"
                  placeholder="Search for a city"
                />
              </div>
              <div className="col-6">
                <input
                  className="btn btn-primary button"
                  type="submit"
                  value="Search"
                />
              </div>
            </div>
          </form>
          <h1>{weather.cityName}</h1>
          <ul>
            {/* <li>Saturday</li> */}
            <li className="text-capitalize">{weather.description}</li>
          </ul>
          <div className="row">
            <div className="col">
              <img src={weather.iconUrl} alt="weather icon" />
              {Math.round(weather.temperature)}°C
            </div>
            <div className="col">
              <ul>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {Math.round(weather.wind * 3.6)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "0ced109d1b3107e21ab8ab47c9cb6bab";
    let units = "metric";
    let city = "Montreal";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);

    return "Loading...";
  }
}
