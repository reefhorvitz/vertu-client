import React from 'react';
import moment from 'moment';
import {Link} from "react-router-dom";
const UpcomingAppointmentData = ({appointmentId, appointmentTime}) => {
    console.log(appointmentTime);
    const time = moment(appointmentTime);
    return (
        <div className="tours-appointment-rgt">
            <span className="change-appointment"><a href="#">Change Appointment</a></span>
            <div className="live-tours-appointment join">
                <h3>Your<br/> live tour<br/> appoinment</h3>
                <hr/>
                    <h5>{time.format('MMMM Do YYYY')}</h5>
                    <span className="date">{time.format('hh:mm a')}</span>
                    <Link to={`/live-tour/${appointmentId}`}>
                        <span className="hide-join">Join</span>
                    </Link>
            </div>
        </div>

);
};

export default UpcomingAppointmentData;