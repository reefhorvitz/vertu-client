import {createSelector} from 'reselect';
import {AUTH_REDUCER} from "../../Redux/consts";
import {AGENT, EMAIL, ID, IS_CONNECTED, NAME, PHONE, PROFILE, TOKEN, TYPE} from "./consts";

const _getUsersName = (state) => state.getIn([AUTH_REDUCER, NAME]);
const _getUsersEmail = (state) => state.getIn([AUTH_REDUCER, EMAIL]);
const _getUsersPhone = (state) => state.getIn([AUTH_REDUCER, PHONE]);
const _getUsersProfile = (state) => state.getIn([AUTH_REDUCER, PROFILE]);
const _getAuth = (state) => state.get(AUTH_REDUCER);

export const getUsersName = createSelector(
    _getUsersName,
    name => name
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
);

export const getIsAgent = createSelector(
    _getAuth,
    auth => auth.get(TYPE) == AGENT
);

export const getIsConnected = createSelector(
  _getAuth,
  auth => auth.get(IS_CONNECTED)
);

export const getUsersToken = createSelector(
  _getAuth,
  auth => auth.get(TOKEN)
);