import React, {Component} from 'react'

export default class DigitalClicker extends Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  clickHandler = () => {
    this.setState(before => ({
      timesClicked: before.timesClicked + 1
    }))
  }

  render(){
    return(
      <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
    )
  }
}
