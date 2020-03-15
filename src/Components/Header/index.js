import React from 'react';
import Logo from '../../static/images/logo.png';
import MessageImage from '../../static/images/message.png';
import ListingImage from '../../static/images/listing.png';

const Header = ({name, sellerImage}) => {
    return (
        <header className="sticky">
            <div className="menu-container container">
                <div className="grt-menu-row">
                    <div className="grt-menu-logo">
                        <a href="#" className="grt-logo"><img src={Logo}/></a>
                    </div>
                    <div className="grt-menu-right">
                        <nav>
                            <button className="grt-mobile-button rgt-sm">
                                <span className="line1"/><span className="line2"/><span className="line3"/>
                            </button>
                            <ul className="grt-menu">
                                <li className="active"><a href="#">My Messages</a></li>
                                <li className="grt-dropdown">
                                    <span className="profile-img">
                                        <img className="img-responsive" src={sellerImage}/>
                                    </span>
                                    <a>{name}<i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <ul className="grt-dropdown-list">
                                        <li><a href="#"><img src={MessageImage}/>Messages</a></li>
                                        <li><a href="#"><img src={ListingImage}/>Create new listing</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="sm-filter">
                                <i className="fa fa-sliders" aria-hidden="true"/>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
)};

export default Header;