import {PROPERTY_METADATA_REDUCER} from "../../Redux/consts";
import {createSelector} from "reselect";
import {CITIES, COUNTRIES} from "./consts";

const getProperyMetadata = (state) => state.get(PROPERTY_METADATA_REDUCER);

export const getAllCities = createSelector(
  getProperyMetadata,
    (metadata) => metadata.get(CITIES)
);


export const getAllCountries = createSelector(
    getProperyMetadata,
    (metadata) => metadata.get(COUNTRIES)
);