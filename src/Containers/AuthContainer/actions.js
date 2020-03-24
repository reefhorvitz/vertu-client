import {ON_LOGIN_SUCCESS} from "./consts";

export function onLoginSuccess(name, email, image, token) {
    return {
        type: ON_LOGIN_SUCCESS,
        name,
        email,
        image,
        token
    }
}