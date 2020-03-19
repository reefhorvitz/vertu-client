import React from 'react';
import ApartmentListMenu from "./ApartmentsListMenu";
import ListApartment from "./ListApartment";
import ApartmentListTitle from "./ApartmentListTitle";

const ApartmentsList = ({title, appointmentModal, apartmentsIds}) => {
    return (
        <React.Fragment>
            <ApartmentListTitle title={title}/>
            <ApartmentListMenu/>
            <div className="container live-tour-list">
                {apartmentsIds.valueSeq().map((apartmentId, index) => <ListApartment propertyId={apartmentId}
                                                                          appointmentModal={appointmentModal}
                                                                          key={index}/>)}
            </div>
        </React.Fragment>
    );
};

export default ApartmentsList;