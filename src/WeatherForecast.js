import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  
  return (
    <div className="WeatherForecast">
      <div className="container">
        <div className="row">
          <div clasName="col">
            <div>Tue</div>
            <WeatherIcon code="01d" size={40} />
            <div className="forecast-tempearture">
              <span>20° </span>
              <span>10°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
