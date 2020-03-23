import {PROPERTY_METADATA_REDUCER} from "../../Redux/consts";
import {createSelector} from "reselect";
import {AMENITIES, CITIES, COOLING, COUNTRIES, FACILITIES, HEATINGS, OTHER_DATA, PARKING, TAGS, TYPES} from "./consts";

const getProperyMetadata = (state) => state.get(PROPERTY_METADATA_REDUCER);

export const getAllCities = createSelector(
  getProperyMetadata,
    (metadata) => metadata.get(CITIES),
);


export const getAllCountries = createSelector(
    getProperyMetadata,
    (metadata) => metadata.get(COUNTRIES)
);

export const getAllTypes = createSelector(
    getProperyMetadata,
    (metadata) => metadata.get(TYPES)
);

export const getAllFacilities = createSelector(
    getProperyMetadata,
    (metadata) => metadata.get(FACILITIES)
);

export const getAllAmenities = createSelector(
    getProperyMetadata,
    (metadata) => metadata.get(AMENITIES)
);

export const getAllOtherData = createSelector(
    getProperyMetadata,
    (metadata) => metadata.get(OTHER_DATA)
);

export const getAllTags = createSelector(
    getProperyMetadata,
    (metadata) => metadata.get(TAGS)
);

export const getAllHeating = createSelector(
    getProperyMetadata,
    (metadata) => metadata.get(HEATINGS)
);

export const getAllCooling = createSelector(
    getProperyMetadata,
    (metadata) => metadata.get(COOLING)
);

export const getAllParking = createSelector(
    getProperyMetadata,
    (metadata) => metadata.get(PARKING)
);
