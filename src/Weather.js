import axios from "axios";
import React from "react";
import "./Weather.css";

export default function Weather() {
  const apiKey = "0ced109d1b3107e21ab8ab47c9cb6bab";
  let units = "metric";
  let city = "Montreal";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  function showWeather(response) {
    console.log(response.data);
  }

  axios.get(apiUrl).then(showWeather);

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
        <h1>Montreal</h1>
        <ul>
          <li>Saturday</li>
          <li>Clear skies</li>
        </ul>
        <div className="row">
          <div className="col">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="sun with clouds"
            />
            20 degrees
          </div>
          <div className="col">
            <ul>
              <li>Humidity: 50%</li>
              <li>Wind: 5 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
