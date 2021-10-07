// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Header from '../Header'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
            alt="home"
          />
        </Link>
      </div>
    )
  }
}

export default Home
