import React from 'react';
import styles from './styles.module.css';

const GoogleLogin = ({onLoginSuccess}) => {

    return (
        <GoogleLogin
            render={renderProps => (
                <a onClick={renderProps.onClick}>
                    <i className="fa fa-google" aria-hidden="true"/>
                    Log in with Google
                </a>
            )}
        />
    );
}

export default GoogleLogin;