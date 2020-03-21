import {connect} from 'react-redux';
import PropertyDetails from "../../Components/PropertyDetails";
import {loadApartmentsByIds} from "../ApartmentsContainer/actions";

const mapStateToProps = (state, ownProps) => {
    return {
        propertyId: ownProps.match.params.propertyId,

    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const {propertyId} = ownProps;
    return {
        loadApartmentData: () => dispatch(loadApartmentsByIds([[propertyId]]))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyDetails);