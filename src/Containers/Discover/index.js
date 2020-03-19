import {connect} from 'react-redux';
import Discover from "../../Components/Discover";
import {createStructuredSelector} from "reselect";
import {getApartmentsIds} from "../ApartmentsContainer/selectors";

const mapStateToProps = createStructuredSelector({
   apartmentsIds: getApartmentsIds
});

export default connect(mapStateToProps, null)(Discover);