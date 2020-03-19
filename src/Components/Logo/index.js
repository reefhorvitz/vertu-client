import React from 'react';
import LogoImage from '../../static/images/logo.png';

const Logo = () => {
    return (<div className="grt-menu-logo">
        <a href="/" className="grt-logo">
            <img src={LogoImage}/>
        </a>
    </div>);
};

export default Logo;