import React from 'react';
import moment from 'moment';
const UpcomingAppointmentData = ({appointmentTime}) => {
    console.log(appointmentTime);
    const time = moment(appointmentTime);
    return (
        <div className="tours-appointment-rgt">
            <span className="change-appointment"><a href="#">Change Appointment</a></span>
            <div className="live-tours-appointment">
                <h3>Your<br/> live tour<br/> appoinment</h3>
                <hr/>
                    <h5>{time.format('MMMM Do YYYY')}</h5>
                    <span className="date">{time.format('hh:mm a')}</span>
            </div>
        </div>

);
};

export default UpcomingAppointmentData;