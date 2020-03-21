import {connect} from 'react-redux';
import RentalSummery from "../../Components/PropertyDetails/RentalSummary";
import {
    gerApartmentLocationStringById,
    getApartmentBathroomNumberById,
    getApartmentBedroomNumberById,
    getApartmentPriceById, getApartmentSizeById, getApartmentTagsById
} from "../ApartmentsContainer/selectors";

const mapStateToProps = (state, ownProps) => {
    const {propertyId} = ownProps;
    return {
        location: gerApartmentLocationStringById(propertyId)(state),
        tags: getApartmentTagsById(propertyId)(state),
        pricePerMonth: getApartmentPriceById(propertyId)(state),
        bedroomNum: getApartmentBedroomNumberById(propertyId)(state),
        bathroomNum: getApartmentBathroomNumberById(propertyId)(state),
        size: getApartmentSizeById(propertyId)(state)
    };
};

export default connect(mapStateToProps, null)(RentalSummery);