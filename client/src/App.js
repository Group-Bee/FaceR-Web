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
    console.log('constructing')
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
    console.log("cart's state is ", this.state.incart)
  }

  removefromCart(element){
    this.setState({
      incart: this.state.incart.filter(elem=>{ return (elem.id != element.id)})
    })
    console.log('removed from cart')
  }

  render() {
    console.log('re-rendering')
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
