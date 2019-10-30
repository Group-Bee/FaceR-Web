import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./views/landingPage";
import NotFoundPage from "./views/notFoundPage";
import AboutPage from "./views/aboutPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/About" exact component={AboutPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
//Test

//CHANGED FILE