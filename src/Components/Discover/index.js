import React, {useEffect, useState} from 'react';
import ApartmentListTitle from "../ApartmentsList/ApartmentListTitle";
import ApartmentListMenu from "../ApartmentsList/ApartmentsListMenu";
import ListApartment from "../ApartmentsList/ListApartment";
import DiscoverFilters from "../../Containers/Discover/DiscoverFilters";
import {handleByUserType} from "../../helpers/userType";

const Discover = ({loadData, apartmentsIds}) => {
    useEffect(() => {
        loadData()
    }, []);
    return (
        <React.Fragment>
            <ApartmentListTitle title={handleByUserType('Discover', "My Listing")}/>
            <ApartmentListMenu/>
            <DiscoverFilters/>
            <div className="container house-list">
                {apartmentsIds.valueSeq()
                    .map((apartmentId, index) => <ListApartment propertyId={apartmentId} key={index}/>)}
            </div>
        </React.Fragment>

    );
}

export default Discover;