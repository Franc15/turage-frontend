import MainPage from "./index.jsx";
import driverLogin from "./driverLogin.jsx"
import passengerLogin from "./passengerLogin.jsx"

import React, { Component } from 'react';
// import ReactDOM from "react-dom";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
       {/*All our Routes goes here!*/}
       <Route path="/" component={MainPage} />
       <Route path="/driverLogin" component={driverLogin} />
       <Route path="/passengerLogin" component={passengerLogin} />
      </Router>
    );
  }
}

export default App;

// Tutorial: https://medium.com/@ipenywis/intro-to-react-router-for-beginners-multiple-page-apps-461f4729bd3f
