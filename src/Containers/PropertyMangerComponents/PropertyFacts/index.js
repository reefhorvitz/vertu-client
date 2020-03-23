import {connect} from 'react-redux';
import PropertyFacts from "../../../Components/AddProperty/PropertyFacts";
import {createStructuredSelector} from "reselect";
import {getAllCooling, getAllHeating, getAllParking, getAllTypes} from "../../PropertyMetadata/selectors";
import {getYearBuilt} from "../../PropertyManager/selectors";
import {setCoolingId, setHeatingId, setParkingId, setTypeId, setYearBuilt} from "../../PropertyManager/actions";

const mapStateToProps = createStructuredSelector({
    typeOptions: getAllTypes,
    heatingOptions: getAllHeating,
    coolingOptions: getAllCooling,
    parkingOptions: getAllParking,
    yearBuilt: getYearBuilt
})

const mapDispatchToProps = (dispatch) => {
    return {
        onTypeChange: (id) => dispatch(setTypeId(id)),
        onHeatingChange: (id) => dispatch(setHeatingId(id)),
        onCoolingChange: (id) => dispatch(setCoolingId(id)),
        onParkingChange: (id) => dispatch(setParkingId(id)),
        onYearBuiltChange: (year) => dispatch(setYearBuilt(year))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PropertyFacts);