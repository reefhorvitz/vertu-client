import {LOAD_ALL_PROPERTY_METADATA, LOAD_PROPERTY_METADATA_SUCCESS} from "./consts";


export function loadAllPropertyMetadata() {
    return {
        type: LOAD_ALL_PROPERTY_METADATA
    }
}

export function loadPropertyMetadataSuccess(propertyMetadata) {
    return {
        type: LOAD_PROPERTY_METADATA_SUCCESS,
        propertyMetadata
    }
}