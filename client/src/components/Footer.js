import React, { Component } from "react";
import ContactForm from "../components/ContactForm";

import { FacebookIcon, TwitterIcon } from "react-share";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron" style={{ backgroundColor: "#1a1a1a" }}>
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
                <FacebookIcon size={32} round={true} />
                <TwitterIcon size={32} round={true} />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
