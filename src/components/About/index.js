// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link to="/about">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
            alt="about"
          />
        </Link>
      </div>
    )
  }
}

export default About
