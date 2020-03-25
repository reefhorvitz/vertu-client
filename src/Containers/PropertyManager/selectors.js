import {PROPERTY_MANAGER_REDUCER} from "../../Redux/consts";
import {createSelector} from "reselect";
import {ADDRESS_ONE, ADDRESS_TWO, CITY, COUNTRY, IMAGES, LOCATION, PRICE, YEAR_BUILT, ZIP_CODE} from "./consts";
import {SIZE} from "../ApartmentsContainer/consts";

const _getPropertyManager = (state) => state.get(PROPERTY_MANAGER_REDUCER);

export const getApartment = createSelector(
    _getPropertyManager,
    apartment => apartment.toJS()
)
export const getLocation = createSelector(
    _getPropertyManager,
    (property) => property.get(LOCATION).toJS()
);

export const getAddressOne = createSelector(
    _getPropertyManager,
    (property) => property.get(ADDRESS_ONE)
);

export const getAddressTwo = createSelector(
    _getPropertyManager,
    (property) => property.get(ADDRESS_TWO)
);

export const getZipCode = createSelector(
    _getPropertyManager,
    (property) => property.get(ZIP_CODE)
);


export const getCity = createSelector(
    _getPropertyManager,
    (property) => property.get(CITY)
);


export const getCountry = createSelector(
    _getPropertyManager,
    (property) => property.getIn(COUNTRY)
)

export const getPrice = createSelector(
    _getPropertyManager,
    (property) => property.get(PRICE)
);

export const getSize = createSelector(
    _getPropertyManager,
    (property) => property.get(SIZE)
);

export const getYearBuilt = createSelector(
    _getPropertyManager,
    (property) => property.get(YEAR_BUILT)
);

export const getImages = createSelector(
    _getPropertyManager,
    property => property.get(IMAGES)
)