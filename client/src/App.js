import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./views/landingPage";
import NotFoundPage from "./views/notFoundPage";
import AboutPage from "./views/aboutPage";
import FeaturePage from "./views/featurePage"
import Payment from "./views/Payment"
import ConfirmPayment from "./views/ConfirmPayment"

const axios = require('axios')

//In our project, App.js handles routing and passes down the elements in the dropdown through its incart state (which will be updated through an axios request)
class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      incart: []
    }
  }

  componentDidMount(){
    //DEBUG
    console.log('app.js did mount')
    let cartelements = []
    let cartelementsfiltered = []
    //use axios to send a get request that will ultimately end with a response containing a data field that will be equal to our incart array
    axios.get('/Pay/Locks').then(function(response){
      //lock will only be added to incart if incart field in json is true
      cartelements = response.data.map(el => {if (el.incart === true){ return el}})
      cartelementsfiltered = cartelements.filter(function(el){
        return el != null
      })
    })
    .then(() =>{
      //DEBUG
      console.log('cartelements are (app.js did mount)', cartelementsfiltered)
      //set state equal to filtered response from controller/database
      this.setState({
        incart: cartelementsfiltered
      })
    })
    .catch(function (error) {
      //DEBUG/error handling
      console.log("error occurred when getting from /About/Locks")
      console.log(error);
    });
  }

  //this function will be called when the 'Add to Cart' button clicked on Buy page
  addtoCart(element) {
    //DEBUG
    console.log('adding element')
    //we will update the 'incart' field of this particular lock in the database
    let lockpath = '/Pay/Locks/'+element._id
    //DEBUG
    console.log('path to put is ', lockpath)
    //update lock (incart field) in database to be in the cart (true) or not in the cart (false)
    axios.put(lockpath, {id: element.id, description: element.description, image: element.image, name: element.name, price: element.price, incart: true, bought: element.bought}).then(function(response){
      //DEBUG
      console.log("response (axios, app.js)", response)
    }).catch(function (error) {
      //DEBUG/error handling
      console.log("error occurred when putting to  ", lockpath)
      console.log(error);
    });
    //update incart state after incart property of a lock has been updated (include the added lock in the cart dropdown)
    let cartelements = []
    let cartelementsfiltered = []
    axios.get('Pay/Locks')
    .then(function(response){
      cartelements = response.data.map(el => {if (el.incart === true){ return el}})
      cartelementsfiltered = cartelements.filter(function(el){
        return el != null
      })
    })
    .then(() =>{
      //DEBUG
      console.log('cartelements are ', cartelementsfiltered)
      //set state equal to filtered response from controller/database
      this.setState({
        incart: cartelementsfiltered
      })
    })
    .catch(error => {
      //DEBUG/error handling
      console.log('error in getting About/Locks in app.js')
      console.log(error)
    })
    //DEBUG
    console.log('added to cart', this.state.incart)
  }

  //same as addtoCart, but called when remove button within dropdown is clicked and changes incart from true to false instead of the opposite
  removefromCart(element){
    //DEBUG
    console.log('removing element')
    let lockpath = '/Pay/Locks/'+element._id
    console.log('path to put is ', lockpath)
    //update lock (incart field) in database to be in the cart (true) or not in the cart (false)
    axios.put(lockpath, {id: element.id, description: element.description, image: element.image, name: element.name, price: element.price, incart: false, bought: element.bought}).then(function(response){
      //DEBUG
      console.log("response (axios, app.js)", response)
    }).catch(function (error) {
      //DEBUG/error handling
      console.log("error occurred when putting to  ", lockpath)
      console.log(error);
    });
    this.setState({
      incart: this.state.incart.filter(elem=>{ return (elem._id !== element._id)})
    })
    //DEBUG
    console.log('removed from cart', this.state.incart)
  }

  render() {
    //DEBUG
    console.log('re-rendering', this.state.incart)
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <LandingPage incart={this.state.incart} add={this.addtoCart.bind(this)} remove={this.removefromCart.bind(this)}/>} />
          <Route exact path="/About" render={(props) => <AboutPage incart={this.state.incart} add={this.addtoCart.bind(this)} remove={this.removefromCart.bind(this)}/>} />
          <Route exact path="/Pay" render={(props) => <Payment incart={this.state.incart} add={this.addtoCart.bind(this)} remove={this.removefromCart.bind(this)}/>} />
          <Route exact path="/Features" render={(props) => <FeaturePage incart={this.state.incart} add={this.addtoCart.bind(this)} remove={this.removefromCart.bind(this)}/>} />
          <Route exact path="/ConfirmPayment" render={(props) => <ConfirmPayment incart={this.state.incart} add={this.addtoCart.bind(this)} remove={this.removefromCart.bind(this)}/>} />
          <Route exact component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
