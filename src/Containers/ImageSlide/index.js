import {connect} from 'react-redux';
import {getApartmentImagesById} from "../ApartmentsContainer/selectors";
import ImageSlide from "../../Components/ImageSlide/ImageSlide";

const mapStateToProps = (state, ownProps) => {
    const {propertyId} = ownProps;
    return {
        images: getApartmentImagesById(propertyId)(state)
    };
};

export default connect(mapStateToProps, null)(ImageSlide);