import React from 'react';
import BedImage from '../../../static/images/bed.png';
import BathImage from '../../../static/images/bath.png';
import AreaImage from '../../../static/images/area.png';

const RentalSummery = ({location, tags, pricePerMonth, bedroomNum, bathroomNum, size}) => {
    console.log(tags);
    return (
        <div className="container detail-pr-list">
            <div className="month-cost-sm">
                <span className="apprtment-cost-sm"><span className="sm-price">{pricePerMonth}</span>
                    <span className="cost-sm"><sup>Dollars</sup><br/><sub>Monthly</sub></span></span>
            </div>

            <div className="detail">
                <div className="row"><h3>{location}</h3>
                    <div className="tag-sm">
                        {tags.map(tag => <span className="tag">{tag}</span>)}
                    </div>
                </div>
                <div className="row sm-show">
                    <span><img src={BedImage} alt="bed-icon"/> {bedroomNum} Bedroom</span>
                    <span><img src={BathImage} alt="bah-icon"/> {bathroomNum} Bathroom</span>
                    <span><img src={AreaImage} alt="area-icon"/>{size}sq ft</span>
                </div>
            </div>
            <div className="price">${pricePerMonth}/mo</div>
        </div>
);
};

export default RentalSummery;