import React from "react";
import { Route, Switch } from "react-router";
import Login from "../Pages/Login";

const Routers = () => {
  return (
    <>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/register"></Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/habits"></Route>
        <Route path="/groups"></Route>
      </Switch>
    </>
  );
};

export default Routers;
