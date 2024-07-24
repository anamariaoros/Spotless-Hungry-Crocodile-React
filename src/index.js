import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Landing from './views/landing'
import About from './views/about'
import Contact from './views/contact'
import Pricing from './views/pricing'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Landing} exact path="/landing" />
        <Route component={About} exact path="/about" />
        <Route component={Contact} exact path="/contact" />
        <Route component={Pricing} exact path="/pricing" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
