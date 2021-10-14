import React from "react";
import Weather from "./Weather";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="Montreal" />
      </header>{" "}
      <footer className="container">
        {" "}
        <a href="https://github.com/JessAM10/react-weather">
          {" "}
          Open-source code
        </a>{" "}
        by Jessica Allard
      </footer>
    </div>
  );
}
