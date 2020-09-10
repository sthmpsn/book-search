import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Wrapper from "./components/Wrapper/Wrapper";
import NavBoot from "./components/NavBoot/NavBoot";


class App extends Component {

  render() {
    return (
      <Router>
        <Wrapper>
          <NavBoot/>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoMatch} />
          </Switch>
        </Wrapper>
      </Router>
    );
  }
}



export default App;
