import React from 'react';
import {Route, Switch, Router} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router/immutable";
import {history} from "./Redux/store";
import Application from "./Components/Application";
import PropertyDetails from "./Containers/PropertyDetails";
import Profile from "./Containers/Profile/Profile";
import UpcomingTours from './Containers/UpcomingTours';
import Discover from "./Containers/Discover";
import CompletedTourApartmentList from "./Containers/CompletedTours";
import AddProperty from "./Containers/PropertyMangerComponents/AddProperty";
import LiveTour from "./Containers/LiveTour";
import InitialFilteringPage from "./Components/InitialFilteringPage";
import Header from './Containers/Header';
import Footer from "./Components/Footer";
import Login from "./Containers/Login";
import PrivateRoute from "./Containers/PrivateRoute";

const Routes = () => {
    return (
        <ConnectedRouter history={history}>
            <Header/>
            <Switch>
                <PrivateRoute path="/live-tour/:appointmentId" component={LiveTour}/>
                <PrivateRoute path="/new-listing">
                    <AddProperty/>
                </PrivateRoute>
                <PrivateRoute path="/my-profile">
                    <Profile/>
                </PrivateRoute>
                <PrivateRoute path="/completed-tours">
                    <CompletedTourApartmentList/>
                </PrivateRoute>
                <PrivateRoute path="/upcoming-tours">
                    <UpcomingTours/>
                </PrivateRoute>
                <PrivateRoute path="/discover">
                    <Discover/>
                </PrivateRoute>
                <PrivateRoute path={"/properties/:propertyId"} component={PropertyDetails}/>
                <Route path="/questions">
                    <Application/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/">
                    <InitialFilteringPage/>
                </Route>
            </Switch>
            <Footer/>
        </ConnectedRouter>
    );
};

export default Routes;