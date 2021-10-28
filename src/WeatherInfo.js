import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.cityName}</h1>
      <ul>
        <li className="date">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize description">
          {props.data.description}
        </li>
      </ul>
      <div className="row">
        <div className="col-md-7">
          <WeatherIcon code={props.data.icon} size={60} />
          <span>
            <WeatherTemperature
              celsius={props.data.temperature}
              city={props.data.cityName}
            />
          </span>
        </div>
        <div className="col-md-5">
          <ul>
            <li>Feels like: {Math.round(props.data.feel)}°</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind * 3.6)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
