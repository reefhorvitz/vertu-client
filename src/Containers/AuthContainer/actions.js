import {FETCH_USER_DATA_SUCCESS, LOGOUT, ON_LOGIN_SUCCESS} from "./consts";

export function onLoginSuccess(email, token) {
    return {
        type: ON_LOGIN_SUCCESS,
        email,
        token
    }
}

export function fetchUserDataSuccess(id, name, phone, email, profile, userType, token) {
    return {
        type: FETCH_USER_DATA_SUCCESS,
        id,
        name,
        phone,
        email,
        profile,
        userType,
        token
    }
}

export function logout() {
    return {
        type: LOGOUT
    }
}