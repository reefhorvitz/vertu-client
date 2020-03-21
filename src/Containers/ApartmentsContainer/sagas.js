import {call, put, takeEvery, select} from 'redux-saga/effects'
import {getAllApartments, getApartmentsByIds} from "../../api/graphql/apartments";
import {arrayToObject} from "../../helpers/arrayToObject";
import {LOAD_ALL_APARTMENTS, LOAD_APARTMENTS_BY_IDS} from "./consts";
import {loadApartmentsSuccess, setDiscoverIds} from "./actions";
import {getApartmentsIds} from "./selectors";
import {getFilters} from "../Filters/selectors";
import {SET_BATHROOM_FILTER, SET_BEDROOM_FILTER, SET_CITY_FILTER, SET_PRICE_FILTER} from "../Filters/consts";

function* loadAllApartments() {
    const filters = yield select(getFilters);
    let apartments = yield call(getAllApartments, filters.toJS());
    const ids = yield onFetchApartmentsSuccess(apartments);
    yield put(setDiscoverIds(ids));
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
    return Object.keys(apartments);
}

export default function* defaultSaga() {
    yield takeEvery(LOAD_ALL_APARTMENTS, loadAllApartments);
    yield takeEvery(SET_PRICE_FILTER, loadAllApartments);
    yield takeEvery(SET_BEDROOM_FILTER, loadAllApartments);
    yield takeEvery(SET_BATHROOM_FILTER, loadAllApartments);
    yield takeEvery(SET_CITY_FILTER, loadAllApartments);
    yield takeEvery(LOAD_APARTMENTS_BY_IDS, loadApartmentsByIds);
}