import React from 'react';
import {Link} from "react-router-dom";
import {handleByUserType} from "../../../helpers/userType";

const ApartmentListMenu = () => {
    return (
        <row className="bg-gray">
            <div className="container events-list-sm">
                <ul>
                    <li><a><Link to={'/discover'}>{handleByUserType('Discover', 'My Listing')}</Link></a></li>
                    <li><a><Link to={'/upcoming-tours'}>Upcoming Meeting</Link></a></li>
                    <li><a><Link to={'/completed-tours'}>Completed</Link></a></li>
                </ul>
            </div>
        </row>
    );
}

export default ApartmentListMenu;