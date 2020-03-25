import {call, put, takeEvery} from 'redux-saga/effects'
import {validateTokenAuth} from "../../api/orm/auth";
import {fetchUserDataSuccess} from "./actions";
import {ON_LOGIN_SUCCESS} from "./consts";


function *validateAndFetchUserData({email, token}) {
    const {id, name, email: userEmail, profile, phone, type} = yield call(validateTokenAuth, email, token);
    yield put(fetchUserDataSuccess(id, name, phone, userEmail, profile, type, token));
}


export default function* defaultSaga() {
    yield takeEvery(ON_LOGIN_SUCCESS, validateAndFetchUserData);
}