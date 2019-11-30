import React, { Component } from "react";
import ContactForm from "../components/ContactForm";

import { FacebookIcon, TwitterIcon } from "react-share";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div
          className="jumbotron"
          style={{ backgroundColor: "#1a1a1a", marginBottom: "-100px" }}
        >
          <h1 style={{ color: "white" }}>Contact us!</h1>
          <br></br>
          <ContactForm />
          <hr
            style={{
              display: "block",
              height: "1px",
              border: "0",
              borderTop: "1px solid #ccc",
              margin: "1em 0",
              padding: "0"
            }}
          ></hr>
          <table
            style={{ color: "white", tableLayout: "fixed", width: "100%" }}
          >
            <tr>
              <td>
                <h1 style={{ color: "white" }}>FaceR</h1>
              </td>
              <td>
                <a className="nav-link" href="/">
                  <h5
                    style={{ color: "white", textDecorationLine: "underline" }}
                  >
                    HOME
                  </h5>
                </a>
                <a className="nav-link" href="/Features">
                  <h5
                    style={{ color: "white", textDecorationLine: "underline" }}
                  >
                    FEATURES
                  </h5>
                </a>
                <a className="nav-link" href="/Product">
                  <h5
                    style={{ color: "white", textDecorationLine: "underline" }}
                  >
                    PRODUCT
                  </h5>
                </a>
                <a className="nav-link" href="/About">
                  <h5
                    style={{ color: "white", textDecorationLine: "underline" }}
                  >
                    ABOUT
                  </h5>
                </a>
                <a className="nav-link" href="/Pay">
                  <h5
                    style={{ color: "white", textDecorationLine: "underline" }}
                  >
                    BUY
                  </h5>
                </a>
              </td>

              <td style={{ paddingLeft: "10%" }}>
                <a href="https://www.facebook.com">
                  <FacebookIcon size={32} round={true} />
                </a>
                <a href="https://www.kickstarter.com">
                  <img
                    src={require("../assets/iconfinder_kickstarter_3069717.png")}
                    style={{ float: "left" }}
                  />
                </a>
                <a href="https://www.twitter.com">
                  <TwitterIcon size={32} round={true} />
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
