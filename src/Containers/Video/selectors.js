import {VIDEO_REDUCER} from "../../Redux/consts";
import {createSelector} from "reselect";

const _getVideoTokens = (state) => state.get(VIDEO_REDUCER);

export const getVideoTokens = createSelector(
    _getVideoTokens,
    tokens => tokens.toJS()
);