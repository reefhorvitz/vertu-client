import {connect} from 'react-redux';
import PropertySpecifics from "../../../Components/AddProperty/PropertySpecifics";
import {setBathroomNumber, setBedroomNumber, setPrice, setSize} from "../../PropertyManager/actions";
import {createStructuredSelector} from "reselect";
import {getPrice, getSize} from "../../PropertyManager/selectors";

const mapStateToProps = createStructuredSelector({
    size: getSize,
    price: getPrice
});

const mapDispatchToProps = (dispatch) => {
    return {
        onBedroomChange: (number) => dispatch(setBedroomNumber(number)),
        onBathroomChange: (number) => dispatch(setBathroomNumber(number)),
        onSizeChange: (size) => dispatch(setSize(size)),
        onPriceChange: (price) => dispatch(setPrice(price))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertySpecifics);