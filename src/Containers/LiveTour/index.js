import {connect} from 'react-redux';
import LiveTour from "../../Components/LiveTour";
import {getPropertyIdByAppointmentId} from "../AppointmentsContainer/selectors";

const mapStateToProps = (state, ownProps) => {
    const {appointmentId} = ownProps.match.params;
    return {
        appointmentId,
        propertyId: getPropertyIdByAppointmentId(appointmentId)(state)
    };
};

export default connect(mapStateToProps, null)(LiveTour);