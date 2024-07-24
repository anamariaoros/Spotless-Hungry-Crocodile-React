import React from 'react'

import PropTypes from 'prop-types'

import './stats2.css'

const Stats2 = (props) => {
  return (
    <div className="stats2-container thq-section-padding">
      <div className="stats2-max-width thq-section-max-width">
        <div className="stats2-container1 thq-flex-column">
          <img
            alt={props.image1Alt}
            src={props.image1Src}
            className="thq-img-ratio-1-1 stats2-image"
          />
        </div>
        <div className="stats2-container2 thq-flex-column">
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="thq-body-small">info@example.com</span>
              </fragment>
            )}
          </span>
          <h2>
            {props.heading1 ?? (
              <fragment>
                <span className="thq-heading-2">Contact Information</span>
              </fragment>
            )}
          </h2>
          <p>
            {props.content2 ?? (
              <fragment>
                <span className="thq-body-large">support@example.com</span>
              </fragment>
            )}
          </p>
          <div className="stats2-container3 thq-grid-2">
            <div className="stats2-container4">
              <h2>
                {props.stat1 ?? (
                  <fragment>
                    <span className="thq-heading-2">Email</span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.stat1Description ?? (
                  <fragment>
                    <span className="thq-body-small">
                      Reach out to us via email.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="stats2-container5">
              <h2>
                {props.stat2 ?? (
                  <fragment>
                    <span className="thq-heading-2">+1234567890</span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.stat2Description ?? (
                  <fragment>
                    <span className="thq-body-small">
                      Contact us via email for general inquiries.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div className="stats2-container6 thq-grid-2">
            <div className="stats2-container7">
              <h2>
                {props.stat3 ?? (
                  <fragment>
                    <span className="thq-heading-2">Phone Number</span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.stat3Description ?? (
                  <fragment>
                    <span className="thq-body-small">
                      Call us for immediate assistance.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="stats2-container8">
              <h2>
                {props.stat4 ?? (
                  <fragment>
                    <span className="thq-heading-2">Office Address</span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.stat4Description ?? (
                  <fragment>
                    <span className="thq-body-small">
                      Visit our office during working hours.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats2.defaultProps = {
  stat1: undefined,
  content1: undefined,
  content2: undefined,
  image1Alt: 'image',
  stat3: undefined,
  stat4: undefined,
  stat2Description: undefined,
  image1Src:
    'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxzdGF0aXN0aWNzfGVufDB8fHx8MTcxNjUzNjcxNXww&ixlib=rb-4.0.3&w=700',
  heading1: undefined,
  stat4Description: undefined,
  stat2: undefined,
  stat3Description: undefined,
  stat1Description: undefined,
}

Stats2.propTypes = {
  stat1: PropTypes.element,
  content1: PropTypes.element,
  content2: PropTypes.element,
  image1Alt: PropTypes.string,
  stat3: PropTypes.element,
  stat4: PropTypes.element,
  stat2Description: PropTypes.element,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
  stat4Description: PropTypes.element,
  stat2: PropTypes.element,
  stat3Description: PropTypes.element,
  stat1Description: PropTypes.element,
}

export default Stats2
