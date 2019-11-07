import React, { Component } from "react";

export class LearnMore extends Component {
  render() {

    return (

        

        <div class="card">
            <div class="card-body">

            <br>
            </br>

            <h1>Interested in Learning More?</h1>

            <br>
            </br>
            
            <td>
                <button
                  style={{
                    width: "75%",
                    textAlign: "center"
                  }}
                  type="button"
                  class="btn btn-success"
                >
                  <h2 style={{ color: "white" }}>Sign up for our Mailing List!</h2>
                </button>
              </td>

              <td>
                <button
                  style={{
                    width: "75%",
                    textAlign: "center"
                  }}
                  type="button"
                  class="btn btn-success"
                >
                  <h2 style={{ color: "white" }}>Support us on kickstarter!</h2>
                </button>
              </td>

            </div>
        </div>
    );

  }
}

  export default LearnMore;