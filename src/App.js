import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <Weather city="Montreal" />
        </header>{" "}
      </div>{" "}
      <Footer />
    </div>
  );
}
