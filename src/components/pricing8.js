import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './pricing8.css'

const Pricing8 = (props) => {
  const [isMonthly, setIsMonthly] = useState(true)
  return (
    <div className="pricing8-pricing23 thq-section-padding">
      <div className="pricing8-max-width thq-section-max-width">
        <div className="pricing8-section-title">
          <span>
            {props.content1 ?? (
              <fragment>
                <span className="pricing8-text099 thq-body-small">
                  Pricing plans
                </span>
              </fragment>
            )}
          </span>
          <div className="pricing8-content">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="pricing8-text100 thq-heading-2">
                    Remind everyone why to pick you
                  </span>
                </fragment>
              )}
            </h2>
            <p>
              {props.content2 ?? (
                <fragment>
                  <span className="pricing8-text078 thq-body-large">
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
            </p>
          </div>
        </div>
        <div className="pricing8-tabs">
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing8-button thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(true)}
              className="pricing8-button01 thq-button-outline thq-button-animated"
            >
              <span className="thq-body-small">Monthly</span>
            </button>
          )}
          {!isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing8-button02 thq-button-animated thq-button-filled"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
          {isMonthly && (
            <button
              onClick={() => setIsMonthly(false)}
              className="pricing8-button03 thq-button-outline thq-button-animated"
            >
              <span className="thq-body-small">Yearly</span>
            </button>
          )}
        </div>
        {isMonthly && (
          <div className="pricing8-container">
            <div className="pricing8-column thq-card">
              <svg viewBox="0 0 1024 1024" className="pricing8-icon">
                <path d="M853.333 853.333h-682.667c-70.571 0-128-57.429-128-128v-426.667c0-70.571 57.429-128 128-128h682.667c70.571 0 128 57.429 128 128v426.667c0 70.571-57.429 128-128 128zM170.667 256c-23.509 0-42.667 19.157-42.667 42.667v426.667c0 23.509 19.157 42.667 42.667 42.667h682.667c23.509 0 42.667-19.157 42.667-42.667v-426.667c0-23.509-19.157-42.667-42.667-42.667h-682.667z"></path>
                <path d="M426.667 640h-170.667c-23.595 0-42.667-19.115-42.667-42.667s19.072-42.667 42.667-42.667h170.667c23.595 0 42.667 19.115 42.667 42.667s-19.072 42.667-42.667 42.667z"></path>
                <path d="M426.667 469.333h-170.667c-23.595 0-42.667-19.115-42.667-42.667s19.072-42.667 42.667-42.667h170.667c23.595 0 42.667 19.115 42.667 42.667s-19.072 42.667-42.667 42.667z"></path>
                <path d="M768 448c0 47.128-38.205 85.333-85.333 85.333s-85.333-38.205-85.333-85.333c0-47.128 38.205-85.333 85.333-85.333 47.128 0 85.333 38.205 85.333 85.333z"></path>
                <path d="M682.667 569.856c-66.645 0-106.667 30.507-106.667 60.971 0 15.232 40.021 30.507 106.667 30.507 62.549 0 106.667-15.232 106.667-30.507 0-30.464-41.813-60.971-106.667-60.971z"></path>
              </svg>
              <div className="pricing8-price">
                <div className="pricing8-price01">
                  <p>
                    {props.plan1 ?? (
                      <fragment>
                        <span className="pricing8-text083 thq-body-large">
                          Basic Plan
                        </span>
                      </fragment>
                    )}
                  </p>
                  <h3>
                    {props.plan1Price ?? (
                      <fragment>
                        <span className="pricing8-text064 thq-heading-3">
                          $10/month
                        </span>
                      </fragment>
                    )}
                  </h3>
                  <p>
                    {props.plan1Yearly ?? (
                      <fragment>
                        <span className="thq-body-large">Save 17%</span>
                      </fragment>
                    )}
                  </p>
                </div>
                <div className="pricing8-list">
                  <div className="pricing8-list-item">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature1 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature 1 included
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item01">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature2 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature 2 included
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item02">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature3 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature 3 included
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing8-button04 thq-button-outline thq-button-animated">
                <span>
                  {props.plan1Action ?? (
                    <fragment>
                      <span className="thq-body-small">
                        Sign up now for the Basic Plan
                      </span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing8-column1 thq-card">
              <svg viewBox="0 0 1024 1024" className="pricing8-icon12">
                <path d="M598 298v-84h-172v84h172zM854 298q34 0 59 26t25 60v128q0 34-25 60t-59 26h-256v-86h-172v86h-256q-36 0-60-25t-24-61v-128q0-34 25-60t59-26h170v-84l86-86h170l86 86v84h172zM426 682h172v-42h298v170q0 36-25 61t-61 25h-596q-36 0-61-25t-25-61v-170h298v42z"></path>
              </svg>
              <div className="pricing8-price02">
                <div className="pricing8-price03">
                  <p>
                    {props.plan2 ?? (
                      <fragment>
                        <span className="pricing8-text070 thq-body-large">
                          Business plan
                        </span>
                      </fragment>
                    )}
                  </p>
                  <h3>
                    {props.plan2Price ?? (
                      <fragment>
                        <span className="pricing8-text095 thq-heading-3">
                          $29/mo
                        </span>
                      </fragment>
                    )}
                  </h3>
                  <p>
                    {props.plan2Yearly ?? (
                      <fragment>
                        <span className="thq-body-large">or $299 yearly</span>
                      </fragment>
                    )}
                  </p>
                </div>
                <div className="pricing8-list1">
                  <div className="pricing8-list-item03">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature1 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item04">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature2 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item05">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature3 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item06">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature4 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing8-button05 thq-button-animated thq-button-filled">
                <span>
                  {props.plan2Action ?? (
                    <fragment>
                      <span className="thq-body-small">Get started</span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing8-column2 thq-card">
              <svg viewBox="0 0 1024 1024" className="pricing8-icon22">
                <path d="M768 640v86h-86v-86h86zM768 470v84h-86v-84h86zM854 810v-426h-342v86h86v84h-86v86h86v86h-86v84h342zM426 298v-84h-84v84h84zM426 470v-86h-84v86h84zM426 640v-86h-84v86h84zM426 810v-84h-84v84h84zM256 298v-84h-86v84h86zM256 470v-86h-86v86h86zM256 640v-86h-86v86h86zM256 810v-84h-86v84h86zM512 298h426v598h-852v-768h426v170z"></path>
              </svg>
              <div className="pricing8-price04">
                <div className="pricing8-price05">
                  <p>
                    {props.plan3 ?? (
                      <fragment>
                        <span className="pricing8-text092 thq-body-large">
                          Enterprise plan
                        </span>
                      </fragment>
                    )}
                  </p>
                  <h3>
                    {props.plan3Price ?? (
                      <fragment>
                        <span className="pricing8-text075 thq-heading-3">
                          $49/mo
                        </span>
                      </fragment>
                    )}
                  </h3>
                  <p>
                    {props.plan3Yearly ?? (
                      <fragment>
                        <span className="thq-body-large">or $499 yearly</span>
                      </fragment>
                    )}
                  </p>
                </div>
                <div className="pricing8-list2">
                  <div className="pricing8-list-item07">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature1 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item08">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature2 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item09">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature3 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item10">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature4 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item11">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature5 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing8-button06 thq-button-animated thq-button-filled">
                <span>
                  {props.plan3Action ?? (
                    <fragment>
                      <span className="thq-body-small">Get started</span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
        {!isMonthly && (
          <div className="pricing8-container1">
            <div className="pricing8-column3 thq-card">
              <svg viewBox="0 0 1024 1024" className="pricing8-icon34">
                <path d="M853.333 853.333h-682.667c-70.571 0-128-57.429-128-128v-426.667c0-70.571 57.429-128 128-128h682.667c70.571 0 128 57.429 128 128v426.667c0 70.571-57.429 128-128 128zM170.667 256c-23.509 0-42.667 19.157-42.667 42.667v426.667c0 23.509 19.157 42.667 42.667 42.667h682.667c23.509 0 42.667-19.157 42.667-42.667v-426.667c0-23.509-19.157-42.667-42.667-42.667h-682.667z"></path>
                <path d="M426.667 640h-170.667c-23.595 0-42.667-19.115-42.667-42.667s19.072-42.667 42.667-42.667h170.667c23.595 0 42.667 19.115 42.667 42.667s-19.072 42.667-42.667 42.667z"></path>
                <path d="M426.667 469.333h-170.667c-23.595 0-42.667-19.115-42.667-42.667s19.072-42.667 42.667-42.667h170.667c23.595 0 42.667 19.115 42.667 42.667s-19.072 42.667-42.667 42.667z"></path>
                <path d="M768 448c0 47.128-38.205 85.333-85.333 85.333s-85.333-38.205-85.333-85.333c0-47.128 38.205-85.333 85.333-85.333 47.128 0 85.333 38.205 85.333 85.333z"></path>
                <path d="M682.667 569.856c-66.645 0-106.667 30.507-106.667 60.971 0 15.232 40.021 30.507 106.667 30.507 62.549 0 106.667-15.232 106.667-30.507 0-30.464-41.813-60.971-106.667-60.971z"></path>
              </svg>
              <div className="pricing8-price06">
                <div className="pricing8-price07">
                  <span>
                    {props.plan11 ?? (
                      <fragment>
                        <span className="pricing8-text058 thq-body-large">
                          Basic plan
                        </span>
                      </fragment>
                    )}
                  </span>
                  <h3>
                    {props.plan1Price1 ?? (
                      <fragment>
                        <span className="pricing8-text069 thq-heading-3">
                          $100/year
                        </span>
                      </fragment>
                    )}
                  </h3>
                  <span>
                    {props.plan1Yearly1 ?? (
                      <fragment>
                        <span className="thq-body-large">Save 17%</span>
                      </fragment>
                    )}
                  </span>
                </div>
                <div className="pricing8-list3">
                  <div className="pricing8-list-item12">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature11 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Additional feature for Plan 1
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item13">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature21 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Another additional feature for Plan 1
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item14">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan1Feature31 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Yet another additional feature for Plan 1
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing8-button07 thq-button-outline thq-button-animated">
                <span>
                  {props.plan1Action1 ?? (
                    <fragment>
                      <span className="thq-body-small">Get started</span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing8-column4 thq-card">
              <svg viewBox="0 0 1024 1024" className="pricing8-icon46">
                <path d="M598 298v-84h-172v84h172zM854 298q34 0 59 26t25 60v128q0 34-25 60t-59 26h-256v-86h-172v86h-256q-36 0-60-25t-24-61v-128q0-34 25-60t59-26h170v-84l86-86h170l86 86v84h172zM426 682h172v-42h298v170q0 36-25 61t-61 25h-596q-36 0-61-25t-25-61v-170h298v42z"></path>
              </svg>
              <div className="pricing8-price08">
                <div className="pricing8-price09">
                  <span>
                    {props.plan21 ?? (
                      <fragment>
                        <span className="pricing8-text094 thq-body-large">
                          Business plan
                        </span>
                      </fragment>
                    )}
                  </span>
                  <h3>
                    {props.plan2Price1 ?? (
                      <fragment>
                        <span className="pricing8-text105 thq-heading-3">
                          $299/year
                        </span>
                      </fragment>
                    )}
                  </h3>
                  <span>
                    {props.plan2Yearly1 ?? (
                      <fragment>
                        <span className="thq-body-large">or $29 monthly</span>
                      </fragment>
                    )}
                  </span>
                </div>
                <div className="pricing8-list4">
                  <div className="pricing8-list-item15">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature11 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item16">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature21 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item17">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature31 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item18">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan2Feature41 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing8-button08 thq-button-animated thq-button-filled">
                <span>
                  {props.plan2Action1 ?? (
                    <fragment>
                      <span className="thq-body-small">Get started</span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
            <div className="pricing8-column5 thq-card">
              <svg viewBox="0 0 1024 1024" className="pricing8-icon56">
                <path d="M768 640v86h-86v-86h86zM768 470v84h-86v-84h86zM854 810v-426h-342v86h86v84h-86v86h86v86h-86v84h342zM426 298v-84h-84v84h84zM426 470v-86h-84v86h84zM426 640v-86h-84v86h84zM426 810v-84h-84v84h84zM256 298v-84h-86v84h86zM256 470v-86h-86v86h86zM256 640v-86h-86v86h86zM256 810v-84h-86v84h86zM512 298h426v598h-852v-768h426v170z"></path>
              </svg>
              <div className="pricing8-price10">
                <div className="pricing8-price11">
                  <span>
                    {props.plan31 ?? (
                      <fragment>
                        <span className="pricing8-text090 thq-body-large">
                          Enterprise plan
                        </span>
                      </fragment>
                    )}
                  </span>
                  <h3>
                    {props.plan3Price1 ?? (
                      <fragment>
                        <span className="pricing8-text085 thq-heading-3">
                          $499/year
                        </span>
                      </fragment>
                    )}
                  </h3>
                  <span>
                    {props.plan3Yearly1 ?? (
                      <fragment>
                        <span className="thq-body-large">or $49 monthly</span>
                      </fragment>
                    )}
                  </span>
                </div>
                <div className="pricing8-list5">
                  <div className="pricing8-list-item19">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature11 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item20">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature21 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item21">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature31 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item22">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature41 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                  <div className="pricing8-list-item23">
                    <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                      <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                    </svg>
                    <span>
                      {props.plan3Feature51 ?? (
                        <fragment>
                          <span className="thq-body-small">
                            Feature text goes here
                          </span>
                        </fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
              <button className="pricing8-button09 thq-button-animated thq-button-filled">
                <span>
                  {props.plan3Action1 ?? (
                    <fragment>
                      <span className="thq-body-small">Get started</span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

Pricing8.defaultProps = {
  plan2Feature21: undefined,
  plan3Feature2: undefined,
  plan3Feature1: undefined,
  plan11: undefined,
  plan3Action1: undefined,
  plan1Feature11: undefined,
  plan1Feature21: undefined,
  plan1Feature1: undefined,
  plan1Feature31: undefined,
  plan1Price: undefined,
  plan3Feature51: undefined,
  plan2Yearly: undefined,
  plan3Yearly: undefined,
  plan3Feature3: undefined,
  plan1Price1: undefined,
  plan2: undefined,
  plan3Feature11: undefined,
  plan3Feature21: undefined,
  plan3Feature41: undefined,
  plan3Feature5: undefined,
  plan3Price: undefined,
  plan1Action1: undefined,
  plan2Feature3: undefined,
  content2: undefined,
  plan3Action: undefined,
  plan3Feature4: undefined,
  plan1: undefined,
  plan2Feature11: undefined,
  plan3Price1: undefined,
  plan2Yearly1: undefined,
  plan2Action: undefined,
  plan2Feature31: undefined,
  plan3Yearly1: undefined,
  plan31: undefined,
  plan1Feature3: undefined,
  plan3: undefined,
  plan2Feature2: undefined,
  plan21: undefined,
  plan2Price: undefined,
  plan3Feature31: undefined,
  plan2Feature4: undefined,
  plan1Yearly1: undefined,
  content1: undefined,
  heading1: undefined,
  plan2Feature41: undefined,
  plan1Feature2: undefined,
  plan2Action1: undefined,
  plan2Feature1: undefined,
  plan2Price1: undefined,
  plan1Yearly: undefined,
  plan1Action: undefined,
}

Pricing8.propTypes = {
  plan2Feature21: PropTypes.element,
  plan3Feature2: PropTypes.element,
  plan3Feature1: PropTypes.element,
  plan11: PropTypes.element,
  plan3Action1: PropTypes.element,
  plan1Feature11: PropTypes.element,
  plan1Feature21: PropTypes.element,
  plan1Feature1: PropTypes.element,
  plan1Feature31: PropTypes.element,
  plan1Price: PropTypes.element,
  plan3Feature51: PropTypes.element,
  plan2Yearly: PropTypes.element,
  plan3Yearly: PropTypes.element,
  plan3Feature3: PropTypes.element,
  plan1Price1: PropTypes.element,
  plan2: PropTypes.element,
  plan3Feature11: PropTypes.element,
  plan3Feature21: PropTypes.element,
  plan3Feature41: PropTypes.element,
  plan3Feature5: PropTypes.element,
  plan3Price: PropTypes.element,
  plan1Action1: PropTypes.element,
  plan2Feature3: PropTypes.element,
  content2: PropTypes.element,
  plan3Action: PropTypes.element,
  plan3Feature4: PropTypes.element,
  plan1: PropTypes.element,
  plan2Feature11: PropTypes.element,
  plan3Price1: PropTypes.element,
  plan2Yearly1: PropTypes.element,
  plan2Action: PropTypes.element,
  plan2Feature31: PropTypes.element,
  plan3Yearly1: PropTypes.element,
  plan31: PropTypes.element,
  plan1Feature3: PropTypes.element,
  plan3: PropTypes.element,
  plan2Feature2: PropTypes.element,
  plan21: PropTypes.element,
  plan2Price: PropTypes.element,
  plan3Feature31: PropTypes.element,
  plan2Feature4: PropTypes.element,
  plan1Yearly1: PropTypes.element,
  content1: PropTypes.element,
  heading1: PropTypes.element,
  plan2Feature41: PropTypes.element,
  plan1Feature2: PropTypes.element,
  plan2Action1: PropTypes.element,
  plan2Feature1: PropTypes.element,
  plan2Price1: PropTypes.element,
  plan1Yearly: PropTypes.element,
  plan1Action: PropTypes.element,
}

export default Pricing8
