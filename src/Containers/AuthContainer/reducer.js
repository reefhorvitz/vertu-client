import {fromJS} from "immutable";
import {EMAIL, FETCH_USER_DATA_SUCCESS, ID, IS_CONNECTED, NAME, PROFILE, TOKEN, TYPE} from "./consts";

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
        case FETCH_USER_DATA_SUCCESS:
            console.log("in reducer");
            localStorage.setItem(EMAIL, action.email);
            localStorage.setItem(TOKEN, action.token);
            return state.set(ID, action.id)
                .set(NAME, action.name)
                .set(EMAIL, action.email)
                .set(PROFILE, action.profile)
                .set(TYPE, action.userType)
                .set(IS_CONNECTED, true);
        default:
            return state
    }
}