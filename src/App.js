import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  Users,
  NestedUsers,
  Header,
  Signin,
  Signup
} from "./components";

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/about" exact={true}>
          <About />
        </Route>
        <Route path="/contact" exact={true}>
          <Contact />
        </Route>
        <Route path="/users" exact={true}>
          <Users />
        </Route>
        <Route path="/users/:name" exact={true}>
          <NestedUsers />
        </Route>
        <Route path="/signin" exact={true}>
          <Signin />
        </Route>
        <Route path="/signup" exact={true}>
          <Signup />
        </Route>
      </Switch>
    </Router>
  );
}
