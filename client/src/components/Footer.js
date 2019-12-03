import React, { Component } from "react";
import ContactForm from "../components/ContactForm";

import { FacebookIcon, TwitterIcon } from "react-share";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div
          className="jumbotron"
          style={{ backgroundColor: "#1a1a1a", marginBottom: "-400px" }}
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
            <center>
                <div class="row" style={{display: "inline-block", lineHeight: "10em"}}>
                  <td class="col-md-6" style={{paddingLeft: "10%", width: "64", height: "64"}}>
                  <a href="/">
                        <img
                          src="images/logo.svg"
                          style={{}}
                          alt="FaceRLogo"
                          width= "150"
                        />
                      </a>
                  </td>
                </div>
              </center>
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

              <center>
                <div class="row" style={{display: "inline-block", lineHeight: "10em"}}>
                  <td class="col-md-6" style={{paddingLeft: "10%", width: "64", height: "64"}}>
                    <a href="https://www.facebook.com">
                        <FacebookIcon size={64} round={true} />
                      </a>
                  </td>

                  <td class="col-md-6" style={{paddingLeft: "10%", width: "64", height: "64"}}>
                      <a href="https://www.twitter.com">
                        <TwitterIcon size={64} round={true} />
                      </a>
                  </td>

                  <td class="col-md-6" style={{paddingLeft: "10%", width: "64", height: "64"}}>
                  <a href="https://www.kickstarter.com">
                        <img
                          src={require("../assets/kickstarter_icon.svg")}
                          style={{}}
                          alt="KickstarterLogo"
                          width= "64"
                        />
                      </a>
                  </td>
                </div>
              </center>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
