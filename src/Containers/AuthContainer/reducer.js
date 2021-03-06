import {fromJS} from "immutable";
import {
    EMAIL,
    FETCH_USER_DATA_SUCCESS,
    ID,
    IS_CONNECTED,
    LOGOUT,
    NAME, PHONE,
    PROFILE,
    TOKEN,
    TYPE,
    UPDATE_USER_DETAILS_SUCCESS
} from "./consts";

const initialState = fromJS({
  isConnected: false,
  id: null,
  name: null,
  phone: null,
  email: localStorage.getItem(EMAIL),
  profile: null,
  type: null,
  token: localStorage.getItem(TOKEN)
});

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_DETAILS_SUCCESS:
            return state.set(EMAIL, action.email)
                .set(PHONE, action.phone)
                .set(NAME, action.name);
        case LOGOUT:
            localStorage.removeItem(EMAIL);
            localStorage.removeItem(TOKEN);
            return initialState.delete(EMAIL).delete(TOKEN);
        case FETCH_USER_DATA_SUCCESS:
            localStorage.setItem(EMAIL, action.email);
            localStorage.setItem(TOKEN, action.token);
            return state.set(ID, action.id)
                .set(NAME, action.name)
                .set(EMAIL, action.email)
                .set(PHONE, action.phone)
                .set(PROFILE, action.profile)
                .set(TYPE, action.userType)
                .set(IS_CONNECTED, true);
        default:
            return state
    }
}