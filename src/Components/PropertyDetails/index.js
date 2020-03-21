import React, {useEffect} from 'react';
import Description from "../../Containers/PropertyDetails/PropertyDescription";
import RentalSummery from "../../Containers/RentalSummery";
import SellerInformation from "../../Containers/SellerInformation";
import PropertySlideshow from "./PropertySlideshow";
import BackButton from "../BackButton";

const PropertyDetails = ({propertyId, loadApartmentData}) => {
    useEffect(() => {
        loadApartmentData();
    },[]);

    return (<div className="container list-detail">
        <BackButton/>
        <RentalSummery propertyId={propertyId}/>
        <PropertySlideshow propertyId={propertyId}/>
        <div className="container detail-pr-description">
            <Description propertyId={propertyId}/>
            <SellerInformation propertyId={propertyId}/>
        </div>
    </div>
)};

export default PropertyDetails;