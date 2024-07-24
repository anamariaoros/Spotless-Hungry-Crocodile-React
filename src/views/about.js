import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Logos1 from '../components/logos1'
import Features1 from '../components/features1'
import Team1 from '../components/team1'
import Footer1 from '../components/footer1'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Spotless Hungry Crocodile</title>
        <meta property="og:title" content="About - Spotless Hungry Crocodile" />
      </Helmet>
      <Navbar4
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
            <span className="thq-link thq-body-small">FAQ</span>
          </fragment>
        }
      ></Navbar4>
      <Hero8
        content1={
          <fragment>
            <span className="about-text05 thq-body-large">
              Find all the contact details you need to reach out to us
            </span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="thq-body-small">Learn More</span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="about-text07 thq-heading-1">
              Welcome to our Contact Information Website
            </span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="thq-body-small">Contact Us</span>
          </fragment>
        }
      ></Hero8>
      <Stats2
        stat1={
          <fragment>
            <span className="thq-heading-2">Email</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="thq-body-small">info@example.com</span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="thq-body-large">support@example.com</span>
          </fragment>
        }
        stat3={
          <fragment>
            <span className="thq-heading-2">Phone Number</span>
          </fragment>
        }
        stat4={
          <fragment>
            <span className="thq-heading-2">Office Address</span>
          </fragment>
        }
        stat2Description={
          <fragment>
            <span className="thq-body-small">
              Contact us via email for general inquiries.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">Contact Information</span>
          </fragment>
        }
        stat4Description={
          <fragment>
            <span className="thq-body-small">
              Visit our office during working hours.
            </span>
          </fragment>
        }
        stat2={
          <fragment>
            <span className="thq-heading-2">+1234567890</span>
          </fragment>
        }
        stat3Description={
          <fragment>
            <span className="thq-body-small">
              Call us for immediate assistance.
            </span>
          </fragment>
        }
        stat1Description={
          <fragment>
            <span className="thq-body-small">Reach out to us via email.</span>
          </fragment>
        }
      ></Stats2>
      <Logos1
        heading1={
          <fragment>
            <span className="about-text20 thq-heading-2">
              Trusted by the world&apos;s best companies social proof to build
              credibility
            </span>
          </fragment>
        }
      ></Logos1>
      <Features1
        mainAction={
          <fragment>
            <span className="thq-body-small">Contact Us Now</span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="thq-heading-3">Fast Response Time</span>
          </fragment>
        }
        feature1Title={
          <fragment>
            <span className="thq-heading-3">24/7 Customer Support</span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="thq-body-small">
              Our dedicated team is available round the clock to assist you with
              any inquiries or issues.
            </span>
          </fragment>
        }
        slogan={
          <fragment>
            <span className="thq-body-small">
              Efficient Solutions for Your Needs
            </span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="thq-heading-3">Professional Consultation</span>
          </fragment>
        }
        feature3Description={
          <fragment>
            <span className="thq-body-small">
              Receive expert advice and guidance from our experienced
              consultants to optimize your experience.
            </span>
          </fragment>
        }
        sectionDescription={
          <fragment>
            <span className="thq-body-small">
              Explore the key features of our services
            </span>
          </fragment>
        }
        secondaryAction={
          <fragment>
            <span className="thq-body-small">Learn More</span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="thq-body-small">
              We prioritize quick responses to ensure your questions are
              addressed promptly.
            </span>
          </fragment>
        }
        sectionTitle={
          <fragment>
            <span className="thq-heading-2 about-text31">Features</span>
          </fragment>
        }
      ></Features1>
      <Team1
        member5Content={
          <fragment>
            <span className="about-text32 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </fragment>
        }
        member2Content={
          <fragment>
            <span className="about-text33 thq-body-small">
              Jane is a tech guru who drives our technological advancements.
            </span>
          </fragment>
        }
        member8Content={
          <fragment>
            <span className="about-text34 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2 about-text35">Our Amazing Team</span>
          </fragment>
        }
        member3Job={
          <fragment>
            <span className="about-text36 thq-body-small">
              Marketing Director
            </span>
          </fragment>
        }
        member4Content={
          <fragment>
            <span className="about-text37 thq-body-small">
              Mike is a sales expert who ensures client satisfaction.
            </span>
          </fragment>
        }
        member2Job={
          <fragment>
            <span className="about-text38 thq-body-small">CTO</span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="about-text39 thq-body-large">
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
        member8={
          <fragment>
            <span className="about-text42 thq-body-small">Full name</span>
          </fragment>
        }
        member7={
          <fragment>
            <span className="about-text43 thq-body-small">Full name</span>
          </fragment>
        }
        member7Content={
          <fragment>
            <span className="about-text44 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </fragment>
        }
        member8Job={
          <fragment>
            <span className="about-text45 thq-body-small">Job title</span>
          </fragment>
        }
        heading2={
          <fragment>
            <span className="thq-heading-2 about-text46">We’re hiring!</span>
          </fragment>
        }
        member2={
          <fragment>
            <span className="about-text47 thq-body-small">Jane Smith</span>
          </fragment>
        }
        member6Job={
          <fragment>
            <span className="about-text48 thq-body-small">Job title</span>
          </fragment>
        }
        member3Content={
          <fragment>
            <span className="about-text49 thq-body-small">
              Alice is a creative mind who shapes our brand&apos;s story.
            </span>
          </fragment>
        }
        actionContent={
          <fragment>
            <span className="thq-body-small">Open positions</span>
          </fragment>
        }
        member6={
          <fragment>
            <span className="about-text51 thq-body-small">Full name</span>
          </fragment>
        }
        member5={
          <fragment>
            <span className="about-text52 thq-body-small">Full name</span>
          </fragment>
        }
        content3={
          <fragment>
            <span className="about-text53 thq-body-small">
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
        member4Job={
          <fragment>
            <span className="about-text56 thq-body-small">Sales Manager</span>
          </fragment>
        }
        member1Job={
          <fragment>
            <span className="about-text57 thq-body-small">CEO</span>
          </fragment>
        }
        member1={
          <fragment>
            <span className="about-text58 thq-body-small">John Doe</span>
          </fragment>
        }
        member4={
          <fragment>
            <span className="about-text59 thq-body-small">Mike Brown</span>
          </fragment>
        }
        member7Job={
          <fragment>
            <span className="about-text60 thq-body-small">Job title</span>
          </fragment>
        }
        member3={
          <fragment>
            <span className="about-text61 thq-body-small">Alice Johnson</span>
          </fragment>
        }
        member1Content={
          <fragment>
            <span className="about-text62 thq-body-small">
              John is a visionary leader with a passion for innovation.
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="about-text63 thq-body-small">
              Meet the talented individuals behind our success.
            </span>
          </fragment>
        }
        member6Content={
          <fragment>
            <span className="about-text64 thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </fragment>
        }
        member5Job={
          <fragment>
            <span className="about-text65 thq-body-small">Job title</span>
          </fragment>
        }
      ></Team1>
      <Footer1
        column2Title={
          <fragment>
            <span className="about-text66 thq-body-large">Quick Links</span>
          </fragment>
        }
        link7={
          <fragment>
            <span className="thq-body-small">Terms of Use</span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="thq-body-small">Contact</span>
          </fragment>
        }
        link8={
          <fragment>
            <span className="thq-body-small">Cookie Policy</span>
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
            <span className="thq-body-small">FAQs</span>
          </fragment>
        }
        cookiesLink={
          <fragment>
            <span className="thq-body-small">Cookies Settings</span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="about-text74 thq-body-small">
              By subscribing you agree to with our Privacy Policy and provide
              consent to receive updates from our company.
            </span>
          </fragment>
        }
        link9={
          <fragment>
            <span className="thq-body-small">Careers</span>
          </fragment>
        }
        link6={
          <fragment>
            <span className="thq-body-small">Privacy Policy</span>
          </fragment>
        }
        link1={
          <fragment>
            <span className="thq-body-small">Home</span>
          </fragment>
        }
        privacyLink={
          <fragment>
            <span className="thq-body-small">Privacy Policy</span>
          </fragment>
        }
        link10={
          <fragment>
            <span className="thq-body-small">Sitemap</span>
          </fragment>
        }
        column1Title={
          <fragment>
            <span className="about-text80 thq-body-large">Contact Us</span>
          </fragment>
        }
        termsLink={
          <fragment>
            <span className="thq-body-small">Terms of Service</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="thq-body-small">Services</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="thq-body-small">About Us</span>
          </fragment>
        }
        socialLinkTitleCategory={
          <fragment>
            <span className="about-text84 thq-body-large">Follow Us</span>
          </fragment>
        }
      ></Footer1>
    </div>
  )
}

export default About
