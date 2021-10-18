import React from "react";
import { Switch } from "react-router";
import GroupsPage from "../Pages/Groups";
import HabitsPage from "../Pages/Habits";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Route from "./routes";
import YourGroupsPages from "../Pages/YourGroups";
import ProfilePage from "../Pages/Profile";

const Routers = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/habits" isPrivate component={HabitsPage} />
        <Route path="/groups" isPrivate component={GroupsPage} />
        <Route
          path="/groups/subscriptions"
          isPrivate
          component={YourGroupsPages}
        />
        <Route path="/profile/:id" isPrivate component={ProfilePage} />
      </Switch>
    </>
  );
};

export default Routers;
