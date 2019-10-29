import React, { Component } from "react";
import "../bootstrap.min.css";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <form
          className="form-group"
          action="/contact"
          id="contact-form"
          method="post"
          role="form"
          onSubmitCapture={() => alert("Message submitted!")}
        >
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                class="form-control"
                type="text"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                class="form-control"
                type="text"
                placeholder="Your email"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message here"
                class="form-control"
                rows="3"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}
