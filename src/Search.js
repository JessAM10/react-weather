import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="container">
        <div className="col-5">
          <form>
            <div className="form-group fg--search search-bar">
              <input
                type="text"
                className="input"
                placeholder="Find your destination"
                autocomplete="off"
              />
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
