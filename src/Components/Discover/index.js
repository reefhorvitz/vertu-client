import React from 'react';
import DiscoverMenu from "./DiscoverMenu";
import DiscoverApartment from "./DiscoverApartment";

const Discover = ({appartments}) => {
    return (
        <React.Fragment>
            <div className="upcoming-tours container">
                <h1>Discover</h1>
                <DiscoverMenu/>
                <div className="container live-tour-list">
                    {appartments.map((appartment, index) => <DiscoverApartment {...appartment} key={index}/>)}
                </div>
            </div>
        </React.Fragment>

    );
}

export default Discover;