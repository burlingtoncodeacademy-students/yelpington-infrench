import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";
import Header from "./components/Header"
import NotFound from "./components/NotFound";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {

  fetch('/api')
  .then((res) => res.json())
  .then((obj) => {
    console.log(obj)
  })

  return (
    <BrowserRouter>
    <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/Restaurant/:restaurantid" render={({ match }) => ( <Restaurant restId={match.params.restaurantid} />)} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
