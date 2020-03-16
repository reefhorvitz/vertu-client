import React from 'react';

const Footer = ({}) => {
    return (
        <footer>
            <div className="container">
                <span className="copyright">&copy; Virtuhouse All Right Reserved 2020</span>
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