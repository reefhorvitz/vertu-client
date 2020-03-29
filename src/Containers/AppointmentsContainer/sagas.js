import {call, put, takeEvery} from 'redux-saga/effects'
import {getAllAppointments} from "../../api/graphql/appointments";
import {createAppointmentSuccess, loadAppointmentsSuccess} from "./actions";
import {loadApartmentsByIds, setCompletedIds, setUpcomingIds} from "../ApartmentsContainer/actions";
import {CREATE_APPOINTMENT, CREATE_APPOINTMENT_SUCCESS, LOAD_ALL_APPOINTMENTS} from "./consts";
import {FETCH_USER_DATA_SUCCESS} from "../AuthContainer/consts";
import {createAppointment} from "../../api/orm/appointments";

function* loadAllAppointments({id}) {
    const appointments = yield call(getAllAppointments, id);
    yield put(loadAppointmentsSuccess(appointments));
    const upcomingIds = [];
    const completedIds = [];
    appointments.forEach(appointment => {
        if(appointment.isCompleted){
            completedIds.push(appointment.property.id)
        }
        else {
            upcomingIds.push(appointment.property.id)
        }
    });
    yield put(loadApartmentsByIds(completedIds.concat(upcomingIds)));
    yield put(setUpcomingIds(upcomingIds));
    yield put(setCompletedIds(completedIds));
}


function *createAppointmentSaga({time, propertyId, userId}) {
    debugger;
    const appointment = yield call(createAppointment, time, propertyId, userId);
    yield put(createAppointmentSuccess(appointment));
}

export default function* defaultSaga() {
    yield takeEvery(FETCH_USER_DATA_SUCCESS, loadAllAppointments);
    yield takeEvery(LOAD_ALL_APPOINTMENTS, loadAllAppointments);
    yield takeEvery(CREATE_APPOINTMENT_SUCCESS, loadAllAppointments);
    yield takeEvery(CREATE_APPOINTMENT, createAppointmentSaga);
}