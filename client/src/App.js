import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BubblePage from "./components/BubblePage"
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute.js"
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <PrivateRoute path="/bubbles" component={BubblePage} />
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
