import React, { Component } from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import PayEntry from "../components/PayEntry"

let loadedStripe = false;

//This view/component ended up being called the "Buy" page in the final product
class Payment extends Component {


  render = function () {

    //return the PayEntrys (formatted within child component) with a header and footer while passing down props appropriately (this.props.incart is received from App.js)
    return (
      <div className="App bg-dark">
        <header className="App-header" id="nav">
          <Header  incart={this.props.incart} add={this.props.add.bind(this)} remove={this.props.remove.bind(this)}/>
        </header>
        <div className="App bg-dark" style={{paddingLeft: "10%",paddingRight: "10%"}}>
          <div className="bg-dartrk" style={{paddingTop: '2%', paddingLeft: '10%', float: 'left', width: '100%' }}>
            <h1 style={{ float: 'left', color: 'white' }}>Locks</h1>
          </div>
          <div className="bg-dark" style={{ height: '50px' }}>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <PayEntry incart={this.props.incart} add={this.props.add.bind(this)}></PayEntry>
          </div>

        </div>
        <Footer />
      </div>
    )
  }
}

export default Payment
