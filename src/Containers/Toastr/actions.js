import {ON_FAILURE, ON_SUCCESS} from "./consts";

export function onSuccess(message){
    return{
        type: ON_SUCCESS,
        message
    }
}


export function onFailure(message){
    return{
        type: ON_FAILURE,
        message
    }
}