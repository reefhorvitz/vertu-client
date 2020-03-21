import {connect} from 'react-redux';
import Discover from "../../Components/Discover";
import {createStructuredSelector} from "reselect";
import {getApartmentsIds} from "../ApartmentsContainer/selectors";
import {loadAllApartments} from "../ApartmentsContainer/actions";

const mapStateToProps = createStructuredSelector({
   apartmentsIds: getApartmentsIds
});

const mapDispatchToProps = (dispatch) => {
   return {
      loadApartments : () => dispatch(loadAllApartments())
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover);