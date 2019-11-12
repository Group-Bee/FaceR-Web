import React, { Component } from "react";
import "../bootstrap.min.css";
import Header from "../components/Header";
import ContactForm from "../components/ContactForm";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Header  incart={this.props.incart} add={this.props.add.bind(this)}  remove={this.props.remove.bind(this)}/>
        <div
          style={{
            paddingTop: "100px",
            backgroundColor: "grey"
          }}
        >
          <div
            style={{
              backgroundColor: "grey",
              alignContent: "center",
              marginLeft: "auto",
              marginRight: "auto",
              width: "50em"
            }}
          >
            <div className="card text-white bg-primary mb-3">
              <div className="card-body">
                <h4 className="card-title">Contact us!</h4>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
