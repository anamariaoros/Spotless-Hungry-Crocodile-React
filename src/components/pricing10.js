import React from 'react'

import PropTypes from 'prop-types'

import './pricing10.css'

const Pricing10 = (props) => {
  return (
    <div className="pricing10-pricing23 thq-section-padding">
      <div className="pricing10-max-width thq-section-max-width">
        <div className="pricing10-section-title">
          <div className="pricing10-content">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="pricing10-text59 thq-heading-2">
                    Choose the plan that suits you best
                  </span>
                </fragment>
              )}
            </h2>
            <p>
              {props.subtitle1 ?? (
                <fragment>
                  <span className="pricing10-text41 thq-body-large">
                    <span>
                      All plans come with a 30-day money-back guarantee
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
            </p>
          </div>
        </div>
        <div className="pricing10-content1">
          <div className="pricing10-container"></div>
          <div className="pricing10-column1">
            <div className="pricing10-price">
              <div className="pricing10-price1">
                <p>
                  {props.plan1 ?? (
                    <fragment>
                      <span className="pricing10-text60 thq-body-large">
                        Basic Plan
                      </span>
                    </fragment>
                  )}
                </p>
                <h3>
                  {props.plan1Price ?? (
                    <fragment>
                      <span className="pricing10-text49 thq-heading-3">
                        $10/month
                      </span>
                    </fragment>
                  )}
                </h3>
                <p>
                  {props.plan1Yearly ?? (
                    <fragment>
                      <span className="pricing10-text45 thq-body-large">
                        $100/year
                      </span>
                    </fragment>
                  )}
                </p>
              </div>
            </div>
            <button className="pricing10-button thq-button-outline thq-button-animated">
              <span>
                {props.plan1Action ?? (
                  <fragment>
                    <span className="thq-body-small">Sign Up Now</span>
                  </fragment>
                )}
              </span>
            </button>
          </div>
          <div className="pricing10-column2">
            <div className="pricing10-price2">
              <div className="pricing10-price3">
                <p>
                  {props.plan2 ?? (
                    <fragment>
                      <span className="pricing10-text65 thq-body-large">
                        Business
                      </span>
                    </fragment>
                  )}
                </p>
                <h3>
                  {props.plan2Price ?? (
                    <fragment>
                      <span className="pricing10-text52 thq-heading-3">
                        $20/mo
                      </span>
                    </fragment>
                  )}
                </h3>
                <p>
                  {props.plan2Yearly ?? (
                    <fragment>
                      <span className="pricing10-text32 thq-body-large">
                        or $200 yearly
                      </span>
                    </fragment>
                  )}
                </p>
              </div>
            </div>
            <button className="pricing10-button1 thq-button-animated thq-button-filled">
              <span>
                {props.plan2Action ?? (
                  <fragment>
                    <span className="thq-body-small">Get started</span>
                  </fragment>
                )}
              </span>
            </button>
          </div>
          <div className="pricing10-column3">
            <div className="pricing10-price4">
              <div className="pricing10-price5">
                <p>
                  {props.plan3 ?? (
                    <fragment>
                      <span className="pricing10-text50 thq-body-large">
                        Enterprise
                      </span>
                    </fragment>
                  )}
                </p>
                <h3>
                  {props.plan3Price ?? (
                    <fragment>
                      <span className="pricing10-text51 thq-heading-3">
                        $20/mo
                      </span>
                    </fragment>
                  )}
                </h3>
                <p>
                  {props.plan3Yearly ?? (
                    <fragment>
                      <span className="pricing10-text48 thq-body-large">
                        or $200 yearly
                      </span>
                    </fragment>
                  )}
                </p>
              </div>
            </div>
            <button className="pricing10-button2 thq-button-animated thq-button-filled">
              <span>
                {props.plan1Action11 ?? (
                  <fragment>
                    <span className="thq-body-small">Upgrade Now</span>
                  </fragment>
                )}
              </span>
            </button>
          </div>
        </div>
        <div className="pricing10-container01">
          <div className="pricing10-content2">
            <h3>
              {props.featureCategory1 ?? (
                <fragment>
                  <span className="thq-heading-3">Features</span>
                </fragment>
              )}
            </h3>
          </div>
          <div className="pricing10-container02">
            <div className="pricing10-container03">
              <span>
                {props.feature1 ?? (
                  <fragment>
                    <span className="thq-body-small">Feature 1</span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="pricing10-container04">
              <span>
                {props.count1 ?? (
                  <fragment>
                    <span className="pricing10-text63 thq-body-small">10</span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="pricing10-container05">
              <span>
                {props.count2 ?? (
                  <fragment>
                    <span className="thq-body-small">20</span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="pricing10-container06">
              <span>
                {props.count3 ?? (
                  <fragment>
                    <span className="pricing10-text44 thq-body-small">30</span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div className="pricing10-container07">
            <div className="pricing10-container08">
              <span>
                {props.feature2 ?? (
                  <fragment>
                    <span className="thq-body-small">Feature 2</span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="pricing10-container09">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container10">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container11">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
          <div className="pricing10-container12">
            <div className="pricing10-container13">
              <span>
                {props.feature3 ?? (
                  <fragment>
                    <span className="thq-body-small">Feature 3</span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="pricing10-container14">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container15">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container16">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
          <div className="pricing10-container17">
            <div className="pricing10-container18">
              <span>
                {props.feature4 ?? (
                  <fragment>
                    <span className="thq-body-small">Feature 4</span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="pricing10-container19">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div className="pricing10-container20">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container21">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
          <div className="pricing10-container22">
            <div className="pricing10-container23">
              <span>
                {props.feature5 ?? (
                  <fragment>
                    <span className="thq-body-small">Feature 5</span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="pricing10-container24">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div className="pricing10-container25">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div className="pricing10-container26">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="pricing10-container27">
          <div className="pricing10-content21">
            <h3>
              {props.featureCategory2 ?? (
                <fragment>
                  <span className="thq-heading-3">Feature Category</span>
                </fragment>
              )}
            </h3>
          </div>
          <div className="pricing10-container28">
            <div className="pricing10-container29">
              <span>
                {props.feature6 ?? (
                  <fragment>
                    <span className="thq-body-small">
                      Feature description goes here.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="pricing10-container30">
              <span>
                {props.count4 ?? (
                  <fragment>
                    <span className="pricing10-text56 thq-body-small">20</span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="pricing10-container31">
              <span>
                {props.count5 ?? (
                  <fragment>
                    <span className="thq-body-small">100</span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="pricing10-container32">
              <span>
                {props.count6 ?? (
                  <fragment>
                    <span className="pricing10-text54 thq-body-small">
                      Unlimited
                    </span>
                  </fragment>
                )}
              </span>
            </div>
          </div>
          <div className="pricing10-container33">
            <div className="pricing10-container34">
              <span>
                {props.feature7 ?? (
                  <fragment>
                    <span className="thq-body-small">
                      Feature description goes here.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="pricing10-container35">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container36">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container37">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
          <div className="pricing10-container38">
            <div className="pricing10-container39">
              <span>
                {props.feature8 ?? (
                  <fragment>
                    <span className="thq-body-small">
                      Feature description goes here.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="pricing10-container40">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container41">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container42">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
          <div className="pricing10-container43">
            <div className="pricing10-container44">
              <span>
                {props.feature9 ?? (
                  <fragment>
                    <span className="thq-body-small">
                      Feature description goes here.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="pricing10-container45">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div className="pricing10-container46">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
            <div className="pricing10-container47">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
          <div className="pricing10-container48">
            <div className="pricing10-container49">
              <span>
                {props.feature10 ?? (
                  <fragment>
                    <span className="thq-body-small">
                      Feature description goes here.
                    </span>
                  </fragment>
                )}
              </span>
            </div>
            <div className="pricing10-container50">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div className="pricing10-container51">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div className="pricing10-container52">
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Pricing10.defaultProps = {
  plan2Yearly: undefined,
  feature9: undefined,
  feature4: undefined,
  feature7: undefined,
  feature10: undefined,
  count2: undefined,
  plan1Action11: undefined,
  featureCategory2: undefined,
  feature8: undefined,
  subtitle1: undefined,
  count3: undefined,
  plan1Yearly: undefined,
  feature2: undefined,
  feature6: undefined,
  plan3Yearly: undefined,
  plan1Price: undefined,
  plan3: undefined,
  plan3Price: undefined,
  plan2Price: undefined,
  count5: undefined,
  count6: undefined,
  plan2Action: undefined,
  count4: undefined,
  plan1Action: undefined,
  feature1: undefined,
  heading1: undefined,
  plan1: undefined,
  feature3: undefined,
  feature5: undefined,
  count1: undefined,
  featureCategory1: undefined,
  plan2: undefined,
}

Pricing10.propTypes = {
  plan2Yearly: PropTypes.element,
  feature9: PropTypes.element,
  feature4: PropTypes.element,
  feature7: PropTypes.element,
  feature10: PropTypes.element,
  count2: PropTypes.element,
  plan1Action11: PropTypes.element,
  featureCategory2: PropTypes.element,
  feature8: PropTypes.element,
  subtitle1: PropTypes.element,
  count3: PropTypes.element,
  plan1Yearly: PropTypes.element,
  feature2: PropTypes.element,
  feature6: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan1Price: PropTypes.element,
  plan3: PropTypes.element,
  plan3Price: PropTypes.element,
  plan2Price: PropTypes.element,
  count5: PropTypes.element,
  count6: PropTypes.element,
  plan2Action: PropTypes.element,
  count4: PropTypes.element,
  plan1Action: PropTypes.element,
  feature1: PropTypes.element,
  heading1: PropTypes.element,
  plan1: PropTypes.element,
  feature3: PropTypes.element,
  feature5: PropTypes.element,
  count1: PropTypes.element,
  featureCategory1: PropTypes.element,
  plan2: PropTypes.element,
}

export default Pricing10
