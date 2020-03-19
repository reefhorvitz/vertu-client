import {connect} from 'react-redux';
import RentalFacts from "../../../Components/PropertyDetails/PropertyFeatures";
import {
    getApartmentCoolingDataById,
    getApartmentHeatingDataById, getApartmentParkingDataById,
    getApartmentTypeById, getApartmentYearBuiltById
} from "../../ApartmentsContainer/selectors";

const mapStateToProps = (state, ownProps) => {
    const {propertyId} = ownProps;
    return {
        type: getApartmentTypeById(propertyId)(state),
        coolingData: getApartmentCoolingDataById(propertyId)(state),
        heatingData: getApartmentHeatingDataById(propertyId)(state),
        parkingData: getApartmentParkingDataById(propertyId)(state),
        yearBuilt: getApartmentYearBuiltById(propertyId)(state)
    };
};

export default connect(mapStateToProps, null)(RentalFacts);