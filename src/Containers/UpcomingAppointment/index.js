import {connect} from 'react-redux';
import UpcomingAppointmentData from "../../Components/ApartmentsList/UpcomingAppointmentData";
import {getAppointmentTimeByPropertyId} from "../AppointmentsContainer/selectors";

const mapStateToProps = (state, ownProps) => {
    const {propertyId} = ownProps;
    return {
       appointmentTime: getAppointmentTimeByPropertyId(propertyId)(state)
    }
};

export default connect(mapStateToProps, null)(UpcomingAppointmentData);