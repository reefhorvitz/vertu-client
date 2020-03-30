import React from 'react';
import ApartmentListMenu from "./ApartmentsListMenu";
import ListApartment from "./ListApartment";
import ApartmentListTitle from "./ApartmentListTitle";
import './styles.css'

const ApartmentsList = ({title, appointmentModal, apartmentsIds, containerClass}) => {
    return (
        <React.Fragment>
            <ApartmentListTitle title={title}/>
            <ApartmentListMenu/>
            <div className={`container live-tour-list ${containerClass}`}>
                {apartmentsIds.valueSeq().map((apartmentId, index) => <ListApartment propertyId={apartmentId}
                                                                          AppointmentModal={appointmentModal}
                                                                          key={index}/>)}
            </div>
        </React.Fragment>
    );
};

export default ApartmentsList;