import {fromJS} from "immutable";
import {LOAD_APPOINTMENTS_SUCCESS} from "./consts";

const initialState = fromJS([]);

export default function AppointmentsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_APPOINTMENTS_SUCCESS:
            return state.merge(fromJS(action.appointments));
        default:
            return state
    }
}