import {connect} from 'react-redux';
import Description from "../../../Components/PropertyDetails/Description";
import {
    getApartmentDescriptionById
} from "../../ApartmentsContainer/selectors";

const mapStateToProps = (state, ownProps) => {
    const {propertyId} = ownProps;
    return {
        description: getApartmentDescriptionById(propertyId)(state),


    };
};

export default connect(mapStateToProps, null)(Description);