import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "./ButtonComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 0,
      text: "sample",
      buttons: ["q", "w", "e", "a", "s", "d", "z", "x", "c"],
    };

    this.volChange = this.volChange.bind(this);
  }

  volChange(event) {
    this.setState({
      volume: event.target.value,
      text: event.target.value,
    });
  }

  componentDidMount() {}
  render() {
    return (
      <div id="drum-machine">
        <div id="switch-panel">
          <div id="switch-panel_power">
            <p id="power-label" className="select-off switch-label">
              Power
            </p>
            <label id="power-switch" className="panel-switch">
              <input
                type="checkbox"
                id="power-input"
                className="panel-switch-input"
              />
              <span id="power-slider" className="panel-switch-slider"></span>
            </label>
          </div>
          <div id="switch-panel_display">
            <div id="display-panel"></div>
          </div>
          <div id="switch-panel_mode">
            <p id="" className="select-off switch-label">
              Mode
            </p>
            <span id="mode-a-label">A</span>
            <label id="mode-switch" className="panel-switch">
              <input
                type="checkbox"
                id="mode-input"
                className="panel-switch-input"
              />
              <span id="mode-slider" className="panel-switch-slider"></span>
            </label>
            <span id="mode-b-label">B</span>
          </div>
          <div id="switch-panel_volume"></div>
        </div>
      </div>
    );
  }
}

export default App;
