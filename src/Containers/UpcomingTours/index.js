import {connect} from 'react-redux';
import UpcomingTourApartmentsList from "../../Components/UpcomingTourApartmentsList";
import {createStructuredSelector} from "reselect";
import {getUpcomingApartmentsIds} from "../ApartmentsContainer/selectors";


const mapStateToProps = createStructuredSelector({
    apartmentsIds: getUpcomingApartmentsIds
});

export default connect(mapStateToProps)(UpcomingTourApartmentsList);