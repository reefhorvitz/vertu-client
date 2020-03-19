import React from 'react';
import ImageSlide from "../../../Containers/ImageSlide";
import ApartmentDetails from "../../../Containers/ApartmentDetails";

const ListApartment = ({propertyId, AppointmentModal}) => {
    return (
        <div className="apartment">
            <div id="main" role="main" className="slider-md">
                <ImageSlide propertyId={propertyId} ImageTag={"Apartment"}/>
                <ApartmentDetails propertyId={propertyId}/>
                {AppointmentModal ? <AppointmentModal propertyId={propertyId}/> : ''}
                </div>
            </div>
        );
    };

    export default ListApartment;