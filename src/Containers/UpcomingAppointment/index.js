import {connect} from 'react-redux';
import UpcomingAppointmentData from "../../Components/ApartmentsList/UpcomingAppointmentData";
import {getAppointmentIdByPropertyId, getAppointmentTimeByPropertyId} from "../AppointmentsContainer/selectors";

const mapStateToProps = (state, ownProps) => {
    const {propertyId} = ownProps;
    return {
       appointmentId: getAppointmentIdByPropertyId(propertyId)(state),
       appointmentTime: getAppointmentTimeByPropertyId(propertyId)(state)
    }
};

export default connect(mapStateToProps, null)(UpcomingAppointmentData);