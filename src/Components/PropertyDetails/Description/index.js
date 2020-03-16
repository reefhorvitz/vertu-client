import React from 'react';
import RentalFacts from "../PropertyFeatures";
import BuildingDetails from "../BuildingDetails/BuildingDetails";

const Description = ({description,
                     type, coolingData, heatingData, parkingData, yearBuilt,
                     facilities, amenities, otherDetails}) => {
    return (<div className="detail-description">
            <h3>Description</h3>
            <p>{description}</p>
            <RentalFacts type={type} coolingData={coolingData} heatingData={heatingData} parkingData={parkingData}
                         yearBuilt={yearBuilt} />
            <BuildingDetails facilities={facilities} amenities={amenities} otherDetails={otherDetails}/>
        </div>)
};

export default Description;