import React from 'react';
import BedImage from '../../../static/images/bed.png';
import BathImage from '../../../static/images/bath.png';
import ArenaImage from '../../../static/images/area.png';

const ApartmentDetails = ({location, price, bedroomNum, bathroomNum, size}) => {
    return (
        <div className="apartment-details">
            <div className="row"><span className="apprtment-name">{location}</span>
                <span className="apprtment-cost">${price}/mo</span>
            </div>
            <div className="row">
                <span className="bed-type"><img src={BedImage} alt="bed-image"/> {bedroomNum} Bedrooms</span>
                <span className="bath-type"><img src={BathImage} alt="bath-image"/> {bathroomNum} Bathroom</span>
                <span className="area-type"><img src={ArenaImage} alt="area-image"/> {size} sq ft</span>
                </div>
        </div>
    );
}

export default ApartmentDetails;