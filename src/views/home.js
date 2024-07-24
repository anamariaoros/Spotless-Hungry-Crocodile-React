import React from 'react'

import { Helmet } from 'react-helmet'

import Contact2 from '../components/contact2'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
        <meta property="og:title" content="Spotless Hungry Crocodile" />
      </Helmet>
      <Contact2></Contact2>
    </div>
  )
}

export default Home
