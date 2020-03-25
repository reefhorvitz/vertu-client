import {connect} from 'react-redux';
import {Route, Redirect} from "react-router-dom";
import React from "react";
import {createStructuredSelector} from "reselect";
import {getIsConnected} from "../AuthContainer/selectors";

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({isConnected, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                isConnected ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

const mapStateToProps = createStructuredSelector({
    isConnected: getIsConnected
});

export default connect(mapStateToProps, null)(PrivateRoute);