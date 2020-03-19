import {connect} from 'react-redux';
import BuildingDetails from "../../../Components/PropertyDetails/BuildingDetails/BuildingDetails";
import {
    getApartmentAmenitiesById,
    getApartmentFacilitiesById,
    getApartmentOtherDetailsById
} from "../../ApartmentsContainer/selectors";

const mapStateToProps = (state, ownProps) => {
    const {propertyId} = ownProps;
    return {
        facilities: getApartmentFacilitiesById(propertyId)(state),
        amenities: getApartmentAmenitiesById(propertyId)(state),
        otherDetails: getApartmentOtherDetailsById(propertyId)(state)
    };
};

export default connect(mapStateToProps, null)(BuildingDetails);