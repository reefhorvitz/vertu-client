import React from 'react';
import MessageImage from '../../static/images/message.png';
import ListingImage from '../../static/images/listing.png';
import Logo from "../Logo";

const Header = ({name, profile}) => {
    return (
        <header className="sticky">
            <div className="menu-container container">
                <div className="grt-menu-row">
                    <Logo/>
                    <div className="grt-menu-right">
                        <nav>
                            <button className="grt-mobile-button rgt-sm">
                                <span className="line1"/><span className="line2"/><span className="line3"/>
                            </button>
                            <ul className="grt-menu">
                                <li className="active"><a href="#">My Messages</a></li>
                                <li className="grt-dropdown">
                                    <a className="profile-img" href={"/my-profile"}>
                                        <img className="img-responsive" src={profile}/>
                                    </a>
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