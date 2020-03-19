import {connect} from 'react-redux';
import DiscoverFilters from "../../../Components/Discover/DiscoverFilters";
import {setBathroomNumberFilter, setBedroomNumberFilter, setPriceFilter} from "../../Filters/actions";

const mapStateToProps = (state, ownProps) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPriceChange: (price) => dispatch(setPriceFilter(price)),
        onBedroomNumberChange: (number) => dispatch(setBedroomNumberFilter(number)),
        onBathroomNumberChange: (number) => dispatch(setBathroomNumberFilter(number))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverFilters);