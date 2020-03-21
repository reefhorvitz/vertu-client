import {FILTERS_REDUCER} from "../../Redux/consts";
import {createSelector} from "reselect";

const _getFilters = (state) => state.get(FILTERS_REDUCER);

export const getFilters = createSelector(
    _getFilters,
    (filters) => filters
);