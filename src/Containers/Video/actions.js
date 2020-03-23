import {FETCH_VIDEO_TOKENS, FETCH_VIDEO_TOKENS_SUCCESS} from "./consts";

export function fetchVideoTokens(appointmentId) {
    return {
        type: FETCH_VIDEO_TOKENS,
        appointmentId
    }
}

export function fetchVideoTokensSuccess(apiKey, sessionId, token) {
    return {
        type: FETCH_VIDEO_TOKENS_SUCCESS,
        apiKey,
        sessionId,
        token
    }
}