import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar6 from '../components/navbar6'
import Hero9 from '../components/hero9'
import Pricing8 from '../components/pricing8'
import Pricing10 from '../components/pricing10'
import Testimonial18 from '../components/testimonial18'
import FAQ11 from '../components/faq11'
import CTA261 from '../components/cta261'
import Footer12 from '../components/footer12'
import './pricing.css'

const Pricing = (props) => {
  return (
    <div className="pricing-container">
      <Helmet>
        <title>Pricing - Spotless Hungry Crocodile</title>
        <meta
          property="og:title"
          content="Pricing - Spotless Hungry Crocodile"
        />
      </Helmet>
      <Navbar6
        page3Description={
          <fragment>
            <span className="thq-body-small">
              Lorem ipsum dolor sit amet consectetur elit
            </span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="pricing-text001 thq-body-large">Page Four</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="pricing-text002 thq-body-large">Page Two</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="thq-link thq-body-small">About Us</span>
          </fragment>
        }
        link1={
          <fragment>
            <span className="thq-link thq-body-small">Home</span>
          </fragment>
        }
        page1Description={
          <fragment>
            <span className="thq-body-small">
              Lorem ipsum dolor sit amet consectetur elit
            </span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="pricing-text006 thq-body-large">Page Three</span>
          </fragment>
        }
        page1={
          <fragment>
            <span className="pricing-text007 thq-body-large">Page One</span>
          </fragment>
        }
        link5={
          <fragment>
            <span className="thq-link thq-body-small">FAQ</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="thq-link thq-body-small">Contact</span>
          </fragment>
        }
        page2Description={
          <fragment>
            <span className="thq-body-small">
              Lorem ipsum dolor sit amet consectetur elit
            </span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="thq-link thq-body-small">Services</span>
          </fragment>
        }
        page4Description={
          <fragment>
            <span className="thq-body-small">
              Lorem ipsum dolor sit amet consectetur elit
            </span>
          </fragment>
        }
      ></Navbar6>
      <Hero9
        heading1={
          <fragment>
            <span className="pricing-text013 thq-heading-1">
              Welcome to our Contact Information Website
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="pricing-text014 thq-body-large">
              Find all the contact details you need to reach out to us
            </span>
          </fragment>
        }
        action2={
          <fragment>
            <span className="pricing-text015 thq-body-small">Get in touch</span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="pricing-text016 thq-body-small">Learn More</span>
          </fragment>
        }
      ></Hero9>
      <Pricing8
        plan2Feature21={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature2={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature1={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan11={
          <fragment>
            <span className="pricing-text020 thq-body-large">Basic plan</span>
          </fragment>
        }
        plan3Action1={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan1Feature11={
          <fragment>
            <span className="thq-body-small">
              Additional feature for Plan 1
            </span>
          </fragment>
        }
        plan1Feature21={
          <fragment>
            <span className="thq-body-small">
              Another additional feature for Plan 1
            </span>
          </fragment>
        }
        plan1Feature1={
          <fragment>
            <span className="thq-body-small">Feature 1 included</span>
          </fragment>
        }
        plan1Feature31={
          <fragment>
            <span className="thq-body-small">
              Yet another additional feature for Plan 1
            </span>
          </fragment>
        }
        plan1Price={
          <fragment>
            <span className="pricing-text026 thq-heading-3">$10/month</span>
          </fragment>
        }
        plan3Feature51={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Yearly={
          <fragment>
            <span className="thq-body-large">or $299 yearly</span>
          </fragment>
        }
        plan3Yearly={
          <fragment>
            <span className="thq-body-large">or $499 yearly</span>
          </fragment>
        }
        plan3Feature3={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Price1={
          <fragment>
            <span className="pricing-text031 thq-heading-3">$100/year</span>
          </fragment>
        }
        plan2={
          <fragment>
            <span className="pricing-text032 thq-body-large">
              Business plan
            </span>
          </fragment>
        }
        plan3Feature11={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature21={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature41={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature5={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Price={
          <fragment>
            <span className="pricing-text037 thq-heading-3">$49/mo</span>
          </fragment>
        }
        plan1Action1={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan2Feature3={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="pricing-text040 thq-body-large">
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
        plan3Action={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan3Feature4={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1={
          <fragment>
            <span className="pricing-text045 thq-body-large">Basic Plan</span>
          </fragment>
        }
        plan2Feature11={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Price1={
          <fragment>
            <span className="pricing-text047 thq-heading-3">$499/year</span>
          </fragment>
        }
        plan2Yearly1={
          <fragment>
            <span className="thq-body-large">or $29 monthly</span>
          </fragment>
        }
        plan2Action={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan2Feature31={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Yearly1={
          <fragment>
            <span className="thq-body-large">or $49 monthly</span>
          </fragment>
        }
        plan31={
          <fragment>
            <span className="pricing-text052 thq-body-large">
              Enterprise plan
            </span>
          </fragment>
        }
        plan1Feature3={
          <fragment>
            <span className="thq-body-small">Feature 3 included</span>
          </fragment>
        }
        plan3={
          <fragment>
            <span className="pricing-text054 thq-body-large">
              Enterprise plan
            </span>
          </fragment>
        }
        plan2Feature2={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan21={
          <fragment>
            <span className="pricing-text056 thq-body-large">
              Business plan
            </span>
          </fragment>
        }
        plan2Price={
          <fragment>
            <span className="pricing-text057 thq-heading-3">$29/mo</span>
          </fragment>
        }
        plan3Feature31={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature4={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Yearly1={
          <fragment>
            <span className="thq-body-large">Save 17%</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="pricing-text061 thq-body-small">
              Pricing plans
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="pricing-text062 thq-heading-2">
              Remind everyone why to pick you
            </span>
          </fragment>
        }
        plan2Feature41={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Feature2={
          <fragment>
            <span className="thq-body-small">Feature 2 included</span>
          </fragment>
        }
        plan2Action1={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan2Feature1={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Price1={
          <fragment>
            <span className="pricing-text067 thq-heading-3">$299/year</span>
          </fragment>
        }
        plan1Yearly={
          <fragment>
            <span className="thq-body-large">Save 17%</span>
          </fragment>
        }
        plan1Action={
          <fragment>
            <span className="thq-body-small">
              Sign up now for the Basic Plan
            </span>
          </fragment>
        }
      ></Pricing8>
      <Pricing10
        plan2Yearly={
          <fragment>
            <span className="pricing-text070 thq-body-large">
              or $200 yearly
            </span>
          </fragment>
        }
        feature9={
          <fragment>
            <span className="thq-body-small">
              Feature description goes here.
            </span>
          </fragment>
        }
        feature4={
          <fragment>
            <span className="thq-body-small">Feature 4</span>
          </fragment>
        }
        feature7={
          <fragment>
            <span className="thq-body-small">
              Feature description goes here.
            </span>
          </fragment>
        }
        feature10={
          <fragment>
            <span className="thq-body-small">
              Feature description goes here.
            </span>
          </fragment>
        }
        count2={
          <fragment>
            <span className="thq-body-small">20</span>
          </fragment>
        }
        plan1Action11={
          <fragment>
            <span className="thq-body-small">Upgrade Now</span>
          </fragment>
        }
        featureCategory2={
          <fragment>
            <span className="thq-heading-3">Feature Category</span>
          </fragment>
        }
        feature8={
          <fragment>
            <span className="thq-body-small">
              Feature description goes here.
            </span>
          </fragment>
        }
        subtitle1={
          <fragment>
            <span className="pricing-text079 thq-body-large">
              <span>All plans come with a 30-day money-back guarantee</span>
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
        count3={
          <fragment>
            <span className="pricing-text082 thq-body-small">30</span>
          </fragment>
        }
        plan1Yearly={
          <fragment>
            <span className="pricing-text083 thq-body-large">$100/year</span>
          </fragment>
        }
        feature2={
          <fragment>
            <span className="thq-body-small">Feature 2</span>
          </fragment>
        }
        feature6={
          <fragment>
            <span className="thq-body-small">
              Feature description goes here.
            </span>
          </fragment>
        }
        plan3Yearly={
          <fragment>
            <span className="pricing-text086 thq-body-large">
              or $200 yearly
            </span>
          </fragment>
        }
        plan1Price={
          <fragment>
            <span className="pricing-text087 thq-heading-3">$10/month</span>
          </fragment>
        }
        plan3={
          <fragment>
            <span className="pricing-text088 thq-body-large">Enterprise</span>
          </fragment>
        }
        plan3Price={
          <fragment>
            <span className="pricing-text089 thq-heading-3">$20/mo</span>
          </fragment>
        }
        plan2Price={
          <fragment>
            <span className="pricing-text090 thq-heading-3">$20/mo</span>
          </fragment>
        }
        count5={
          <fragment>
            <span className="thq-body-small">100</span>
          </fragment>
        }
        count6={
          <fragment>
            <span className="pricing-text092 thq-body-small">Unlimited</span>
          </fragment>
        }
        plan2Action={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        count4={
          <fragment>
            <span className="pricing-text094 thq-body-small">20</span>
          </fragment>
        }
        plan1Action={
          <fragment>
            <span className="thq-body-small">Sign Up Now</span>
          </fragment>
        }
        feature1={
          <fragment>
            <span className="thq-body-small">Feature 1</span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="pricing-text097 thq-heading-2">
              Choose the plan that suits you best
            </span>
          </fragment>
        }
        plan1={
          <fragment>
            <span className="pricing-text098 thq-body-large">Basic Plan</span>
          </fragment>
        }
        feature3={
          <fragment>
            <span className="thq-body-small">Feature 3</span>
          </fragment>
        }
        feature5={
          <fragment>
            <span className="thq-body-small">Feature 5</span>
          </fragment>
        }
        count1={
          <fragment>
            <span className="pricing-text101 thq-body-small">10</span>
          </fragment>
        }
        featureCategory1={
          <fragment>
            <span className="thq-heading-3">Features</span>
          </fragment>
        }
        plan2={
          <fragment>
            <span className="pricing-text103 thq-body-large">Business</span>
          </fragment>
        }
      ></Pricing10>
      <Testimonial18
        action1={
          <fragment>
            <span>Primary action</span>
          </fragment>
        }
        author1Name={
          <fragment>
            <span className="pricing-text105 thq-body-small">John Doe</span>
          </fragment>
        }
        author2Position={
          <fragment>
            <span className="pricing-text106 thq-body-small">
              Marketing Manager, XYZ Inc.
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </fragment>
        }
        action2={
          <fragment>
            <span>Secondary action</span>
          </fragment>
        }
        review2={
          <fragment>
            <span className="pricing-text109 thq-body-small">
              The team at this company goes above and beyond to meet our needs.
              Highly recommended!
            </span>
          </fragment>
        }
        author3Position={
          <fragment>
            <span className="pricing-text110 thq-body-small">
              Founder, Startup Co.
            </span>
          </fragment>
        }
        author4={
          <fragment>
            <span className="pricing-text111 thq-body-small">
              Sarah Williams
            </span>
          </fragment>
        }
        review1={
          <fragment>
            <span className="pricing-text112 thq-body-small">
              I have been using their services for years and I am always
              impressed by their professionalism and efficiency.
            </span>
          </fragment>
        }
        author2={
          <fragment>
            <span className="pricing-text113 thq-body-small">Jane Smith</span>
          </fragment>
        }
        author1Position={
          <fragment>
            <span className="pricing-text114 thq-body-small">
              CEO, Company ABC
            </span>
          </fragment>
        }
        review3={
          <fragment>
            <span className="pricing-text115 thq-body-small">
              Working with them has been a game-changer for our business. Their
              expertise is unmatched.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">Client Testimonials</span>
          </fragment>
        }
        author4Position={
          <fragment>
            <span className="pricing-text117 thq-body-small">
              Creative Director, Design Studio
            </span>
          </fragment>
        }
        author3={
          <fragment>
            <span className="pricing-text118 thq-body-small">
              Michael Johnson
            </span>
          </fragment>
        }
        review4={
          <fragment>
            <span className="pricing-text119 thq-body-small">
              I appreciate the dedication and attention to detail they put into
              every project. Truly exceptional service.
            </span>
          </fragment>
        }
      ></Testimonial18>
      <FAQ11
        action={
          <fragment>
            <span className="thq-body-small">Contact</span>
          </fragment>
        }
        faq3Question={
          <fragment>
            <span className="pricing-text121 thq-body-large">
              What is your cancellation policy?
            </span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="pricing-text122 thq-body-large">
              <span>
                Yes, we offer virtual consultations via video calls or phone
                calls upon request.
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
        faq4Question={
          <fragment>
            <span className="pricing-text125 thq-body-large">
              Is there parking available near your office?
            </span>
          </fragment>
        }
        faq1Question={
          <fragment>
            <span className="pricing-text126 thq-body-large">
              What are your office hours?
            </span>
          </fragment>
        }
        faq1Question1={
          <fragment>
            <span className="pricing-text127 thq-body-large">
              Do you offer virtual consultations?
            </span>
          </fragment>
        }
        faq2Question={
          <fragment>
            <span className="pricing-text128 thq-body-large">
              How can I schedule an appointment?
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="pricing-text129 thq-body-large">
              Our office hours are Monday to Friday from 9:00 AM to 5:00 PM.
            </span>
          </fragment>
        }
        heading2={
          <fragment>
            <span className="pricing-text130 thq-heading-2">
              Still have a question?
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="pricing-text131 thq-heading-2">
              Frequently Asked Questions
            </span>
          </fragment>
        }
      ></FAQ11>
      <CTA261
        heading1={
          <fragment>
            <span className="thq-heading-2">Contact Us</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="thq-body-large">
              Reach out to us for any inquiries or assistance.
            </span>
          </fragment>
        }
        action1={
          <fragment>
            <span>Get in Touch</span>
          </fragment>
        }
      ></CTA261>
      <Footer12
        column2Title={
          <fragment>
            <span className="pricing-text135 thq-body-large">Column Two</span>
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
            <span className="pricing-text143 thq-body-small">
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
            <span className="pricing-text149 thq-body-large">Contact Us</span>
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
              Example Company, 123 Street Name, City, Country
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
            <span className="pricing-text153 thq-body-large">Follow Us</span>
          </fragment>
        }
      ></Footer12>
    </div>
  )
}

export default Pricing
