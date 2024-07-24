import React from 'react'

import PropTypes from 'prop-types'

import './contact7.css'

const Contact7 = (props) => {
  return (
    <div className="contact7-container thq-section-padding">
      <div className="contact7-max-width thq-section-max-width">
        <div className="contact7-content thq-flex-row">
          <div className="contact7-content1">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="thq-heading-2">Contact Us</span>
                </fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <fragment>
                  <span className="thq-body-large">
                    123 Main Street, City Name, Country
                  </span>
                </fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact7-content2 thq-flex-row">
          <div className="contact7-container1">
            <img
              alt={props.location1ImgAlt}
              src={props.location1ImgSrc}
              className="contact7-image thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <fragment>
                  <span className="contact7-text10 thq-heading-3">
                    Main Office
                  </span>
                </fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <fragment>
                  <span className="thq-body-large">
                    Our main office is located in the heart of the city. Feel
                    free to visit us during office hours.
                  </span>
                </fragment>
              )}
            </p>
            <div className="contact7-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact7-container3">
            <img
              alt={props.location2ImgAlt}
              src={props.location2ImgSrc}
              className="contact7-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <fragment>
                  <span className="contact7-text06 thq-heading-3">
                    Customer Support
                  </span>
                </fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <fragment>
                  <span className="thq-body-large">
                    Our customer support team is available to assist you with
                    any inquiries or issues.
                  </span>
                </fragment>
              )}
            </p>
            <div className="contact7-container4">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact7.defaultProps = {
  location2ImgAlt: 'image2Alt',
  location2: undefined,
  location1ImgSrc:
    'https://images.unsplash.com/photo-1574616979112-f9f52d3747f8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGJ1Y2hhcmVzdHxlbnwwfHx8fDE3MjExNDQ1MTR8MA&ixlib=rb-4.0.3&w=1400',
  location1ImgAlt: 'image1Alt',
  content1: undefined,
  location2Description: undefined,
  location1Description: undefined,
  location2ImgSrc:
    'https://images.unsplash.com/photo-1618826524225-439b385bb1c3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGNsdWp8ZW58MHx8fHwxNzIxMTQ0NTI0fDA&ixlib=rb-4.0.3&w=1400',
  location1: undefined,
  heading1: undefined,
}

Contact7.propTypes = {
  location2ImgAlt: PropTypes.string,
  location2: PropTypes.element,
  location1ImgSrc: PropTypes.string,
  location1ImgAlt: PropTypes.string,
  content1: PropTypes.element,
  location2Description: PropTypes.element,
  location1Description: PropTypes.element,
  location2ImgSrc: PropTypes.string,
  location1: PropTypes.element,
  heading1: PropTypes.element,
}

export default Contact7
