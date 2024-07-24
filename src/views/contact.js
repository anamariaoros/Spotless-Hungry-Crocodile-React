import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar41 from '../components/navbar41'
import ContactForm3 from '../components/contact-form3'
import Contact14 from '../components/contact14'
import Contact7 from '../components/contact7'
import Footer11 from '../components/footer11'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Spotless Hungry Crocodile</title>
        <meta
          property="og:title"
          content="Contact - Spotless Hungry Crocodile"
        />
      </Helmet>
      <Navbar41
        link1={
          <fragment>
            <span className="thq-link thq-body-small">Home</span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="thq-link thq-body-small">Contact</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="thq-link thq-body-small">Services</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="thq-link thq-body-small">About Us</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="thq-link thq-body-small">Blog</span>
          </fragment>
        }
      ></Navbar41>
      <ContactForm3
        content2={
          <fragment>
            <span className="thq-body-small">Get in touch with us</span>
          </fragment>
        }
        action={
          <fragment>
            <span className="thq-body-small">Submit</span>
          </fragment>
        }
        content1={
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
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">Contact us</span>
          </fragment>
        }
      ></ContactForm3>
      <Contact14
        link1={
          <fragment>
            <span className="contact-text11 thq-body-small">
              Start new chat
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="contact-text12 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="contact-text13 thq-heading-3">
              Contact Information
            </span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="contact-text14 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </fragment>
        }
        heading4={
          <fragment>
            <span className="contact-text15 thq-heading-3">Office</span>
          </fragment>
        }
        address1={
          <fragment>
            <span className="contact-text16 thq-body-small">
              123 Main Street, Cityville, State, Zip Code
            </span>
          </fragment>
        }
        content4={
          <fragment>
            <span className="contact-text17 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </fragment>
        }
        heading3={
          <fragment>
            <span className="contact-text18 thq-heading-3">Phone</span>
          </fragment>
        }
        phone1={
          <fragment>
            <span className="contact-text19 thq-body-small">+123-456-7890</span>
          </fragment>
        }
        content3={
          <fragment>
            <span className="contact-text20 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </fragment>
        }
        heading2={
          <fragment>
            <span className="contact-text21 thq-heading-3">Live Chat</span>
          </fragment>
        }
        email1={
          <fragment>
            <span className="contact-text22 thq-body-small">
              info@example.com
            </span>
          </fragment>
        }
      ></Contact14>
      <Contact7
        location2={
          <fragment>
            <span className="contact-text23 thq-heading-3">
              Customer Support
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="thq-body-large">
              123 Main Street, City Name, Country
            </span>
          </fragment>
        }
        location2Description={
          <fragment>
            <span className="thq-body-large">
              Our customer support team is available to assist you with any
              inquiries or issues.
            </span>
          </fragment>
        }
        location1Description={
          <fragment>
            <span className="thq-body-large">
              Our main office is located in the heart of the city. Feel free to
              visit us during office hours.
            </span>
          </fragment>
        }
        location1={
          <fragment>
            <span className="contact-text27 thq-heading-3">Main Office</span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">Contact Us</span>
          </fragment>
        }
      ></Contact7>
      <Footer11
        column2Title={
          <fragment>
            <span className="contact-text29 thq-body-large">Column Two</span>
          </fragment>
        }
        link7={
          <fragment>
            <span className="thq-body-small">Link 7</span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="thq-body-small">Link 5</span>
          </fragment>
        }
        link8={
          <fragment>
            <span className="thq-body-small">Link 8</span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="thq-body-small">Subscribe</span>
          </fragment>
        }
        content3={
          <fragment>
            <span className="thq-body-small">© 2024 TeleportHQ</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="thq-body-small">Link 4</span>
          </fragment>
        }
        cookiesLink={
          <fragment>
            <span className="thq-body-small">Cookies Settings</span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="contact-text37 thq-body-small">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </span>
          </fragment>
        }
        link9={
          <fragment>
            <span className="thq-body-small">Link 9</span>
          </fragment>
        }
        link6={
          <fragment>
            <span className="thq-body-small">Link 6</span>
          </fragment>
        }
        link1={
          <fragment>
            <span className="thq-body-small">mailto:info@example.com</span>
          </fragment>
        }
        privacyLink={
          <fragment>
            <span className="thq-body-small">Privacy Policy</span>
          </fragment>
        }
        link10={
          <fragment>
            <span className="thq-body-small">Link 10</span>
          </fragment>
        }
        column1Title={
          <fragment>
            <span className="contact-text43 thq-body-large">Contact Us</span>
          </fragment>
        }
        termsLink={
          <fragment>
            <span className="thq-body-small">Terms of Service</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="thq-body-small">
              123 Main Street, City, Country
            </span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="thq-body-small">tel:123-456-7890</span>
          </fragment>
        }
        socialLinkTitleCategory={
          <fragment>
            <span className="contact-text47 thq-body-large">
              Connect with Us
            </span>
          </fragment>
        }
      ></Footer11>
    </div>
  )
}

export default Contact
