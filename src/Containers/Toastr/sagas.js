import {call, put, takeEvery} from 'redux-saga/effects'
import {ON_FAILURE, ON_SUCCESS} from "./consts";
import {toastr} from "react-redux-toastr";

function* onSuccess({message = "Action completed successfully"}) {
    toastr.success(message)
}

function* onFailure({message = "Error while completing action"}) {
    toastr.error(message)
}

export default function* defaultSaga() {
    yield takeEvery(ON_SUCCESS, onSuccess);
    yield takeEvery(ON_FAILURE, onFailure);
}