import Request from './index'
export function getVideoData(appoimtmentId) {
    return Request.get(`opentok/${appoimtmentId}/`)
}