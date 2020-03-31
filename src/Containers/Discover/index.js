import {connect} from 'react-redux';
import Discover from "../../Components/Discover";
import {createStructuredSelector} from "reselect";
import {getDiscoverIds, isApartmentsLoading} from "../ApartmentsContainer/selectors";
import {loadAllApartments} from "../ApartmentsContainer/actions";

const mapStateToProps = createStructuredSelector({
   apartmentsIds: getDiscoverIds,
   isLoading: isApartmentsLoading
});

const mapDispatchToProps = (dispatch) => {
   return {
      loadData : () => dispatch(loadAllApartments())
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);