import {fromJS} from "immutable";
import {
    APARTMENTS, COMPLETED_IDS,
    DISCOVER_IDS, IS_LOADING, LOAD_ALL_APARTMENTS,
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
    isLoading: false
});

export default function ApartmentsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ALL_APARTMENTS:
            return state.set(IS_LOADING, true);
        case SET_DISCOVER_IDS:
            return state.set(DISCOVER_IDS, fromJS(action.ids));
        case SET_UPCOMING_IDS:
            return state.set(UPCOMING_IDS, fromJS(action.ids));
        case SET_COMPLETED_IDS:
            return state.set(COMPLETED_IDS, fromJS(action.ids));
        case LOAD_APARTMENTS_SUCCESS:
            return state.update(APARTMENTS, apartments => apartments.merge(fromJS(action.apartments)))
                .set(IS_LOADING, false);
        default:
            return state
    }
}