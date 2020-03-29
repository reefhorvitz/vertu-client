import React from 'react';
import MessageImage from '../../static/images/message.png';
import ListingImage from '../../static/images/listing.png';
import Logo from "../Logo";
import {Link} from "react-router-dom";

const Header = ({isConnected, name, profile}) => {
    return (
        <header className="sticky">
            <div className="menu-container container">
                <div className="grt-menu-row">
                    <Logo/>
                    <div className="grt-menu-right">
                        {isConnected ?
                            <nav>
                                <button className="grt-mobile-button rgt-sm">
                                    <span className="line1"/><span className="line2"/><span className="line3"/>
                                </button>
                                <ul className="grt-menu">
                                    <li className="active"><a href="#">My Messages</a></li>
                                    <li className="grt-dropdown">
                                        <Link className="profile-img" to={"/my-profile"}>
                                            <img className="img-responsive" src={profile}/>
                                        </Link>
                                        <Link to={"/my-profile"}>
                                            {name}
                                            <i className="fa fa-angle-down" aria-hidden="true"/>
                                        </Link>
                                        <ul className="grt-dropdown-list">
                                            <li><a href="#"><img src={MessageImage}/>Messages</a></li>
                                            <li><Link to="new-listing"><img src={ListingImage}/>Create new listing</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="sm-filter">
                                    <i className="fa fa-sliders" aria-hidden="true"/>
                                </div>
                            </nav> :
                            <Link to='/login'>Login</Link>
                        }
                    </div>
                </div>
            </div>
        </header>
)};

export default Header;