import React from 'react'
import { Link } from 'gatsby'
import './styles.sass'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top mediumnavigation"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="logo" title="Logo">
              <span className="txt-logo">Dan Blog's</span>
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered navbar-font">
                
              <Link className="navbar-item" to="/blog">
                  Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                  Chuyện của dev
              </Link>
              <div className="navbar-item has-dropdown is-hoverable is-boxed">
                <a className="navbar-link">
                  Self
                </a>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/products">
                    Products
                  </Link>
                  <Link className="navbar-item" to="/products">
                    Book & Resource
                  </Link>
                  <Link className="navbar-item" to="/products">
                    Project
                  </Link>
                
                </div>
                
              </div>
              <Link className="navbar-item" to="/about">
                About me
              </Link>
                   
            
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
