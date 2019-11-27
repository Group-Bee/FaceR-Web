import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class LearnMore extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
          
          <br></br>
          <br></br>

          <h1>Interested in Learning More?</h1>

          

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
                <Button variant="primary" type="submit" style={{borderRadius: 10,
                  borderWidth: 1}}>
                Submit
                </Button>


              </Form>
              
              
            
            </td>

            <td>
              <button
                style={{
                  width: "60%",
                  textAlign: "center",
                  borderRadius: 10,
                  borderWidth: 1,
                  marginTop: 70
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
