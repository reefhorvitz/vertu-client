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
    TOUR_STATUS, UPCOMING, COMPLETED, CITY, NAME, COUNTRY, ADDRESS
} from "./consts";
import {EMAIL, FIRST_NAME, LAST_NAME, PHONE, PROFILE} from "../AuthContainer/consts";

const _selectApartments = (state) => state.getIn([APARTMENTS_REDUCER, APARTMENTS]);
const _selectApartmentById = (apartmentId) => (state) => state.getIn([APARTMENTS_REDUCER, APARTMENTS, apartmentId.toString()]);

export const getUpcomingApartmentsIds = createSelector(
    _selectApartments,
    apartments => apartments.filter(apartment => apartment.get(TOUR_STATUS) === UPCOMING).map((value, key) => key)
);

export const getCompletedApartmentsIds = createSelector(
    _selectApartments,
    apartments => apartments.filter(apartment => apartment.get(TOUR_STATUS) === COMPLETED).map((value, key) => key)
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
    apartment => {
        if(apartment){
            let seller = apartment.get(SELLER);
            return {
                name: `${seller.get(FIRST_NAME)} ${seller.get(LAST_NAME)}`,
                email: seller.get(EMAIL),
                phone: seller.get(PHONE),
                image: seller.get(PROFILE)
            }
        }
    }
);

export const getApartmentImagesById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment && apartment.get(IMAGES)
);

export const getApartmentLocationById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => {
        if(apartment){
            return {
                city: apartment.getIn([LOCATION, CITY, NAME]),
                country: apartment.getIn([LOCATION, CITY, COUNTRY, NAME]),
                address: apartment.getIn([LOCATION, ADDRESS])
            }
        }
    }
);

export const gerApartmentLocationStringById = (apartmentId) => createSelector(
    getApartmentLocationById(apartmentId),
    ({city, country, address}) => city && country && address && `${address}, ${city}, ${country}`
)

export const getApartmentTypeById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment && apartment.get(TYPE)
);

export const getApartmentDescriptionById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment && apartment.get(DESCRIPTION)
);

export const getApartmentPriceById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment && apartment.get(PRICE)
);

export const getApartmentBathroomNumberById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment && apartment.get(BATHROOM_NUMBER)
);

export const getApartmentBedroomNumberById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment && apartment.get(BEDROOM_NUMBER)
);

export const getApartmentSizeById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment && apartment.get(SIZE)
);

export const getApartmentOtherDetailsById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment && apartment.get(OTHER_DETAILS)
);

export const getApartmentAmenitiesById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment && apartment.get(AMENITIES)
);

export const getApartmentFacilitiesById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment && apartment.get(FACILITIES)
);

export const getApartmentYearBuiltById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment && apartment.get(YEAR_BUILT)
);

export const getApartmentParkingDataById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment && apartment.get(PARKING_DATA)
);

export const getApartmentHeatingDataById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment && apartment.get(HEATING_DATA)
);

export const getApartmentCoolingDataById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment && apartment.get(COOLING_DATA)
);

export const getApartmentTagsById = (apartmentId) => createSelector(
    getApartmentById(apartmentId),
    apartment => apartment && apartment.get(TAGS)
);

