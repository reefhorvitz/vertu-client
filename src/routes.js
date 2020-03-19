import React from 'react';
import {Route, Switch, Router} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router/immutable";
import {history} from "./Redux/store";
import Application from "./Components/Application";
import PropertyDetails from "./Containers/PropertyDetails";
import Profile from "./Containers/Profile/Profile";
import UpcomingTours from './Containers/UpcomingTours';
import Login from "./Components/Login";
import Discover from "./Containers/Discover";

const Routes = () => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/my-profile">
                    <Profile/>
                </Route>
                <Route path="/upcoming-tours">
                    <UpcomingTours/>
                </Route>
                <Route path="/discover">
                    <Discover/>
                </Route>
                <Route path={"/properties/:propertyId"} component={PropertyDetails}/>
                <Route path="/questions">
                    <Application/>
                </Route>
                <Route path="/">
                    <Login/>
                </Route>
            </Switch>
        </ConnectedRouter>
    );
};

export default Routes;