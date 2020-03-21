import {fromJS} from "immutable";
import {
    BATHROOM_NUMBER_FILTER,
    BEDROOM_NUMBER_FILTER, CITY_FILTER, PRICE_FILTER, PRICE_FILTER_MAX,
    SET_BATHROOM_FILTER,
    SET_BEDROOM_FILTER, SET_CITY_FILTER,
    SET_PRICE_FILTER
} from "./consts";
const initialState = fromJS({
    price: {
      min: 1000,
      max: 5000
    },
    bedroomNum: null,
    bathroomNum: null
});

export default function FiltersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRICE_FILTER:
            return state.setIn([PRICE_FILTER, PRICE_FILTER_MAX], action.price);
        case SET_BEDROOM_FILTER:
            if(action.number === 4){
                action.number = null;
            }
            return state.set(BEDROOM_NUMBER_FILTER, action.number);
        case SET_BATHROOM_FILTER:
            return state.set(BATHROOM_NUMBER_FILTER, action.number);
        case SET_CITY_FILTER:
            return state.set(CITY_FILTER, action.cityId);
        default:
            return state
    }
}