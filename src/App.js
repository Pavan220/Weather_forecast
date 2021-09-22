import React, { Component } from "react";
import Weather from "./Components/weather";
import "./Components/weather.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      long: null,
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (succ) => {
        this.setState({
          lat: succ.coords.latitude,
          long: succ.coords.longitude,
        });
      },
      (err) => {
        console.log(err.message);
      }
    );
  }
  render() {
    return this.state.lat !== null ? (
      <Weather Latitude={this.state.lat} Longitude={this.state.long} />
    ) : null;
  }
}

export default App;
