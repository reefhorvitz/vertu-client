import {
    APARTMENTS_LOADING,
    LOAD_ALL_APARTMENTS,
    LOAD_APARTMENTS_BY_IDS,
    LOAD_APARTMENTS_SUCCESS, SET_COMPLETED_IDS,
    SET_DISCOVER_IDS,
    SET_UPCOMING_IDS
} from "./consts";

export function loadAllApartments() {
    return {
        type: LOAD_ALL_APARTMENTS
    }
}

export function loadApartmentsByIds(apartmentsIds) {
    return {
        type: LOAD_APARTMENTS_BY_IDS,
        apartmentsIds
    }
}

export function loadApartmentsSuccess(apartments) {
    return {
        type: LOAD_APARTMENTS_SUCCESS,
        apartments
    }
}

export function setDiscoverIds(ids) {
    return {
        type: SET_DISCOVER_IDS,
        ids
    }
}

export function setUpcomingIds(ids) {
    return {
        type: SET_UPCOMING_IDS,
        ids
    }
}

export function setCompletedIds(ids) {
    return {
        type: SET_COMPLETED_IDS,
        ids
    }
}

export function onApartmentsLoading() {
    return {
        type: APARTMENTS_LOADING
    }
}