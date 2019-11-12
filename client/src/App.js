import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./views/landingPage";
import NotFoundPage from "./views/notFoundPage";
import AboutPage from "./views/aboutPage";
import Payment from "./views/Payment"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      incart: []
    }
  }

  addtoCart(element) {
    console.log('add element, app.js', element)
    this.setState({
      incart: this.state.incart.concat(element)
    })
    console.log('incart, app.js', this.state.incart)
  }

  render() {
    console.log('re-rendering')
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={(props) => <LandingPage incart={this.state.incart} add={this.addtoCart.bind(this)}/>} />
          <Route exact path="/About" render={(props) => <AboutPage incart={this.state.incart} add={this.addtoCart.bind(this)}/>} />
          <Route exact path="/Pay" render={(props) => <Payment incart={this.state.incart} add={this.addtoCart.bind(this)}/>} />
          <Route exact component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
//Test

//CHANGED FILE
