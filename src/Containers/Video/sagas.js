import {call, put, takeEvery, select} from 'redux-saga/effects'
import {getVideoData} from "../../api/orm/video";
import {FETCH_VIDEO_TOKENS} from "./consts";
import {fetchVideoTokensSuccess} from "./actions";

function *fetchVideoTokens({appointmentId}) {
    const {apiKey, sessionId, token} = yield call(getVideoData, 1);
    yield put(fetchVideoTokensSuccess(apiKey, sessionId, token));
}

export default function* defaultSaga() {
    yield takeEvery(FETCH_VIDEO_TOKENS, fetchVideoTokens);
}