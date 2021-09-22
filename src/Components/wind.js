import React, { Component } from "react";

class Wind extends Component {
  static defaultProps = {
    direction: [
      "up",
      "up-right-arrow",
      "right",
      "down-right-arrow",
      "down",
      "down-left-arrow",
      "left",
      "up-left-arrow",
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      direc: "",
    };
  }
  componentDidMount() {
    let tempdirec = this.props.angle;
    if (tempdirec >= 348.75 || tempdirec < 33.75) {
      this.setState({ direc: this.props.direction[0] });
    } else if (tempdirec >= 33.75 && tempdirec < 78.75) {
      this.setState({ direc: this.props.direction[1] });
    } else if (tempdirec >= 78.75 && tempdirec < 123.75) {
      this.setState({ direc: this.props.direction[2] });
    } else if (tempdirec >= 123.75 && tempdirec < 168.75) {
      this.setState({ direc: this.props.direction[3] });
    } else if (tempdirec >= 168.75 && tempdirec < 213.75) {
      this.setState({ direc: this.props.direction[4] });
    } else if (tempdirec >= 213.75 && tempdirec < 256.75) {
      this.setState({ direc: this.props.direction[5] });
    } else if (tempdirec >= 256.75 && tempdirec < 303.75) {
      this.setState({ direc: this.props.direction[6] });
    } else if (tempdirec >= 303.75 && tempdirec < 348.75) {
      this.setState({ direc: this.props.direction[7] });
    }
  }
  render() {
    return (
      <div className={this.props.className}>
        <p>
          {this.props.title}
          <span>
            {this.props.speed}
            <span> Km/h </span>
            <img
              alt="direction"
              src={`https://img.icons8.com/color/${this.props.arsize}/000000/${this.state.direc}--v1.png`}
            />
          </span>
        </p>
      </div>
    );
  }
}

export default Wind;
