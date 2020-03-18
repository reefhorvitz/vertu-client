import React from 'react';
import DiscoverMenu from "./DiscoverMenu";
import DiscoverApartment from "./DiscoverApartment";

const Discover = ({apartments}) => {
    return (
        <React.Fragment>
            <div className="upcoming-tours container">
                <h1>Discover</h1>
            </div>
            <DiscoverMenu/>
            <div className="container live-tour-list">
                {apartments.map((apartment, index) => <DiscoverApartment {...apartment} key={index}/>)}
            </div>
        </React.Fragment>

    );
}

export default Discover;