import {
    CREATE_APPOINTMENT,
    CREATE_APPOINTMENT_SUCCESS,
    LOAD_ALL_APPOINTMENTS,
    LOAD_APPOINTMENTS_SUCCESS,
} from "./consts";

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

export function createAppointment(time, propertyId) {
    return {
        type: CREATE_APPOINTMENT,
        time,
        propertyId
    }
}

export function createAppointmentSuccess(appointment) {
    return {
        type: CREATE_APPOINTMENT_SUCCESS,
        appointment
    }
}