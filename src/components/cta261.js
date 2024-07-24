import React from 'react'

import PropTypes from 'prop-types'

import './cta261.css'

const CTA261 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta261-accent2-bg">
          <div className="cta261-accent1-bg">
            <div className="cta261-container1">
              <div className="cta261-content">
                <span>
                  {props.heading1 ?? (
                    <fragment>
                      <span className="thq-heading-2">Contact Us</span>
                    </fragment>
                  )}
                </span>
                <p>
                  {props.content1 ?? (
                    <fragment>
                      <span className="thq-body-large">
                        Reach out to us for any inquiries or assistance.
                      </span>
                    </fragment>
                  )}
                </p>
              </div>
              <div className="cta261-actions">
                <button
                  type="button"
                  className="thq-button-filled cta261-button"
                >
                  <span>
                    {props.action1 ?? (
                      <fragment>
                        <span>Get in Touch</span>
                      </fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA261.defaultProps = {
  heading1: undefined,
  content1: undefined,
  action1: undefined,
}

CTA261.propTypes = {
  heading1: PropTypes.element,
  content1: PropTypes.element,
  action1: PropTypes.element,
}

export default CTA261
