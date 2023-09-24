// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  randomFunction = () => {
    const newNum = Math.ceil(Math.random() * 100)
    this.setState({number: newNum})
  }

  render() {
    const {number} = this.state

    return (
      <div className="app-container">
        <div className="sub-container">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="style-button"
            onClick={this.randomFunction}
          >
            Generate
          </button>
          <p className="theDigit">{number}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
