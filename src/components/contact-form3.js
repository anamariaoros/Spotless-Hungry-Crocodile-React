import React from 'react'

import PropTypes from 'prop-types'

import './contact-form3.css'

const ContactForm3 = (props) => {
  return (
    <div className="contact-form3-contact9 thq-section-padding">
      <div className="thq-section-max-width thq-flex-row contact-form3-max-width">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="contact-form3-image1 thq-img-ratio-4-3"
        />
        <div className="contact-form3-content thq-flex-column">
          <div className="contact-form3-section-title thq-card">
            <span>
              {props.content2 ?? (
                <fragment>
                  <span className="thq-body-small">Get in touch with us</span>
                </fragment>
              )}
            </span>
            <div className="contact-form3-content1">
              <h2>
                {props.heading1 ?? (
                  <fragment>
                    <span className="thq-heading-2">Contact us</span>
                  </fragment>
                )}
              </h2>
              <span>
                {props.content1 ?? (
                  <fragment>
                    <span className="thq-body-small">
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <form className="thq-card">
            <div className="contact-form3-input">
              <label htmlFor="contact-form-3-name" className="thq-body-small">
                Name
              </label>
              <input
                type="text"
                id="contact-form-3-name"
                placeholder="Name"
                className="thq-input"
              />
            </div>
            <div className="contact-form3-input1">
              <label htmlFor="contact-form-3-email" className="thq-body-small">
                Email
              </label>
              <input
                type="email"
                id="contact-form-3-email"
                required="true"
                placeholder="Email"
                className="thq-input"
              />
            </div>
            <div className="contact-form3-container">
              <label
                htmlFor="contact-form-3-message"
                className="thq-body-small"
              >
                Message
              </label>
              <textarea
                id="contact-form-3-message"
                rows="3"
                placeholder="Enter your message"
                className="thq-input"
              ></textarea>
            </div>
            <div className="contact-form3-checkbox">
              <input
                type="checkbox"
                id="contact-form-3-check"
                checked="true"
                required="true"
                className="thq-checkbox"
              />
              <label
                htmlFor="contact-form-3-check"
                className="contact-form3-text06 thq-body-small"
              >
                I accept the Terms
              </label>
            </div>
            <button
              type="submit"
              className="contact-form3-button thq-button-filled"
            >
              <span>
                {props.action ?? (
                  <fragment>
                    <span className="thq-body-small">Submit</span>
                  </fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm3.defaultProps = {
  content2: undefined,
  action: undefined,
  content1: undefined,
  imageAlt: 'Image1',
  imageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=700',
  heading1: undefined,
}

ContactForm3.propTypes = {
  content2: PropTypes.element,
  action: PropTypes.element,
  content1: PropTypes.element,
  imageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  heading1: PropTypes.element,
}

export default ContactForm3
