import {connect} from 'react-redux';
import AddProperty from "../../../Components/AddProperty";
import {createNewListing} from "../../PropertyManager/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        addProperty: () => dispatch(createNewListing())
    };
};

export default connect(null, mapDispatchToProps)(AddProperty);