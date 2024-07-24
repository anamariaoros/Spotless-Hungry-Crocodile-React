import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  return (
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span>
              {props.slogan ?? (
                <fragment>
                  <span className="thq-body-small">
                    Efficient Solutions for Your Needs
                  </span>
                </fragment>
              )}
            </span>
            <h2>
              {props.sectionTitle ?? (
                <fragment>
                  <span className="thq-heading-2 features1-text13">
                    Features
                  </span>
                </fragment>
              )}
            </h2>
          </div>
          <span>
            {props.sectionDescription ?? (
              <fragment>
                <span className="thq-body-small">
                  Explore the key features of our services
                </span>
              </fragment>
            )}
          </span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3>
                  {props.feature1Title ?? (
                    <fragment>
                      <span className="thq-heading-3">
                        24/7 Customer Support
                      </span>
                    </fragment>
                  )}
                </h3>
                <span>
                  {props.feature1Description ?? (
                    <fragment>
                      <span className="thq-body-small">
                        Our dedicated team is available round the clock to
                        assist you with any inquiries or issues.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3>
                  {props.feature2Title ?? (
                    <fragment>
                      <span className="thq-heading-3">Fast Response Time</span>
                    </fragment>
                  )}
                </h3>
                <span>
                  {props.feature2Description ?? (
                    <fragment>
                      <span className="thq-body-small">
                        We prioritize quick responses to ensure your questions
                        are addressed promptly.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3>
                  {props.feature3Title ?? (
                    <fragment>
                      <span className="thq-heading-3">
                        Professional Consultation
                      </span>
                    </fragment>
                  )}
                </h3>
                <span>
                  {props.feature3Description ?? (
                    <fragment>
                      <span className="thq-body-small">
                        Receive expert advice and guidance from our experienced
                        consultants to optimize your experience.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <button className="thq-button-filled features1-button">
            <span>
              {props.mainAction ?? (
                <fragment>
                  <span className="thq-body-small">Contact Us Now</span>
                </fragment>
              )}
            </span>
          </button>
          <button className="thq-button-outline features1-button1">
            <span>
              {props.secondaryAction ?? (
                <fragment>
                  <span className="thq-body-small">Learn More</span>
                </fragment>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  mainAction: undefined,
  feature2Title: undefined,
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1563089145-599997674d42?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDR8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&h=300',
  feature1Title: undefined,
  feature2ImageAlt: 'PlaceholderImage1314',
  feature1Description: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&h=300',
  slogan: undefined,
  feature3Title: undefined,
  feature3Description: undefined,
  feature3ImageAlt: 'PlaceholderImage1314',
  feature1ImageAlt: 'PlaceholderImage1314',
  sectionDescription: undefined,
  secondaryAction: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=1400',
  feature2Description: undefined,
  sectionTitle: undefined,
}

Features1.propTypes = {
  mainAction: PropTypes.element,
  feature2Title: PropTypes.element,
  feature2ImageSrc: PropTypes.string,
  feature1Title: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  slogan: PropTypes.element,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  sectionDescription: PropTypes.element,
  secondaryAction: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  sectionTitle: PropTypes.element,
}

export default Features1
