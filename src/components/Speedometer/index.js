import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state

    if (count <= 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state

    if (count >= 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="heading"> SPEEDOMETER </h1>
        </div>
        <div className="next-container">
          <h1 className="sub-heading">Speed is {count}mph</h1>
          <img
            alt="speedometer"
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          />
          <p className="paragraph"> Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="buttons-container">
            <button
              className="button1"
              type="button"
              onClick={this.onIncrement}
            >
              Accelerate
            </button>
            <button
              className="button2"
              type="button"
              onClick={this.onDecrement}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
