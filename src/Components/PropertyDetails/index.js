import React from 'react';
import BackImage from '../../static/images/back.png';
import Description from "./Description";
import RentalSummery from "./RentalSummary";
import PropertySlideshow from "./PropertySlideshow";
import SellerInformation from "../SellerInformation";
import RentalFacts from "./PropertyFeatures";

const PropertyDetails = ({pricePerMonth, bathroomNum, bedroomNum, size,
                        images,
                        description,
                        sellerName, email, phone, sellerImg,
                        type, coolingData, heatingData, parkingData, yearBuilt,
                        facilities, amenities, otherDetails
                        }) => {
    return (<div className="container list-detail">
        <row>
            <div className="container pre-page">
                <a href="/"><img src={BackImage}/>Back</a>
            </div>
        </row>
        <RentalSummery pricePerMonth={pricePerMonth} bathroomNum={bathroomNum} bedroomNum={bedroomNum} size={size}/>
        <PropertySlideshow images={images} />
        <div className="container detail-pr-description">
            <Description description={description}
                         type={type} coolingData={coolingData} heatingData={heatingData} parkingData={parkingData}
                         yearBuilt={yearBuilt}
                         facilities={facilities} amenities={amenities} otherDetails={otherDetails}/>
            <SellerInformation name={sellerName} email={email} phone={phone} sellerImg={sellerImg}/>
        </div>
    </div>
)};

export default PropertyDetails;