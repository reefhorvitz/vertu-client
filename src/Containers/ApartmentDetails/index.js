import {connect} from 'react-redux';
import ApartmentDetails from "../../Components/ApartmentsList/ApartmentDetails";
import {
    gerApartmentLocationStringById,
    getApartmentBathroomNumberById,
    getApartmentBedroomNumberById,
    getApartmentPriceById, getApartmentSizeById
} from "../ApartmentsContainer/selectors";

const mapStateToProps = (state, ownProps) => {
    const {propertyId} = ownProps;
    return {
        location: gerApartmentLocationStringById(propertyId)(state),
        price: getApartmentPriceById(propertyId)(state),
        bedroomNum: getApartmentBedroomNumberById(propertyId)(state),
        bathroomNum: getApartmentBathroomNumberById(propertyId)(state),
        size: getApartmentSizeById(propertyId)(state)
    };
};

export default connect(mapStateToProps, null)(ApartmentDetails);