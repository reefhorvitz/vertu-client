import React from 'react';
import BackImage from '../../static/images/back.png';
import Description from "../../Containers/PropertyDetails/PropertyDescription";
import RentalSummery from "../../Containers/RentalSummery";
import SellerInformation from "../../Containers/SellerInformation";
import PropertySlideshow from "./PropertySlideshow";

const PropertyDetails = ({propertyId}) => {
    return (<div className="container list-detail">
        <row>
            <div className="container pre-page">
                <a href="/"><img src={BackImage}/>Back</a>
            </div>
        </row>
        <RentalSummery propertyId={propertyId}/>
        <PropertySlideshow propertyId={propertyId}/>
        <div className="container detail-pr-description">
            <Description propertyId={propertyId}/>
            <SellerInformation propertyId={propertyId}/>
        </div>
    </div>
)};

export default PropertyDetails;