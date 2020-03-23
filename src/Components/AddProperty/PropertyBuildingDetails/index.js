import React from 'react';
import MultiSelectOption from "./MultiSelectOption";

const PropertyBuildingDetails = ({
        facilities = [], deleteFacility, addFacility,
        amenities = [], deleteAmenity, addAmenity,
        tags = [], deleteTag, addTag,
        otherData = [], deleteOtherData, addOtherData
        }) => {
    return (
        <div className="building-details-section-bg">
            <h2>Building Details</h2>
            <MultiSelectOption title="Facilities" options={facilities} addFunc={addFacility} deleteFunc={deleteFacility}/>
            <MultiSelectOption title="Amenities" options={amenities} addFunc={addAmenity} deleteFunc={deleteAmenity}/>
            <MultiSelectOption title="Tags" options={tags} addFunc={addTag} deleteFunc={deleteTag}/>
            <MultiSelectOption title="Other Data" options={otherData} addFunc={addOtherData} deleteFunc={deleteOtherData}/>
        </div>

)
};

export default PropertyBuildingDetails;