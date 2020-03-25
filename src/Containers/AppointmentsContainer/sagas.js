import {call, put, takeEvery} from 'redux-saga/effects'
import {getAllAppointments} from "../../api/graphql/appointments";
import {loadAppointmentsSuccess} from "./actions";
import {loadApartmentsByIds, setCompletedIds, setUpcomingIds} from "../ApartmentsContainer/actions";
import {LOAD_ALL_APPOINTMENTS} from "./consts";
import {FETCH_USER_DATA_SUCCESS} from "../AuthContainer/consts";

function* loadAllAppointments({userId}) {
    const appointments = yield call(getAllAppointments, userId);
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


export default function* defaultSaga() {
    yield takeEvery(FETCH_USER_DATA_SUCCESS, loadAllAppointments);
    yield takeEvery(LOAD_ALL_APPOINTMENTS, loadAllAppointments);
}