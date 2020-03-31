import {fromJS} from "immutable";
import {
    ADD_AMENITY_ID,
    ADD_FACILITY_ID,
    ADD_OTHER_DATA_ID,
    ADD_TAG_ID, ADDRESS_ONE, ADDRESS_TWO, AMENITIES, BATHROOM_NUMBER, BEDROOM_NUMBER, CITY, COOLING, COUNTRY,
    DELETE_AMENITY_ID,
    DELETE_FACILITY_ID,
    DELETE_OTHER_DATA_ID,
    DELETE_TAG_ID, FACILITIES, HEATING, IMAGES, IS_LOADING, OTHER_DATA, PARKING, PRICE,
    SET_ADDRESS_ONE,
    SET_ADDRESS_TWO,
    SET_BATHROOM_NUMBER,
    SET_BEDROOM_NUMBER,
    SET_CITY_ID,
    SET_COOLING_ID,
    SET_COUNTRY_ID,
    SET_HEATING_ID,
    SET_PARKING_ID,
    SET_PRICE,
    SET_SIZE,
    SET_TYPE_ID,
    SET_YEAR_BUILT,
    SET_ZIP_CODE, TAGS, TYPE, UPLOAD_IMAGE, UPLOAD_IMAGE_SUCCESS, YEAR_BUILT, ZIP_CODE
} from './consts';
import {SIZE} from "../ApartmentsContainer/consts";
const apartment = {
    location: {
        addressOne: null,
        addressTwo: null,
        city: null,
        country: null,
        zipCode: null,
    },
    images: [],
    size: null,
    price: null,
    yearBuilt: null,
    bedroomNum: null,
    bathroomNum: null,
    heatingId: null,
    coolingId: null,
    parkingId: null,
    typeId: null,
    facilitiesIds: [],
    amenitiesIds: [],
    otherDataIds: [],
    tagsIds: [],
    isLoading: false
};

const initialState = fromJS(apartment);

function insert(state, key, item) {
    return state.update(key, lst => lst.push(item));
}

function deleteAt(state, key, item) {
    return state.update(key, lst => {
        const index = lst.findIndex(val => val == item);
        if(index !== -1){
            return lst.delete(index);
        }
        return lst;
    })
}

export default function PropertyManagerReducer(state = initialState, action) {
    switch (action.type) {
        case UPLOAD_IMAGE:
            return state.set(IS_LOADING, true);
        case SET_ADDRESS_ONE:
            return state.set(ADDRESS_ONE, action.address);
        case SET_ADDRESS_TWO:
            return state.set(ADDRESS_TWO, action.address);
        case SET_CITY_ID:
            return state.set(CITY, action.id);
        case SET_COUNTRY_ID:
            return state.set(COUNTRY, action.id);
        case SET_ZIP_CODE:
            return state.set(ZIP_CODE, action.zipCode);
        case SET_PARKING_ID:
            return state.set(PARKING, action.id);
        case SET_HEATING_ID:
            return state.set(HEATING, action.id);
        case SET_COOLING_ID:
            return state.set(COOLING, action.id);
        case SET_TYPE_ID:
            return state.set(TYPE, action.id);
        case SET_BEDROOM_NUMBER:
            return state.set(BEDROOM_NUMBER, action.number);
        case SET_BATHROOM_NUMBER:
            return state.set(BATHROOM_NUMBER, action.number);
        case SET_YEAR_BUILT:
            return state.set(YEAR_BUILT, action.yearBuilt);
        case SET_PRICE:
            return state.set(PRICE, action.price);
        case SET_SIZE:
            return state.set(SIZE, action.size);
        case ADD_AMENITY_ID:
            return insert(state, AMENITIES, action.id);
        case ADD_FACILITY_ID:
            return insert(state, FACILITIES, action.id);
        case ADD_OTHER_DATA_ID:
            return insert(state, OTHER_DATA, action.id);
        case ADD_TAG_ID:
            return insert(state, TAGS, action.id);
        case DELETE_AMENITY_ID:
            return deleteAt(state, AMENITIES, action.id);
        case DELETE_FACILITY_ID:
            return deleteAt(state, FACILITIES, action.id);
        case DELETE_OTHER_DATA_ID:
            return deleteAt(state, OTHER_DATA, action.id);
        case DELETE_TAG_ID:
            return deleteAt(state, TAGS, action.id);
        case UPLOAD_IMAGE_SUCCESS:
            return insert(state, IMAGES, action.url)
                .set(IS_LOADING, false);
        default:
            return state;
    }
}