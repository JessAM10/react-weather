import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="Footer">
      {" "}
      <a
        href="https://github.com/JessAM10/react-weather"
        target="_blank"
        rel="noreferrer"
        className="open-source"
      >
        {" "}
        Open-source code
      </a>{" "}
      by Jessica Allard
    </footer>
  );
}
