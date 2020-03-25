import {connect} from 'react-redux';
import {uploadImage} from "../../PropertyManager/actions";
import PropertyImageAdder from "../../../Components/AddProperty/PropertyImageAdder";
import {createStructuredSelector} from "reselect";
import {getImages} from "../../PropertyManager/selectors";

const mapStateToProps = createStructuredSelector({
    images: getImages
});

const mapDispatchToProps = (dispatch) => {
    return {
        uploadImage: (image) => dispatch(uploadImage(image))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyImageAdder);