import React from "react";
import "./Weather.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container my-container">
        <div className="row">
          <div className="col-12 weather-title">
            <h1>Weather</h1>
            <h2>Around the World</h2>
          </div>
          <div className="col-6 current-location">
            <span className="current-location-name"> Montreal </span>
            <br />
            <span className="last-updated">Last updated today</span>
            <div className="current-location-description">
              <span className="current-description">Clear</span>
            </div>
            <div className="col-4 feels-like">
              <span className="feelsLike">Feels like 19</span>
            </div>
          </div>

          <div className="row">
            <div className="col-4 current-weather">
              <img src="#" alt="" className="current-icon" />
              <span className="current-temp">
                <span>20</span>
              </span>
              <span className="units">
                <a href="/" className="celsius-unit active">
                  °C
                </a>
                |
                <a href="/" className="fahrenheit-unit">
                  °F
                </a>
              </span>
            </div>
            <div className="col-3 align-items-start weather-details">
              <ul>
                <li>
                  Humidity: <span>80%</span>
                </li>
                <li>
                  Wind: <span>5 km/h</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="forecast-icon"></div>
        <div className="open-source">
          <p>
            <a
              className="github-link"
              href="https://github.com/JessAM10/my-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by
            <a
              href="https://linkedin.com/in/jessallardm"
              target="_blank"
              rel="noreferrer"
              className="linkedin"
            >
              Jessica Allard
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
