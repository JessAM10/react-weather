import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

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
                    <img src={props.data.iconUrl} alt= "Weather icon" />
                    {Math.round(props.data.temperature)}°C
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