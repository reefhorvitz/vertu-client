import {SET_BATHROOM_FILTER, SET_BEDROOM_FILTER, SET_CITY_FILTER, SET_PRICE_FILTER, SET_TAGS} from "./consts";

export function setPriceFilter(min, max) {
    return {
        type: SET_PRICE_FILTER,
         min, max
    }
}

export function setBedroomNumberFilter(number) {
    return {
        type: SET_BEDROOM_FILTER,
        number
    }
}

export function setBathroomNumberFilter(number) {
    return {
        type: SET_BATHROOM_FILTER,
        number
    }
}

export function setCityFilter(cityId) {
    return {
        type: SET_CITY_FILTER,
        cityId
    }
}

export function setTags(tags) {
    return {
        type: SET_TAGS,
        tags
    }
}