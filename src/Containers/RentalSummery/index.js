import {connect} from 'react-redux';
import RentalSummery from "../../Components/PropertyDetails/RentalSummary";
import {
    getApartmentBathroomNumberById,
    getApartmentBedroomNumberById, getApartmentLocationById,
    getApartmentPriceById, getApartmentSizeById, getApartmentTagsById
} from "../ApartmentsContainer/selectors";

const mapStateToProps = (state, ownProps) => {
    const {propertyId} = ownProps;
    return {
        location: getApartmentLocationById(propertyId)(state),
        tags: getApartmentTagsById(propertyId)(state),
        pricePerMonth: getApartmentPriceById(propertyId)(state),
        bedroomNum: getApartmentBedroomNumberById(propertyId)(state),
        bathroomNum: getApartmentBathroomNumberById(propertyId)(state),
        size: getApartmentSizeById(propertyId)(state)
    };
};

export default connect(mapStateToProps, null)(RentalSummery);