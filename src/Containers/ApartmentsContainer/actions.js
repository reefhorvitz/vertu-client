import {LOAD_ALL_APARTMENTS, LOAD_APARTMENTS_BY_IDS, LOAD_APARTMENTS_SUCCESS} from "./consts";

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