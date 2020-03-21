import {createSelector} from 'reselect';
import {AUTH_REDUCER} from "../../Redux/consts";
import {EMAIL, FIRST_NAME, LAST_NAME, PHONE, PROFILE} from "./consts";

const _getUsersFirstName = (state) => state.getIn([AUTH_REDUCER, FIRST_NAME]);
const _getUsersLastName = (state) => state.getIn([AUTH_REDUCER, LAST_NAME]);
const _getUsersEmail = (state) => state.getIn([AUTH_REDUCER, EMAIL]);
const _getUsersPhone = (state) => state.getIn([AUTH_REDUCER, PHONE]);
const _getUsersProfile = (state) => state.getIn([AUTH_REDUCER, PROFILE]);

export const getUsersName = createSelector(
    _getUsersFirstName,
    _getUsersLastName,
    (firstName, lastName) => `${firstName} ${lastName}`
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