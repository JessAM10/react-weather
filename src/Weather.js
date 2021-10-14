import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function showWeather(response) {
    setWeather({
      ready: true,
      cityName: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "0ced109d1b3107e21ab8ab47c9cb6bab";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showWeather);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  className="search"
                  type="search"
                  placeholder="Enter a city"
                  onChange={updateCity}
                  autoFocus={true}
                />
              </div>
              <div className="col-6">
                <input
                  className="btn button"
                  type="submit"
                  value="Search"
                />
              </div>
            </div>
          </form>
          <WeatherInfo data={weather} />
        </div>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
