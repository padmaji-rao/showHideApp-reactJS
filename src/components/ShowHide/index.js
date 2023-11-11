import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirstHidden: true, isSecondHidden: true}

  onFirstName = () => {
    this.setState(prevState => ({isFirstHidden: !prevState.isFirstHidden}))
  }

  onSecondName = () => {
    this.setState(prevState => ({isSecondHidden: !prevState.isSecondHidden}))
  }

  render() {
    const {isFirstHidden, isSecondHidden} = this.state
    let firstShow
    let secondShow
    if (isFirstHidden === false) {
      firstShow = (
        <div className="in-frame">
          <p>Joe</p>
        </div>
      )
    } else {
      firstShow = null
    }
    if (isSecondHidden === false) {
      secondShow = (
        <div className="in-frame">
          <p>Jonas</p>
        </div>
      )
    } else {
      secondShow = null
    }

    return (
      <div className="bg-container">
        <h1 className="head">Show/Hide</h1>
        <div className="frames-container">
          <div className="frame-container">
            <button
              onClick={this.onFirstName}
              className="frame-button"
              type="button"
            >
              Show/Hide Firstname
            </button>
            {firstShow}
          </div>
          <div className="frame-container">
            <button
              onClick={this.onSecondName}
              className="frame-button"
              type="button"
            >
              Show/Hide Lastname
            </button>
            {secondShow}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
