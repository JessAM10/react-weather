import React from "react";
import Weather from "./Weather";
// import Destinations from "./Destinations";
import Search from "./Search";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        {/* <Destinations /> */}
        <Search />
      </header>
    </div>
  );
}
