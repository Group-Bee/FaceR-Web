import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
export class Features extends Component {
    render() {
      return (


        

        <Jumbotron fluid>
        <Container>
            <h1>FaceR Lock</h1>
            <p>
            The future of security, convenience, and locks. 
            </p>

            <img
                    src="images/August-Smart-Lock-Pro-Profile.jpg"
                    style={{ float: "center" }}
                    alt="Lock Features"
                    height="400"
                    width="400"
                  />
            <h1>Convience</h1>
            <p>
            Getting in and out of your home has never been more convenient, more secure, and smart. 
            </p>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

        </Container>
        </Jumbotron>

        

        ) 
    }
}

export default Features;