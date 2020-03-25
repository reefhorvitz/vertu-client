import {call, put, takeEvery, select} from 'redux-saga/effects'
import {getAllPropertyMetadata} from "../../api/orm/propertyMetadata";
import {loadPropertyMetadataSuccess} from "./actions";
import {LOAD_ALL_PROPERTY_METADATA} from "./consts";
import {FETCH_USER_DATA_SUCCESS} from "../AuthContainer/consts";

function *loadAllPropertyMetadata() {
    const propertyMetadata = yield call(getAllPropertyMetadata);
    yield put(loadPropertyMetadataSuccess(propertyMetadata));
}


export default function* defaultSaga() {
    yield takeEvery(LOAD_ALL_PROPERTY_METADATA, loadAllPropertyMetadata);
    yield takeEvery(FETCH_USER_DATA_SUCCESS, loadAllPropertyMetadata);
}