import React from 'react'

import PropTypes from 'prop-types'

import './contact1.css'

const Contact1 = (props) => {
  return (
    <div className="contact1-contact20 thq-section-padding">
      <div className="contact1-max-width thq-section-max-width">
        <div className="contact1-content">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
          </svg>
          <div className="contact1-contact-info">
            <div className="contact1-content1">
              <h3 className="contact1-text thq-heading-3">Email</h3>
              <p className="contact1-text1 thq-body-large">{props.content1}</p>
            </div>
            <span className="contact1-email thq-body-small">
              {props.email1}
            </span>
          </div>
        </div>
        <div className="contact1-content2">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
          </svg>
          <div className="contact1-contact-info1">
            <div className="contact1-content3">
              <h3 className="contact1-text2 thq-heading-3">Phone</h3>
              <p className="contact1-text3 thq-body-large">{props.content2}</p>
            </div>
            <span className="contact1-phone thq-body-small">
              {props.phone1}
            </span>
          </div>
        </div>
        <div className="contact1-content4">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
          </svg>
          <div className="contact1-contact-info2">
            <div className="contact1-content5">
              <h3 className="contact1-text4 thq-heading-3">Office</h3>
              <p className="contact1-text5 thq-body-large">{props.content3}</p>
            </div>
            <span className="contact1-address thq-body-small">
              {props.address1}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact1.defaultProps = {
  email1: 'hello@teleporthq.io',
  phone1: '+1 (555) 000-0000',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  address1: '456 Test Ave, Bucharest',
  content3:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
  content2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.',
}

Contact1.propTypes = {
  email1: PropTypes.string,
  phone1: PropTypes.string,
  content1: PropTypes.string,
  address1: PropTypes.string,
  content3: PropTypes.string,
  content2: PropTypes.string,
}

export default Contact1
