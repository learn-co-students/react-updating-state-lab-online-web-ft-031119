import React, { Component } from "react";

class DigitalClicker extends Component {
  state = {
    timesClicked: 0
  };

  handleIncrement = () => {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  };

  render() {
    return (
      <button onClick={this.handleIncrement}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
