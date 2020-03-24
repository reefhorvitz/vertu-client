import React from 'react';
import {Link, useHistory} from "react-router-dom";

const Footer = () => {
    const history = useHistory();
    const shouldShowAgentLoginOption = history.location.pathname === "/";
    return (
        <footer>
            <div className="container">
                <span className="copyright">
                    {shouldShowAgentLoginOption ?
                        <Link to={'/agent-registration'}>Are you an agent?</Link> :
                    <span>&copy; Virtuhouse All Right Reserved 2020</span>}
                </span>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/Privacy">Privacy Policy</a></li>
                    <li><a href="/terms">Terms of Use</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;