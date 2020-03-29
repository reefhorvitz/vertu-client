import {connect} from 'react-redux';
import DiscoverFilters from "../../../Components/Discover/DiscoverFilters";
import {setBathroomNumberFilter, setBedroomNumberFilter, setCityFilter, setPriceFilter} from "../../Filters/actions";
import {createStructuredSelector} from "reselect";
import {getAllCities} from "../../PropertyMetadata/selectors";
import {getBathroomFilter, getBedroomFilter, getCityFilter} from "../../Filters/selectors";

const mapStateToProps = createStructuredSelector({
    cities: getAllCities,
    selectedCity: getCityFilter,
    selectedBedroomNumber: getBedroomFilter,
    selectedBathroomNumber: getBathroomFilter
});

const mapDispatchToProps = (dispatch) => {
    return {
        onPriceChange: (price) => dispatch(setPriceFilter(price)),
        onBedroomNumberChange: (number) => dispatch(setBedroomNumberFilter(number)),
        onBathroomNumberChange: (number) => dispatch(setBathroomNumberFilter(number)),
        onCityChange: (cityId) => dispatch(setCityFilter(cityId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DiscoverFilters);