import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./views/landingPage";
import NotFoundPage from "./views/notFoundPage";
import Contact from "./views/contact";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />

        <Route path="/contact" exact component={Contact} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
