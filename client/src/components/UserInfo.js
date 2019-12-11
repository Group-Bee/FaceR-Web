import React, { Component } from "react";
const axios = require('axios')

//This component will return a form and connect its input to functions that will initialize/add to a collection in mongodb
class UserInfo extends Component {
  constructor(props) {
    super(props)
    //state will include input fields and array detailing which locks the user intends to buy
    this.state = {
      name: '',
      address: '',
      email: '',
      gender: '',
      toBuy: []
    }
  }

  componentDidMount() {
    //DEBUG
    console.log('confirm payment did mount')
    let cartelements = []
    let cartelementsfiltered = []
    //use axios to send a get request that will ultimately end with a response containing a data field that will be equal to our toBuy array
    axios.get('/Pay/Locks').then(function (response) {
      cartelements = response.data.map(el => { if (el.incart === true) { return el } })
      cartelementsfiltered = cartelements.filter(function (el) {
        return el != null
      })
    })
      .then(() => {
        //DEBUG
        console.log('cartelements are (confirm payment did mount)', cartelementsfiltered)
        //set state equal to filtered response from controller/database
        this.setState({
          toBuy: cartelementsfiltered
        })
      })
      .catch(function (error) {
        //DEBUG/error handling
        console.log("error occurred when getting from /About/Locks")
        console.log(error);
      });
  }

  //this function is called anytime an input field is changed
  update() {
    //DEBUG
    console.log('update ')
    //set the state variables so that they correspond the values currently in the corresponding input fields
    this.setState({
      name: this.refs.name.value,
      address: this.refs.address.value,
      email: this.refs.email.value,
      gender: this.refs.gender.value,
    });
  }

  //send state variables as input to the function that was passed down to this component as a prop on click of 'Pre-order' button
  submit = (total, lockid) => {
    //DEBUG
    console.log('mysubmit')
    console.log(this.state.name, this.state.address)
    //call function which exist in parent component (ConfirmPayment.js)
    this.props.submit(this.state.name, this.state.address, this.state.email, this.state.gender, total, lockid)
      this.setState({
        name: '',
        address: '',
        email: '',
        gender: ''
      })

  }

  render() {
    //get locks the user intends to buy in the appropriate format, the corresponding total, and the lockids for that set of locks
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
    //DEBUG
    console.log('total is ', total)
    console.log('lockid is ', lockid)
    //return will be form connected to above function which manipulate the state and call the appropriate functions as a response to changes/submission
    //notice the value of the fields is dependent on the state (reset after submission)
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
            value={this.state.name}
            onChange={this.update.bind(this)}
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
            value={this.state.email}
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
            value={this.state.gender}
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
