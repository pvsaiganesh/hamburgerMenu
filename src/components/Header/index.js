// Write your code here
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import 'reactjs-popup/dist/index.css'
import {Para} from './styledComponents'
import './index.css'

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      modal
      trigger={
        <button
          type="button"
          className="trigger-button"
          data-testid="hamburgerIconButton"
        >
          <GiHamburgerMenu />
        </button>
      }
    >
      {close => (
        <>
          <ul>
            <Link to="/">
              <li>
                <AiFillHome />
                <Para>Home</Para>
              </li>
            </Link>
            <Link to="/about">
              <li>
                <BsInfoCircleFill />
                <Para>About</Para>
              </li>
            </Link>
          </ul>
          <button
            type="button"
            className="trigger-button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose />
          </button>
        </>
      )}
    </Popup>
  </div>
)

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
            alt="website logo"
          />
        </Link>
        {ReactPopUp()}
      </div>
    )
  }
}

export default Header
