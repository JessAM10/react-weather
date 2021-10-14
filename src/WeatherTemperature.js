import React, { useState } from "react";
import "./WeatherTemperature";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
    }
    
    function showCelsius(event) {
      event.preventDefault();
      setUnit("celsius");
    }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>{" "}
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius * 1.8 + 32) }</span>{" "}
        <span className="units">
          <a href="/" onClick={showCelsius}>°C</a> |{" "}
°F
        </span>
      </span>
    );
  }
}
