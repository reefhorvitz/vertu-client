import React from 'react';
import Logo from "../../Logo";

const LoginIntroduction = ({children}) => {
    return (
        <div className="login-lft-sec">
            <Logo/>
            <div className="login-txt">
                {children}
            </div>
        </div>
    );
}

export default LoginIntroduction;