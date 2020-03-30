import {FILTERS_REDUCER} from "../../Redux/consts";
import {createSelector} from "reselect";
import {
    BATHROOM_NUMBER_FILTER,
    BEDROOM_NUMBER_FILTER,
    CITY_FILTER,
    PRICE_FILTER, PRICE_FILTER_MAX,
    PRICE_FILTER_MIN,
    TAGS_FILTER
} from "./consts";

const _getFilters = (state) => state.get(FILTERS_REDUCER);

export const getFilters = createSelector(
    _getFilters,
    (filters) => filters
);

export const getUserTagFilter = createSelector(
    getFilters,
    filters => filters.get(TAGS_FILTER).toJS()
);

export const getCityFilter = createSelector(
    getFilters,
    filters => filters.get(CITY_FILTER)
);

export const getBedroomFilter = createSelector(
    getFilters,
    filters => filters.get(BEDROOM_NUMBER_FILTER)
);

export const getBathroomFilter = createSelector(
    getFilters,
    filters => filters.get(BATHROOM_NUMBER_FILTER)
);

export const getMinPriceFilter = createSelector(
    getFilters,
    filters => filters.getIn([PRICE_FILTER, PRICE_FILTER_MIN])
);

export const getMaxPriceFilter = createSelector(
    getFilters,
    filters => filters.getIn([PRICE_FILTER, PRICE_FILTER_MAX])
)