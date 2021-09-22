import React, { Component } from "react";

class WeatherType extends Component {
  static defaultProps = {
    weather: [
      { clear: [0, 1] },
      { paCloudy: [2] },
      { overcast: [3] },
      { fog: [48, 45] },
      { drizzel: [56, 51, 53, 55, 57] },
      { sRain: [66, 61, 80] },
      { mRain: [63, 81] },
      { hRain: [67, 65, 82] },
      { Snow: [77, 71, 85, 73, 75, 86] },
      { sNmThunder: [95] },
      { hThunder: [96, 99] },
    ],
  };
  state = {
    type: "moon.png",
    message: "",
  };
  componentDidMount() {
    let code = this.props.weathCode;
    this.props.weather.map((e) => {
      let [keys] = Object.keys(e);
      if (Object.values(e)[0].includes(code)) {
        let hour = new Date().getHours();
        if (keys === "clear") {
          if (hour >= 18 || hour < 6) {
            this.setState({ type: "moon.png", message: "Clear" });
          } else {
            this.setState({ type: "sun--v1.png", message: "Clear" });
          }
        } else if (keys === "paCloudy") {
          if (hour >= 18 || hour < 6) {
            this.setState({
              type: "partly-cloudy-night.png",
              message: "Partly Cloudy",
            });
          } else {
            this.setState({
              type: "partly-cloudy-day--v1.png",
              message: "Partly Cloudy",
            });
          }
        } else if (keys === "overcast") {
          this.setState({ type: "cloud.png", message: "Cloudy" });
        } else if (keys === "fog") {
          this.setState({ type: "fog-day--v1.png", message: "Haze" });
        } else if (keys === "drizzel") {
          this.setState({ type: "windy-weather--v1.png", message: "Drizzel" });
        } else if (keys === "sRain") {
          this.setState({ type: "light-rain--v1.png", message: "Light Rain" });
        } else if (keys === "mRain") {
          this.setState({ type: "moderate-rain.png", message: "Rainy" });
        } else if (keys === "hRain") {
          this.setState({ type: "heavy-rain.png", message: "Heavy Rain" });
        } else if (keys === "Snow") {
          this.setState({ type: "snow--v1.png", message: "Snow Fall" });
        } else if (keys === "sNmThunder") {
          this.setState({ type: "storm--v1.png", message: "ThunderStorm" });
        } else if (keys === "hThunder") {
          this.setState({
            type: "storm-with-heavy-rain.png",
            message: "ThunderStorm",
          });
        }
      }
      return 0;
    });
  }
  render() {
    return (
      <div className={this.props.className}>
        <img
          alt="weather img"
          src={`https://img.icons8.com/color/${this.props.size}/000000/${this.state.type}`}
        />
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default WeatherType;
