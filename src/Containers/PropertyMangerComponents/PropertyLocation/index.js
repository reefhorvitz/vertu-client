import {connect} from 'react-redux';
import PropertyLocation from "../../../Components/AddProperty/PropertyLocation";
import {createStructuredSelector} from "reselect";
import {getAllCities, getAllCountries} from "../../PropertyMetadata/selectors";
import {getAddressOne, getAddressTwo, getZipCode} from "../../PropertyManager/selectors";
import {setAddressOne, setAddressTwo, setCityId, setCountryId, setZipCode} from "../../PropertyManager/actions";

const mapStateToProps = createStructuredSelector({
    cities: getAllCities,
    countries: getAllCountries,
    addressOne: getAddressOne,
    addressTwo: getAddressTwo,
    zipCode: getZipCode
});

const mapDispatchToProps = (dispatch) => {
    return {
        onCityChange: (cityId) => dispatch(setCityId(cityId)),
        onCountryChange: (countryId) => dispatch(setCountryId(countryId)),
        onAddressOneChange: (address) => dispatch(setAddressOne(address)),
        onAddressTwoChange: (address) => dispatch(setAddressTwo(address)),
        onZipCodeChange: (zipCode) => dispatch(setZipCode(zipCode))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertyLocation);