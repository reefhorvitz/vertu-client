import {connect} from 'react-redux';
import AppointmentSchedule from "../../Components/AppointmentSchedule";
import {createAppointment} from "../AppointmentsContainer/actions";

const mapDispatchToProps = (dispatch, {propertyId}) => {
    return {
        createAppointment: (time) => dispatch(createAppointment(time, propertyId))
    };
};

export default connect(null, mapDispatchToProps)(AppointmentSchedule);