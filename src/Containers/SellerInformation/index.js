import {connect} from 'react-redux';
import SellerInformation from "../../Components/SellerInformation";
import {getApartmentSellerById} from "../ApartmentsContainer/selectors";

const mapStateToProps = (state, ownProps) => {
    const {propertyId} = ownProps;
    return getApartmentSellerById(propertyId)(state);
}

export default connect(mapStateToProps, null)(SellerInformation);