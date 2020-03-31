import {connect} from 'react-redux';
import {uploadImage} from "../../PropertyManager/actions";
import PropertyImageAdder from "../../../Components/AddProperty/PropertyImageAdder";
import {createStructuredSelector} from "reselect";
import {getImages, isPropertyMangerLoading} from "../../PropertyManager/selectors";

const mapStateToProps = createStructuredSelector({
    images: getImages,
    isLoading: isPropertyMangerLoading
});

const mapDispatchToProps = (dispatch) => {
    return {
        uploadImage: (image) => dispatch(uploadImage(image))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyImageAdder);