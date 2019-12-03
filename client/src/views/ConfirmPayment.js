import React, { Component } from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import AboutProduct from "../components/AboutProduct";
import Footer from "../components/Footer";
import "../App.css";
import "../bootstrap.min.css";
import UserInfo from "../components/UserInfo"
import { FacebookIcon, TwitterIcon } from "react-share";
const axios = require('axios')

export default class ConfirmPayment extends Component {

  submit = (name, address, email, gender, total, lockid) =>{
    console.log("submitted", name.value)
    console.log(name.value, address.value, email.value, gender.value, total, lockid)
    if(name.value == undefined || address.value == undefined || gender.value == undefined || total == undefined || lockid == undefined|| name.value == '' || address.value == '' || gender.value == '' || total == '' || lockid == ''){
      console.log('cannot proceed')
      alert("Please fill out the required information or reload the page")
    }else{
      axios.post("/ConfirmPayment/Pay", {name: name.value, address: address.value, email: email.value, gender: gender.value, total: total, lockid: lockid})
      alert("Your information has been successfully recorded!")
    }
  }

  render() {

    return (
      <div style={{backgroundColor: "#1a1a1a"}}>
        <Header incart={this.props.incart} add={this.props.add.bind(this)} remove={this.props.remove.bind(this)} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <UserInfo submit={this.submit.bind(this)}/>
        <div style={{ position: 'relative'}}>
          <div
            className="jumbotron"
            style={{ backgroundColor: "#1a1a1a", marginBottom: "-100px", float: 'bottom' }}
            >
            <h1 style={{ color: "white" }}>Contact us!</h1>
            <br></br><hr
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
                  <a className="nav-link" href="/">
                    <h5
                      style={{ color: "white", textDecorationLine: "underline" }}
                      >
                      HOME
                    </h5>
                  </a>
                  <a className="nav-link" href="/features">
                    <h5
                      style={{ color: "white", textDecorationLine: "underline" }}
                      >
                      FEATURES
                    </h5>
                  </a>
                  <a className="nav-link" href="/product">
                    <h5
                      style={{ color: "white", textDecorationLine: "underline" }}
                      >
                      PRODUCT
                    </h5>
                  </a>
                  <a className="nav-link" href="/about">
                    <h5
                      style={{ color: "white", textDecorationLine: "underline" }}
                      >
                      ABOUT
                    </h5>
                  </a>
                  <a className="nav-link" href="/pay">
                    <h5
                      style={{ color: "white", textDecorationLine: "underline" }}
                      >
                      PAY
                    </h5>
                  </a>
                </td>

                <td style={{ paddingLeft: "10%" }}>
                  <a href="https://www.facebook.com">
                    <FacebookIcon size={32} round={true} />
                  </a>
                  <a href="https://www.kickstarter.com">
                    <img
                      src={require("../assets/iconfinder_kickstarter_3069717.png")}
                      style={{ float: "left" }}
                      />
                  </a>
                  <a href="https://www.twitter.com">
                    <TwitterIcon size={32} round={true} />
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
