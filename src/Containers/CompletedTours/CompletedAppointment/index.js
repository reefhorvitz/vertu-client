import {connect} from 'react-redux';
import CompletedAppointmentData from "../../../Components/ApartmentsList/CompletedAppointmentData";
import {getApartmentSellerById} from "../../ApartmentsContainer/selectors";

const mapStateToProps = (state, ownProps) => {
    const {propertyId} = ownProps;
    return {
        seller: getApartmentSellerById(propertyId)(state)
    };
};

export default connect(mapStateToProps, null)(CompletedAppointmentData);