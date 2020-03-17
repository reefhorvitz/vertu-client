import React from 'react';
import ImageSlide from "../../ImageSlide/ImageSlide";
import ApartmentDetails from "../ApartmentDetails";
import AppointmentData from "../AppointmentData/AppointmentData";

const DiscoverApartment = ({images, size, bedroomNum, bathroomNum, price, location, appointmentTime}) => {
    return (
        <div className="apartment">
            <div id="main" role="main" className="slider-md">
                <ImageSlide images={images} ImageTag={"Apartment"}/>
                <ApartmentDetails size={size} bedroomNum={bedroomNum} bathroomNum={bathroomNum} price={price} location={location}/>
                <AppointmentData appointmentTime={appointmentTime}/>
            </div>
        </div>
    );
};

export default DiscoverApartment;