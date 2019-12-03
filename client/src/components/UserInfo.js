import React, { Component } from "react";
import Stripe from "react-stripe-checkout";
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormCheck from 'react-bootstrap/FormCheck'
const axios = require('axios')


class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      email: '',
      gender: '',
      toBuy: []
    }
  }

  componentDidMount() {
    console.log('confirm payment did mount')
    var self = this
    let cartelements = []
    let cartelementsfiltered = []
    axios.get('/Pay/Locks').then(function (response) {
      cartelements = response.data.map(el => { if (el.incart == true) { return el } })
      cartelementsfiltered = cartelements.filter(function (el) {
        return el != null
      })
    })
      .then(() => {
        console.log('cartelements are (confirm payment did mount)', cartelementsfiltered)
        this.setState({
          toBuy: cartelementsfiltered
        })
      })
      .catch(function (error) {
        console.log("error occurred when getting from /About/Locks")
        console.log(error);
      });
  }

  update() {
    console.log('update ')
    this.setState({
      name: this.refs.name.value,
      address: this.refs.address.value,
      email: this.refs.email,
      gender: this.refs.gender,
    });
  }

  submit = (total, lockid) => {
    console.log('mysubmit')
    this.props.submit(this.state.name, this.state.address, this.state.email, this.state.gender, total, lockid)
      this.setState({
        name: '',
        address: ''
      })

  }

  render() {
    let total = 0;
    let lockid = "";
    const tobuy = this.state.toBuy.map(element => {
      total += element.price
      lockid += element._id
      return (
        <div style={{ backgroundColor: "#1a1a1a" }}>
          <h5 style={{ color: 'white', marginLeft: '12.5rem' }}>$ {element.price}&emsp;&emsp;{element.name}</h5>
        </div>
      )
    })
    console.log('total is ', total)
    console.log('lockid is ', lockid)
    return (
      <div style={{ backgroundColor: "#1a1a1a" }}>
        <div style={{ marginLeft: '5rem' }}>
          <br></br>
          <br></br>
          <h3 style={{ color: 'white' }}>Order Details</h3>
          <br></br>
          <p><span >{tobuy}</span></p>
          <h3 style={{ color: 'white' }}><span >Your Total: $ {total}</span></h3>
          <br></br>
          <br></br>
        </div>
        <div className="form-group myinput">
          <input
            id="name"
            name="name"
            class="form-control"
            type="text"
            placeholder="Your name"
            ref="name"
            onChange={this.update.bind(this)}
            value={this.state.name}
            required
          />
        </div>
        <div className="form-group myinput" s>
          <input
            id="address"
            name="address"
            class="form-control"
            type="text"
            placeholder="Your address"
            ref="address"
            value={this.state.address}
            onChange={this.update.bind(this, total, lockid)}
            required
          />
        </div>
        <div className="form-group myinput">
          <input
            id="email"
            name="email"
            class="form-control"
            type="text"
            placeholder="Your email"
            ref="email"
            onChange={this.update.bind(this)}
            required
          />
        </div>
        <div className="form-group myinput">
          <input
            id="gender"
            name="gender"
            class="form-control"
            type="text"
            placeholder="Gender"
            ref="gender"
            onChange={this.update.bind(this)}
            required
          />
        </div>
        <button onClick={this.submit.bind(this, total, lockid)} className="btn btn-primary" style={{ backgroundColor: 'grey', marginLeft: '5rem' }} type="submit">Pre-Order</button>
      </div>
    );
  }
}

export default UserInfo;
