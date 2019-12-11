import React, { Component } from "react";
import Header from "../components/Header";
import "../App.css";
import "../bootstrap.min.css";
import UserInfo from "../components/UserInfo"
import { FacebookIcon, TwitterIcon } from "react-share";
const axios = require('axios')

//This view/component ended up corresponding to the 'Confirm Payment' page
export default class ConfirmPayment extends Component {

  //control is transferred to this function by child component when submit button is clicked
  submit = (name, address, email, gender, total, lockid) =>{
    //DEBUG
    console.log("submitted", name)
    console.log(name, address, email, gender, total, lockid)
    if(name === undefined || address === undefined || gender === undefined || total === undefined || lockid === undefined|| name === '' || address === '' || gender === '' || total === '' || lockid === ''){
      //DEBUG
      console.log('cannot proceed')
      //send alert when user attempts to submit incomplete form
      alert("Please fill out the required information or reload the page")
    }else{
      //uses axios to update the userinfo collection (this will be routed to controller which will carry out an update on the database)
      axios.post("/ConfirmPayment/Pay", {name: name, address: address, email: email, gender: gender, total: total, lockid: lockid})
      //send alert when user's information has been successfully entered in the database
      alert("Your information has been successfully recorded!")
    }
  }

  render() {

    //return a header, followed by the UserInfo component and aspects of the footer not including the contact us form (it would be redundant on this page)
    return (
      <div style={{backgroundColor: "#1a1a1a"}}>
        <Header incart={this.props.incart} add={this.props.add.bind(this)} remove={this.props.remove.bind(this)} />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <UserInfo submit={this.submit.bind(this)}/>
        <div>
          <div
            className="jumbotron"
            style={{ backgroundColor: "#1a1a1a", marginBottom: "-400px" }}
            >
            <br></br>
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
                <center>
                  <div class="row" style={{display: "inline-block", lineHeight: "10em"}}>
                    <td class="col-md-6" style={{paddingLeft: "10%", width: "64", height: "64"}}>
                      <a href="/">
                        <img
                          src="images/logo.svg"
                          style={{}}
                          alt="FaceRLogo"
                          width= "150"
                          />
                      </a>
                    </td>
                  </div>
                </center>
                <td
                  align="center"
                  >
                  <a className="nav-link" href="/">
                    <h5
                      style={{ color: "white", textDecorationLine: "underline" }}
                      >
                      HOME
                    </h5>
                  </a>
                  <a className="nav-link" href="/Features">
                    <h5
                      style={{ color: "white", textDecorationLine: "underline" }}
                      >
                      FEATURES
                    </h5>
                  </a>
                  <a className="nav-link" href="/About">
                    <h5
                      style={{ color: "white", textDecorationLine: "underline" }}
                      >
                      ABOUT
                    </h5>
                  </a>
                  <a className="nav-link" href="/Pay">
                    <h5
                      style={{ color: "white", textDecorationLine: "underline" }}
                      >
                      BUY
                    </h5>
                  </a>
                </td>

                <center>
                  <div class="row" style={{display: "inline-block", lineHeight: "10em"}}>
                    <td class="col-md-6" style={{paddingLeft: "10%", width: "64", height: "64"}}>
                      <a href="https://www.facebook.com">
                        <FacebookIcon size={64} round={true} />
                      </a>
                    </td>

                    <td class="col-md-6" style={{paddingLeft: "10%", width: "64", height: "64"}}>
                      <a href="https://www.twitter.com">
                        <TwitterIcon size={64} round={true} />
                      </a>
                    </td>

                    <td class="col-md-6" style={{paddingLeft: "10%", width: "64", height: "64"}}>
                      <a href="https://www.kickstarter.com">
                        <img
                          src={require("../assets/kickstarter_icon.svg")}
                          style={{}}
                          alt="KickstarterLogo"
                          width= "64"
                          />
                      </a>
                    </td>
                  </div>
                </center>
              </tr>
            </table>
          </div>
        </div>
      </div>
    )
  }
}
