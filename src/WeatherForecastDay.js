import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      {" "}
      <div>{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <div className="forecast-tempearture">
        <span className="temp-high">{maxTemperature()} </span>
        <span className="temp-low">{minTemperature()}</span>
      </div>
    </div>
  );
}
