import React from 'react';
import styles from './styles.module.css';
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
            <div className="building-details-section">
                <h3 id="facilities">Facilities<span>+</span></h3>
                <div className="Facilities-data-box-bg" id="hide-div" style=" display:none;">
                    <span id="hide">-</span>
                    <div className="Facilities-data-box">
                        {facilities.map(facility => <MultiSelectOption
                            optionText={facility}
                            containerClass={"Facilities-data"}/>)}
                    </div>
                </div>
            </div>
            <div className="building-details-section">
                <h3 id="amenities">Amenities<span>+</span></h3>
                <div className="Facilities-data-box-bg" id="hide-div1" style=" display:none;">
                    <span id="hide1">-</span>
                    <div className="Facilities-data-box">
                        {amenities.map(amenity => <MultiSelectOption
                            optionText={amenity}
                            containerClass={"Facilities-data"}/>)}
                    </div>
                </div>
            </div>
            <div className="building-details-section">
                <h3 id="tags">Tags<span>+</span></h3>
                <div className="Facilities-data-box-bg" id="hide-div2" style=" display:none;">
                    <span id="hide2">-</span>
                    <div className="Facilities-data-box">
                        {tags.map(tag => <MultiSelectOption
                            optionText={tag}
                            containerClass={"Facilities-data"}/>)}
                    </div>
                </div>
            </div>
            <div className="building-details-section">
                <h3 id="other">Other<span>+</span></h3>
                <div className="Facilities-data-box-bg" id="hide-div3" style=" display:none;">
                    <span id="hide3">-</span>
                    <div className="Facilities-data-box">
                        {otherData.map(data => <MultiSelectOption
                            optionText={data}
                            containerClass={"Facilities-data"}/>)}
                    </div>
                </div>
            </div>
        </div>

)
};

export default PropertyBuildingDetails;