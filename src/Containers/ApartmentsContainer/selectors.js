import {APARTMENTS_REDUCER} from "../../Redux/consts";
import {createSelector} from "reselect";
import {
    IMAGES,
    SELLER,
    LOCATION,
    TYPE,
    DESCRIPTION,
    PRICE,
    BATHROOM_NUMBER,
    BEDROOM_NUMBER,
    SIZE,
    OTHER_DETAILS,
    AMENITIES,
    FACILITIES,
    YEAR_BUILT,
    PARKING_DATA,
    HEATING_DATA,
    COOLING_DATA,
    APARTMENTS,
    TAGS,
    TOUR_STATUS, UPCOMING
} from "./consts";

const _selectApartments = (state) => state.getIn([APARTMENTS_REDUCER, APARTMENTS]);
const _selectApartmentById = (apartmentId) => (state) => state.getIn([APARTMENTS_REDUCER, APARTMENTS, apartmentId.toString()]);

export const getUpcomingApartmentsIds = createSelector(
    _selectApartments,
    apartments => apartments.filter(apartment => apartment.get(TOUR_STATUS) === UPCOMING).map((value, key) => key)
);

export const getApartmentsIds = createSelector(
    _selectApartments,
    apartments => apartments.map((value, key) => key)
);

export const getApartmentById = (apartmentId) => createSelector(
    _selectApartmentById(apartmentId),
    apartment => apartment
);

export const getApartmentSellerById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(SELLER)
);

export const getApartmentImagesById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(IMAGES)
);

export const getApartmentLocationById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(LOCATION)
);

export const getApartmentTypeById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(TYPE)
);

export const getApartmentDescriptionById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(DESCRIPTION)
);

export const getApartmentPriceById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(PRICE)
);

export const getApartmentBathroomNumberById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(BATHROOM_NUMBER)
);

export const getApartmentBedroomNumberById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(BEDROOM_NUMBER)
);

export const getApartmentSizeById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(SIZE)
);

export const getApartmentOtherDetailsById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(OTHER_DETAILS)
);

export const getApartmentAmenitiesById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(AMENITIES)
);

export const getApartmentFacilitiesById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(FACILITIES)
);

export const getApartmentYearBuiltById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(YEAR_BUILT)
);

export const getApartmentParkingDataById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(PARKING_DATA)
);

export const getApartmentHeatingDataById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(HEATING_DATA)
);

export const getApartmentCoolingDataById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(COOLING_DATA)
);

export const getApartmentTagsById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment.get(TAGS)
);

