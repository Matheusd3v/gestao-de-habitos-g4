import React from 'react'
import { Route, Switch } from 'react-router'
import GroupsPage from '../Pages/Groups'
import HabitsPage from '../Pages/Habits'
import Home from '../Pages/Home'
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Routers = () => {
    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/register'>
                    <Register />
                </Route>
                <Route path='/login'>
                  <Login />
                </Route>
                <Route path='/habits'>
                    <HabitsPage/>
                </Route>
                <Route path='/groups'>
                    <GroupsPage/>
                </Route>
            </Switch>
        </>
    )
}

export default Routers;
