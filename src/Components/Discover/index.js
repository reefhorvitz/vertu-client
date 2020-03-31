import React, {useEffect, useState} from 'react';
import ApartmentListTitle from "../ApartmentsList/ApartmentListTitle";
import ApartmentListMenu from "../ApartmentsList/ApartmentsListMenu";
import ListApartment from "../ApartmentsList/ListApartment";
import DiscoverFilters from "../../Containers/Discover/DiscoverFilters";
import {handleByUserType} from "../../helpers/userType";
import './styles.css';
import Loader from "../Loader";

const Discover = ({loadData, apartmentsIds, isLoading}) => {
    useEffect(() => {
        loadData()
    }, []);
    return (
        <React.Fragment>
            <ApartmentListTitle title={handleByUserType('Discover', "My Listing")}/>
            <ApartmentListMenu/>
            <DiscoverFilters/>
            <div className="container house-list">
                <Loader isLoading={isLoading}>
                    {apartmentsIds.valueSeq()
                    .map((apartmentId, index) => <ListApartment propertyId={apartmentId} key={index}/>)}
                </Loader>
            </div>
        </React.Fragment>

    );
}

export default Discover;