// import logo from "./logo.svg";
import React from "react";

import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dublin" />
        <footer>
          This project was coded by Alma Zamir and is {""}
          <a href="https://github.com/Almajs/react-weather-app" target="blank">
            open-sourced on GitHub
          </a>{" "}
          {""}
          and hosted on{" "}
          <a
            href="https://master--bright-biscuit-cf8e99.netlify.app/"
            target="blank"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
