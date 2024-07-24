import React from 'react'

import PropTypes from 'prop-types'

import './testimonial18.css'

const Testimonial18 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial18-max-width thq-section-max-width">
        <div className="testimonial18-container thq-grid-2">
          <div className="testimonial18-section-title">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="thq-heading-2">Client Testimonials</span>
                </fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <fragment>
                  <span className="thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </span>
                </fragment>
              )}
            </p>
            <div className="testimonial18-container1">
              <button
                type="button"
                className="thq-button-filled testimonial18-button"
              >
                <span>
                  {props.action1 ?? (
                    <fragment>
                      <span>Primary action</span>
                    </fragment>
                  )}
                </span>
              </button>
              <button
                type="button"
                className="thq-button-outline testimonial18-button1"
              >
                <span>
                  {props.action2 ?? (
                    <fragment>
                      <span>Secondary action</span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div className="testimonial18-content">
            <div className="testimonial18-column thq-card">
              <div className="testimonial18-stars">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span>
                {props.review1 ?? (
                  <fragment>
                    <span className="testimonial18-text20 thq-body-small">
                      I have been using their services for years and I am always
                      impressed by their professionalism and efficiency.
                    </span>
                  </fragment>
                )}
              </span>
              <div className="testimonial18-avatar">
                <img
                  alt={props.author1Alt}
                  src={props.author1Src}
                  className="testimonial18-avatar-image thq-img-round thq-img-ratio-1-1"
                />
                <div className="testimonial18-avatar-content">
                  <span>
                    {props.author1Name ?? (
                      <fragment>
                        <span className="testimonial18-text13 thq-body-small">
                          John Doe
                        </span>
                      </fragment>
                    )}
                  </span>
                  <span>
                    {props.author1Position ?? (
                      <fragment>
                        <span className="testimonial18-text22 thq-body-small">
                          CEO, Company ABC
                        </span>
                      </fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial18-column1 thq-card">
              <div className="testimonial18-stars1">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span>
                {props.review2 ?? (
                  <fragment>
                    <span className="testimonial18-text17 thq-body-small">
                      The team at this company goes above and beyond to meet our
                      needs. Highly recommended!
                    </span>
                  </fragment>
                )}
              </span>
              <div className="testimonial18-avatar1">
                <img
                  alt={props.author2Alt}
                  src={props.author2Src}
                  className="testimonial18-avatar-image1 thq-img-round thq-img-ratio-1-1"
                />
                <div className="testimonial18-avatar-content1">
                  <span>
                    {props.author2 ?? (
                      <fragment>
                        <span className="testimonial18-text21 thq-body-small">
                          Jane Smith
                        </span>
                      </fragment>
                    )}
                  </span>
                  <span>
                    {props.author2Position ?? (
                      <fragment>
                        <span className="testimonial18-text14 thq-body-small">
                          Marketing Manager, XYZ Inc.
                        </span>
                      </fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial18-column2 thq-card">
              <div className="testimonial18-stars2">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span>
                {props.review3 ?? (
                  <fragment>
                    <span className="testimonial18-text23 thq-body-small">
                      Working with them has been a game-changer for our
                      business. Their expertise is unmatched.
                    </span>
                  </fragment>
                )}
              </span>
              <div className="testimonial18-avatar2">
                <img
                  alt={props.author3Alt}
                  src={props.author3Src}
                  className="testimonial18-avatar-image2 thq-img-round thq-img-ratio-1-1"
                />
                <div className="testimonial18-avatar-content2">
                  <span>
                    {props.author3 ?? (
                      <fragment>
                        <span className="testimonial18-text26 thq-body-small">
                          Michael Johnson
                        </span>
                      </fragment>
                    )}
                  </span>
                  <span>
                    {props.author3Position ?? (
                      <fragment>
                        <span className="testimonial18-text18 thq-body-small">
                          Founder, Startup Co.
                        </span>
                      </fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="testimonial18-column3 thq-card">
              <div className="testimonial18-stars3">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span>
                {props.review4 ?? (
                  <fragment>
                    <span className="testimonial18-text27 thq-body-small">
                      I appreciate the dedication and attention to detail they
                      put into every project. Truly exceptional service.
                    </span>
                  </fragment>
                )}
              </span>
              <div className="testimonial18-avatar3">
                <img
                  alt={props.author4Alt}
                  src={props.author4Src}
                  className="testimonial18-author4 thq-img-round thq-img-ratio-1-1"
                />
                <div className="testimonial18-avatar-content3">
                  <span>
                    {props.author4 ?? (
                      <fragment>
                        <span className="testimonial18-text19 thq-body-small">
                          Sarah Williams
                        </span>
                      </fragment>
                    )}
                  </span>
                  <span>
                    {props.author4Position ?? (
                      <fragment>
                        <span className="testimonial18-text25 thq-body-small">
                          Creative Director, Design Studio
                        </span>
                      </fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial18.defaultProps = {
  action1: undefined,
  author1Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=1400',
  author2Position: undefined,
  content1: undefined,
  action2: undefined,
  review2: undefined,
  author3Alt: 'Author Avatar',
  author3Position: undefined,
  author4: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400',
  review1: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxhdmF0YXJ8ZW58MHx8fHwxNzE2NTM3MjQ5fDA&ixlib=rb-4.0.3&w=1400',
  author2: undefined,
  author4Alt: 'Author Avatar',
  author1Alt: 'Author Avatar',
  author1Position: undefined,
  review3: undefined,
  heading1: undefined,
  author4Position: undefined,
  author3: undefined,
  review4: undefined,
  author2Alt: 'Author Avatar',
  author3Src:
    'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=1400',
}

Testimonial18.propTypes = {
  action1: PropTypes.element,
  author1Name: PropTypes.element,
  author2Src: PropTypes.string,
  author2Position: PropTypes.element,
  content1: PropTypes.element,
  action2: PropTypes.element,
  review2: PropTypes.element,
  author3Alt: PropTypes.string,
  author3Position: PropTypes.element,
  author4: PropTypes.element,
  author1Src: PropTypes.string,
  review1: PropTypes.element,
  author4Src: PropTypes.string,
  author2: PropTypes.element,
  author4Alt: PropTypes.string,
  author1Alt: PropTypes.string,
  author1Position: PropTypes.element,
  review3: PropTypes.element,
  heading1: PropTypes.element,
  author4Position: PropTypes.element,
  author3: PropTypes.element,
  review4: PropTypes.element,
  author2Alt: PropTypes.string,
  author3Src: PropTypes.string,
}

export default Testimonial18
