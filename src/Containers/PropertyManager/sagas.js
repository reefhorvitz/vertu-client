import {call, put, takeEvery, select} from 'redux-saga/effects'
import {getApartment} from "./selectors";
import {createProperty} from "../../api/orm/apartment";
import {CREATE_NEW_LISTING, UPLOAD_IMAGE} from "./consts";
import {getUsersId} from "../AuthContainer/selectors";
import {uploadImage as uploadImageApi} from "../../api/orm/image";
import {uploadImageSuccess} from "./actions";

function *createNewListing() {
    const apartment = yield select(getApartment);
    apartment.seller = yield select(getUsersId);
    yield call(createProperty, apartment);
}

function *uploadImage({image}) {
    const url = yield call(uploadImageApi, image);
    yield put(uploadImageSuccess(url));
}

export default function* defaultSaga() {
    yield takeEvery(CREATE_NEW_LISTING, createNewListing);
    yield takeEvery(UPLOAD_IMAGE, uploadImage)
}