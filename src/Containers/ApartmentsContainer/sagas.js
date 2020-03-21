import {call, put, takeEvery, select} from 'redux-saga/effects'
import {getAllApartments, getApartmentsByIds} from "../../api/graphql/apartments";
import {arrayToObject} from "../../helpers/arrayToObject";
import {LOAD_ALL_APARTMENTS, LOAD_APARTMENTS_BY_IDS} from "./consts";
import {loadApartmentsSuccess} from "./actions";
import {getApartmentsIds} from "./selectors";

function* loadAllApartments() {
    let apartments = yield call(getAllApartments);
    yield onFetchApartmentsSuccess(apartments);
}

function* loadApartmentsByIds({apartmentsIds}) {
    const loadedApartmentsIds = yield select(getApartmentsIds);
    let notLoadedIds = [];
    apartmentsIds.forEach(id => {
        if(!loadedApartmentsIds.includes(id)){
            notLoadedIds.push(id);
        }
    });
    let apartments = yield call(getApartmentsByIds, notLoadedIds);
    yield onFetchApartmentsSuccess(apartments);
}

function *onFetchApartmentsSuccess(apartments) {
    apartments = arrayToObject(apartments, 'id');
    yield put(loadApartmentsSuccess(apartments));
}

export default function* defaultSaga() {
    yield takeEvery(LOAD_ALL_APARTMENTS, loadAllApartments);
    yield takeEvery(LOAD_APARTMENTS_BY_IDS, loadApartmentsByIds);
}