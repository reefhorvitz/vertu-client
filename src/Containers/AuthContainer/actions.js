import {
    FETCH_USER_DATA_SUCCESS,
    LOGOUT,
    ON_LOGIN_SUCCESS,
    UPDATE_USER_DETAILS,
    UPDATE_USER_DETAILS_SUCCESS
} from "./consts";

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

export function updateUserDetails(name, phone, email) {
    return {
        type: UPDATE_USER_DETAILS,
        name,
        phone,
        email
    }
}

export function updateUserDetailsSuccess(name, phone, email) {
    return {
        type: UPDATE_USER_DETAILS_SUCCESS,
        name,
        phone,
        email
    }
}