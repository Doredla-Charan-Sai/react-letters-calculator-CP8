// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onCount = event => {
    this.setState({count: event.target.value.length})
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-cont">
        <div className="content-cont">
          <div className="text-cont">
            <h1 className="main-head">Calculate the Letters you enter</h1>
            <div>
              <label htmlFor="text" className="input-label">
                Enter the phrase
              </label>
            </div>
            <input
              id="text"
              type="text"
              onChange={this.onCount}
              placeholder="Enter the phrase"
              className="input"
            />

            <p className="main-para">No.of letters: {count}</p>
          </div>
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
