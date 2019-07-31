// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }

  incrementOnClick = () => {
    let newCount = this.state.timesClicked += 1
    this.setState({
      timesClicked: newCount
    })

  }


  render() {
    return(
      <div>
        <button onClick={this.incrementOnClick}>
          {this.state.timesClicked}
        </button>
      </div>
    )
  }
}
