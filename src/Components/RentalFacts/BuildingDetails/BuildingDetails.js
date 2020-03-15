import React from 'react';
import styles from './styles.module.css';

const BuildingDetails = ({facilities, amenities, otherDetails}) => {
    return (
        <div className="rental-facts building-detail">
            <h4>Building Details</h4>
            <div className="house-type">
                <h5>Facilities</h5>
                <ul>
                    {facilities.map(facility => <li>{facility}</li>)}
                </ul>
            </div>
            <div className="house-type">
                <h5>Amenities</h5>
                <ul>
                    {amenities.map(amenity => <li>{amenity}</li>)}
                </ul>
            </div>
            <div className="house-type">
                <h5>Other</h5>
                <ul>
                    {otherDetails.map(detail => <li>{detail}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default BuildingDetails;