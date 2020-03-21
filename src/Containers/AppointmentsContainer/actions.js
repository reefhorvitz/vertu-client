import {LOAD_ALL_APPOINTMENTS, LOAD_APPOINTMENTS_SUCCESS,} from "./consts";

export function loadAllAppointments() {
    return {
        type: LOAD_ALL_APPOINTMENTS
    }
}

export function loadAppointmentsSuccess(appointments) {
    return {
        type: LOAD_APPOINTMENTS_SUCCESS,
        appointments
    }
}