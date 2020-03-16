import React from 'react';
import HomeImage from '../../../static/images/home.png';
import HeatingImage from '../../../static/images/heating.png';
import CoolingImage from '../../../static/images/cooling.png';
import CalenderImage from '../../../static/images/calender.png';
import ParkingImage from '../../../static/images/parking.png';

const RentalFacts = ({type, heatingData, coolingData, yearBuilt, parkingData}) => {
    return (
    <div className="rental-facts">
        <h4>Rental Facts and Features</h4>

        <div className="house-type">
            <span className="img-head"><img src={HomeImage} alt="home-icon"/><h5>Type</h5></span>
            <span>{type}</span>
        </div>

        <div className="house-type">
            <span className="img-head"><img src={HeatingImage} alt="heating-icon"/><h5>Heating</h5></span>
            <span>{heatingData}</span>
        </div>

        <div className="house-type">
            <span className="img-head"><img src={CoolingImage} alt="cooling-icon"/><h5>Cooling</h5></span>
            <span>{coolingData}</span>
        </div>

        <div className="house-type">
            <span className="img-head"><img src={CalenderImage} alt="calender-icon"/><h5>Year Build</h5></span>
            <span>{yearBuilt}</span>
        </div>

        <div className="house-type">
            <span className="img-head"><img src={ParkingImage} alt="parking-icon"/><h5>Parking</h5></span>
            <span>{parkingData}</span>
        </div>
    </div>
    )
};

export default RentalFacts;