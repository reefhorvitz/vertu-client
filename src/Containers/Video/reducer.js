import {API_KEY, FETCH_VIDEO_TOKENS_SUCCESS, SESSION_ID, TOKEN} from "./consts";
import {fromJS} from "immutable";

const initialState = fromJS({
  apiKey: null,
  sessionId: null,
  token: null
});

export default function videoReducer(state=initialState, action) {
    switch (action.type) {
        case FETCH_VIDEO_TOKENS_SUCCESS:
            return state.set(TOKEN, action.token).set(SESSION_ID, action.sessionId).set(API_KEY, action.apiKey);
        default:
            return state;
    }
}