import {connect} from 'react-redux';
import PropertyBuildingDetails from "../../../Components/AddProperty/PropertyBuildingDetails";
import {createStructuredSelector} from "reselect";
import {getAllAmenities, getAllFacilities, getAllOtherData, getAllTags} from "../../PropertyMetadata/selectors";
import {
    addAmenityId,
    addFacilityId, addOtherDataId, addTagId,
    deleteAmenityId,
    deleteFacilityId, deleteOtherDataId,
    deleteTagId
} from "../../PropertyManager/actions";

const mapStateToProps = createStructuredSelector({
    facilities: getAllFacilities,
    amenities: getAllAmenities,
    tags: getAllTags,
    otherData: getAllOtherData
});

const mapDispatchToProps = (dispatch) => {
    return {
        addFacility: (id) => dispatch(addFacilityId(id)),
        deleteFacility: (id) => dispatch(deleteFacilityId(id)),
        addAmenity: (id) => dispatch(addAmenityId(id)),
        deleteAmenity: (id) => dispatch(deleteAmenityId(id)),
        addTag: (id) => dispatch(addTagId(id)),
        deleteTag: (id) => dispatch(deleteTagId(id)),
        addOtherData: (id) => dispatch(addOtherDataId(id)),
        deleteOtherData: (id) => dispatch(deleteOtherDataId(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyBuildingDetails);