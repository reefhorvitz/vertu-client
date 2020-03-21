import {fromJS} from "immutable";
import {LOAD_PROPERTY_METADATA_SUCCESS} from "./consts";

const initialState = {};

export default function ApartmentsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PROPERTY_METADATA_SUCCESS:
            return fromJS(action.propertyMetadata);
        default:
            return state
    }
}