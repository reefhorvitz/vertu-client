import {call, put, takeEvery} from 'redux-saga/effects'
import {validateTokenAuth} from "../../api/orm/auth";
import {fetchUserDataSuccess} from "./actions";
import {LOGOUT, ON_LOGIN_SUCCESS} from "./consts";
import {push} from 'connected-react-router';

function *validateAndFetchUserData({email, token}) {
    const {id, name, email: userEmail, profile, phone, type} = yield call(validateTokenAuth, email, token);
    yield put(fetchUserDataSuccess(id, name, phone, userEmail, profile, type, token));
}

function *logoutSaga() {
    yield push('/login')
}

export default function* defaultSaga() {
    yield takeEvery(ON_LOGIN_SUCCESS, validateAndFetchUserData);
    yield takeEvery(LOGOUT, logoutSaga);
}