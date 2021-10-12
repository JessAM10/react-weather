import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form>
          <div className="row">
            <div className="col-6">
              <input className="search" type="search" placeholder="Search for a city" />
            </div>
            <div className="col-6">
              <input className="btn btn-primary" type="submit" value="Search" />
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
