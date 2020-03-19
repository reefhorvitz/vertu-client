import React from 'react';
import ApartmentsList from "../ApartmentsList";
import CompletedAppointmentData from "../../Containers/CompletedTours/CompletedAppointment";

const CompletedTourApartmentList = ({apartmentsIds}) => {
    return (
        <ApartmentsList title={"Completed Tours"} apartmentsIds={apartmentsIds} appointmentModal={CompletedAppointmentData}/>
    );
};

export default CompletedTourApartmentList;