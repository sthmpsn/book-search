import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Saved from "./pages/NoMatch";

class App extends Component {
  render() {
    return (
      <Router>
        <Wrapper>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}

export default App;
