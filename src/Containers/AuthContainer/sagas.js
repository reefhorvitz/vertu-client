import {call, put, takeEvery} from 'redux-saga/effects'
import {validateTokenAuth} from "../../api/orm/auth";
import {fetchUserDataSuccess, updateUserDetailsSuccess} from "./actions";
import {LOGOUT, ON_LOGIN_SUCCESS, UPDATE_USER_DETAILS, UPDATE_USER_DETAILS_SUCCESS} from "./consts";
import {push} from 'connected-react-router';
import {updateUserDetails} from "../../api/orm/user";
import {onFailure, onSuccess} from "../Toastr/actions";

function *validateAndFetchUserData({email, token}) {
    const {id, name, email: userEmail, profile, phone, type} = yield call(validateTokenAuth, email, token);
    yield put(fetchUserDataSuccess(id, name, phone, userEmail, profile, type, token));
}

function *logoutSaga() {
    yield put(push('/login'));
}

function *updateUserDetailsSaga({userId, name, email, phone}) {
    try {
        let user = yield call(updateUserDetails, userId, name, phone, email);
        yield put(updateUserDetailsSuccess(user.name, user.phone, user.email));
        yield put(onSuccess('User Information Updated Successfully'));
        yield put(push('/discover'));
    }
    catch (e) {
        yield put(onFailure('Failed to update user information'));
    }
}

export default function* defaultSaga() {
    yield takeEvery(ON_LOGIN_SUCCESS, validateAndFetchUserData);
    yield takeEvery(LOGOUT, logoutSaga);
    yield takeEvery(UPDATE_USER_DETAILS, updateUserDetailsSaga);
}