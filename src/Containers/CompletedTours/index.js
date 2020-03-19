import {connect} from 'react-redux';
import CompletedTourApartmentList from "../../Components/CompletedTourApartmentsList";
import {getCompletedApartmentsIds} from "../ApartmentsContainer/selectors";
import {createStructuredSelector} from "reselect";

const mapStateToProps = createStructuredSelector({
    apartmentsIds: getCompletedApartmentsIds
});

export default connect(mapStateToProps, null)(CompletedTourApartmentList);