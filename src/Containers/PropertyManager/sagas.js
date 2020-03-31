import {call, put, takeEvery, select} from 'redux-saga/effects'
import {getApartment} from "./selectors";
import {createProperty} from "../../api/orm/apartment";
import {CREATE_NEW_LISTING, UPLOAD_IMAGE} from "./consts";
import {getUsersId} from "../AuthContainer/selectors";
import {uploadImage as uploadImageApi} from "../../api/orm/image";
import {uploadImageSuccess} from "./actions";
import {onFailure, onSuccess} from "../Toastr/actions";
import {loadAllApartments} from "../ApartmentsContainer/actions";
import {push} from 'connected-react-router';

function *createNewListing() {
    const apartment = yield select(getApartment);
    apartment.seller = yield select(getUsersId);
    try{
        yield call(createProperty, apartment);
        yield put(onSuccess('Added new listing successfully'));
        yield put(loadAllApartments());
        yield push('/discover');
    }
    catch (e) {
        yield put(onFailure('Failed to add new listing'))
    }

}

function *uploadImage({image}) {
    const url = yield call(uploadImageApi, image);
    yield put(uploadImageSuccess(url));
}

export default function* defaultSaga() {
    yield takeEvery(CREATE_NEW_LISTING, createNewListing);
    yield takeEvery(UPLOAD_IMAGE, uploadImage)
}