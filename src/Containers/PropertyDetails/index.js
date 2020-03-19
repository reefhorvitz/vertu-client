import {connect} from 'react-redux';
import PropertyDetails from "../../Components/PropertyDetails";

const mapStateToProps = (state, ownProps) => {
    return {
        propertyId: ownProps.match.params.propertyId,

    };
};

export default connect(mapStateToProps, null)(PropertyDetails);