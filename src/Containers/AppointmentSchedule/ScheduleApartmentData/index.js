import {connect} from 'react-redux';
import ScheduleApartmentData from "../../../Components/AppointmentSchedule/ScheduleApartmentData";
import {
    gerApartmentLocationStringById,
    getApartmentBathroomNumberById,
    getApartmentBedroomNumberById,
    getApartmentDescriptionById,
    getApartmentImagesById,
    getApartmentSizeById
} from "../../ApartmentsContainer/selectors";

const mapStateToProps = (state, {propertyId}) => {
    return {
        images: getApartmentImagesById(propertyId)(state),
        location: gerApartmentLocationStringById(propertyId)(state),
        description: getApartmentDescriptionById(propertyId)(state),
        bedroomNum: getApartmentBedroomNumberById(propertyId)(state),
        bathroomNum: getApartmentBathroomNumberById(propertyId)(state),
        size: getApartmentSizeById(propertyId)(state),
    };
};

export default connect(mapStateToProps, null)(ScheduleApartmentData);