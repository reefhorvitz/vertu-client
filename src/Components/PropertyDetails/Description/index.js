import React from 'react';
import RentalFacts from "../../../Containers/PropertyDetails/RentalFacts";
import BuildingDetails from "../../../Containers/PropertyDetails/BuildingDetails";

const Description = ({propertyId, description}) => {
    return (<div className="detail-description">
            <h3>Description</h3>
            <p>{description}</p>
            <RentalFacts propertyId={propertyId}/>
            <BuildingDetails propertyId={propertyId}/>
        </div>)
};

export default Description;