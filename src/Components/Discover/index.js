import React from 'react';
import ApartmentListTitle from "../ApartmentsList/ApartmentListTitle";
import ApartmentListMenu from "../ApartmentsList/ApartmentsListMenu";
import ListApartment from "../ApartmentsList/ListApartment";
import DiscoverFilters from "./DiscoverFilters";

const Discover = ({apartments}) => {
    return (
        <React.Fragment>
            <ApartmentListTitle title="Discover"/>
            <ApartmentListMenu/>
            <DiscoverFilters/>
            <div className="container house-list">
                {apartments.map((apartment, index) => <ListApartment {...apartment} key={index}/>)}
            </div>
        </React.Fragment>

    );
}

export default Discover;