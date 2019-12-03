import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./views/landingPage";
import NotFoundPage from "./views/notFoundPage";
import AboutPage from "./views/aboutPage";
import FeaturePage from "./views/featurePage"
import Payment from "./views/Payment"
import ConfirmPayment from "./views/ConfirmPayment"


class App extends React.Component {
  constructor(props) {

    console.log('App.js constructor')
    super(props)
    console.log(props)
    this.state = {
      incart: []
    }
  }

  addtoCart(element) {
    this.setState({
      incart: this.state.incart.concat(element)
    })
    console.log('added to cart', this.state.incart)
  }

  removefromCart(element){
    console.log('removing, element id is ', element.id)
    console.log('ids of cart elements are ', this.state.incart.filter(elem => {return elem.id}))
    this.setState({
      incart: this.state.incart.filter(elem=>{ return (elem.id !== element.id)})
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
