import React, { Component } from "react";
import "../bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class notFoundPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" id="nav">
          <Header />
        </header>
        <div
          className="Body"
          style={{
            paddingTop: "100px",
            backgroundColor: "grey",
            paddingBottom: "50px"
          }}
        >
          <h1>We're sorry, the page you're looking for cannot be found.</h1>
          <h3>The page either doesn't exist, or we took you to the wrong place</h3>
          <h2>¯\_(^_^)_/¯</h2>
          <h3>Try one of the links below to help redirect you.</h3>
          <br/>
          {/*This container will be used to list the possible places the user can go */}
          <div className="Container">
            <div className="row">
              <div className="col-md-4 border-right">
                <a className="nav-link" href="/">
                  Home Page
                </a>
                <p className="text-white">Product Description</p>
                <p className="text-white">How to Purchase</p>
              </div>
              <div className="col-md-4 border-right">
                <a className="nav-link" href="About">
                  About Page
                </a>
                <p className="text-white">Brief History of Locks</p>
                <p className="text-white">Future of Locks</p>
                <p className="text-white">Customer Testimonials</p>
                <p className="text-white">How to Learn More</p>
              </div>
              <div className="col-md-4">
                <a className="nav-link" href="Pay">
                  Payment Page
                </a>
                <p className="text-white">Purchase Locks</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
