import {call, put, takeEvery} from 'redux-saga/effects'
import {getAllAppointments} from "../../api/graphql/appointments";
import {loadAppointmentsSuccess} from "./actions";
import {loadApartmentsByIds} from "../ApartmentsContainer/actions";
import {LOAD_ALL_APPOINTMENTS} from "./consts";

function* loadAllAppointments({userId}) {
    const appointments = yield call(getAllAppointments, userId);
    yield put(loadAppointmentsSuccess(appointments));
    const apartmentsIds = appointments.map(appointment => appointment.property.id);
    yield put(loadApartmentsByIds(apartmentsIds));
}


export default function* defaultSaga() {
    yield takeEvery(LOAD_ALL_APPOINTMENTS, loadAllAppointments);
}