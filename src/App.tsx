import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          <h1>ReacTaur</h1>
          <h4>a React.js-Tauri boilerplate</h4>
        </div>
        <img src={logo} className="App-logo" alt="logo" />

        <span>
          More info{" "}
          <a
            href="https://github.com/MPMcIntyre/ReacTaur_ReactTS-Tauri-BoilerPlate"
            target="_blank"
            rel="noreferrer">
            here{" "}
          </a>
        </span>
        <h3>Yarn scripts:</h3>
        <ul>
          <li>
            "yarn start"
            <ul>
              <li>
                Serve React.js content and run Tauri on http://localhost:3001
              </li>
            </ul>
          </li>
          <li>
            "yarn start:server"
            <ul>
              <li>Start React.js server without starting Tauri</li>
            </ul>
          </li>
          <li>
            "yarn start:tauri"
            <ul>
              <li>
                Start Tauri pointed to http://localhost:3001
                (./src-tauri/tauri.conf.json)
              </li>
            </ul>
          </li>
          <li>
            "yarn build"
            <ul>
              <li>Create prod version of React app in "./build"</li>
            </ul>
          </li>
          <li>
            "yarn package"
            <ul>
              <li>
                Build Tauri app as native executable and installer pointed to
                react build directory
              </li>
            </ul>
          </li>
        </ul>
        <h4>Provided by M.P. McIntyre :)</h4>
      </header>
    </div>
  );
}

export default App;
