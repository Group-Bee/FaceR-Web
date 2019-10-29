import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <form action="/contact" id="contact-form" method="post" role="form">
          <fieldset>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Your email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message here"
              rows="3"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
