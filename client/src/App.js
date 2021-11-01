// imports stylesheet
import "./App.css";
// imports react
import React from "react";
// imports Home component
import Home from "./components/Home";
// imports Restaurant component
import Restaurant from "./components/Restaurant";
// imports Header component
import Header from "./components/Header"
// imports NotFound (404 page) component
import NotFound from "./components/NotFound";
// imports Switch, Route, and Browser router from react router dom
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    // browserrouter wraps all contents
    <BrowserRouter>
    {/* dsiplay header at top of page on all pages */}
    <Header />
    {/* contains routes to each page */}
      <Switch>
        {/* route to render Home component */}
        <Route exact path="/" render={() => <Home />} />
        {/* route to render component showing individual restaurants. using render allows props to be passed */}
        <Route path="/Restaurant/:restaurantid" render={({ match }) => ( <Restaurant restId={match.params.restaurantid} />)} />
        {/* all other paths route to NotFound */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
