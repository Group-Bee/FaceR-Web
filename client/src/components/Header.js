import React, { Component } from "react";
import Cart from './Cart'

export class Header extends Component {

  render() {
    return (
      <div style={{ position: "fixed", top: "0", width: "100%", zIndex: '0' }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand">
            FaceR
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="About">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="Pay">
                  Pay
                </a>
              </li>
              </ul>
              <ul className = "navbar-nav ml-auto">
              <div className = "cont">
              <Cart  incart={this.props.incart} add={this.props.add.bind(this)} remove={this.props.remove.bind(this)}/>
              </div>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
