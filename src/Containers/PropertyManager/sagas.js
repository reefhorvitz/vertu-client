import {call, put, takeEvery, select} from 'redux-saga/effects'
import {getApartment} from "./selectors";
import {createProperty} from "../../api/orm/apartment";
import {CREATE_NEW_LISTING} from "./consts";
import {getUsersId} from "../AuthContainer/selectors";

function *createNewListing() {
    const apartment = yield select(getApartment);
    apartment.seller = yield select(getUsersId);
    yield call(createProperty, apartment);
}

export default function* defaultSaga() {
    yield takeEvery(CREATE_NEW_LISTING, createNewListing);
}