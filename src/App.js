import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Contact from "./components/Contact"
import Services from './components/Services'
import Products from "./components/Products"
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import PageNotFound from './components/PageNotFound'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/contact-us" component={Contact} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/products" component={Products} />
          <div className="container">
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div>
        <Route exact path="/page-not-found" component={PageNotFound} />
      </BrowserRouter>
    )
  }
}
