import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
    }, [props.coordinates]
  )

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "0ced109d1b3107e21ab8ab47c9cb6bab";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
