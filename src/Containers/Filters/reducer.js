import {fromJS} from "immutable";
import {
    BATHROOM_NUMBER_FILTER,
    BEDROOM_NUMBER_FILTER, CITY_FILTER, PRICE_FILTER, PRICE_FILTER_MAX, PRICE_FILTER_MIN,
    SET_BATHROOM_FILTER,
    SET_BEDROOM_FILTER, SET_CITY_FILTER,
    SET_PRICE_FILTER, SET_TAGS, TAGS_FILTER
} from "./consts";
const initialState = fromJS({
    price: {
      min: 0,
      max: 5000
    },
    bedroomNum: null,
    bathroomNum: null,
    tags: []
});

export default function FiltersReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PRICE_FILTER:
            return state.setIn([PRICE_FILTER, PRICE_FILTER_MAX], action.max)
                .setIn([PRICE_FILTER, PRICE_FILTER_MIN], action.min);
        case SET_BEDROOM_FILTER:
            return state.set(BEDROOM_NUMBER_FILTER, action.number);
        case SET_BATHROOM_FILTER:
            return state.set(BATHROOM_NUMBER_FILTER, action.number);
        case SET_CITY_FILTER:
            return state.set(CITY_FILTER, action.cityId);
        case SET_TAGS:
            return state.set(TAGS_FILTER, action.tags);
        default:
            return state
    }
}