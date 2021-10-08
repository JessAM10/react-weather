import React from "react";
import axios from "axios";

export default function Weather(props) {
  const apiKey = "0ced109d1b3107e21ab8ab47c9cb6bab";
  const units = "metric";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);

  function showTemperature(response) {
    alert(`It is ${response.data.main.temp} in ${response.data.name}`);
  }

  return <h1>Hello from Weather</h1>;
}
