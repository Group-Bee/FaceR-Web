import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class LearnMore extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
          <br></br>

          <h1>Interested in Learning More?</h1>

          <br></br>

          <center>
            <td>
              <Form>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Enter your Email address!</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  If you would like to be signed up for our mailing list.
                </Form.Text>


                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>


              </Form>
              
              
            
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
                <h2 style={{ color: "white" }}>
                  <a href="kickstarter.com">Support us on kickstarter!</a>
                </h2>
              </button>
            </td>
          </center>
        </div>
      </div>
    );
  }
}

export default LearnMore;
