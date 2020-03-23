import {createSelector} from 'reselect';
import {AUTH_REDUCER} from "../../Redux/consts";
import {AGENT, EMAIL, FIRST_NAME, ID, LAST_NAME, PHONE, PROFILE, TYPE} from "./consts";

const _getUsersFirstName = (state) => state.getIn([AUTH_REDUCER, FIRST_NAME]);
const _getUsersLastName = (state) => state.getIn([AUTH_REDUCER, LAST_NAME]);
const _getUsersEmail = (state) => state.getIn([AUTH_REDUCER, EMAIL]);
const _getUsersPhone = (state) => state.getIn([AUTH_REDUCER, PHONE]);
const _getUsersProfile = (state) => state.getIn([AUTH_REDUCER, PROFILE]);
const _getAuth = (state) => state.get(AUTH_REDUCER);

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

export const getUsersId = createSelector(
    _getAuth,
    auth => auth.get(ID)
)

export const getIsAgent = createSelector(
    _getAuth,
    auth => auth.get(TYPE) == AGENT
)