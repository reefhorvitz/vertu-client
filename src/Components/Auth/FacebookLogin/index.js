import React from 'react';
import FacebookLoginComponent  from 'react-facebook-login/dist/facebook-login-render-props'

const appId = '3149301188413254';
const FacebookLogin = ({onLoginSuccess}) => {
    const responseFacebook = (response) => {
        const {email, accessToken} = response;
        onLoginSuccess(email, accessToken);
    };

    return (
        <FacebookLoginComponent
            appId={appId}
            fields={"name,email,picture"}
            callback={responseFacebook}
            render={renderProps => (
                <a onClick={renderProps.onClick}>
                    <i className="fa fa-facebook-official" aria-hidden="true"/>
                    Login in with Facebook
                </a>
            )}
        />
    );
}

export default FacebookLogin;