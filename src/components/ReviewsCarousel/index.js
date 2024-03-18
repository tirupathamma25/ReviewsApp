import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    number: 0,
  }

  onClickIncrement = () => {
    const {number} = this.state
    if (number > 0) {
      this.setState(prevState => ({number: prevState.number - 1}))
    }
  }

  onClickDecrement = () => {
    const {number} = this.state
    if (number < 3) {
      this.setState(prevState => ({number: prevState.number + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {number} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[number]
    return (
      <div className="container">
        <h1 className="heading">Reviews</h1>
        <div className="card">
          <button
            type="button"
            onClick={this.onClickIncrement}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>

          <div className="review-info">
            <img src={imgUrl} alt={username} className="imgUrl" />
            <p className="username">{username}</p>
            <p className="companyName">{companyName}</p>
            <p className="description">{description}</p>
          </div>
          <button
            type="button"
            onClick={this.onClickDecrement}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
