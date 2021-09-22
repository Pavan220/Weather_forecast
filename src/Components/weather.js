import React, { Component } from "react";
import axios from "axios";
import CurrentWeather from "./currentWeather";
import TodayReport from "./todayReport";
import "./weather.css";
class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hourly: {
        apparent_temperature: [],
        temperature_2m: [],
        time: [],
        weathercode: [],
        winddirection_10m: [],
        windspeed_10m: [],
      },
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${this.props.Latitude}&longitude=${this.props.Longitude}&hourly=temperature_2m,apparent_temperature,weathercode,windspeed_10m,winddirection_10m`
      )
      .then((response) => {
        this.setState({
          currentWeather: response.data.current_weather,
          hourly: response.data.hourly,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.hourly.time.length !== 0 ? (
          <div className="main_container">
            <CurrentWeather
              time={this.state.hourly.time}
              apt_temp={this.state.hourly.apparent_temperature}
              temp={this.state.hourly.temperature_2m}
              Wcode={this.state.hourly.weathercode}
              WindDir={this.state.hourly.winddirection_10m}
              WindSp={this.state.hourly.windspeed_10m}
            />
            <p className="today_heading">Hourly</p>
            <TodayReport
              hourlyData={this.state.hourly}
              time={this.state.hourly.time}
              apt_temp={this.state.hourly.apparent_temperature}
              temp={this.state.hourly.temperature_2m}
              Wcode={this.state.hourly.weathercode}
              WindDir={this.state.hourly.winddirection_10m}
              WindSp={this.state.hourly.windspeed_10m}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default Weather;
