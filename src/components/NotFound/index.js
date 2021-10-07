// Write your code here
import {Component} from 'react'
import {Link} from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <Link to="/bad-path">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
          />
          <h1>Lost Your Way?</h1>
          <p>
            Sorry, we can’t find that page. You’ll find lots to explore on the
            home page
          </p>
        </div>
      </Link>
    )
  }
}

export default NotFound
