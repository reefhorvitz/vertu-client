import {FILTERS_REDUCER} from "../../Redux/consts";
import {createSelector} from "reselect";
import {TAGS_FILTER} from "./consts";

const _getFilters = (state) => state.get(FILTERS_REDUCER);

export const getFilters = createSelector(
    _getFilters,
    (filters) => filters
);

export const getUserTagFilter = createSelector(
    getFilters,
    filters => filters.get(TAGS_FILTER).toJS()
)