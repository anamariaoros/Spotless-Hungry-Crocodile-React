import React from 'react'

import PropTypes from 'prop-types'

import './navbar41.css'

const Navbar41 = (props) => {
  return (
    <header className="navbar41-container">
      <header data-thq="thq-navbar" className="navbar41-navbar-interactive">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar41-image1"
        />
        <div data-thq="thq-navbar-nav" className="navbar41-desktop-menu">
          <nav className="navbar41-links">
            <a href={props.link1Url} className="navbar41-link1">
              {props.link1 ?? (
                <fragment>
                  <span className="thq-link thq-body-small">Home</span>
                </fragment>
              )}
            </a>
            <a href={props.link2Url} className="navbar41-link2">
              {props.link2 ?? (
                <fragment>
                  <span className="thq-link thq-body-small">Services</span>
                </fragment>
              )}
            </a>
            <a href={props.link3Url} className="navbar41-link3">
              {props.link3 ?? (
                <fragment>
                  <span className="thq-link thq-body-small">About Us</span>
                </fragment>
              )}
            </a>
            <a href={props.link4Url} className="navbar41-link4">
              {props.link4 ?? (
                <fragment>
                  <span className="thq-link thq-body-small">Blog</span>
                </fragment>
              )}
            </a>
            <a href={props.link5Url} className="navbar41-link5">
              {props.link5 ?? (
                <fragment>
                  <span className="thq-link thq-body-small">Contact</span>
                </fragment>
              )}
            </a>
          </nav>
          <div className="navbar41-buttons">
            <button className="navbar41-action1 thq-button-animated thq-button-filled">
              <span className="thq-body-small">Action 1</span>
            </button>
            <button className="navbar41-action2 thq-button-outline thq-button-animated">
              <span className="thq-body-small">Action 2</span>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar41-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar41-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar41-mobile-menu">
          <div className="navbar41-nav">
            <div className="navbar41-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar41-logo"
              />
              <div data-thq="thq-close-menu" className="navbar41-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar41-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar41-links1">
              <a href={props.link1Url}>
                {props.link1 ?? (
                  <fragment>
                    <span className="thq-link thq-body-small">Home</span>
                  </fragment>
                )}
              </a>
              <a href={props.link2Url}>
                {props.link2 ?? (
                  <fragment>
                    <span className="thq-link thq-body-small">Services</span>
                  </fragment>
                )}
              </a>
              <a href={props.link3Url}>
                {props.link3 ?? (
                  <fragment>
                    <span className="thq-link thq-body-small">About Us</span>
                  </fragment>
                )}
              </a>
              <a href={props.link4Url}>
                {props.link4 ?? (
                  <fragment>
                    <span className="thq-link thq-body-small">Blog</span>
                  </fragment>
                )}
              </a>
              <a href={props.link5Url}>
                {props.link5 ?? (
                  <fragment>
                    <span className="thq-link thq-body-small">Contact</span>
                  </fragment>
                )}
              </a>
            </nav>
          </div>
          <div className="navbar41-buttons1">
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar41.defaultProps = {
  link1: undefined,
  link2Url: 'https://www.teleporthq.io',
  link5: undefined,
  link1Url: 'https://www.teleporthq.io',
  link2: undefined,
  link3Url: 'https://www.teleporthq.io',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  logoAlt: 'logo',
  link3: undefined,
  link5Url: 'https://www.teleporthq.io',
  link4Url: 'https://www.teleporthq.io',
  link4: undefined,
}

Navbar41.propTypes = {
  link1: PropTypes.element,
  link2Url: PropTypes.string,
  link5: PropTypes.element,
  link1Url: PropTypes.string,
  link2: PropTypes.element,
  link3Url: PropTypes.string,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  link3: PropTypes.element,
  link5Url: PropTypes.string,
  link4Url: PropTypes.string,
  link4: PropTypes.element,
}

export default Navbar41
