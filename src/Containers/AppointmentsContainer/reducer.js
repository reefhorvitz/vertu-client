import {fromJS} from "immutable";
import {CREATE_APPOINTMENT_SUCCESS, LOAD_APPOINTMENTS_SUCCESS} from "./consts";

const initialState = fromJS([]);

export default function AppointmentsReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_APPOINTMENTS_SUCCESS:
            return state.set(fromJS(action.appointments));
        case CREATE_APPOINTMENT_SUCCESS:
            return state.push(fromJS(action.appointment));
        default:
            return state
    }
}