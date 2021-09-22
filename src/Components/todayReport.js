import React, { Component } from "react";
import Wind from "./wind";
import WeatherType from "./weatherType";
import "./weather.css";

class TodayReport extends Component {
  static defaultProps = {
    date: `${new Date().toLocaleDateString("en-ca")}`,
  };
  state = {
    todayData: [],
  };
  componentDidMount() {
    let tempdate = this.props.time.filter((e) => {
      return e.split("T")[0] === this.props.date;
    });
    this.setState({ todayData: tempdate });
  }
  render() {
    return (
      <div className="todays_report">
        {this.state.todayData.length !== 0
          ? this.state.todayData.map((data) => {
              return (
                <div className="hourly_report">
                  <WeatherType
                    className="todays_weath_type"
                    size={38}
                    weathCode={this.props.Wcode[this.props.time.indexOf(data)]}
                  />
                  <div>
                    <p className="nor_temp">
                      {this.props.temp[this.props.time.indexOf(data)]}
                      <span>°C</span>
                    </p>
                    <p className="ap_temp">
                      {this.props.apt_temp[this.props.time.indexOf(data)]}
                      <span>°C</span>
                    </p>
                  </div>
                  <Wind
                    title="🎐"
                    arsize={17}
                    className="todays_wind"
                    angle={this.props.WindDir[this.props.time.indexOf(data)]}
                    speed={this.props.WindSp[this.props.time.indexOf(data)]}
                  />
                  <p className="time">{data.split("T")[1]}</p>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default TodayReport;
