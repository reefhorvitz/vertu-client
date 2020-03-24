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
import CompletedTourApartmentList from "./Containers/CompletedTours";
import AddProperty from "./Containers/PropertyMangerComponents/AddProperty";
import LiveTour from "./Containers/LiveTour";
import InitialFilteringPage from "./Components/InitialFilteringPage";
import Header from './Containers/Header';
import Footer from "./Components/Footer";

const Routes = () => {
    return (
        <ConnectedRouter history={history}>
            <Header/>
            <Switch>
                <Route path="/live-tour/:appointmentId" component={LiveTour}/>
                <Route path="/new-listing">
                    <AddProperty/>
                </Route>
                <Route path="/my-profile">
                    <Profile/>
                </Route>
                <Route path="/completed-tours">
                    <CompletedTourApartmentList/>
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