import React from 'react'
import Layout from '../components/layout'

import Background from '../img/contact-bg.jpg';
const mastheadStyles = {
  backgroundImage: `url(${Background})`
}

export default () => (
  <Layout>
    <header class="masthead" style={mastheadStyles}>
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="page-heading">
              <h1>Contact Me</h1>
              <span class="subheading">Have questions? I have answers.</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
          <form name="sentMessage" id="contactForm" novalidate>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label for="name">Name
                  <input type="text" class="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name."/>
                </label>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label for="email">Email Address
                  <input type="email" class="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address."/>
                </label>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group col-xs-12 floating-label-form-group controls">
                <label for="phone">Phone Number
                  <input type="tel" class="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number."/>
                </label>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label for="message">Message
                  <textarea rows="5" class="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message."></textarea>
                </label>
                <p class="help-block text-danger"></p>
              </div>
            </div>
            <br/>
            <div id="success"></div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <hr></hr>
  </Layout>
)