import React, { Component } from "react";
import Wind from "./wind";
import WeatherType from "./weatherType";
let hr = `${new Date().getHours()}`;
class CurrentWeather extends Component {
  static defaultProps = {
    dateNtime: `${new Date().toLocaleDateString("en-ca")}T${hr.padStart(
      2,
      "0"
    )}:00`,
  };
  constructor(props) {
    super(props);
    this.state = {
      place: null,
      direc: "",
    };
  }
  componentDidMount() {
    let data1 = this.props.time.filter((e) => e === this.props.dateNtime);
    this.setState({ place: this.props.time.indexOf(data1[0]) });
  }
  render() {
    return (
      <div className="currentWeather">
        {this.state.place !== null ? (
          <div>
            <p className="currTemp">
              {this.props.temp[this.state.place]}
              <span>°C</span>
            </p>
            <WeatherType
              className="curr_weth_type"
              size={60}
              weathCode={this.props.Wcode[this.state.place]}
            />
            <p className="apt_temp">
              Feels like{" "}
              <span>
                {this.props.apt_temp[this.state.place]}
                <span>°C</span>
              </span>
            </p>
            <Wind
              title="Wind : "
              arsize={21}
              className="curr_wind"
              angle={this.props.WindDir[this.state.place]}
              speed={this.props.WindSp[this.state.place]}
            />
          </div>
        ) : null}
      </div>
    );
  }
}

export default CurrentWeather;
