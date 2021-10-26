import React from "react";
import Weather from "./Weather";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <Weather city="Montreal" />
      </header>{" "}
      <footer>
        {" "}
        <a href="https://github.com/JessAM10/react-weather" className="open-source">
          {" "}
          Open-source code
        </a>{" "}
        by Jessica Allard
      </footer>
      </div>
    </div>
  );
}
