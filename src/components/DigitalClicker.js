// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class DigitalClicker extends Component{
  constructor() {
    super();
    this.state = {
      timesClicked: 0
    };
  }

  handleClick = () => {
    // const count = this.state.timesClicked;
    // this.setState({
    //   timesClicked: count + 1
    // })
    this.setState(prevState => ({
      timesClicked: prevState.timesClicked+1
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    )
  }
}
