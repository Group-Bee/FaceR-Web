import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./views/landingPage";
import NotFoundPage from "./views/notFoundPage";
import AboutPage from "./views/aboutPage";
import FeaturePage from "./views/featurePage"
import Payment from "./views/Payment"
import ConfirmPayment from "./views/ConfirmPayment"

const axios = require('axios')

class App extends React.Component {
  constructor(props) {
    console.log('App.js constructor')
    super(props)
    console.log(props)
    this.state = {
      incart: []
    }
  }
  
  componentDidMount(){
    console.log('app.js did mount')
    var self = this
    let cartelements = []
    let cartelementsfiltered = []
    axios.get('/About/Locks').then(function(response){
      cartelements = response.data.map(el => {if (el.incart == true){ return el}})
      cartelementsfiltered = cartelements.filter(function(el){
        return el != null
      })
    })
    .then(() =>{
      console.log('cartelements are (app.js did mount)', cartelementsfiltered)
      this.setState({
        incart: cartelementsfiltered
      })
    })
    .catch(function (error) {
      console.log("error occurred when getting from /About/Locks")
      console.log(error);
    });
  }


  addtoCart(element) {
    console.log('adding element')
    let lockpath = '/About/Locks/'+element._id
    console.log('path to put is ', lockpath)
    //update lock in database to be incart (true) or not in cart (false)
    axios.put(lockpath, {id: element.id, description: element.description, image: element.image, name: element.name, price: element.price, incart: true, bought: element.bought}).then(function(response){
      console.log("response (axios, app.js)", response)
    }).catch(function (error) {
      console.log("error occurred when putting to  ", lockpath)
      console.log(error);
    });
    let cartelements = []
    let cartelementsfiltered = []
    axios.get('About/Locks')
    .then(function(response){
      cartelements = response.data.map(el => {if (el.incart == true){ return el}})
      cartelementsfiltered = cartelements.filter(function(el){
        return el != null
      })
    })
    .then(() =>{
      console.log('cartelements are ', cartelementsfiltered)
      this.setState({
        incart: cartelementsfiltered
      })
    })
    .catch(error => {
      console.log('error in getting About/Locks in app.js')
      console.log(error)
    })
    console.log('added to cart', this.state.incart)
  }

  removefromCart(element){
    console.log('removing element')
    let lockpath = '/About/Locks/'+element._id
    console.log('path to put is ', lockpath)
    //update lock in database to be incart (true) or not in cart (false)
    axios.put(lockpath, {id: element.id, description: element.description, image: element.image, name: element.name, price: element.price, incart: false, bought: element.bought}).then(function(response){
      console.log("response (axios, app.js)", response)
    }).catch(function (error) {
      console.log("error occurred when putting to  ", lockpath)
      console.log(error);
    });
    this.setState({
      incart: this.state.incart.filter(elem=>{ return (elem._id !== element._id)})
    })
    console.log('removed from cart', this.state.incart)
  }

  render() {
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
//Test

//CHANGED FILE
