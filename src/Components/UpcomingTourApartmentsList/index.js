import React from 'react';
import ApartmentsList from "../ApartmentsList";
import UpcomingAppointmentData from "../../Containers/UpcomingAppointment";

const UpcomingTourApartmentsList = ({apartmentsIds}) => {
    return <ApartmentsList title={"Live Tours"} apartmentsIds={apartmentsIds} appointmentModal={UpcomingAppointmentData}/>;
}

export default UpcomingTourApartmentsList;