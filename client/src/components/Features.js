import React, { Component } from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import LearnMore from "../components/LearnMore";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
export class Features extends Component {
    render() {
      return (


        

        <Jumbotron fluid>
        <Container>
            

            <img
                    src="images/August-Smart-Lock-Pro-Profile.jpg"
                    style={{ float: "left" }}
                    alt="Lock Features"
                    height="375"
                    width="375"
                  />

                  <br></br>
                  <br></br>
            <h1>FaceR Lock Pro</h1>
            <p>
            The future of security, convenience, and locks. 
            </p>

            <br></br>

            <Row>
            <Col sm="4">
                <Card body>
                <CardTitle>Security</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <br></br>
                <br></br>
                <br></br>
                </Card>
            </Col>
            <Col sm="4">
                <Card body>
                <CardTitle>Ease of Use</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <br></br>
                <br></br>
                <br></br>
                </Card>
            </Col>
            <Col sm="4">
                <Card body>
                <CardTitle>Data Privacy</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <br></br>
                <br></br>
                <br></br>
                </Card>
            </Col>
            </Row>

            <br></br>
            <br></br>
            <br></br>
            <LearnMore />

            <h1>FaceR Lock Pro</h1>
            <p>
            The future of security, convenience, and locks. 
            </p>

        </Container>

        </Jumbotron>
       

        ) 
    }
}

export default Features;