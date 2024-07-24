import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './landing.css'

const Landing = (props) => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>Landing - Spotless Hungry Crocodile</title>
        <meta
          property="og:title"
          content="Landing - Spotless Hungry Crocodile"
        />
      </Helmet>
      <Navbar8
        page4Description={
          <fragment>
            <span className="thq-body-small">
              Discover our range of services
            </span>
          </fragment>
        }
        action1={
          <fragment>
            <span>Main Action</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="thq-link thq-body-small">Contact</span>
          </fragment>
        }
        page1={
          <fragment>
            <span className="landing-text003 thq-body-large">Teleporthq</span>
          </fragment>
        }
        link1={
          <fragment>
            <span className="landing-text004 thq-link thq-body-small">
              Home
            </span>
          </fragment>
        }
        page4={
          <fragment>
            <span className="landing-text005 thq-body-large">Our Services</span>
          </fragment>
        }
        page2={
          <fragment>
            <span className="landing-text006 thq-body-large">Contact Us</span>
          </fragment>
        }
        link4={
          <fragment>
            <span className="thq-link thq-body-small">Services</span>
          </fragment>
        }
        page1Description={
          <fragment>
            <span className="thq-body-small">
              Welcome to Teleporthq&apos;s official website
            </span>
          </fragment>
        }
        page2Description={
          <fragment>
            <span className="thq-body-small">Get in touch with us</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="landing-text010 thq-link thq-body-small">
              About
            </span>
          </fragment>
        }
        page3={
          <fragment>
            <span className="landing-text011 thq-body-large">About Us</span>
          </fragment>
        }
        page3Description={
          <fragment>
            <span className="thq-body-small">Learn more about Teleporthq</span>
          </fragment>
        }
        action2={
          <fragment>
            <span>Secondary Action</span>
          </fragment>
        }
      ></Navbar8>
      <Hero17
        action2={
          <fragment>
            <span className="thq-body-small">Secondary action</span>
          </fragment>
        }
        action1={
          <fragment>
            <span className="thq-body-small">Contact Now</span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="landing-text016 thq-heading-1">
              Contact Us in Bucharest
            </span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="landing-text017 thq-body-large">
              Get in touch with us for any inquiries or collaborations in
              Bucharest. We are here to assist you.
            </span>
          </fragment>
        }
      ></Hero17>
      <Features24
        feature3Description={
          <fragment>
            <span className="thq-body-small">
              Drop by our office to meet in person and discuss your needs.
            </span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="thq-heading-2">Visit Our Office</span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="thq-body-small">
              Call our office during business hours to speak with a
              representative.
            </span>
          </fragment>
        }
        feature1Title={
          <fragment>
            <span className="thq-heading-2">Contact via Email</span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="thq-body-small">
              Reach out to us via email for any inquiries or assistance.
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="thq-heading-2">Contact via Phone</span>
          </fragment>
        }
      ></Features24>
      <CTA26
        heading1={
          <fragment>
            <span className="thq-heading-2">Contact Us Today</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="thq-body-large">
              Reach out to us for any inquiries or to schedule a meeting.
            </span>
          </fragment>
        }
        action1={
          <fragment>
            <span>Get in Touch</span>
          </fragment>
        }
      ></CTA26>
      <Features25
        feature3Description={
          <fragment>
            <span className="thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </fragment>
        }
        feature1Description={
          <fragment>
            <span className="thq-body-small">
              Find below the contact details to reach out to us.
            </span>
          </fragment>
        }
        feature2Title={
          <fragment>
            <span className="thq-heading-2">Feature #2</span>
          </fragment>
        }
        feature1Title={
          <fragment>
            <span className="thq-heading-2">Contact Information</span>
          </fragment>
        }
        feature2Description={
          <fragment>
            <span className="thq-body-small">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </fragment>
        }
        feature3Title={
          <fragment>
            <span className="thq-heading-2">Feature #3</span>
          </fragment>
        }
      ></Features25>
      <Pricing14
        plan3Price={
          <fragment>
            <span className="landing-text033 thq-heading-3">$49/mo</span>
          </fragment>
        }
        plan3Action={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan11={
          <fragment>
            <span className="landing-text035 thq-body-large">Basic plan</span>
          </fragment>
        }
        plan1Action={
          <fragment>
            <span className="thq-body-small">
              Contact us for pricing details
            </span>
          </fragment>
        }
        plan31={
          <fragment>
            <span className="landing-text037 thq-body-large">
              Enterprise plan
            </span>
          </fragment>
        }
        plan3Feature41={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Feature2={
          <fragment>
            <span className="thq-body-small">
              Contact us for pricing details
            </span>
          </fragment>
        }
        plan2Feature11={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature51={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature41={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature2={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature21={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature4={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Yearly={
          <fragment>
            <span className="thq-body-large">or $299 yearly</span>
          </fragment>
        }
        plan1Action1={
          <fragment>
            <span className="thq-body-small">
              Contact us for pricing details
            </span>
          </fragment>
        }
        plan2Action={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan3Feature1={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Feature3={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Price1={
          <fragment>
            <span className="landing-text051 thq-heading-3">
              Contact us for pricing details
            </span>
          </fragment>
        }
        plan2={
          <fragment>
            <span className="landing-text052 thq-body-large">
              Business plan
            </span>
          </fragment>
        }
        plan2Feature21={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Action1={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan3Feature2={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="landing-text056 thq-body-small">
              Choose the perfect plan for you
            </span>
          </fragment>
        }
        plan2Feature1={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="landing-text058 thq-heading-2">
              Our Pricing Plans
            </span>
          </fragment>
        }
        plan3Feature31={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1={
          <fragment>
            <span className="landing-text060 thq-body-large">
              Contact us for pricing details
            </span>
          </fragment>
        }
        plan21={
          <fragment>
            <span className="landing-text061 thq-body-large">
              Business plan
            </span>
          </fragment>
        }
        plan1Feature11={
          <fragment>
            <span className="thq-body-small">
              Contact us for pricing details
            </span>
          </fragment>
        }
        plan1Feature21={
          <fragment>
            <span className="thq-body-small">
              Contact us for pricing details
            </span>
          </fragment>
        }
        plan3Feature5={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan2Yearly1={
          <fragment>
            <span className="thq-body-large">or $29 monthly</span>
          </fragment>
        }
        plan2Price={
          <fragment>
            <span className="landing-text066 thq-heading-3">$29/mo</span>
          </fragment>
        }
        plan3Yearly1={
          <fragment>
            <span className="thq-body-large">or $49 monthly</span>
          </fragment>
        }
        plan2Feature31={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Feature11={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan1Yearly1={
          <fragment>
            <span className="thq-body-large">
              Contact us for pricing details
            </span>
          </fragment>
        }
        plan2Price1={
          <fragment>
            <span className="landing-text071 thq-heading-3">$299/yr</span>
          </fragment>
        }
        plan3Yearly={
          <fragment>
            <span className="thq-body-large">or $499 yearly</span>
          </fragment>
        }
        plan3Feature4={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        plan3Price1={
          <fragment>
            <span className="landing-text074 thq-heading-3">$499/yr</span>
          </fragment>
        }
        plan1Feature31={
          <fragment>
            <span className="thq-body-small">
              Contact us for pricing details
            </span>
          </fragment>
        }
        plan1Feature3={
          <fragment>
            <span className="thq-body-small">
              Contact us for pricing details
            </span>
          </fragment>
        }
        plan1Yearly={
          <fragment>
            <span className="thq-body-large">
              Contact us for pricing details
            </span>
          </fragment>
        }
        plan1Feature1={
          <fragment>
            <span className="thq-body-small">
              Contact us for pricing details
            </span>
          </fragment>
        }
        plan3Feature3={
          <fragment>
            <span className="thq-body-small">Feature text goes here</span>
          </fragment>
        }
        content2={
          <fragment>
            <span className="landing-text080 thq-body-large">
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
        plan3Action1={
          <fragment>
            <span className="thq-body-small">Get started</span>
          </fragment>
        }
        plan1Price={
          <fragment>
            <span className="landing-text084 thq-heading-3">
              Contact us for pricing details
            </span>
          </fragment>
        }
        plan3={
          <fragment>
            <span className="landing-text085 thq-body-large">
              Enterprise plan
            </span>
          </fragment>
        }
      ></Pricing14>
      <Steps2
        step1Description={
          <fragment>
            <span className="landing-text086 thq-body-small">
              Reach out to us via email, phone, or by visiting our office.
            </span>
          </fragment>
        }
        step3Description={
          <fragment>
            <span className="landing-text087 thq-body-small">
              Give us a call at +40 21 123 4567 during our office hours for
              immediate assistance.
            </span>
          </fragment>
        }
        step2Title={
          <fragment>
            <span className="thq-heading-2">Email</span>
          </fragment>
        }
        step2Description={
          <fragment>
            <span className="landing-text089 thq-body-small">
              Drop us an email at contact@teleporthq.io for any inquiries or
              support.
            </span>
          </fragment>
        }
        step1Title={
          <fragment>
            <span className="thq-heading-2">Contact us</span>
          </fragment>
        }
        step3Title={
          <fragment>
            <span className="thq-heading-2">Phone</span>
          </fragment>
        }
        step4Description={
          <fragment>
            <span className="landing-text092 thq-body-small">
              Visit us at Teleporthq, Bucharest, Romania to discuss your
              projects in person.
            </span>
          </fragment>
        }
        step4Title={
          <fragment>
            <span className="thq-heading-2">Office Address</span>
          </fragment>
        }
      ></Steps2>
      <Testimonial17
        author2Position={
          <fragment>
            <span className="thq-body-small">
              Marketing Manager, Company XYZ
            </span>
          </fragment>
        }
        author1Position={
          <fragment>
            <span className="thq-body-small">CEO, Company ABC</span>
          </fragment>
        }
        author1Name={
          <fragment>
            <span className="thq-body-large">John Doe</span>
          </fragment>
        }
        author3Name={
          <fragment>
            <span className="thq-body-large">Michael Johnson</span>
          </fragment>
        }
        review2={
          <fragment>
            <span className="landing-text098 thq-body-small">
              Working with Teleporthq has been a game-changer for our business.
              Their innovative solutions have helped us reach new heights and
              stand out in a competitive market.
            </span>
          </fragment>
        }
        author2Name={
          <fragment>
            <span className="thq-body-large">Jane Smith</span>
          </fragment>
        }
        author4Position={
          <fragment>
            <span className="thq-body-small">
              Creative Director, Design Co.
            </span>
          </fragment>
        }
        author4Name={
          <fragment>
            <span className="thq-body-large">Sarah Williams</span>
          </fragment>
        }
        content1={
          <fragment>
            <span className="landing-text102 thq-body-small">
              Teleporthq has been instrumental in helping us create a stunning
              website that truly represents our brand. Their attention to detail
              and responsiveness to our needs have been exceptional.
            </span>
          </fragment>
        }
        author3Position={
          <fragment>
            <span className="thq-body-small">Founder, Startup123</span>
          </fragment>
        }
        review1={
          <fragment>
            <span className="landing-text104 thq-body-small">
              We are extremely satisfied with the services provided by
              Teleporthq. The team is highly skilled and professional,
              delivering top-notch results in a timely manner.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">Client Testimonials</span>
          </fragment>
        }
        review3={
          <fragment>
            <span className="landing-text106 thq-body-small">
              I can&apos;t recommend Teleporthq enough! Their team goes above
              and beyond to ensure client satisfaction. They are truly experts
              in their field.
            </span>
          </fragment>
        }
        review4={
          <fragment>
            <span className="landing-text107 thq-body-small">
              Teleporthq exceeded our expectations with their creativity and
              technical expertise. They brought our vision to life and we
              couldn&apos;t be happier with the results.
            </span>
          </fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <fragment>
            <span className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </fragment>
        }
        location1Description={
          <fragment>
            <span className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </fragment>
        }
        heading1={
          <fragment>
            <span className="thq-heading-2">Locations</span>
          </fragment>
        }
        location2Description={
          <fragment>
            <span className="thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </fragment>
        }
        location1={
          <fragment>
            <span className="landing-text112 thq-heading-3">Bucharest</span>
          </fragment>
        }
        location2={
          <fragment>
            <span className="landing-text113 thq-heading-3">Cluj - Napoca</span>
          </fragment>
        }
      ></Contact10>
      <Footer4
        link5={
          <fragment>
            <span className="thq-body-small">Link 5</span>
          </fragment>
        }
        link3={
          <fragment>
            <span className="thq-body-small">Link 3</span>
          </fragment>
        }
        link1={
          <fragment>
            <span className="thq-body-small">Link 1</span>
          </fragment>
        }
        termsLink={
          <fragment>
            <span className="thq-body-small">Terms of Service</span>
          </fragment>
        }
        link2={
          <fragment>
            <span className="thq-body-small">Link 2</span>
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
        privacyLink={
          <fragment>
            <span className="landing-text121 thq-body-small">
              Privacy Policy
            </span>
          </fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Landing
