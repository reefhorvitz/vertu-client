import React from 'react';

const ApartmentListMenu = () => {
    return (
        <row className="bg-gray">
            <div className="container events-list-sm">
                <ul>
                    <li><a href="/discover">Listing</a></li>
                    <li><a href="/upcoming-tours">Upcoming Meeting</a></li>
                    <li><a href="/completed-tours">Completed</a></li>
                </ul>
            </div>
        </row>
    );
}

export default ApartmentListMenu;