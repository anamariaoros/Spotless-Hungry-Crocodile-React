import React from 'react'

import PropTypes from 'prop-types'

import './hero8.css'

const Hero8 = (props) => {
  return (
    <div className="hero8-header26 thq-section-padding">
      <div className="hero8-max-width thq-flex-column thq-section-max-width">
        <div className="hero8-column">
          <div className="hero8-content">
            <h1>
              {props.heading1 ?? (
                <fragment>
                  <span className="hero8-text6 thq-heading-1">
                    Welcome to our Contact Information Website
                  </span>
                </fragment>
              )}
            </h1>
            <p>
              {props.content1 ?? (
                <fragment>
                  <span className="hero8-text4 thq-body-large">
                    Find all the contact details you need to reach out to us
                  </span>
                </fragment>
              )}
            </p>
            <div className="hero8-actions">
              <button className="thq-button-filled hero8-button">
                <span>
                  {props.action1 ?? (
                    <fragment>
                      <span className="thq-body-small">Contact Us</span>
                    </fragment>
                  )}
                </span>
              </button>
              <button className="thq-button-outline hero8-button1">
                <span>
                  {props.action2 ?? (
                    <fragment>
                      <span className="thq-body-small">Learn More</span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
        <img
          alt={props.image1Alt}
          src={props.image1Src}
          className="thq-img-ratio-16-9"
        />
      </div>
    </div>
  )
}

Hero8.defaultProps = {
  image1Alt: 'Image',
  content1: undefined,
  action2: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=1400',
  heading1: undefined,
  action1: undefined,
}

Hero8.propTypes = {
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
  action2: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  action1: PropTypes.element,
}

export default Hero8
