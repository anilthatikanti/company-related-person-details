// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {listNum: 0}

  increase = () => {
    this.setState(prevState => ({
      listNum: prevState.listNum + 1,
    }))
  }

  decrease = () => {
    const {listNum} = this.state
    if (listNum > 0) {
      this.setState(prevState => ({
        listNum: prevState.listNum - 1,
      }))
    }
  }

  render() {
    const {listNum} = this.state
    const {reviewsList} = this.props
    const item = reviewsList[listNum]

    return (
      <div className="container">
        <h1>Reviews</h1>
        <div className="card">
          <button
            className="btn"
            testid="leftArrow"
            type="button"
            onClick={this.decrease}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="person">
            <img src={item.imgUrl} alt={item.username} />
            <p className="personName">{item.username}</p>
            <p>{item.companyName}</p>
            <p>{item.description}</p>
          </div>
          <button
            className="btn"
            testid="rightArrow"
            type="button"
            onClick={this.increase}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
