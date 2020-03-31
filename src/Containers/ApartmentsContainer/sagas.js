import {call, put, takeEvery, select} from 'redux-saga/effects'
import {getAllApartments, getApartmentsByIds} from "../../api/graphql/apartments";
import {arrayToObject} from "../../helpers/arrayToObject";
import {LOAD_ALL_APARTMENTS, LOAD_APARTMENTS_BY_IDS} from "./consts";
import {loadApartmentsSuccess, onApartmentsLoading, setDiscoverIds} from "./actions";
import {getApartmentsIds, getApartmentTagsById} from "./selectors";
import {getFilters, getUserTagFilter} from "../Filters/selectors";
import {SET_BATHROOM_FILTER, SET_BEDROOM_FILTER, SET_CITY_FILTER, SET_PRICE_FILTER} from "../Filters/consts";
import {handleByUserType} from "../../helpers/userType";

function* loadAllApartments({userId}) {
    yield put(onApartmentsLoading());
    const filters = (yield select(getFilters)).toJS();
    handleByUserType(() => null, () => filters.sellerId = userId);
    let apartments = yield call(getAllApartments, filters);
    const ids = yield onFetchApartmentsSuccess(apartments);
    const sortedIds = yield sortApartments(ids);
    yield put(setDiscoverIds(sortedIds));
}

function *sortApartments(ids) {
    const userTags = yield select(getUserTagFilter);
    yield ids.sort(function*(a, b) {
        const property1 = yield select(getApartmentTagsById(a));
        const property2 = yield select(getApartmentTagsById(b));
        const aMatches = property1.filter(tag => userTags.includes(tag)).length;
        const bMatches = property2.filter(tag => userTags.includes(tag)).length;
        return aMatches >= bMatches ? 1 : 0
    });
    return ids
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