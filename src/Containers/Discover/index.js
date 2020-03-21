import {connect} from 'react-redux';
import Discover from "../../Components/Discover";
import {createStructuredSelector} from "reselect";
import {getDiscoverIds} from "../ApartmentsContainer/selectors";
import {loadAllApartments} from "../ApartmentsContainer/actions";

const mapStateToProps = createStructuredSelector({
   apartmentsIds: getDiscoverIds
});

const mapDispatchToProps = (dispatch) => {
   return {
      loadData : () => dispatch(loadAllApartments())
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);