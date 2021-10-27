import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.cityName}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col">
          <WeatherIcon className="main-icon" code={props.data.icon} size={60} />
          <span>
            <WeatherTemperature
              celsius={props.data.temperature}
              city={props.data.cityName}
            />
          </span>
        </div>
        <div className="col">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind * 3.6)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
