import {fromJS} from "immutable";
import {
    APARTMENTS, COMPLETED_IDS,
    DISCOVER_IDS,
    LOAD_APARTMENTS_SUCCESS, SET_COMPLETED_IDS,
    SET_DISCOVER_IDS,
    SET_UPCOMING_IDS,
    UPCOMING_IDS
} from "./consts";
const initialState = fromJS({
    apartments: {},
    discoverIds: [],
    upcomingIds: [],
    completedIds: [],
});

export default function ApartmentsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DISCOVER_IDS:
            return state.set(DISCOVER_IDS, fromJS(action.ids));
        case SET_UPCOMING_IDS:
            return state.set(UPCOMING_IDS, fromJS(action.ids));
        case SET_COMPLETED_IDS:
            return state.set(COMPLETED_IDS, fromJS(action.ids));
        case LOAD_APARTMENTS_SUCCESS:
            return state.update(APARTMENTS, apartments => apartments.merge(fromJS(action.apartments)));
        default:
            return state
    }
}