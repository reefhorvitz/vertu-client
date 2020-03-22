import {PROPERTY_MANAGER_REDUCER} from "../../Redux/consts";
import {createSelector} from "reselect";
import {ADDRESS_ONE, ADDRESS_TWO, CITY, COUNTRY, LOCATION, PRICE, ZIP_CODE} from "./consts";
import {SIZE} from "../ApartmentsContainer/consts";

const _getPropertyManager = (state) => state.get(PROPERTY_MANAGER_REDUCER);

export const getLocation = createSelector(
    _getPropertyManager,
    (property) => property.get(LOCATION).toJS()
);

export const getAddressOne = createSelector(
    _getPropertyManager,
    (property) => property.getIn([LOCATION, ADDRESS_ONE])
);

export const getAddressTwo = createSelector(
    _getPropertyManager,
    (property) => property.getIn([LOCATION, ADDRESS_TWO])
);

export const getZipCode = createSelector(
    _getPropertyManager,
    (property) => property.getIn([LOCATION, ZIP_CODE])
);


export const getCity = createSelector(
    _getPropertyManager,
    (property) => property.getIn([LOCATION, CITY])
);


export const getCountry = createSelector(
    _getPropertyManager,
    (property) => property.getIn([LOCATION, COUNTRY])
)

export const getPrice = createSelector(
    _getPropertyManager,
    (property) => property.get(PRICE)
);

export const getSize = createSelector(
    _getPropertyManager,
    (property) => property.get(SIZE)
);
