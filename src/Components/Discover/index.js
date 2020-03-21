import React, {useEffect} from 'react';
import ApartmentListTitle from "../ApartmentsList/ApartmentListTitle";
import ApartmentListMenu from "../ApartmentsList/ApartmentsListMenu";
import ListApartment from "../ApartmentsList/ListApartment";
import DiscoverFilters from "../../Containers/Discover/DiscoverFilters";

const Discover = ({loadApartments, apartmentsIds}) => {
    useEffect(() => {
       loadApartments()
    }, []);
    return (
        <React.Fragment>
            <ApartmentListTitle title="Discover"/>
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