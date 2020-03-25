import {
    ADD_AMENITY_ID,
    ADD_FACILITY_ID,
    ADD_OTHER_DATA_ID,
    ADD_TAG_ID, CREATE_NEW_LISTING,
    DELETE_AMENITY_ID,
    DELETE_FACILITY_ID,
    DELETE_OTHER_DATA_ID,
    DELETE_TAG_ID,
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
    SET_ZIP_CODE, UPLOAD_IMAGE, UPLOAD_IMAGE_SUCCESS
} from "./consts";

export function setCoolingId(id) {
    return {
        type: SET_COOLING_ID,
        id
    }
}

export function setHeatingId(id) {
    return {
        type: SET_HEATING_ID,
        id
    }
}

export function setTypeId(id) {
    return {
        type: SET_TYPE_ID,
        id
    }
}

export function setParkingId(id) {
    return {
        type: SET_PARKING_ID,
        id
    }
}


export function setCityId(id) {
    return {
        type: SET_CITY_ID,
        id
    }
}


export function setCountryId(id) {
    return {
        type: SET_COUNTRY_ID,
        id
    }
}


export function setPrice(price) {
    return {
        type: SET_PRICE,
        price
    }
}



export function setZipCode(zipCode) {
    return {
        type: SET_ZIP_CODE,
        zipCode
    }
}

export function setAddressOne(address) {
    return {
        type: SET_ADDRESS_ONE,
        address
    }
}

export function setAddressTwo(address) {
    return {
        type: SET_ADDRESS_TWO,
        address
    }
}

export function setYearBuilt(yearBuilt) {
    return {
        type: SET_YEAR_BUILT,
        yearBuilt
    }
}

export function setSize(size) {
    return {
        type: SET_SIZE,
        size
    }
}

export function setBedroomNumber(number) {
    return {
        type: SET_BEDROOM_NUMBER,
        number
    }
}

export function setBathroomNumber(number) {
    return {
        type: SET_BATHROOM_NUMBER,
        number
    }
}

export function addFacilityId(id) {
    return {
        type: ADD_FACILITY_ID,
        id
    }
}

export function addAmenityId(id) {
    return {
        type: ADD_AMENITY_ID,
        id
    }
}


export function addTagId(id) {
    return {
        type: ADD_TAG_ID,
        id
    }
}

export function addOtherDataId(id) {
    return {
        type: ADD_OTHER_DATA_ID,
        id
    }
}


export function deleteFacilityId(id) {
    return {
        type: DELETE_FACILITY_ID,
        id
    }
}

export function deleteAmenityId(id) {
    return {
        type: DELETE_AMENITY_ID,
        id
    }
}


export function deleteTagId(id) {
    return {
        type: DELETE_TAG_ID,
        id
    }
}

export function deleteOtherDataId(id) {
    return {
        type: DELETE_OTHER_DATA_ID,
        id
    }
}

export function createNewListing() {
    return {
        type: CREATE_NEW_LISTING
    }
}

export function uploadImage(image) {
    return {
        type: UPLOAD_IMAGE,
        image
    }
}

export function uploadImageSuccess(url) {
    return {
        type: UPLOAD_IMAGE_SUCCESS,
        url
    }
}