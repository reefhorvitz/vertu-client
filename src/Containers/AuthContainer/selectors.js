import {createSelector} from 'reselect';
import {AUTH_REDUCER} from "../../Redux/consts";
import {EMAIL, NAME, PHONE, PROFILE} from "./consts";

const _getUsersName = (state) => state.getIn([AUTH_REDUCER, NAME]);
const _getUsersEmail = (state) => state.getIn([AUTH_REDUCER, EMAIL]);
const _getUsersPhone = (state) => state.getIn([AUTH_REDUCER, PHONE]);
const _getUsersProfile = (state) => state.getIn([AUTH_REDUCER, PROFILE]);

export const getUsersName = createSelector(
    _getUsersName,
    username => username
);

export const getUsersProfile = createSelector(
    _getUsersProfile,
    profile => profile
);

export const getUsersEmail = createSelector(
    _getUsersEmail,
    email => email
);

export const getUsersPhone = createSelector(
    _getUsersPhone,
    phone => phone
);